import { DashboardCards } from "@/components/dashboard-cards"
import { DashboardFooter } from "@/components/dashboard-footer"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardHero } from "@/components/dashboard-hero"


export const metadata = {
  title: "Dashboard - ArchAI Planning",
  description: "Your architectural planning workspace and project management hub.",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#f6f6f8] dark:bg-[#101622]">
      <style>{`
        .arch-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(19, 91, 236, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(19, 91, 236, 0.05) 1px, transparent 1px);
        }
      `}</style>

      <DashboardHeader />

      <main className="flex-1 flex flex-col relative arch-grid">
  <div className="relative w-full max-w-7xl mx-auto px-6">
    <DashboardHero />
    <DashboardCards />
  </div>


        {/* Ambient Design Elements */}
        <div className="absolute top-20 left-20 opacity-10 pointer-events-none select-none">
          <span className="text-[120px] material-symbols-outlined text-[#135bec]">square_foot</span>
        </div>
        <div className="absolute bottom-40 right-20 opacity-10 pointer-events-none select-none">
          <span className="text-[140px] material-symbols-outlined text-[#135bec]">layers</span>
        </div>
      </main>

      <DashboardFooter />
    </div>
  )
}
