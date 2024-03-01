import { Button } from "@/components/ui/button";
import { logout } from "@/lib/authSession";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";

export const SignOut = () => {
  return (
    <form
      action={async () => {
        "use server";
        logout();
        redirect("/login");
      }}
    >
      <Button variant={"ghost"} className="font-semibold" type="submit">
        Sign Out
        <LogOut className="h-4 w-4 mx-2" />
      </Button>
    </form>
  );
};
