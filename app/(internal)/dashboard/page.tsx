// import { DashboardCards } from "@/components/dashboard-cards"
// import { DashboardFooter } from "@/components/dashboard-footer"
// import { DashboardHeader } from "@/components/dashboard-header"
// import { DashboardHero } from "@/components/dashboard-hero"


// export const metadata = {
//   title: "Dashboard - ArchAI Planning",
//   description: "Your architectural planning workspace and project management hub.",
// }

// export default function DashboardPage() {
//   return (
//     <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#f6f6f8] dark:bg-[#101622]">
//       <style>{`
//         .arch-grid {
//           background-size: 40px 40px;
//           background-image: 
//             linear-gradient(to right, rgba(19, 91, 236, 0.05) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(19, 91, 236, 0.05) 1px, transparent 1px);
//         }
//       `}</style>

//       <DashboardHeader />

//       <main className="flex-1 flex flex-col relative arch-grid">
//   <div className="relative w-full max-w-7xl mx-auto px-6">
//     <DashboardHero />
//     <DashboardCards />
//   </div>


//         {/* Ambient Design Elements */}
//         <div className="absolute top-20 left-20 opacity-10 pointer-events-none select-none">
//           <span className="text-[120px] material-symbols-outlined text-[#135bec]">square_foot</span>
//         </div>
//         <div className="absolute bottom-40 right-20 opacity-10 pointer-events-none select-none">
//           <span className="text-[140px] material-symbols-outlined text-[#135bec]">layers</span>
//         </div>
//       </main>

//       <DashboardFooter />
//     </div>
//   )
// }


'use client'

export default function DashboardPage() {

  const projects = [
    {
      id: 1,
      title: 'Rear Extension – London',
      service: 'Home Owner Services',
      stage: 'Planning Pack Preparation',
      progress: 70,
      status: 'In Progress',
      timeline: ['Discovery', 'Docs', 'Draft', 'Submission'],
    },
    {
      id: 2,
      title: 'Personal Business Plan',
      service: 'Personal Concierge',
      stage: 'Draft Review',
      progress: 45,
      status: 'Review Required',
      timeline: ['Research', 'Draft', 'Review', 'Final'],
    },
  ]

  const nextActions = [
    'Upload site photos for Rear Extension',
    'Approve draft business plan',
  ]

  const updates = [
    'Planning document uploaded for review',
    'Additional information requested',
    'Submission scheduled',
  ]

  const aiInsights = [
    'Your extension project is progressing faster than average.',
    'Reviewing documents today could avoid submission delays.',
  ]

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-6 space-y-8">
      
      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ===== LEFT COLUMN ===== */}
        <div className="lg:col-span-2 space-y-6">

          {/* ===== ACTIVE PROJECTS ===== */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">Active Projects</h2>
              <select className="border rounded-md text-sm px-2 py-1">
                <option>All Services</option>
                <option>Home Owner</option>
                <option>Personal</option>
                <option>Business</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {projects.map(project => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl p-4 shadow-sm border"
                >
                  <h3 className="font-medium text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {project.service}
                  </p>

                  <div className="mt-3 text-sm">
                    <span className="text-gray-600">Stage:</span>{' '}
                    {project.stage}
                  </div>

                  {/* Progress */}
                  <div className="mt-3">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-orange-500 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {project.progress}% complete
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {project.timeline.map((step, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded bg-gray-100"
                      >
                        {step}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs px-2 py-1 rounded bg-gray-100">
                      {project.status}
                    </span>
                    <button className="text-sm text-orange-500 hover:underline">
                      View Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== DOCUMENTS ===== */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Documents</h2>

            <div className="bg-white rounded-xl p-4 border shadow-sm">
              <p className="text-sm text-gray-500">
                All drafts, final documents, and submissions are stored securely
                and version-controlled.
              </p>

              <button className="mt-3 text-sm text-orange-500 hover:underline">
                View Documents
              </button>
            </div>
          </div>
        </div>

        {/* ===== RIGHT COLUMN ===== */}
        <div className="space-y-6">

          {/* ===== AI ASSISTANT ===== */}
          <div className="bg-white rounded-xl p-4 border shadow-sm">
            <h3 className="font-medium mb-2">AI Assistant</h3>

            <input
              placeholder="Ask about your projects..."
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <div className="mt-3 space-y-2">
              {aiInsights.map((insight, i) => (
                <p key={i} className="text-xs text-gray-600">
                  💡 {insight}
                </p>
              ))}
            </div>
          </div>

          {/* ===== NEXT ACTIONS ===== */}
          <div className="bg-white rounded-xl p-4 border shadow-sm">
            <h3 className="font-medium mb-2">Your Next Actions</h3>

            {nextActions.length === 0 ? (
              <p className="text-sm text-gray-500">
                You’re all set. We’re working on your projects.
              </p>
            ) : (
              <ul className="space-y-2 text-sm">
                {nextActions.map((action, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center"
                  >
                    <span>{action}</span>
                    <button className="text-orange-500 hover:underline">
                      View
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ===== UPDATES ===== */}
          <div className="bg-white rounded-xl p-4 border shadow-sm">
            <h3 className="font-medium mb-2">Recent Updates</h3>

            <ul className="space-y-2 text-sm text-gray-600">
              {updates.map((update, idx) => (
                <li key={idx}>• {update}</li>
              ))}
            </ul>
          </div>

          {/* ===== UPGRADE CTA ===== */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <h3 className="font-medium text-orange-700">
              Want faster turnaround?
            </h3>
            <p className="text-sm text-orange-600 mt-1">
              Higher tiers unlock priority handling and deeper concierge support.
            </p>
            <button className="mt-3 text-sm font-medium text-orange-700 hover:underline">
              View Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
