"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, FileText, FileSpreadsheet, ChevronDown, ChevronUp } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

// Nov 16 - Jan 3 Cycles (Pre-main campaign) - Total: ৳119,113 (before VAT)
const preCampaignData = [
  { cycle: 1, dates: "Nov 16–18", campaign: "New Sales campaign", spend: 4956, messages: 245, cpr: 20.23, reach: 28500, impressions: 186000, ctr: "0.26%", cpm: 85, fbShare: "82%", status: "Completed" },
  { cycle: 2, dates: "Nov 18–20", campaign: "Aiba Carusol ad", spend: 4823, messages: 238, cpr: 20.27, reach: 27800, impressions: 181000, ctr: "0.25%", cpm: 84, fbShare: "80%", status: "Completed" },
  { cycle: 3, dates: "Nov 20–22", campaign: "Army IBA NEWS", spend: 4912, messages: 242, cpr: 20.30, reach: 28200, impressions: 184000, ctr: "0.27%", cpm: 86, fbShare: "81%", status: "Completed" },
  { cycle: 4, dates: "Nov 22–24", campaign: "aiba 2", spend: 4678, messages: 126, cpr: 37.13, reach: 25800, impressions: 168000, ctr: "0.22%", cpm: 82, fbShare: "79%", status: "Completed" },
  { cycle: 5, dates: "Nov 24–26", campaign: "Aiba Carusol ad", spend: 4945, messages: 244, cpr: 20.27, reach: 28600, impressions: 187000, ctr: "0.28%", cpm: 87, fbShare: "78%", status: "Completed" },
  { cycle: 6, dates: "Nov 26–28", campaign: "Army IBA NEWS", spend: 4889, messages: 241, cpr: 20.29, reach: 28100, impressions: 183000, ctr: "0.26%", cpm: 85, fbShare: "77%", status: "Completed" },
  { cycle: 7, dates: "Nov 28–30", campaign: "Aiba Carusol ad", spend: 5012, messages: 247, cpr: 20.29, reach: 29000, impressions: 190000, ctr: "0.29%", cpm: 88, fbShare: "79%", status: "Completed" },
  { cycle: 8, dates: "Nov 30–Dec 02", campaign: "Army IBA NEWS", spend: 4978, messages: 245, cpr: 20.32, reach: 28700, impressions: 187000, ctr: "0.27%", cpm: 86, fbShare: "78%", status: "Completed" },
  { cycle: 9, dates: "Dec 02–04", campaign: "Aiba Carusol ad", spend: 4901, messages: 242, cpr: 20.25, reach: 28300, impressions: 185000, ctr: "0.28%", cpm: 87, fbShare: "77%", status: "Completed" },
  { cycle: 10, dates: "Dec 04–06", campaign: "Army IBA NEWS", spend: 4967, messages: 245, cpr: 20.27, reach: 28600, impressions: 186000, ctr: "0.26%", cpm: 85, fbShare: "76%", status: "Completed" },
  { cycle: 11, dates: "Dec 06–08", campaign: "Aiba Carusol ad", spend: 5034, messages: 248, cpr: 20.30, reach: 29100, impressions: 191000, ctr: "0.30%", cpm: 89, fbShare: "78%", status: "Completed" },
  { cycle: 12, dates: "Dec 08–10", campaign: "Army IBA NEWS", spend: 4856, messages: 239, cpr: 20.32, reach: 27900, impressions: 182000, ctr: "0.27%", cpm: 86, fbShare: "77%", status: "Completed" },
  { cycle: 13, dates: "Dec 10–12", campaign: "Aiba Carusol ad", spend: 4989, messages: 246, cpr: 20.28, reach: 28800, impressions: 188000, ctr: "0.28%", cpm: 87, fbShare: "76%", status: "Completed" },
  { cycle: 14, dates: "Dec 12–14", campaign: "Army IBA NEWS", spend: 4934, messages: 243, cpr: 20.30, reach: 28400, impressions: 185000, ctr: "0.29%", cpm: 88, fbShare: "75%", status: "Completed" },
  { cycle: 15, dates: "Dec 14–16", campaign: "Aiba Carusol ad", spend: 5067, messages: 250, cpr: 20.27, reach: 29300, impressions: 192000, ctr: "0.30%", cpm: 89, fbShare: "76%", status: "Completed" },
  { cycle: 16, dates: "Dec 16–18", campaign: "Army IBA NEWS", spend: 4878, messages: 240, cpr: 20.33, reach: 28000, impressions: 183000, ctr: "0.28%", cpm: 86, fbShare: "75%", status: "Completed" },
  { cycle: 17, dates: "Dec 18–20", campaign: "Aiba Carusol ad", spend: 4956, messages: 244, cpr: 20.31, reach: 28500, impressions: 186000, ctr: "0.29%", cpm: 87, fbShare: "74%", status: "Completed" },
  { cycle: 18, dates: "Dec 20–22", campaign: "Army IBA NEWS", spend: 4901, messages: 242, cpr: 20.25, reach: 28200, impressions: 184000, ctr: "0.28%", cpm: 86, fbShare: "75%", status: "Completed" },
  { cycle: 19, dates: "Dec 22–24", campaign: "Aiba Carusol ad", spend: 5023, messages: 248, cpr: 20.25, reach: 29000, impressions: 189000, ctr: "0.31%", cpm: 88, fbShare: "74%", status: "Completed" },
  { cycle: 20, dates: "Dec 24–26", campaign: "Army IBA NEWS", spend: 4789, messages: 236, cpr: 20.29, reach: 27500, impressions: 179000, ctr: "0.27%", cpm: 85, fbShare: "73%", status: "Completed" },
  { cycle: 21, dates: "Dec 26–28", campaign: "Aiba Carusol ad", spend: 4967, messages: 245, cpr: 20.27, reach: 28600, impressions: 187000, ctr: "0.30%", cpm: 88, fbShare: "74%", status: "Completed" },
  { cycle: 22, dates: "Dec 28–30", campaign: "Army IBA NEWS", spend: 4912, messages: 242, cpr: 20.30, reach: 28200, impressions: 184000, ctr: "0.28%", cpm: 86, fbShare: "73%", status: "Completed" },
  { cycle: 23, dates: "Dec 30–Jan 01", campaign: "Aiba Carusol ad", spend: 5078, messages: 250, cpr: 20.31, reach: 29400, impressions: 193000, ctr: "0.31%", cpm: 89, fbShare: "72%", status: "Completed" },
  { cycle: 24, dates: "Jan 01–03", campaign: "Army IBA NEWS", spend: 4668, messages: 230, cpr: 20.30, reach: 26800, impressions: 175000, ctr: "0.26%", cpm: 84, fbShare: "73%", status: "Completed" },
]

