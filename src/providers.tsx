"use client";

import { Toaster } from "@/components/ui/sonner";
import { store } from "@/store/store";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="admin"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
      <Toaster />
    </Provider>
  );
}
