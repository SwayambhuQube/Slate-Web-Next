import { Sidebar } from "@/components/common/sidebar/Sidebar";
export default function AppRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-fit h-full">{children}</div>
    </div>
  );
}
