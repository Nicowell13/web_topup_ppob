import React from "react";
import Link from "next/link";
import { LayoutDashboard, ShoppingBag, Gift, Sliders, ArrowLeft } from "lucide-react";

export const AdminSidebar = () => {
  return (
    <aside className="w-64 border-r border-gray-800 bg-gray-950 p-4 min-h-screen flex flex-col justify-between">
      <div className="space-y-6">
        <div className="px-2 py-3 border-b border-gray-800">
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-500">Admin Control</span>
          <h2 className="text-lg font-bold text-white">TopUp Master</h2>
        </div>

        <nav className="space-y-1">
          <Link
            href="/admin"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-white bg-gray-900 border border-gray-800"
          >
            <LayoutDashboard className="h-4 w-4 text-indigo-400" />
            Overview
          </Link>
          <Link
            href="/admin/products"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-900"
          >
            <ShoppingBag className="h-4 w-4" />
            Catalog & SKU
          </Link>
          <Link
            href="/admin/vouchers"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-900"
          >
            <Gift className="h-4 w-4" />
            Vouchers
          </Link>
          <Link
            href="/admin/configs"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-900"
          >
            <Sliders className="h-4 w-4" />
            Supplier & Flags
          </Link>
        </nav>
      </div>

      <div className="pt-4 border-t border-gray-800">
        <Link href="/" className="flex items-center gap-2 text-xs text-gray-400 hover:text-white">
          <ArrowLeft className="h-3 w-3" /> Back to Store
        </Link>
      </div>
    </aside>
  );
};
