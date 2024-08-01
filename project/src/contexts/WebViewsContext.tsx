import React from "react";
import { useMediaQuery } from "@mui/material";

interface ResponsiveAplication {
  children: React.ReactNode;
}

type ContextProps = {
  isPhone: boolean;
  isMobile: boolean;
  isNotebook: boolean;
  isDesktop: boolean;
  isTablet: boolean;
  currentBreakPoint(): "xs" | "sm" | "md";
};

const Context = React.createContext({} as ContextProps);

export const WebViewProvider: React.FC<ResponsiveAplication> = ({
  children,
}) => {
  const isPhone = useMediaQuery("(min-width: 100px) and (max-width: 425px)");
  const isTablet = useMediaQuery("(min-width: 425px) and (max-width: 1133px)");
  const isNotebook = useMediaQuery(
    "(min-width: 1133px) and (max-width: 1630px)"
  );
  const isDesktop = useMediaQuery("(min-width: 1631px)");
  const isMobile = isTablet || isPhone;

  function currentBreakPoint() {
    if (isDesktop) return "md";
    if (isNotebook) return "md";
    if (isTablet) return "sm";
    if (isPhone) return "xs";
    return "md";
  }

  return (
    <Context.Provider
      value={{
        isMobile,
        isNotebook,
        isDesktop,
        isTablet,
        isPhone,
        currentBreakPoint,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useWebViewContext(): ContextProps {
  return React.useContext(Context);
}