"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

// Meta brand colors
const META_BLUE = "#1877F2"
const INSTAGRAM_PINK = "#e1306c"
const MESSENGER_BLUE = "#0084ff"

const placementData = [
  { name: "Facebook", value: 70, color: META_BLUE },
  { name: "Instagram", value: 28, color: INSTAGRAM_PINK },
  { name: "Messenger", value: 2, color: MESSENGER_BLUE },
]

const platformMetrics = [
  {
    platform: "Facebook",
    reach: "274,400",
    messages: "1,932",
    cpr: "৳20.15",
    share: "70%",
    color: `bg-[${META_BLUE}]`,
    bgColor: META_BLUE,
  },
  {
    platform: "Instagram",
    reach: "109,760",
    messages: "773",
    cpr: "৳21.34",
    share: "28%",
    color: `bg-[${INSTAGRAM_PINK}]`,
    bgColor: INSTAGRAM_PINK,
  },
  {
    platform: "Messenger",
    reach: "7,840",
    messages: "55",
    cpr: "৳22.10",
    share: "2%",
    color: `bg-[${MESSENGER_BLUE}]`,
    bgColor: MESSENGER_BLUE,
  },
]

export function PlacementInsights() {
  return (
    <section>
      <Card className="border border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            Creative & Placement Insights
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Platform distribution and performance comparison
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pie Chart */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">
                Spend Distribution by Platform
              </h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={placementData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {placementData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'var(--background)',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }}
                      formatter={(value: number) => [`${value}%`, 'Share']}
                    />
                    <Legend
                      wrapperStyle={{ fontSize: '12px' }}
                      formatter={(value) => <span className="text-foreground">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Platform Metrics */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">
                Platform Performance Breakdown
              </h4>
              <div className="space-y-4">
                {platformMetrics.map((platform) => (
                  <div
                    key={platform.platform}
                    className="bg-muted/30 rounded-lg p-4 border border-border hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: platform.bgColor }}
                      />
                      <span className="font-medium text-foreground">{platform.platform}</span>
                      <span className="ml-auto text-sm font-semibold text-muted-foreground">
                        {platform.share}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs">Reach</p>
                        <p className="font-semibold text-foreground">{platform.reach}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">Messages</p>
                        <p className="font-semibold text-foreground">{platform.messages}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">CPR</p>
                        <p className="font-semibold text-foreground">{platform.cpr}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trend Note */}
          <div className="mt-6 pt-4 border-t border-border">
            <div className="bg-[#e1306c]/10 border border-[#e1306c]/20 rounded-lg p-4">
              <p className="text-sm text-foreground/80">
                <strong className="text-[#e1306c]">Trend Analysis:</strong> Instagram share increased from 22% (Cycle 1) to 40% 
                (Cycle 13) over the campaign period, indicating growing engagement from younger 
                demographics as the admission deadline approached.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
