import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/routes/index.tsx";
import { SidebarProvider } from "./utils/contexts/app/AppContext.tsx";
import { Provider } from "react-redux";
import { store } from "./utils/redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </Provider>
  </React.StrictMode>
);
