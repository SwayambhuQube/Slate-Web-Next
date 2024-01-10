import { Sidebar } from "@/components/common/sidebar/Sidebar";
export default function AppRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="min-w-[calc(100vw-96px)] h-full">{children}</div>
    </>
  );
}
