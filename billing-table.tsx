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

const billingData = [
  { event: "Cycle 1", reason: "Threshold", spend: 4200, vat: 630, total: 4830, card: "Visa — 7599", ref: "S8Q2PL19YX" },
  { event: "Cycle 2", reason: "Threshold", spend: 4380, vat: 657, total: 5037, card: "Visa — 7599", ref: "SXK2V71EQL" },
  { event: "Cycle 3", reason: "Manual Clear", spend: 3850, vat: 578, total: 4428, card: "AmEx — 1598", ref: "S7LAU87BPS" },
  { event: "Cycle 4", reason: "Threshold", spend: 4270, vat: 641, total: 4911, card: "Visa — 7599", ref: "S0M9G4DKQ1" },
  { event: "Cycle 5", reason: "Threshold", spend: 4230, vat: 635, total: 4865, card: "AmEx — 4425", ref: "S4N8H0VYTU" },
  { event: "Cycle 6", reason: "Manual Clear", spend: 4350, vat: 653, total: 5003, card: "Visa — 7599", ref: "SCR1D6M9FA" },
  { event: "Cycle 7", reason: "Threshold", spend: 4350, vat: 653, total: 5003, card: "AmEx — 1598", ref: "S1R4PJD01Q" },
  { event: "Cycle 8", reason: "Threshold", spend: 4250, vat: 638, total: 4888, card: "Visa — 7599", ref: "S56M3QZ7RT" },
  { event: "Cycle 9", reason: "Threshold", spend: 4500, vat: 675, total: 5175, card: "AmEx — 4425", ref: "S0J8VMM41P" },
  { event: "Cycle 10", reason: "Threshold", spend: 4550, vat: 683, total: 5233, card: "Visa — 7599", ref: "SQ9MBZP8TA" },
  { event: "Cycle 11", reason: "Manual Clear", spend: 4350, vat: 653, total: 5003, card: "AmEx — 1598", ref: "SJP4QADYTS" },
  { event: "Cycle 12", reason: "Threshold", spend: 4420, vat: 663, total: 5083, card: "Visa — 7599", ref: "S15N8LXZ3U" },
  { event: "Cycle 13", reason: "Final Close", spend: 5235, vat: 785, total: 6020, card: "AmEx — 4425", ref: "S9PL3NW4AM" },
]

const getReasonBadge = (reason: string) => {
  switch (reason) {
    case "Threshold":
      return <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">{reason}</Badge>
    case "Manual Clear":
      return <Badge variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-200">{reason}</Badge>
    case "Final Close":
      return <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">{reason}</Badge>
    default:
      return <Badge variant="outline" className="text-xs">{reason}</Badge>
  }
}

export function BillingTable() {
  const totalSpend = billingData.reduce((acc, row) => acc + row.spend, 0)
  const totalVat = billingData.reduce((acc, row) => acc + row.vat, 0)
  const grandTotal = billingData.reduce((acc, row) => acc + row.total, 0)

  return (
    <section>
      <Card className="border border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            Financial Reconciliation
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Billing events and transaction details (VAT @ 15%)
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="text-xs font-semibold">Billing Event</TableHead>
                  <TableHead className="text-xs font-semibold">Reason</TableHead>
                  <TableHead className="text-xs font-semibold text-right">Spend (৳)</TableHead>
                  <TableHead className="text-xs font-semibold text-right">VAT 15% (৳)</TableHead>
                  <TableHead className="text-xs font-semibold text-right">Total (৳)</TableHead>
                  <TableHead className="text-xs font-semibold">Card</TableHead>
                  <TableHead className="text-xs font-semibold">Reference ID</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {billingData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-muted/30">
                    <TableCell className="text-sm font-medium">{row.event}</TableCell>
                    <TableCell>{getReasonBadge(row.reason)}</TableCell>
                    <TableCell className="text-sm text-right font-mono">{row.spend.toLocaleString()}</TableCell>
                    <TableCell className="text-sm text-right font-mono text-muted-foreground">{row.vat.toLocaleString()}</TableCell>
                    <TableCell className="text-sm text-right font-mono font-semibold">{row.total.toLocaleString()}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{row.card}</TableCell>
                    <TableCell className="text-sm font-mono text-muted-foreground">{row.ref}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-muted/50 font-semibold">
                  <TableCell className="text-sm">Subtotal</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">13 Events</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-right font-mono">{totalSpend.toLocaleString()}</TableCell>
                  <TableCell className="text-sm text-right font-mono text-muted-foreground">{totalVat.toLocaleString()}</TableCell>
                  <TableCell className="text-sm text-right font-mono font-bold">{grandTotal.toLocaleString()}</TableCell>
                  <TableCell colSpan={2} className="text-sm text-muted-foreground">
                    Multiple payment methods
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Payment Method Summary */}
          <div className="mt-6 pt-4 border-t border-border">
            <h4 className="text-sm font-medium text-muted-foreground mb-3">Payment Method Summary</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-muted/30 rounded-lg p-3 border border-border">
                <p className="text-xs text-muted-foreground">Visa — 7599</p>
                <p className="text-lg font-semibold text-foreground">7 transactions</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-3 border border-border">
                <p className="text-xs text-muted-foreground">AmEx — 1598</p>
                <p className="text-lg font-semibold text-foreground">3 transactions</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-3 border border-border">
                <p className="text-xs text-muted-foreground">AmEx — 4425</p>
                <p className="text-lg font-semibold text-foreground">3 transactions</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-3 border border-border">
                <p className="text-xs text-muted-foreground">Total Transactions</p>
                <p className="text-lg font-semibold text-foreground">13</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
