import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthenticationRoutes } from "./authentication.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}