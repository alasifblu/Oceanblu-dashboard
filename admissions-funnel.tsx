"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const funnelStages = [
  {
    stage: "Awareness",
    metric: "Impressions",
    value: "2,860,000",
    percentage: "100%",
    color: "bg-emerald-600",
    width: "100%",
  },
  {
    stage: "Engagement",
    metric: "Reach",
    value: "392,000",
    percentage: "13.7%",
    color: "bg-emerald-500",
    width: "60%",
  },
  {
    stage: "Interest",
    metric: "Clicks",
    value: "8,866",
    percentage: "0.31%",
    color: "bg-emerald-400",
    width: "35%",
  },
  {
    stage: "Conversation",
    metric: "Messages",
    value: "2,760",
    percentage: "31.1%",
    color: "bg-emerald-700",
    width: "20%",
  },
]

export function AdmissionsFunnel() {
  return (
    <section>
      <Card className="border border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            Admissions Funnel
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Awareness → Engagement → Conversation pathway
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {funnelStages.map((stage, index) => (
              <div key={stage.stage} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs flex items-center justify-center font-medium">
                      {index + 1}
                    </span>
                    <span className="font-medium text-foreground">{stage.stage}</span>
                    <span className="text-muted-foreground">({stage.metric})</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-foreground">{stage.value}</span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      {stage.percentage} {index > 0 ? "conversion" : ""}
                    </span>
                  </div>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${stage.color} rounded-full transition-all duration-500`}
                    style={{ width: stage.width }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-foreground">74%</p>
                <p className="text-xs text-muted-foreground">Click → Message Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">7.3</p>
                <p className="text-xs text-muted-foreground">Avg. Impressions per Reach</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">0.70%</p>
                <p className="text-xs text-muted-foreground">Reach → Message Rate</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
