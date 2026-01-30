"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

type Breadcrumb = {
  label: string
  href?: string
}

interface DashboardHeaderProps {
  breadcrumbs: Breadcrumb[]
  userName: string
  collapsed: boolean
  onToggle: () => void
}

/* ---------- Greeting Helper ---------- */
function getGreeting() {
  const hour = new Date().getHours()

  if (hour < 12) return "Good Morning"
  if (hour < 17) return "Good Afternoon"
  return "Good Evening"
}

export function DashboardHeader({
  breadcrumbs,
  userName,
  collapsed,
  onToggle,
}: DashboardHeaderProps) {
  const [greeting, setGreeting] = useState("")

  // ✅ Run only on client → avoids hydration mismatch
  useEffect(() => {
    setGreeting(getGreeting())
  }, [])

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dbdfe6] dark:border-gray-800 bg-gray-100 dark:bg-[#101622]/80 backdrop-blur-md px-10 py-3 z-50 sticky top-0">

      {/* ================= LEFT ================= */}
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle */}
        <button
          onClick={onToggle}
          className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {index !== 0 && <span>/</span>}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-[#135bec] transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-slate-900 dark:text-white font-medium">
                  {crumb.label}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="flex items-center gap-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            {greeting && `${greeting}, ${userName}`}
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Subscription: <span className="font-medium">Platinum</span>
          </p>
        </div>
      </div>
    </header>
  )
}
