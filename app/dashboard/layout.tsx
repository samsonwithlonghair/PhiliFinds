// app/dashboard/layout.tsx
import DashboardHeader from "../components/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* This header should now show only on dashboard routes */}
      <DashboardHeader />
      <main className="min-h-[calc(100vh-4rem)] pt-16 bg-gray-50">
        {children}
      </main>
    </>
  );
}