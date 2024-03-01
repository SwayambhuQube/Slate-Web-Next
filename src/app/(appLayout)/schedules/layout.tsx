import ProtectedRoute from "@/components/hoc/ProtectedRoute";

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute scope="schedules" scopeAction="WRITE">
      {children}
    </ProtectedRoute>
  );
}
