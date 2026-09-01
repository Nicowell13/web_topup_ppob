import React from "react";
import { Sliders, ShieldCheck, Activity, Database } from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    { label: "Total Transactions", value: "1,248", change: "+12%" },
    { label: "Revenue (IDR)", value: "Rp 42.500.000", change: "+8%" },
    { label: "Active Users", value: "320", change: "+24%" },
    { label: "Supplier Status", value: "Digiflazz (Active)", status: "healthy" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">System & Transaction Overview</h1>
        <p className="text-sm text-gray-400">Monitoring metrik transaksi, active supplier routing, dan audit logs.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="rounded-xl border border-gray-800 bg-gray-900/60 p-5 shadow">
            <p className="text-xs font-medium text-gray-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
            {stat.change && <p className="mt-1 text-xs text-emerald-400">{stat.change} vs last week</p>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-6 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400">
            <Sliders className="h-5 w-5" />
            <h2 className="text-lg font-semibold text-white">Supplier Routing Configuration</h2>
          </div>
          <p className="text-sm text-gray-400">Pilih supplier aktif untuk eksekusi pemesanan otomatis.</p>
          <div className="space-y-2">
            <label className="flex items-center justify-between p-3 rounded-lg border border-indigo-500/40 bg-indigo-950/20 cursor-pointer">
              <span className="text-sm font-medium text-white">Digiflazz (Default)</span>
              <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-full font-semibold">Active</span>
            </label>
            <label className="flex items-center justify-between p-3 rounded-lg border border-gray-800 bg-gray-900/40 opacity-60">
              <span className="text-sm font-medium text-gray-300">Apigames (Backup)</span>
              <span className="text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full">Standby</span>
            </label>
          </div>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-6 space-y-4">
          <div className="flex items-center gap-2 text-rose-400">
            <Activity className="h-5 w-5" />
            <h2 className="text-lg font-semibold text-white">Recent Audit Trails</h2>
          </div>
          <p className="text-sm text-gray-400">Log payload webhook & supplier API terakhir.</p>
          <div className="space-y-2 text-xs font-mono">
            <div className="p-2.5 rounded bg-gray-950 border border-gray-800 flex justify-between">
              <span className="text-emerald-400">[DOKU] Webhook INVOICE_PAID</span>
              <span className="text-gray-500">Just now</span>
            </div>
            <div className="p-2.5 rounded bg-gray-950 border border-gray-800 flex justify-between">
              <span className="text-indigo-400">[DIGIFLAZZ] Order TRX-9281 SUCCESS</span>
              <span className="text-gray-500">2m ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
