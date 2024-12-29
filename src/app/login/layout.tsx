import AdminApp from "@/components/pages/login/adminApp";
import UserApp from "@/components/pages/login/userApp";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdminApp = !!process.env.NEXT_PUBLIC_REACT_APP_IS_ADMIN_APP;
  return (
    <>
      {isAdminApp ? (
        <AdminApp>{children}</AdminApp>
      ) : (
        <UserApp>{children}</UserApp>
      )}
    </>
  );
}
