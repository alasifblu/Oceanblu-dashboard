"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  ComposedChart,
  Area,
} from "recharts"

const cycleData = [
  { cycle: "C1", dates: "Jan 04-06", spend: 4200, messages: 210, cpr: 20.0, reach: 26.8, ctr: 0.30, fb: 78, ig: 22 },
  { cycle: "C2", dates: "Jan 06-08", spend: 4380, messages: 214, cpr: 20.4, reach: 27.9, ctr: 0.29, fb: 75, ig: 25 },
  { cycle: "C3", dates: "Jan 08-09", spend: 3850, messages: 193, cpr: 19.9, reach: 25.1, ctr: 0.28, fb: 77, ig: 23 },
  { cycle: "C4", dates: "Jan 09-10", spend: 4270, messages: 207, cpr: 20.6, reach: 26.5, ctr: 0.30, fb: 76, ig: 24 },
  { cycle: "C5", dates: "Jan 10-11", spend: 4230, messages: 210, cpr: 20.1, reach: 27.2, ctr: 0.32, fb: 73, ig: 27 },
  { cycle: "C6", dates: "Jan 11-12", spend: 4350, messages: 212, cpr: 20.5, reach: 27.8, ctr: 0.33, fb: 71, ig: 29 },
  { cycle: "C7", dates: "Jan 12-13", spend: 4350, messages: 214, cpr: 20.3, reach: 28.0, ctr: 0.31, fb: 71, ig: 29 },
  { cycle: "C8", dates: "Jan 13-14", spend: 4250, messages: 207, cpr: 20.5, reach: 27.3, ctr: 0.30, fb: 70, ig: 30 },
  { cycle: "C9", dates: "Jan 14-15", spend: 4500, messages: 217, cpr: 20.7, reach: 28.5, ctr: 0.32, fb: 69, ig: 31 },
  { cycle: "C10", dates: "Jan 15-16", spend: 4550, messages: 222, cpr: 20.5, reach: 29.2, ctr: 0.33, fb: 68, ig: 32 },
  { cycle: "C11", dates: "Jan 16-17", spend: 4350, messages: 212, cpr: 20.5, reach: 28.7, ctr: 0.33, fb: 67, ig: 33 },
  { cycle: "C12", dates: "Jan 17-18", spend: 4420, messages: 216, cpr: 20.4, reach: 29.3, ctr: 0.33, fb: 66, ig: 34 },
  { cycle: "C13", dates: "Jan 18-19", spend: 5235, messages: 256, cpr: 20.4, reach: 40.0, ctr: 0.38, fb: 60, ig: 40 },
]

// Meta brand colors
const META_BLUE = "#1877F2"
const META_GREEN = "#00a884"
const INSTAGRAM_PINK = "#e1306c"

export function PerformanceCharts() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground mb-4">Performance Breakdown</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Spend vs Messages Chart */}
        <Card className="border border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Spend vs Messaging Conversations by Cycle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={cycleData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis 
                    dataKey="cycle" 
                    tick={{ fontSize: 11 }} 
                    className="text-muted-foreground"
                  />
                  <YAxis 
                    yAxisId="left" 
                    tick={{ fontSize: 11 }} 
                    className="text-muted-foreground"
                    tickFormatter={(value) => `৳${value / 1000}K`}
                  />
                  <YAxis 
                    yAxisId="right" 
                    orientation="right" 
                    tick={{ fontSize: 11 }} 
                    className="text-muted-foreground"
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--background)', 
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    formatter={(value: number, name: string) => [
                      name === 'spend' ? `৳${value.toLocaleString()}` : value,
                      name === 'spend' ? 'Spend' : 'Messages'
                    ]}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="spend"
                    fill={`${META_GREEN}20`}
                    stroke={META_GREEN}
                    strokeWidth={2}
                    name="Spend (BDT)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="messages"
                    stroke={META_BLUE}
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    name="Messages"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* CPR Trend Chart */}
        <Card className="border border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Cost Per Result (CPR) Trend by Cycle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cycleData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis 
                    dataKey="cycle" 
                    tick={{ fontSize: 11 }} 
                    className="text-muted-foreground"
                  />
                  <YAxis 
                    domain={[19, 21.5]} 
                    tick={{ fontSize: 11 }} 
                    className="text-muted-foreground"
                    tickFormatter={(value) => `৳${value}`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--background)', 
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    formatter={(value: number) => [`৳${value.toFixed(2)}`, 'CPR']}
                  />
                  <Line
                    type="monotone"
                    dataKey="cpr"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    dot={{ r: 4, fill: '#f59e0b' }}
                    name="CPR"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Reach + CTR Dual Axis Chart */}
        <Card className="border border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Reach & CTR Trend (Dual Axis)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={cycleData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis 
                    dataKey="cycle" 
                    tick={{ fontSize: 11 }} 
                    className="text-muted-foreground"
                  />
                  <YAxis 
                    yAxisId="left" 
                    tick={{ fontSize: 11 }} 
                    className="text-muted-foreground"
                    tickFormatter={(value) => `${value}K`}
                  />
                  <YAxis 
                    yAxisId="right" 
                    orientation="right" 
                    tick={{ fontSize: 11 }} 
                    className="text-muted-foreground"
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--background)', 
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    formatter={(value: number, name: string) => [
                      name === 'reach' ? `${value}K` : `${value}%`,
                      name === 'reach' ? 'Reach' : 'CTR'
                    ]}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar
                    yAxisId="left"
                    dataKey="reach"
                    fill={META_BLUE}
                    radius={[4, 4, 0, 0]}
                    name="Reach (K)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="ctr"
                    stroke={INSTAGRAM_PINK}
                    strokeWidth={2}
                    dot={{ r: 3, fill: INSTAGRAM_PINK }}
                    name="CTR (%)"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Placement Split Chart */}
        <Card className="border border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Placement Split: Facebook vs Instagram
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cycleData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis 
                    dataKey="cycle" 
                    tick={{ fontSize: 11 }} 
                    className="text-muted-foreground"
                  />
                  <YAxis 
                    tick={{ fontSize: 11 }} 
                    className="text-muted-foreground"
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--background)', 
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    formatter={(value: number, name: string) => [`${value}%`, name]}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar 
                    dataKey="fb" 
                    stackId="a" 
                    fill={META_BLUE}
                    name="Facebook"
                    radius={[0, 0, 0, 0]}
                  />
                  <Bar 
                    dataKey="ig" 
                    stackId="a" 
                    fill={INSTAGRAM_PINK}
                    name="Instagram"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
