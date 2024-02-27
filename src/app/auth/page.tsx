"use client";

import { useDebounceCallback } from "@/customHooks/useDebounceCallback";
import { assign } from "@/store/features/userSlice";
import { useSlateDispatch } from "@/store/hooks";
import { createQueryObject } from "@/utils/queryString";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Auth() {
  const router = useRouter();
  const dispatch = useSlateDispatch();

  const loginCapture = () => {
    if (typeof window !== "undefined") {
      const queryParams = window.location.href.replace("#", "?").split("?")[1];
      const params = createQueryObject(queryParams);
      const storeParamsInCookie = async () => {
        try {
          const _user = await fetch("api/setSession", {
            method: "POST",
            body: JSON.stringify(params),
          });
          const userData = await _user.json();
          dispatch(assign(userData.data));
          console.log("User data", userData.data);
          toast.success("You are now logged in!", {
            description: new Date().toLocaleString(),
          });
          router.push("/");
        } catch (e) {
          toast.error("Login failed. Please try again.");
          router.push("/login");
        }
      };
      storeParamsInCookie();
    }
  };
  const debouncedUser = useDebounceCallback(loginCapture, 1000);
  useEffect(() => {
    debouncedUser();
  }, [debouncedUser]);

  return null;
}
