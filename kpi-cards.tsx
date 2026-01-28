"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  Wallet, 
  MessageCircle, 
  Target, 
  Users, 
  Eye, 
  TrendingUp, 
  MousePointerClick,
  Receipt
} from "lucide-react"

const kpis = [
  {
    label: "Grand Total",
    value: "৳201,980",
    subtext: "Nov 16 – Jan 19",
    icon: Wallet,
    color: "bg-[#1877F2]/10 text-[#1877F2]",
  },
  {
    label: "Pre-Campaign",
    value: "৳136,980",
    subtext: "Nov 16 – Jan 3 (w/ VAT)",
    icon: Receipt,
    color: "bg-[#ff9800]/10 text-[#ff9800]",
  },
  {
    label: "Main Campaign",
    value: "৳65,000",
    subtext: "Jan 4 – Jan 19",
    icon: Wallet,
    color: "bg-[#00a884]/10 text-[#00a884]",
  },
  {
    label: "Total Messages",
    value: "9,037",
    subtext: "Conversations Started",
    icon: MessageCircle,
    color: "bg-[#0084ff]/10 text-[#0084ff]",
  },
  {
    label: "Avg. Cost Per Result",
    value: "৳20.38",
    subtext: "Per Conversation",
    icon: Target,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    label: "Total Reach",
    value: "1.1M",
    subtext: "Unique Users",
    icon: Users,
    color: "bg-[#1877F2]/10 text-[#1877F2]",
  },
  {
    label: "Total Impressions",
    value: "7.3M",
    subtext: "Ad Views",
    icon: Eye,
    color: "bg-[#e1306c]/10 text-[#e1306c]",
  },
  {
    label: "Avg. CTR",
    value: "0.29%",
    subtext: "Click-Through Rate",
    icon: MousePointerClick,
    color: "bg-[#00a884]/10 text-[#00a884]",
  },
]

export function KPICards() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground mb-4">Key Performance Indicators</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label} className="border border-border hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {kpi.label}
                  </p>
                  <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                  <p className="text-xs text-muted-foreground">{kpi.subtext}</p>
                </div>
                <div className={`p-2 rounded-lg ${kpi.color}`}>
                  <kpi.icon className="w-4 h-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
