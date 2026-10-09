export const APP_CONFIG = {
  APP_NAME: "Socialyn",
  API_URL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  PAGINATION_LIMIT: 20,
  SUPPORT_EMAIL: "support@fbmanager.com",
};

export const ROUTES = {
  LOGIN: "/login",
  DASHBOARD: "/",
  ACCOUNTS: "/accounts",
  FANPAGES: "/pages",
  INBOX: "/inbox",
  COMMENTS: "/comments",
  POSTS: "/posts",
  CALENDAR: "/calendar",
  STATS: "/stats",
  CUSTOMERS: "/customers",
  AUTOMATIONS: "/automations",
  STAFF: "/staff",
  SETTINGS: "/settings",
};
