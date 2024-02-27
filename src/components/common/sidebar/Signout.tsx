import { Button } from "@/components/ui/button";
import { logout } from "@/lib/lib";
import { LogOut } from "lucide-react";

export const SignOut = () => {
  return (
    <form action={logout}>
      <Button variant={"ghost"} className="font-semibold" type="submit">
        Sign Out
        <LogOut className="h-4 w-4 mx-2" />
      </Button>
    </form>
  );
};
