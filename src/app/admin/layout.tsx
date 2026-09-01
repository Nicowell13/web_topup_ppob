import React from "react";
import { AdminSidebar } from "@/components/ui/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      <AdminSidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