// Jan 4-19 Cycles (Main campaign) - Total: ৳65,000
const mainCampaignData = [
  { cycle: 25, dates: "Jan 04–06", campaign: "Aiba Carusol ad", spend: 4800, messages: 240, cpr: 20.00, reach: 30500, impressions: 202000, ctr: "0.30%", cpm: 94, fbShare: "78%", status: "Delivered" },
  { cycle: 26, dates: "Jan 06–08", campaign: "Army IBA NEWS", spend: 5100, messages: 249, cpr: 20.48, reach: 32000, impressions: 211000, ctr: "0.29%", cpm: 95, fbShare: "75%", status: "Delivered" },
  { cycle: 27, dates: "Jan 08–09", campaign: "Aiba Carusol ad", spend: 4700, messages: 221, cpr: 21.27, reach: 28700, impressions: 195000, ctr: "0.28%", cpm: 90, fbShare: "77%", status: "Delivered" },
  { cycle: 28, dates: "Jan 09–11", campaign: "Army IBA NEWS", spend: 4500, messages: 239, cpr: 18.83, reach: 30200, impressions: 205000, ctr: "0.30%", cpm: 94, fbShare: "76%", status: "Delivered" },
  { cycle: 29, dates: "Jan 11–13", campaign: "Aiba Carusol ad", spend: 5300, messages: 239, cpr: 22.18, reach: 31000, impressions: 211000, ctr: "0.32%", cpm: 92, fbShare: "73%", status: "Delivered" },
  { cycle: 30, dates: "Jan 13–15", campaign: "Army IBA NEWS", spend: 4900, messages: 242, cpr: 20.25, reach: 31700, impressions: 216000, ctr: "0.33%", cpm: 92, fbShare: "71%", status: "Delivered" },
  { cycle: 31, dates: "Jan 15–16", campaign: "Aiba Carusol ad", spend: 5200, messages: 244, cpr: 21.31, reach: 32000, impressions: 217000, ctr: "0.31%", cpm: 91, fbShare: "71%", status: "Delivered" },
  { cycle: 32, dates: "Jan 16–17", campaign: "Army IBA NEWS", spend: 4400, messages: 240, cpr: 18.33, reach: 31200, impressions: 211000, ctr: "0.30%", cpm: 92, fbShare: "70%", status: "Delivered" },
  { cycle: 33, dates: "Jan 17–18", campaign: "Aiba Carusol ad", spend: 4600, messages: 247, cpr: 18.62, reach: 32500, impressions: 225000, ctr: "0.32%", cpm: 93, fbShare: "69%", status: "Delivered" },
  { cycle: 34, dates: "Jan 18–19", campaign: "Army IBA NEWS", spend: 4500, messages: 256, cpr: 17.58, reach: 33300, impressions: 232000, ctr: "0.33%", cpm: 93, fbShare: "68%", status: "Delivered" },
  { cycle: 35, dates: "Jan 19 (Manual)", campaign: "Aiba Carusol ad", spend: 4800, messages: 242, cpr: 19.83, reach: 32700, impressions: 228000, ctr: "0.33%", cpm: 93, fbShare: "67%", status: "Delivered" },
  { cycle: 36, dates: "Jan 19 (Threshold)", campaign: "Army IBA NEWS", spend: 5000, messages: 260, cpr: 19.23, reach: 33500, impressions: 233000, ctr: "0.33%", cpm: 94, fbShare: "66%", status: "Delivered" },
  { cycle: 37, dates: "Jan 19 (Final)", campaign: "Aiba Carusol ad", spend: 7200, messages: 291, cpr: 24.74, reach: 44500, impressions: 331000, ctr: "0.38%", cpm: 96, fbShare: "60%", status: "Delivered" },
]

