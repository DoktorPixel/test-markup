import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layouts";
import {
  HomePage,
  DashboardPage,
  LabPage,
  ProductsPage,
  MessagesPage,
  SettingsPage,
  ProfilePage,
  HelpPage,
} from "./pages";

import { ROUTES } from "./routes";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
          <Route path={ROUTES.LAB} element={<LabPage />} />
          <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
          <Route path={ROUTES.MESSAGES} element={<MessagesPage />} />
          <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
          <Route path={ROUTES.HELP} element={<HelpPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
