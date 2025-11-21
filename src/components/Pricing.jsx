export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "€60/mo",
      note: "Recommended for cafés and low‑volume restaurants",
      features: [
        "Order Management",
        "Basic Dashboard",
        "1 location",
        "Standard Support",
      ],
      highlight: false,
    },
    {
      name: "Growth",
      price: "€150/mo",
      note: "Best value",
      features: [
        "All Starter features",
        "Kitchen Display Sync",
        "Staff Scheduling",
        "Multi‑location (2‑5)",
        "Priority Support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "€300/mo",
      note: "Custom features available",
      features: [
        "All Growth features",
        "Advanced Reporting & Analytics",
        "API Access",
        "Dedicated Account Manager",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Pricing</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Choose the plan that fits your restaurant size and growth.</p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl border ${tier.highlight ? 'border-emerald-300 ring-2 ring-emerald-200' : 'border-slate-200'} bg-white p-6 shadow-sm`}>
              {tier.highlight && (
                <div className="mb-3 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700 border border-emerald-100">Recommended</div>
              )}
              <h3 className="text-xl font-medium text-slate-900">{tier.name}</h3>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{tier.price}</p>
              <ul className="mt-4 space-y-2 text-slate-600">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-md px-4 py-2 font-medium ${tier.highlight ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'border border-slate-300 text-slate-800 hover:bg-slate-50'}`}>Start free trial</button>
              <p className="mt-3 text-xs text-slate-500">{tier.note}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-slate-500 max-w-3xl">
          Hardware / Setup not included. Typical hardware costs for POS & terminals vary from €600–€1,500 (one‑time) and software from €60–€250/month. Also consider any payment processing fees.
        </p>
      </div>
    </section>
  );
}
