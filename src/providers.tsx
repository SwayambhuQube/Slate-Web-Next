"use client";

import { store } from "@/store/store";
import { Toaster } from "@/components/ui/sonner";
import { Provider } from "react-redux";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <Toaster />
    </Provider>
  );
}
