"use client";

import { store } from "@/store/store";
import { Toaster } from "@/components/ui/sonner";
import { Provider } from "react-redux";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useSlateSelector } from "./store/hooks";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {/* <NextThemesProvider
        attribute="class"
        defaultTheme="admin"
        enableSystem
        disableTransitionOnChange
      > */}
      {children}
      {/* </NextThemesProvider> */}
      <Toaster />
    </Provider>
  );
}
