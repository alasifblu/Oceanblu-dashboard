"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Campaign preview data styled like Meta Ads Manager cards
const campaignPreviews = [
  {
    id: 1,
    name: "New Sales campaign",
    status: "Off",
    objective: "Sales",
    messages: 370,
    cpr: 20.27,
    spent: 45698,
    thumbnail: "/images/img-4619.jpeg",
  },
  {
    id: 2,
    name: "Aiba Carusol ad",
    status: "Off",
    objective: "Messages",
    messages: 2587,
    cpr: 20.25,
    spent: 52387.75,
    thumbnail: "/images/img-4617.png",
  },
  {
    id: 3,
    name: "Army IBA NEWS",
    status: "On",
    objective: "Engagement",
    messages: 2412,
    cpr: 20.33,
    spent: 52512,
    thumbnail: "/images/img-4616.png",
  },
  {
    id: 4,
    name: "aiba 2",
    status: "Off",
    objective: "Sales",
    messages: 1789,
    cpr: 37.03,
    spent: 31560,
    thumbnail: "/images/img-4618.jpeg",
  },
  {
    id: 5,
    name: "army iba news 2 feb",
    status: "Off",
    objective: "Messages",
    messages: 1030,
    cpr: 0.33,
    spent: 19008,
    thumbnail: "/images/img-4618.jpeg",
  },
]

export function CombinedSummary() {
  // Nov 16 - Jan 3: Ad Spend ৳119,113 + VAT ৳17,867 = ৳136,980
  // Jan 4 - Jan 19: ৳65,000
  // Grand Total: ৳201,980

  return (
    <section className="space-y-6">
      {/* Combined Summary Card */}
      <Card className="border border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#1877F2]" />
            Combined Campaign Summary
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Full campaign period: Nov 16, 2025 – Jan 19, 2026 (37 billing cycles)
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Pre-Campaign Period */}
            <div className="space-y-4">
              <div className="bg-[#1877F2]/5 rounded-lg p-4 border border-[#1877F2]/20">
                <h4 className="text-sm font-medium text-[#1877F2] mb-1">
                  Pre-Campaign Period
                </h4>
                <p className="text-xs text-muted-foreground mb-3">Nov 16 – Jan 03 (24 cycles)</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Ad Spend</span>
                    <span className="text-sm font-semibold text-foreground">৳119,113</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">VAT (15%)</span>
                    <span className="text-sm font-mono text-[#ff9800]">৳17,867</span>
                  </div>
                  <Separator className="bg-[#1877F2]/20" />
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Total</span>
                    <span className="text-sm font-bold text-[#1877F2]">৳136,980</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-sm text-muted-foreground">Messages</span>
                    <span className="text-sm font-mono text-muted-foreground">5,867</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Avg. CPR</span>
                    <span className="text-sm font-mono text-muted-foreground">৳20.30</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Campaign Period */}
            <div className="space-y-4">
              <div className="bg-[#00a884]/5 rounded-lg p-4 border border-[#00a884]/20">
                <h4 className="text-sm font-medium text-[#00a884] mb-1">
                  Main Campaign Period
                </h4>
                <p className="text-xs text-muted-foreground mb-3">Jan 04 – Jan 19 (13 cycles)</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Ad Spend</span>
                    <span className="text-sm font-semibold text-foreground">৳65,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Messages</span>
                    <span className="text-sm font-mono text-muted-foreground">3,170</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Avg. CPR</span>
                    <span className="text-sm font-mono text-muted-foreground">৳20.50</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Total */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-[#1877F2]/10 to-[#00a884]/10 rounded-lg p-4 border border-[#1877F2]/30">
                <h4 className="text-sm font-medium text-[#1877F2] mb-1">
                  Financial Summary
                </h4>
                <p className="text-xs text-muted-foreground mb-3">Nov 16 – Jan 19 (Combined)</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground/80">Pre-Campaign (w/ VAT)</span>
                    <span className="text-sm font-semibold text-foreground">৳136,980</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground/80">Main Campaign</span>
                    <span className="text-sm font-semibold text-foreground">৳65,000</span>
                  </div>
                  <Separator className="bg-[#1877F2]/20" />
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-[#1877F2]">Grand Total</span>
                    <span className="text-lg font-bold text-[#00a884]">৳201,980</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4 p-4 bg-muted/30 rounded-lg border border-border">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Total Cycles</p>
              <p className="text-xl font-bold text-[#1877F2]">37</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Total Messages</p>
              <p className="text-xl font-bold text-[#00a884]">8,928</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Avg. CPR</p>
              <p className="text-xl font-bold text-[#ff9800]">৳20.38</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Total Reach</p>
              <p className="text-xl font-bold text-[#1877F2]">1.1M</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Impressions</p>
              <p className="text-xl font-bold text-[#e1306c]">7.3M</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Campaign Preview Cards - Meta Ads Manager Style */}
      <Card className="border border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#1877F2]" />
            Campaign Preview
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            All campaigns in this report (styled like Meta Ads Manager)
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaignPreviews.map((campaign) => (
              <div 
                key={campaign.id} 
                className="p-4 bg-background border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-border bg-muted">
                      <Image 
                        src={campaign.thumbnail || "/placeholder.svg"} 
                        alt={campaign.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-gray-400 border-2 border-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{campaign.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <div className={`w-2 h-2 rounded-full ${campaign.status === "On" ? "bg-[#00a884] animate-pulse" : "bg-gray-400"}`} />
                          <span className={campaign.status === "On" ? "text-[#00a884] font-medium" : ""}>{campaign.status}</span>
                        </span>
                        <span>•</span>
                        <span>{campaign.objective}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-foreground">{campaign.messages.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground leading-tight">
                      {campaign.objective === "Engagement" ? "Post engagements" : "Messaging conversations started"}
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">BDT{campaign.cpr.toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground leading-tight">
                      Cost per {campaign.objective === "Engagement" ? "Post Engagement" : "Messaging Conversation Started"}
                    </p>
                  </div>
                <div>
                    <p className="text-2xl font-bold text-foreground">BDT{campaign.spent.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Spent</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ended Recently Section */}
          <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Ended recently</span>
            </div>
            <p className="text-xs text-muted-foreground">
              All campaigns in this period have completed. Campaign was active from Nov 16, 2025 to Jan 19, 2026.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Footer Notes */}
      <Card className="border border-border">
        <CardContent className="pt-6">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">
              <strong>Billing Entity:</strong> Meta Platforms Ireland Limited (formerly Facebook Ireland Limited)
            </p>
            <p className="text-xs text-muted-foreground">
              <strong>Tax Rate:</strong> 15% VAT applied on pre-campaign period (Nov 16 – Jan 3) per Bangladesh tax regulations
            </p>
            <p className="text-xs text-muted-foreground">
              <strong>Campaign Objective:</strong> Messaging Conversations (Admission Helpline) & Engagement
            </p>
            <p className="text-xs text-muted-foreground">
              <strong>Payment Method:</strong> Visa ending in 2896
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Report Footer */}
      <div className="mt-8 text-center text-xs text-muted-foreground py-4 border-t border-border">
        <p>Army Institute of Business Administration - AIBA, Sylhet • Meta Ads Performance Report</p>
        <p className="mt-1">Generated for internal management review • Confidential</p>
      </div>
    </section>
  )
}
