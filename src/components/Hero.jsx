import { ChefHat, Utensils, Sparkles } from "lucide-react";

export default function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-28 lg:flex lg:items-center lg:gap-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">
            <Sparkles className="h-4 w-4 text-emerald-600" />
            Simple tools for modern restaurants
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Modern operations for modern restaurants
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Tarna streamlines your restaurant workflow so you can focus on what really matters — great food and welcoming service.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button onClick={onPrimaryClick} className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              Get started
            </button>
            <button onClick={onSecondaryClick} className="inline-flex items-center justify-center rounded-md px-5 py-3 text-emerald-700 font-medium hover:text-emerald-900">
              Learn more
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[{icon: Utensils, label: "Simple set-up"}, {icon: ChefHat, label: "Kitchen-first"}, {icon: Sparkles, label: "Real-time insights"}].map(({icon:Icon, label}) => (
              <div key={label} className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-slate-700">{label}</span>
              </div>
            ))}
          </div>

          <figure className="mt-10 border-l-2 border-emerald-200 pl-6">
            <blockquote className="text-slate-700 italic">“Using Tarna cut our order-to-table time by 20%.”</blockquote>
            <figcaption className="text-slate-500 mt-1">— Mariela, Owner at Café Verde</figcaption>
          </figure>
        </div>

        <div className="hidden lg:block flex-1">
          <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center">
              <Utensils className="h-20 w-20 text-emerald-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
