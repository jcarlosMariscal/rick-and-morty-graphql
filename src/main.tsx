import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CharactersPage } from "./pages/CharactersPage";
import { CharacterPage } from "./pages/CharacterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <CharactersPage></CharactersPage>,
      },
      {
        path: "character/:id",
        element: <CharacterPage></CharacterPage>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
