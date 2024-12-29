import { Sidebar } from "@/components/common/sidebar/Sidebar";
import { SignOut } from "@/components/common/sidebar/Signout";

const isAdminApp = !!process.env.NEXT_PUBLIC_REACT_APP_IS_ADMIN_APP;

export default function AppRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`flex w-full ${isAdminApp ? " " : " user"}`}>
      <Sidebar>
        <SignOut />
      </Sidebar>
      <div className=" h-full w-full  max-h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
