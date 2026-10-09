import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { ROUTES } from "../config/constants";
import { Loader2 } from "lucide-react";

// Lazy loading pages with named exports
const Login = lazy(() => import("../pages/Auth/Login").then(m => ({ default: m.Login })));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard").then(m => ({ default: m.Dashboard })));
const Fanpages = lazy(() => import("../pages/Fanpages/Fanpages").then(m => ({ default: m.Fanpages })));
const FanpageDetail = lazy(() => import("../pages/Fanpages/FanpageDetail").then(m => ({ default: m.FanpageDetail })));
const Accounts = lazy(() => import("../pages/Accounts/Accounts").then(m => ({ default: m.Accounts })));
const AccountDetail = lazy(() => import("../pages/Accounts/AccountDetail").then(m => ({ default: m.AccountDetail })));
const Inbox = lazy(() => import("../pages/Interactions/Inbox").then(m => ({ default: m.Inbox })));
const Posts = lazy(() => import("../pages/Posts/Posts").then(m => ({ default: m.Posts })));
const CreatePost = lazy(() => import("../pages/Posts/CreatePost").then(m => ({ default: m.CreatePost })));
const Settings = lazy(() => import("../pages/System/Settings").then(m => ({ default: m.Settings })));
const Comments = lazy(() => import("../pages/Interactions/Comments").then(m => ({ default: m.Comments })));
const CalendarView = lazy(() => import("../pages/Posts/CalendarView").then(m => ({ default: m.CalendarView })));
const Stats = lazy(() => import("../pages/Dashboard/Stats").then(m => ({ default: m.Stats })));
const Staff = lazy(() => import("../pages/System/Staff").then(m => ({ default: m.Staff })));
const Customers = lazy(() => import("../pages/Customers/Customers").then(m => ({ default: m.Customers })));
const CustomerDetail = lazy(() => import("../pages/Customers/CustomerDetail").then(m => ({ default: m.CustomerDetail })));
const Automations = lazy(() => import("../pages/System/Automations").then(m => ({ default: m.Automations })));
const CreateAutomation = lazy(() => import("../pages/System/CreateAutomation").then(m => ({ default: m.CreateAutomation })));

const SuspenseFallback = () => (
  <div className="flex items-center justify-center h-full w-full min-h-[50vh]">
    <Loader2 className="w-8 h-8 text-primary animate-spin" />
  </div>
);

export function AppRoutes() {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        
        <Route element={<AppLayout />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          
          {/* Account Management */}
          <Route path={ROUTES.ACCOUNTS} element={<Accounts />} />
          <Route path={`${ROUTES.ACCOUNTS}/:id`} element={<AccountDetail />} />
          
          {/* Fanpage Management */}
          <Route path={ROUTES.FANPAGES} element={<Fanpages />} />
          <Route path={`${ROUTES.FANPAGES}/:id`} element={<FanpageDetail />} />
          
          {/* Core Features */}
          <Route path={ROUTES.INBOX} element={<Inbox />} />
          <Route path={ROUTES.COMMENTS} element={<Comments />} />
          <Route path={ROUTES.POSTS} element={<Posts />} />
          <Route path={`${ROUTES.POSTS}/create`} element={<CreatePost />} />
          <Route path={ROUTES.CALENDAR} element={<CalendarView />} />
          
          {/* Analytics & CRM */}
          <Route path={ROUTES.STATS} element={<Stats />} />
          <Route path={ROUTES.CUSTOMERS} element={<Customers />} />
          <Route path={`${ROUTES.CUSTOMERS}/:id`} element={<CustomerDetail />} />
          
          {/* Configuration & Team */}
          <Route path={ROUTES.AUTOMATIONS} element={<Automations />} />
          <Route path={`${ROUTES.AUTOMATIONS}/create`} element={<CreateAutomation />} />
          <Route path={ROUTES.STAFF} element={<Staff />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
