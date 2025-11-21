import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", restaurant: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Failed to submit');
      setStatus("success");
      setForm({ name: "", restaurant: "", email: "", message: "" });
    } catch (err) {
      setStatus(err.message || "error");
    }
  };

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-3 text-slate-600">Schedule a demo or ask us anything.</p>

        <form onSubmit={submit} className="mt-8 grid grid-cols-1 gap-4">
          <input className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Name" value={form.name} onChange={(e)=>setForm(f=>({...f, name:e.target.value}))} required />
          <input className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Restaurant Name" value={form.restaurant} onChange={(e)=>setForm(f=>({...f, restaurant:e.target.value}))} />
          <input type="email" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Email" value={form.email} onChange={(e)=>setForm(f=>({...f, email:e.target.value}))} required />
          <textarea rows="5" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Message" value={form.message} onChange={(e)=>setForm(f=>({...f, message:e.target.value}))} />
          <button disabled={status==="loading"} className="mt-2 inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 disabled:opacity-60">
            {status === "loading" ? "Sending…" : "Send message"}
          </button>
          {status === "success" && <p className="text-emerald-700">Thanks! We’ll be in touch shortly.</p>}
          {status && status !== "success" && status !== "loading" && <p className="text-red-600">{String(status)}</p>}
        </form>
      </div>
    </section>
  );
}
