"use client";

import { store } from "@/store/store";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <Toaster />
    </Provider>
  );
}
