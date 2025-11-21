import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <Reveal direction="up">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">About Tarna</h2>
        </Reveal>
        <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
          <Reveal direction="left">
            <p className="text-slate-600 leading-7">
              Tarna was founded to bring simplicity and clarity to restaurant operations. We believe running a kitchen shouldn’t mean wrestling with complex software. Our tools are designed to be fast, friendly, and focused on what restaurants need day‑to‑day.
            </p>
          </Reveal>
          <Reveal direction="right">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-600">Values</p>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>• Simplicity</li>
                <li>• Sustainability</li>
                <li>• Partnership with restaurants</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
