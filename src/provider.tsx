import type { NavigateOptions } from "react-router-dom";

import { useHref, useNavigate } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/system";
import React from "react";

import { AuthProvider } from "@/auth/AuthProvider.tsx";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

export function Provider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <AuthProvider>{children}</AuthProvider>
    </NextUIProvider>
  );
}