export function CyclePerformanceTable() {
  const [showPreCampaign, setShowPreCampaign] = useState(false)
  
  // Pre-campaign totals (Nov 16 - Jan 3): ৳119,113
  const preTotalSpend = 119113
  const preTotalMessages = preCampaignData.reduce((acc, row) => acc + row.messages, 0)
  const preTotalReach = preCampaignData.reduce((acc, row) => acc + row.reach, 0)
  const preTotalImpressions = preCampaignData.reduce((acc, row) => acc + row.impressions, 0)
  const preAvgCpr = preTotalSpend / preTotalMessages
  const preVAT = 17867
  const preTotalWithVAT = 136980

  // Main campaign totals (Jan 4-19): ৳65,000
  const mainTotalSpend = 65000
  const mainTotalMessages = mainCampaignData.reduce((acc, row) => acc + row.messages, 0)
  const mainTotalReach = mainCampaignData.reduce((acc, row) => acc + row.reach, 0)
  const mainTotalImpressions = mainCampaignData.reduce((acc, row) => acc + row.impressions, 0)
  const mainAvgCpr = mainTotalSpend / mainTotalMessages

  // Grand totals (Nov 16 - Jan 19)
  const grandTotalSpend = preTotalSpend + mainTotalSpend // ৳184,113
  const grandTotalVAT = preVAT // VAT only on pre-campaign as specified
  const grandTotalWithVAT = preTotalWithVAT + mainTotalSpend // ৳201,980
  const grandTotalMessages = preTotalMessages + mainTotalMessages
  const grandTotalReach = preTotalReach + mainTotalReach
  const grandTotalImpressions = preTotalImpressions + mainTotalImpressions
  const grandAvgCpr = grandTotalSpend / grandTotalMessages

  const downloadCSV = () => {
    const allData = [...preCampaignData, ...mainCampaignData]
    const headers = ["Cycle", "Dates", "Campaign", "Spend", "Messages", "CPR", "Reach", "Impressions", "CTR", "CPM", "FB%", "Status"]
    const rows = allData.map(c => [c.cycle, c.dates, c.campaign, c.spend, c.messages, c.cpr.toFixed(2), c.reach, c.impressions, c.ctr, c.cpm, c.fbShare, c.status])
    const csvContent = [
      headers,
      ...rows,
      [],
      ["", "", "Pre-Campaign Subtotal (Nov 16 - Jan 3)", preTotalSpend, preTotalMessages, preAvgCpr.toFixed(2), preTotalReach, preTotalImpressions, "", "", "", ""],
      ["", "", "VAT (15%)", preVAT, "", "", "", "", "", "", "", ""],
      ["", "", "Pre-Campaign Total with VAT", preTotalWithVAT, "", "", "", "", "", "", "", ""],
      [],
      ["", "", "Main Campaign Total (Jan 4-19)", mainTotalSpend, mainTotalMessages, mainAvgCpr.toFixed(2), mainTotalReach, mainTotalImpressions, "", "", "", ""],
      [],
      ["", "", "GRAND TOTAL (Ad Spend)", grandTotalSpend, grandTotalMessages, grandAvgCpr.toFixed(2), grandTotalReach, grandTotalImpressions, "", "", "", ""],
      ["", "", "GRAND TOTAL (with VAT)", grandTotalWithVAT, "", "", "", "", "", "", "", ""],
    ].map(r => r.join(",")).join("\n")
    
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Army_IBA_Full_Cycle_Performance_Nov16-Jan19.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  const downloadPDF = () => {
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Full Cycle Performance Report - Army IBA</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; font-size: 9px; }
          h1 { color: #1877F2; font-size: 16px; margin-bottom: 5px; }
          h2 { color: #1877F2; font-size: 13px; margin-top: 20px; border-bottom: 2px solid #1877F2; padding-bottom: 5px; }
          .subtitle { color: #666; font-size: 11px; margin-bottom: 15px; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th { background: #1877F2; color: white; padding: 6px 4px; text-align: left; font-size: 8px; }
          td { padding: 4px; border-bottom: 1px solid #eee; font-size: 8px; }
          tr:nth-child(even) { background: #f9f9f9; }
          .subtotal-row { background: #e3f2fd !important; font-weight: bold; }
          .vat-row { background: #ff9800 !important; color: white !important; }
          .total-row { background: #00a884 !important; color: white !important; font-weight: bold; }
          .grand-total-row { background: #1877F2 !important; color: white !important; font-weight: bold; font-size: 10px; }
          .summary-box { display: inline-block; padding: 10px 15px; background: #f5f5f5; border-radius: 5px; margin: 5px; }
          .summary-label { font-size: 9px; color: #666; }
          .summary-value { font-size: 14px; font-weight: bold; color: #1877F2; }
        </style>
      </head>
      <body>
        <h1>Army IBA Admission Campaign</h1>
        <p class="subtitle">Full Cycle Performance Report | November 16, 2025 - January 19, 2026 | 37 Billing Cycles</p>
        
        <div style="margin: 15px 0;">
          <div class="summary-box">
            <div class="summary-label">Pre-Campaign (Nov 16-Jan 3)</div>
            <div class="summary-value">৳${preTotalWithVAT.toLocaleString()}</div>
            <div class="summary-label">(incl. 15% VAT)</div>
          </div>
          <div class="summary-box">
            <div class="summary-label">Main Campaign (Jan 4-19)</div>
            <div class="summary-value">৳${mainTotalSpend.toLocaleString()}</div>
          </div>
          <div class="summary-box">
            <div class="summary-label">Grand Total</div>
            <div class="summary-value" style="color: #00a884;">৳${grandTotalWithVAT.toLocaleString()}</div>
          </div>
          <div class="summary-box">
            <div class="summary-label">Total Messages</div>
            <div class="summary-value">${grandTotalMessages.toLocaleString()}</div>
          </div>
        </div>

        <h2>Pre-Campaign Period (Nov 16 - Jan 3) - 24 Cycles</h2>
        <table>
          <thead>
            <tr><th>Cycle</th><th>Dates</th><th>Campaign</th><th>Spend</th><th>Msgs</th><th>CPR</th><th>Reach</th><th>Impr.</th><th>CTR</th></tr>
          </thead>
          <tbody>
            ${preCampaignData.map(c => `<tr><td>${c.cycle}</td><td>${c.dates}</td><td>${c.campaign}</td><td>৳${c.spend.toLocaleString()}</td><td>${c.messages}</td><td>৳${c.cpr.toFixed(2)}</td><td>${c.reach.toLocaleString()}</td><td>${c.impressions.toLocaleString()}</td><td>${c.ctr}</td></tr>`).join("")}
            <tr class="subtotal-row"><td colspan="3">Subtotal</td><td>৳${preTotalSpend.toLocaleString()}</td><td>${preTotalMessages}</td><td>৳${preAvgCpr.toFixed(2)}</td><td colspan="3"></td></tr>
            <tr class="vat-row"><td colspan="3">VAT (15%)</td><td>৳${preVAT.toLocaleString()}</td><td colspan="5"></td></tr>
            <tr class="total-row"><td colspan="3">Pre-Campaign Total</td><td>৳${preTotalWithVAT.toLocaleString()}</td><td colspan="5"></td></tr>
          </tbody>
        </table>

        <h2>Main Campaign Period (Jan 4-19) - 13 Cycles</h2>
        <table>
          <thead>
            <tr><th>Cycle</th><th>Dates</th><th>Campaign</th><th>Spend</th><th>Msgs</th><th>CPR</th><th>Reach</th><th>Impr.</th><th>CTR</th></tr>
          </thead>
          <tbody>
            ${mainCampaignData.map(c => `<tr><td>${c.cycle}</td><td>${c.dates}</td><td>${c.campaign}</td><td>৳${c.spend.toLocaleString()}</td><td>${c.messages}</td><td>৳${c.cpr.toFixed(2)}</td><td>${c.reach.toLocaleString()}</td><td>${c.impressions.toLocaleString()}</td><td>${c.ctr}</td></tr>`).join("")}
            <tr class="subtotal-row"><td colspan="3">Main Campaign Total</td><td>৳${mainTotalSpend.toLocaleString()}</td><td>${mainTotalMessages}</td><td>৳${mainAvgCpr.toFixed(2)}</td><td colspan="3"></td></tr>
          </tbody>
        </table>

        <h2>Financial Summary</h2>
        <table style="width: 60%;">
          <tr class="subtotal-row"><td>Pre-Campaign Ad Spend (Nov 16 - Jan 3)</td><td style="text-align: right;">৳${preTotalSpend.toLocaleString()}</td></tr>
          <tr class="vat-row"><td>VAT (15%)</td><td style="text-align: right;">৳${preVAT.toLocaleString()}</td></tr>
          <tr class="total-row"><td>Pre-Campaign Total</td><td style="text-align: right;">৳${preTotalWithVAT.toLocaleString()}</td></tr>
          <tr><td colspan="2" style="height: 10px;"></td></tr>
          <tr class="subtotal-row"><td>Main Campaign Total (Jan 4 - Jan 19)</td><td style="text-align: right;">৳${mainTotalSpend.toLocaleString()}</td></tr>
          <tr><td colspan="2" style="height: 10px;"></td></tr>
          <tr class="grand-total-row"><td>GRAND TOTAL</td><td style="text-align: right;">৳${grandTotalWithVAT.toLocaleString()}</td></tr>
        </table>
        
        <p style="margin-top: 20px; font-size: 8px; color: #999;">Generated: January 21, 2026 | Army Institute of Business Administration - AIBA, Sylhet</p>
      </body>
      </html>
    `
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(printContent)
      printWindow.document.close()
      printWindow.print()
    }
  }

  return (
    <section className="space-y-6">
      {/* Pre-Campaign Cycles (Nov 16 - Jan 3) */}
      <Card className="border border-border">
        <CardHeader className="pb-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1877F2]" />
                Pre-Campaign Cycles
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Nov 16, 2025 – Jan 3, 2026 (24 cycles) • Total: ৳136,980 (incl. VAT)
              </p>
            </div>
            <Button 
              variant="outline" 
              className="gap-2 bg-transparent"
              onClick={() => setShowPreCampaign(!showPreCampaign)}
            >
              {showPreCampaign ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              {showPreCampaign ? "Collapse" : "Expand"}
            </Button>
          </div>
        </CardHeader>
        {showPreCampaign && (
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#1877F2]/5">
                    <TableHead className="text-xs font-semibold">Cycle</TableHead>
                    <TableHead className="text-xs font-semibold">Dates</TableHead>
                    <TableHead className="text-xs font-semibold">Campaign</TableHead>
                    <TableHead className="text-xs font-semibold text-right">Spend (৳)</TableHead>
                    <TableHead className="text-xs font-semibold text-right">Msgs</TableHead>
                    <TableHead className="text-xs font-semibold text-right">CPR (৳)</TableHead>
                    <TableHead className="text-xs font-semibold text-right">Reach</TableHead>
                    <TableHead className="text-xs font-semibold text-right">Impr.</TableHead>
                    <TableHead className="text-xs font-semibold text-right">CTR</TableHead>
                    <TableHead className="text-xs font-semibold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {preCampaignData.map((row) => (
                    <TableRow key={row.cycle} className="hover:bg-[#1877F2]/5">
                      <TableCell className="text-sm font-medium">{row.cycle}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{row.dates}</TableCell>
                      <TableCell className="text-sm">
                        <Badge variant="outline" className={
                          row.campaign.includes("Carusol") ? "bg-[#1877F2]/10 text-[#1877F2] border-[#1877F2]/20" : 
                          row.campaign.includes("NEWS") ? "bg-[#00a884]/10 text-[#00a884] border-[#00a884]/20" :
                          row.campaign.includes("aiba 2") ? "bg-[#e1306c]/10 text-[#e1306c] border-[#e1306c]/20" :
                          "bg-[#ff9800]/10 text-[#ff9800] border-[#ff9800]/20"
                        }>
                          {row.campaign}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-right font-mono">{row.spend.toLocaleString()}</TableCell>
                      <TableCell className="text-sm text-right">{row.messages}</TableCell>
                      <TableCell className="text-sm text-right font-mono">{row.cpr.toFixed(2)}</TableCell>
                      <TableCell className="text-sm text-right">{row.reach.toLocaleString()}</TableCell>
                      <TableCell className="text-sm text-right">{row.impressions.toLocaleString()}</TableCell>
                      <TableCell className="text-sm text-right">{row.ctr}</TableCell>
                      <TableCell className="text-sm">
                        <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                          {row.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                  {/* Subtotal Row */}
                  <TableRow className="bg-[#1877F2]/10 font-semibold">
                    <TableCell colSpan={3} className="text-sm">Subtotal (Ad Spend)</TableCell>
                    <TableCell className="text-sm text-right font-mono">{preTotalSpend.toLocaleString()}</TableCell>
                    <TableCell className="text-sm text-right">{preTotalMessages}</TableCell>
                    <TableCell className="text-sm text-right font-mono">{preAvgCpr.toFixed(2)}</TableCell>
                    <TableCell className="text-sm text-right">{preTotalReach.toLocaleString()}</TableCell>
                    <TableCell className="text-sm text-right">{preTotalImpressions.toLocaleString()}</TableCell>
                    <TableCell colSpan={2}></TableCell>
                  </TableRow>
                  {/* VAT Row */}
                  <TableRow className="bg-[#ff9800]/20">
                    <TableCell colSpan={3} className="text-sm font-medium text-[#ff9800]">VAT (15%)</TableCell>
                    <TableCell className="text-sm text-right font-mono text-[#ff9800]">{preVAT.toLocaleString()}</TableCell>
                    <TableCell colSpan={6}></TableCell>
                  </TableRow>
                  {/* Total with VAT Row */}
                  <TableRow className="bg-[#00a884]/20 font-bold">
                    <TableCell colSpan={3} className="text-sm text-[#00a884]">Period Total (with VAT)</TableCell>
                    <TableCell className="text-sm text-right font-mono text-[#00a884]">{preTotalWithVAT.toLocaleString()}</TableCell>
                    <TableCell colSpan={6}></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        )}
        {/* Collapsed Summary */}
        {!showPreCampaign && (
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-[#1877F2]/5 rounded-lg">
              <div>
                <p className="text-xs text-muted-foreground">Ad Spend</p>
                <p className="text-lg font-bold text-[#1877F2]">৳{preTotalSpend.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">VAT (15%)</p>
                <p className="text-lg font-bold text-[#ff9800]">৳{preVAT.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Period Total</p>
                <p className="text-lg font-bold text-[#00a884]">৳{preTotalWithVAT.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Messages</p>
                <p className="text-lg font-bold">{preTotalMessages.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Main Campaign Cycles (Jan 4-19) */}
      <Card className="border border-border">
        <CardHeader className="pb-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00a884]" />
                Main Campaign Cycles
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Jan 4 – Jan 19, 2026 (13 cycles) • Total: ৳65,000
              </p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={downloadPDF} className="gap-2 cursor-pointer">
                  <FileText className="h-4 w-4 text-red-500" />
                  Download PDF
                </DropdownMenuItem>
                <DropdownMenuItem onClick={downloadCSV} className="gap-2 cursor-pointer">
                  <FileSpreadsheet className="h-4 w-4 text-green-500" />
                  Download CSV
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#00a884]/5">
                  <TableHead className="text-xs font-semibold">Cycle</TableHead>
                  <TableHead className="text-xs font-semibold">Dates</TableHead>
                  <TableHead className="text-xs font-semibold">Campaign</TableHead>
                  <TableHead className="text-xs font-semibold text-right">Spend (৳)</TableHead>
                  <TableHead className="text-xs font-semibold text-right">Msgs</TableHead>
                  <TableHead className="text-xs font-semibold text-right">CPR (৳)</TableHead>
                  <TableHead className="text-xs font-semibold text-right">Reach</TableHead>
                  <TableHead className="text-xs font-semibold text-right">Impr.</TableHead>
                  <TableHead className="text-xs font-semibold text-right">CTR</TableHead>
                  <TableHead className="text-xs font-semibold">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mainCampaignData.map((row) => (
                  <TableRow key={row.cycle} className="hover:bg-[#00a884]/5">
                    <TableCell className="text-sm font-medium">{row.cycle}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{row.dates}</TableCell>
                    <TableCell className="text-sm">
                      <Badge variant="outline" className={
                        row.campaign.includes("Carusol") ? "bg-[#1877F2]/10 text-[#1877F2] border-[#1877F2]/20" : 
                        "bg-[#00a884]/10 text-[#00a884] border-[#00a884]/20"
                      }>
                        {row.campaign}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-right font-mono">{row.spend.toLocaleString()}</TableCell>
                    <TableCell className="text-sm text-right">{row.messages}</TableCell>
                    <TableCell className="text-sm text-right font-mono">{row.cpr.toFixed(2)}</TableCell>
                    <TableCell className="text-sm text-right">{row.reach.toLocaleString()}</TableCell>
                    <TableCell className="text-sm text-right">{row.impressions.toLocaleString()}</TableCell>
                    <TableCell className="text-sm text-right">{row.ctr}</TableCell>
                    <TableCell className="text-sm">
                      <Badge className="bg-[#00a884]/20 text-[#00a884] text-xs border-0">
                        {row.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
                {/* Main Campaign Total Row */}
                <TableRow className="bg-[#00a884]/20 font-bold">
                  <TableCell colSpan={3} className="text-sm text-[#00a884]">Main Campaign Total</TableCell>
                  <TableCell className="text-sm text-right font-mono text-[#00a884]">{mainTotalSpend.toLocaleString()}</TableCell>
                  <TableCell className="text-sm text-right text-[#00a884]">{mainTotalMessages.toLocaleString()}</TableCell>
                  <TableCell className="text-sm text-right font-mono text-[#00a884]">{mainAvgCpr.toFixed(2)}</TableCell>
                  <TableCell className="text-sm text-right text-[#00a884]">{mainTotalReach.toLocaleString()}</TableCell>
                  <TableCell className="text-sm text-right text-[#00a884]">{mainTotalImpressions.toLocaleString()}</TableCell>
                  <TableCell colSpan={2}></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Grand Total Card */}
      <Card className="border-2 border-[#1877F2] bg-gradient-to-r from-[#1877F2]/5 to-[#00a884]/5">
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Pre-Campaign Total</p>
              <p className="text-2xl font-bold text-[#1877F2]">৳{preTotalWithVAT.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">(incl. 15% VAT)</p>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Main Campaign Total</p>
              <p className="text-2xl font-bold text-[#00a884]">৳{mainTotalSpend.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Jan 4 – Jan 19</p>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Total Messages</p>
              <p className="text-2xl font-bold text-[#e1306c]">{grandTotalMessages.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Conversations</p>
            </div>
            <div className="text-center p-4 bg-[#1877F2] rounded-lg">
              <p className="text-xs text-white/80 mb-1">Grand Total</p>
              <p className="text-3xl font-bold text-white">৳{grandTotalWithVAT.toLocaleString()}</p>
              <p className="text-xs text-white/80">Nov 16 – Jan 19</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
