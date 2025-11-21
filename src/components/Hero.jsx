import { ChefHat, Utensils, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient gradients with gentle motion */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-100/60 blur-3xl"
          animate={{ y: [0, -10, 0], x: [0, -6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl"
          animate={{ y: [0, 12, 0], x: [0, 8, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-28 lg:flex lg:items-center lg:gap-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              Simple tools for modern restaurants
            </div>
          </Reveal>

          <Reveal as={motion.h1} direction="left" className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Modern operations for modern restaurants
          </Reveal>

          <Reveal direction="right">
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Tarna streamlines your restaurant workflow so you can focus on what really matters — great food and welcoming service.
            </p>
          </Reveal>

          <Reveal direction="up">
            <div className="mt-8 flex items-center gap-4">
              <button onClick={onPrimaryClick} className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                Get started
              </button>
              <button onClick={onSecondaryClick} className="inline-flex items-center justify-center rounded-md px-5 py-3 text-emerald-700 font-medium hover:text-emerald-900">
                Learn more
              </button>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[{icon: Utensils, label: "Simple set-up"}, {icon: ChefHat, label: "Kitchen-first"}, {icon: Sparkles, label: "Real-time insights"}].map(({icon:Icon, label}, i) => (
              <Reveal key={label} direction={i === 0 ? 'left' : i === 1 ? 'up' : 'right'}>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-slate-700">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="left">
            <figure className="mt-10 border-l-2 border-emerald-200 pl-6">
              <blockquote className="text-slate-700 italic">“Using Tarna cut our order-to-table time by 20%.”</blockquote>
              <figcaption className="text-slate-500 mt-1">— Mariela, Owner at Café Verde</figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="hidden lg:block flex-1">
          <motion.div
            className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Utensils className="h-20 w-20 text-emerald-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
