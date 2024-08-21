import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CharactersPage } from "./pages/CharactersPage";
import { CharacterPage } from "./pages/CharacterPage";
import { FavoritesPage } from "./pages/FavoritesPage";

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
      {
        path: "favorites",
        element: <FavoritesPage></FavoritesPage>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
