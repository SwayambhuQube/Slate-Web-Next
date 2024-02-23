import { Sidebar } from "@/components/common/sidebar/Sidebar";
import { SignOut } from "@/components/common/sidebar/Signout";
export default function AppRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar>
        <SignOut />
      </Sidebar>
      <div className="w-fit h-full">{children}</div>
    </div>
  );
}
