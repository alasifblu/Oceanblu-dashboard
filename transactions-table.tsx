"use client"

import { useState } from "react"
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

// Full transaction data from Nov 16, 2025 to Jan 19, 2026
const transactionsData = [
  { date: "16-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SSQ0PL0QL7" },
  { date: "16-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SSQ0PL0QL7" },
  { date: "17-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S84FH2JSTZ" },
  { date: "17-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S84FH2JSTZ" },
  { date: "23-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S9YOBZKFVN" },
  { date: "23-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S9YOBZKFVN" },
  { date: "24-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SEUPUP2F66" },
  { date: "24-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SRH0HYIIE8" },
  { date: "24-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SX2NF6PYPL" },
  { date: "24-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SEUPUP2F66" },
  { date: "24-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SRH0HYIIE8" },
  { date: "24-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SX2NF6PYPL" },
  { date: "25-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S68BJCYJVL" },
  { date: "25-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S73VVA9HJT" },
  { date: "25-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SRMLQRCWEW" },
  { date: "25-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SUDY6414KQ" },
  { date: "25-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S68BJCYJVL" },
  { date: "25-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S73VVA9HJT" },
  { date: "25-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SRMLQRCWEW" },
  { date: "25-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SUDY6414KQ" },
  { date: "26-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S5JYSO7CB0" },
  { date: "26-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S6MKCHR9D2" },
  { date: "26-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SA97A3SKZY" },
  { date: "26-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SBTADNLPKW" },
  { date: "26-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SG95LMNUG8" },
  { date: "26-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S5JYSO7CB0" },
  { date: "26-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S6MKCHR9D2" },
  { date: "26-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SA97A3SKZY" },
  { date: "26-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SBTADNLPKW" },
  { date: "26-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SG95LMNUG8" },
  { date: "27-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S1RRPRNJIR" },
  { date: "27-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SCBW1VKHLN" },
  { date: "27-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SN8MRMYWOS" },
  { date: "27-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S1RRPRNJIR" },
  { date: "27-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SCBW1VKHLN" },
  { date: "27-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SN8MRMYWOS" },
  { date: "28-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S03UCJLTS7" },
  { date: "28-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S6LU1G22KE" },
  { date: "28-Nov-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S9BLDR2FMD" },
  { date: "28-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S03UCJLTS7" },
  { date: "28-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S6LU1G22KE" },
  { date: "28-Nov-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S9BLDR2FMD" },
  { date: "01-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S3J1CEC1Y7" },
  { date: "01-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S7ZYX1AA42" },
  { date: "01-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SGZ4180XFS" },
  { date: "01-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SJAWSYF5JI" },
  { date: "01-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SK8TUIZVOE" },
  { date: "01-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SMFR0338FN" },
  { date: "01-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SNVMF10HOU" },
  { date: "01-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SZGXSHYCO1" },
  { date: "01-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S3J1CEC1Y7" },
  { date: "01-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S7ZYX1AA42" },
  { date: "01-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SGZ4180XFS" },
  { date: "01-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SJAWSYF5JI" },
  { date: "01-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SK8TUIZVOE" },
  { date: "01-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SMFR0338FN" },
  { date: "01-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SNVMF10HOU" },
  { date: "01-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SZGXSHYCO1" },
  { date: "02-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SCOL06ILYC" },
  { date: "02-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SCOL06ILYC" },
  { date: "03-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S0ABV0SG7U" },
  { date: "03-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S6A8CTURC9" },
  { date: "03-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S0ABV0SG7U" },
  { date: "03-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S6A8CTURC9" },
  { date: "04-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SDDQ5QKBK2" },
  { date: "04-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SDDQ5QKBK2" },
  { date: "05-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S15Q62YE3J" },
  { date: "05-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S3BH9RLCR9" },
  { date: "05-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S15Q62YE3J" },
  { date: "05-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S3BH9RLCR9" },
  { date: "06-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SHA4YZHRJW" },
  { date: "06-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SHA4YZHRJW" },
  { date: "07-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SYWMKZ0WAW" },
  { date: "07-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SYWMKZ0WAW" },
  { date: "08-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SZHYITOES1" },
  { date: "08-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SZHYITOES1" },
  { date: "09-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SFJKFCLQSH" },
  { date: "09-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SFXW2IG8YE" },
  { date: "09-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SRAS2I0416" },
  { date: "09-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SFJKFCLQSH" },
  { date: "09-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SFXW2IG8YE" },
  { date: "09-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SRAS2I0416" },
  { date: "10-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S8IRO4YR9I" },
  { date: "10-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S8IRO4YR9I" },
  { date: "11-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S920UWK5XD" },
  { date: "11-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S920UWK5XD" },
  { date: "12-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SA8CYTKOXY" },
  { date: "12-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SA8CYTKOXY" },
  { date: "13-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S7TCKJR477" },
  { date: "13-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S7TCKJR477" },
  { date: "14-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SY5G2U2RFV" },
  { date: "14-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SY5G2U2RFV" },
  { date: "15-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SK19JIVY5D" },
  { date: "15-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SUNGL76UXW" },
  { date: "15-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SK19JIVY5D" },
  { date: "15-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SUNGL76UXW" },
  { date: "17-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SVM5LZ877C" },
  { date: "17-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SVM5LZ877C" },
  { date: "18-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SJ3MV8K3XD" },
  { date: "18-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SJ3MV8K3XD" },
  { date: "20-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S5KQTCPMKP" },
  { date: "20-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S5KQTCPMKP" },
  { date: "21-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SEJXGD06NQ" },
  { date: "21-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SEJXGD06NQ" },
  { date: "23-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S75HF7L3HW" },
  { date: "23-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SF4UCXCQHZ" },
  { date: "23-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "SQ2I2F1UVP" },
  { date: "23-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SF4UCXCQHZ" },
  { date: "23-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "SQ2I2F1UVP" },
  { date: "23-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S75HF7L3HW" },
  { date: "24-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "AmEx ---- 1549", reference: "S07QKTU912" },
  { date: "24-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S4L2G638H2" },
  { date: "24-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "AmEx ---- 1549", reference: "S07QKTU912" },
  { date: "24-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S4L2G638H2" },
  { date: "25-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "AmEx ---- 1549", reference: "S9IMP4PAD3" },
  { date: "25-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "AmEx ---- 1549", reference: "S9IMP4PAD3" },
  { date: "28-Dec-2025", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "AmEx ---- 1549", reference: "SVW4Q240C1" },
  { date: "28-Dec-2025", campaign: "Army IBA NEWS", spending: 833.79, cardType: "AmEx ---- 1549", reference: "SVW4Q240C1" },
  { date: "03-Jan-2026", campaign: "Aiba Carusol ad", spending: 1151.43, cardType: "Visa ---- 2896", reference: "S4RYAIRP57" },
  { date: "03-Jan-2026", campaign: "Army IBA NEWS", spending: 833.79, cardType: "Visa ---- 2896", reference: "S4RYAIRP57" },
  // Jan 4-19 transactions
  { date: "04-Jan-2026", campaign: "Aiba Carusol ad", spending: 2100.00, cardType: "Visa ---- 2896", reference: "S8Q2PL19YX" },
  { date: "04-Jan-2026", campaign: "Army IBA NEWS", spending: 2100.00, cardType: "Visa ---- 2896", reference: "S8Q2PL19YX" },
  { date: "06-Jan-2026", campaign: "Aiba Carusol ad", spending: 2190.00, cardType: "Visa ---- 2896", reference: "SXK2V71EQL" },
  { date: "06-Jan-2026", campaign: "Army IBA NEWS", spending: 2190.00, cardType: "Visa ---- 2896", reference: "SXK2V71EQL" },
  { date: "08-Jan-2026", campaign: "Aiba Carusol ad", spending: 2050.00, cardType: "AmEx ---- 1549", reference: "S7LAU87BPS" },
  { date: "08-Jan-2026", campaign: "Army IBA NEWS", spending: 2050.00, cardType: "Visa ---- 2896", reference: "S0M9G4DKQ1" },
  { date: "09-Jan-2026", campaign: "Aiba Carusol ad", spending: 2135.00, cardType: "Visa ---- 2896", reference: "S4N8H0VYTU" },
  { date: "09-Jan-2026", campaign: "Army IBA NEWS", spending: 2135.00, cardType: "AmEx ---- 1549", reference: "SCR1D6M9FA" },
  { date: "11-Jan-2026", campaign: "Aiba Carusol ad", spending: 2115.00, cardType: "AmEx ---- 1549", reference: "S1R4PJD01Q" },
  { date: "11-Jan-2026", campaign: "Army IBA NEWS", spending: 2115.00, cardType: "Visa ---- 2896", reference: "S56M3QZ7RT" },
  { date: "13-Jan-2026", campaign: "Aiba Carusol ad", spending: 2175.00, cardType: "Visa ---- 2896", reference: "S0J8VMM41P" },
  { date: "13-Jan-2026", campaign: "Army IBA NEWS", spending: 2175.00, cardType: "AmEx ---- 1549", reference: "SQ9MBZP8TA" },
  { date: "15-Jan-2026", campaign: "Aiba Carusol ad", spending: 2275.00, cardType: "AmEx ---- 1549", reference: "SJP4QADYTS" },
  { date: "15-Jan-2026", campaign: "Army IBA NEWS", spending: 2275.00, cardType: "Visa ---- 2896", reference: "S15N8LXZ3U" },
  { date: "16-Jan-2026", campaign: "Aiba Carusol ad", spending: 2175.00, cardType: "Visa ---- 2896", reference: "SMCLEAR01" },
  { date: "16-Jan-2026", campaign: "Army IBA NEWS", spending: 2175.00, cardType: "AmEx ---- 1549", reference: "SMCLEAR02" },
  { date: "17-Jan-2026", campaign: "Aiba Carusol ad", spending: 2210.00, cardType: "AmEx ---- 1549", reference: "STHRESH01" },
  { date: "17-Jan-2026", campaign: "Army IBA NEWS", spending: 2210.00, cardType: "Visa ---- 2896", reference: "STHRESH02" },
  { date: "18-Jan-2026", campaign: "Aiba Carusol ad", spending: 2025.00, cardType: "Visa ---- 2896", reference: "SMCLEAR03" },
  { date: "18-Jan-2026", campaign: "Army IBA NEWS", spending: 2025.00, cardType: "AmEx ---- 1549", reference: "SMCLEAR04" },
  { date: "19-Jan-2026", campaign: "Aiba Carusol ad", spending: 2410.00, cardType: "AmEx ---- 1549", reference: "SFINAL01" },
  { date: "19-Jan-2026", campaign: "Army IBA NEWS", spending: 2410.00, cardType: "Visa ---- 2896", reference: "SFINAL02" },
]

const getCampaignBadge = (campaign: string) => {
  if (campaign.includes("Carusol")) {
    return <Badge className="text-xs bg-primary/10 text-primary border-primary/20">{campaign}</Badge>
  }
  return <Badge variant="outline" className="text-xs bg-[#00a884]/10 text-[#00a884] border-[#00a884]/20">{campaign}</Badge>
}

const getCardBadge = (cardType: string) => {
  if (cardType.includes("AmEx")) {
    return <span className="text-xs text-muted-foreground">{cardType}</span>
  }
  return <span className="text-xs text-muted-foreground">{cardType}</span>
}

export function TransactionsTable() {
  const [showAll, setShowAll] = useState(false)
  const displayData = showAll ? transactionsData : transactionsData.slice(0, 20)
  
  const subtotal = transactionsData.reduce((acc, row) => acc + row.spending, 0)
  const vat = subtotal * 0.15
  const grandTotal = subtotal + vat

  const downloadCSV = () => {
    const headers = ["Date", "Campaign", "Spending (BDT)", "Card Type", "Reference"]
    const rows = transactionsData.map(t => [t.date, t.campaign, t.spending.toFixed(2), t.cardType, t.reference])
    const summaryRows = [
      ["", "", "", "", ""],
      ["SUBTOTAL", "", subtotal.toFixed(2), "", ""],
      ["VAT 15%", "", vat.toFixed(2), "", ""],
      ["GRAND TOTAL", "", grandTotal.toFixed(2), "", ""],
    ]
    const csvContent = [headers, ...rows, ...summaryRows].map(r => r.join(",")).join("\n")
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Army_IBA_Meta_Ads_Transactions_Nov16-Jan19.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  const downloadPDF = () => {
    // Create a printable HTML document
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Army IBA Meta Ads Transactions Report</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; font-size: 10px; }
          h1 { color: #1877F2; font-size: 18px; margin-bottom: 5px; }
          h2 { color: #333; font-size: 12px; margin-top: 0; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th { background: #1877F2; color: white; padding: 8px; text-align: left; font-size: 9px; }
          td { padding: 6px 8px; border-bottom: 1px solid #eee; font-size: 9px; }
          tr:nth-child(even) { background: #f9f9f9; }
          .total-row { background: #f0f0f0 !important; font-weight: bold; }
          .grand-total { background: #1877F2 !important; color: white !important; }
          .summary { margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px; }
          .summary-grid { display: flex; gap: 40px; }
          .summary-item { text-align: center; }
          .summary-value { font-size: 16px; font-weight: bold; color: #1877F2; }
          .summary-label { font-size: 10px; color: #666; }
        </style>
      </head>
      <body>
        <h1>Army IBA Admission Campaign</h1>
        <h2>Meta Ads Transaction Report | Nov 16, 2025 – Jan 19, 2026</h2>
        
        <div class="summary">
          <div class="summary-grid">
            <div class="summary-item">
              <div class="summary-value">${transactionsData.length}</div>
              <div class="summary-label">Total Transactions</div>
            </div>
            <div class="summary-item">
              <div class="summary-value">৳${subtotal.toLocaleString()}</div>
              <div class="summary-label">Subtotal</div>
            </div>
            <div class="summary-item">
              <div class="summary-value">৳${vat.toLocaleString()}</div>
              <div class="summary-label">VAT (15%)</div>
            </div>
            <div class="summary-item">
              <div class="summary-value">৳${grandTotal.toLocaleString()}</div>
              <div class="summary-label">Grand Total</div>
            </div>
          </div>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Campaign</th>
              <th>Spending (৳)</th>
              <th>Card Type</th>
              <th>Reference</th>
            </tr>
          </thead>
          <tbody>
            ${transactionsData.map((t, i) => `
              <tr>
                <td>${i + 1}</td>
                <td>${t.date}</td>
                <td>${t.campaign}</td>
                <td>${t.spending.toLocaleString()}</td>
                <td>${t.cardType}</td>
                <td>${t.reference}</td>
              </tr>
            `).join("")}
            <tr class="total-row">
              <td colspan="3">Subtotal (${transactionsData.length} transactions)</td>
              <td>৳${subtotal.toLocaleString()}</td>
              <td colspan="2"></td>
            </tr>
            <tr class="total-row">
              <td colspan="3">VAT @ 15%</td>
              <td>৳${vat.toLocaleString()}</td>
              <td colspan="2"></td>
            </tr>
            <tr class="grand-total">
              <td colspan="3">GRAND TOTAL</td>
              <td>৳${grandTotal.toLocaleString()}</td>
              <td colspan="2"></td>
            </tr>
          </tbody>
        </table>
        
        <p style="margin-top: 30px; font-size: 9px; color: #666;">
          Generated on ${new Date().toLocaleDateString()} | Army IBA Meta Ads Dashboard
        </p>
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
    <section>
      <Card className="border border-border">
        <CardHeader className="pb-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                All Transactions
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Full transaction history from Nov 16, 2025 – Jan 19, 2026 ({transactionsData.length} records)
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
                  <FileText className="h-4 w-4" />
                  Download PDF
                </DropdownMenuItem>
                <DropdownMenuItem onClick={downloadCSV} className="gap-2 cursor-pointer">
                  <FileSpreadsheet className="h-4 w-4" />
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
                <TableRow className="bg-primary/5">
                  <TableHead className="text-xs font-semibold">#</TableHead>
                  <TableHead className="text-xs font-semibold">Date</TableHead>
                  <TableHead className="text-xs font-semibold">Campaign</TableHead>
                  <TableHead className="text-xs font-semibold text-right">Spending (৳)</TableHead>
                  <TableHead className="text-xs font-semibold">Card</TableHead>
                  <TableHead className="text-xs font-semibold">Reference</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {displayData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-primary/5">
                    <TableCell className="text-sm text-muted-foreground">{index + 1}</TableCell>
                    <TableCell className="text-sm">{row.date}</TableCell>
                    <TableCell>{getCampaignBadge(row.campaign)}</TableCell>
                    <TableCell className="text-sm text-right font-mono">{row.spending.toLocaleString()}</TableCell>
                    <TableCell>{getCardBadge(row.cardType)}</TableCell>
                    <TableCell className="text-sm font-mono text-muted-foreground">{row.reference}</TableCell>
                  </TableRow>
                ))}
                {!showAll && transactionsData.length > 20 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-4">
                      <Button 
                        variant="ghost" 
                        onClick={() => setShowAll(true)}
                        className="gap-2 text-primary"
                      >
                        Show all {transactionsData.length} transactions
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
                {showAll && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-4">
                      <Button 
                        variant="ghost" 
                        onClick={() => setShowAll(false)}
                        className="gap-2 text-primary"
                      >
                        Show less
                        <ChevronUp className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
                <TableRow className="bg-muted/50 font-semibold">
                  <TableCell colSpan={3} className="text-sm">Subtotal ({transactionsData.length} transactions)</TableCell>
                  <TableCell className="text-sm text-right font-mono">৳{subtotal.toLocaleString()}</TableCell>
                  <TableCell colSpan={2}></TableCell>
                </TableRow>
                <TableRow className="bg-muted/30">
                  <TableCell colSpan={3} className="text-sm text-muted-foreground">VAT @ 15%</TableCell>
                  <TableCell className="text-sm text-right font-mono text-muted-foreground">৳{vat.toLocaleString()}</TableCell>
                  <TableCell colSpan={2}></TableCell>
                </TableRow>
                <TableRow className="bg-primary text-primary-foreground font-bold">
                  <TableCell colSpan={3} className="text-sm">GRAND TOTAL</TableCell>
                  <TableCell className="text-sm text-right font-mono">৳{grandTotal.toLocaleString()}</TableCell>
                  <TableCell colSpan={2}></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
