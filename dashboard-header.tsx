"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar, ChevronDown, UserPlus, X, Check, Loader2, Link2, LogOut, User, Clock, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { format } from "date-fns"
import { useAuth } from "@/lib/auth-context"

interface TeamMember {
  email: string
  role: string
  status: "pending" | "active"
}

interface AdAccount {
  name: string
  spend: number
  avatar: string
}

const adAccounts: AdAccount[] = [
  { name: "Al Asif Sikhon", spend: 67870, avatar: "AS" },
  { name: "Sabbir Hasan", spend: 123323, avatar: "SH" },
  { name: "Loria", spend: 15430, avatar: "LO" },
]

export function DashboardHeader() {
  const { user, logout, isAdmin } = useAuth()
  const router = useRouter()
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(2025, 10, 16),
    to: new Date(2026, 0, 19),
  })
  const [isDateOpen, setIsDateOpen] = useState(false)
  const [isTeamOpen, setIsTeamOpen] = useState(false)
  const [newEmail, setNewEmail] = useState("")
  const [newRole, setNewRole] = useState("viewer")
  const [isInviting, setIsInviting] = useState(false)
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { email: "admin@armyiba.edu.bd", role: "owner", status: "active" },
  ])

  const handleInvite = async () => {
    if (!newEmail || !newEmail.includes("@")) return
    setIsInviting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setTeamMembers([...teamMembers, { email: newEmail, role: newRole, status: "pending" }])
    setNewEmail("")
    setNewRole("viewer")
    setIsInviting(false)
  }

  const removeMember = (email: string) => {
    setTeamMembers(teamMembers.filter(m => m.email !== email))
  }

  const isOngoing = dateRange.to >= new Date()
  const totalAdSpend = adAccounts.reduce((sum, acc) => sum + acc.spend, 0)

  return (
    <header className="bg-background">
      <div className="container mx-auto px-4 py-6 bg-muted text-left">
        {/* Main Header Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 text-sky-700">
          {/* Left: Title & Subtitle */}
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              Ai Automation for Ads
            </h1>
            <p className="text-sm text-muted-foreground font-normal">
              Meta Ads Performance and Automation 
            </p>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Meta Connection - Glowing Style */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 px-3 text-xs gap-2 border-[#00a884]/30 bg-[#00a884]/5 hover:bg-[#00a884]/10 hover:border-[#00a884]/50">
                  <div className="relative">
                    <Link2 className="w-3.5 h-3.5 text-[#00a884]" />
                    <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#00a884] animate-pulse" />
                  </div>
                  <span className="text-[#00a884] font-medium">Connected</span>
                  <span className="text-muted-foreground hidden sm:inline">AIBA, Sylhet</span>
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="space-y-4">
                  {/* Connection Status Header */}
                  <div className="flex items-center gap-3 pb-3 border-b">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1877F2] to-[#0866FF] rounded-xl flex items-center justify-center shadow-lg shadow-[#1877F2]/20">
                      <Link2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold">Meta Business Suite</p>
                        <Badge className="h-4 px-1.5 text-[9px] font-medium bg-[#00a884] hover:bg-[#00a884]">
                          Connected
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">Army Institute of Business Administration - AIBA, Sylhet</p>
                    </div>
                  </div>

                  {/* Ad Accounts Section */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Ad Accounts (3)</p>
                      <p className="text-xs text-muted-foreground">Total: <span className="font-semibold text-foreground">{totalAdSpend.toLocaleString()} BDT</span></p>
                    </div>
                    <div className="space-y-2">
                      {adAccounts.map((account, index) => (
                        <div key={index} className="flex items-center justify-between p-2.5 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1877F2] to-[#0866FF] flex items-center justify-center text-[10px] font-bold text-white">
                              {account.avatar}
                            </div>
                            <div>
                              <p className="text-sm font-medium">{account.name}</p>
                              <p className="text-[10px] text-muted-foreground">Ad Account {index + 1}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-sm font-semibold">
                              <Wallet className="w-3 h-3 text-muted-foreground" />
                              {account.spend.toLocaleString()}
                            </div>
                            <p className="text-[10px] text-muted-foreground">BDT spent</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t">
                    <div className="text-center p-2 rounded-lg bg-muted/30">
                      <p className="text-lg font-bold text-foreground">3</p>
                      <p className="text-[10px] text-muted-foreground">Ad Accounts</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-muted/30">
                      <p className="text-lg font-bold text-foreground">1</p>
                      <p className="text-[10px] text-muted-foreground">Campaigns</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-muted/30">
                      <p className="text-lg font-bold text-foreground">3</p>
                      <p className="text-[10px] text-muted-foreground">Ad Sets</p>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <div className="w-px h-4 bg-border hidden sm:block" />

            {/* Date Range */}
            <Popover open={isDateOpen} onOpenChange={setIsDateOpen}>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 px-3 text-xs gap-1.5 font-normal">
                  <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>{format(dateRange.from, "MMM d")} – {format(dateRange.to, "MMM d, yyyy")}</span>
                  {isOngoing && (
                    <Badge className="ml-1 h-4 px-1.5 text-[10px] font-normal bg-[#00a884] hover:bg-[#00a884]">
                      Live
                    </Badge>
                  )}
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <div className="p-3 border-b">
                  <p className="text-sm font-medium">Date Range</p>
                </div>
                <div className="p-3 space-y-3">
                  <div className="flex gap-1.5 flex-wrap">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs h-7 bg-transparent"
                      onClick={() => setDateRange({ from: new Date(2025, 10, 16), to: new Date(2026, 0, 19) })}
                    >
                      Full Campaign
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs h-7 bg-transparent"
                      onClick={() => setDateRange({ from: new Date(2025, 10, 16), to: new Date(2026, 0, 3) })}
                    >
                      Pre-Campaign
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs h-7 bg-transparent"
                      onClick={() => setDateRange({ from: new Date(2026, 0, 4), to: new Date(2026, 0, 19) })}
                    >
                      Main Campaign
                    </Button>
                  </div>
                  <CalendarComponent
                    mode="range"
                    selected={{ from: dateRange.from, to: dateRange.to }}
                    onSelect={(range) => {
                      if (range?.from && range?.to) {
                        setDateRange({ from: range.from, to: range.to })
                      }
                    }}
                    numberOfMonths={2}
                    className="rounded-md border"
                  />
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => setIsDateOpen(false)}>
                      Cancel
                    </Button>
                    <Button size="sm" className="h-7 text-xs bg-[#1877F2] hover:bg-[#1877F2]/90" onClick={() => setIsDateOpen(false)}>
                      Apply
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <div className="w-px h-4 bg-border hidden sm:block" />

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 px-2 gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center text-[10px] font-medium text-white">
                    {user?.name?.charAt(0) || "U"}
                  </div>
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{user?.name}</p>
                  <p className="text-xs text-muted-foreground">{user?.email}</p>
                  <Badge className={`mt-1 h-4 text-[10px] font-normal ${isAdmin ? "bg-[#1877F2]" : "bg-muted text-muted-foreground"}`}>
                    {isAdmin ? "Admin" : "User"}
                  </Badge>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIsTeamOpen(true)} className="cursor-pointer text-xs">
                  <UserPlus className="w-3.5 h-3.5 mr-2" />
                  Add People
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="text-red-600 cursor-pointer text-xs"
                  onClick={() => {
                    logout()
                    router.push("/login")
                  }}
                >
                  <LogOut className="w-3.5 h-3.5 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Secondary Row: Status Badges & Timestamp */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="h-5 text-[10px] font-normal gap-1.5 border-[#00a884]/30 bg-[#00a884]/5 text-[#00a884]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00a884] animate-pulse" />
              Active Ads
            </Badge>
            <Badge variant="outline" className="h-5 text-[10px] font-normal gap-1 border-[#1877F2]/20 text-[#1877F2]">
              1 Campaign
            </Badge>
            <Badge variant="outline" className="h-5 text-[10px] font-normal gap-1 border-muted-foreground/20">
              3 Ad Sets
            </Badge>
            <Popover>
              <PopoverTrigger asChild>
                <Badge variant="outline" className="h-5 text-[10px] font-normal gap-1 border-muted-foreground/20 cursor-pointer hover:bg-muted/50 transition-colors">
                  3 Ad Accounts
                  <ChevronDown className="w-2.5 h-2.5" />
                </Badge>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-2" align="start">
                <div className="space-y-1">
                  {adAccounts.map((account, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center text-[8px] font-bold text-white">
                          {account.avatar}
                        </div>
                        <span className="text-xs font-medium">{account.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{account.spend.toLocaleString()} BDT</span>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>Report generated Jan 21, 2026</span>
          </div>
        </div>
      </div>

      {/* Add People Dialog */}
      <Dialog open={isTeamOpen} onOpenChange={setIsTeamOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share Dashboard</DialogTitle>
            <DialogDescription>
              Invite team members to view or edit this campaign report
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="flex gap-2">
              <div className="flex-1">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleInvite()}
                />
              </div>
              <select
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                className="px-3 py-2 border border-input rounded-md text-sm bg-background"
              >
                <option value="viewer">Viewer</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
              <Button onClick={handleInvite} disabled={isInviting || !newEmail} className="bg-[#1877F2] hover:bg-[#1877F2]/90">
                {isInviting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Invite"}
              </Button>
            </div>

            <div className="border rounded-lg divide-y">
              {teamMembers.map((member) => (
                <div key={member.email} className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-xs font-medium uppercase text-[#1877F2]">
                      {member.email.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{member.email}</p>
                      <p className="text-xs text-muted-foreground capitalize">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {member.status === "pending" && (
                      <Badge variant="secondary" className="text-[10px]">Pending</Badge>
                    )}
                    {member.status === "active" && member.role !== "owner" && (
                      <Badge variant="outline" className="text-[10px] text-[#00a884] border-[#00a884]/20">
                        <Check className="w-3 h-3 mr-1" /> Active
                      </Badge>
                    )}
                    {member.role === "owner" && (
                      <Badge className="text-[10px] bg-[#1877F2]">Owner</Badge>
                    )}
                    {member.role !== "owner" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                        onClick={() => removeMember(member.email)}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground">
              Invited members will receive an email with access to this dashboard.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  )
}
