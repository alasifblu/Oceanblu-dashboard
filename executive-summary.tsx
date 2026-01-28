"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, TrendingUp } from "lucide-react"

export function ExecutiveSummary() {
  return (
    <section>
      <Card className="border border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            Executive Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The Army IBA Admission Campaign ran from <strong>November 16, 2025 – January 19, 2026</strong> across 
            Meta platforms (Facebook, Instagram, Messenger). The primary objective was to drive 
            messaging conversations to the institution's official helpline, serving as an admission 
            inquiry touchpoint for prospective students and parents.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-[#00a884]/10 rounded-lg p-4 border border-[#00a884]/20">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#00a884]" />
                <span className="text-sm font-medium text-[#00a884]">Campaign Success</span>
              </div>
              <p className="text-xs text-foreground/80">
                Generated <strong>9,037 conversations</strong> at an average CPR of ৳20.38, 
                well within institutional budget expectations. Grand Total: ৳201,980 (Pre-Campaign ৳136,980 + Main ৳65,000).
              </p>
            </div>

            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Reach Performance</span>
              </div>
              <p className="text-xs text-foreground/80">
                Achieved <strong>1.1M reach</strong> with 7.3M impressions across 37 billing cycles. 
                CTR improved during the deadline spike periods (Jan 19).
              </p>
            </div>

            <div className="bg-[#e1306c]/10 rounded-lg p-4 border border-[#e1306c]/20">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-[#e1306c]" />
                <span className="text-sm font-medium text-[#e1306c]">Platform Shift</span>
              </div>
              <p className="text-xs text-foreground/80">
                Instagram share increased from 22% to 40% over the campaign period, 
                indicating younger audience engagement.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
