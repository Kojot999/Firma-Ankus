import React from "react";
import { renderToString } from "react-dom/server";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

export async function prerender(data) {
  const router = createMemoryRouter(routes, {
    initialEntries: [data.url || "/"],
  });

  const html = renderToString(<RouterProvider router={router} />);

  return {
    html,
  };
}
