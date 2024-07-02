export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  LAB: "/lab",
  PRODUCTS: "/products",
  MESSAGES: "/messages",
  SETTINGS: "/settings",
  PROFILE: "/profile",
  HELP: "/help",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
