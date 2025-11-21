import { PieChart, ClipboardList, CalendarClock, Boxes, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Order Management",
    description: "Keep orders flowing from table to kitchen with clear, simple tickets.",
  },
  {
    icon: LayoutDashboard,
    title: "Kitchen Display Sync",
    description: "Live updates to your KDS so chefs always see what matters next.",
  },
  {
    icon: CalendarClock,
    title: "Staff Scheduling",
    description: "Plan shifts in minutes; share schedules with one tap.",
  },
  {
    icon: Boxes,
    title: "Inventory Snapshot",
    description: "Know your stock at a glance and avoid last‑minute surprises.",
  },
  {
    icon: PieChart,
    title: "Reporting Dashboard",
    description: "Real‑time insights to improve table turns and reduce waste.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">How it works</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Restaurant logs in → sets up menu → starts tracking → insights. Built for simplicity from day one.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
