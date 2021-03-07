/* eslint-disable jest/no-mocks-import */
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

import repositoriesResponse from "../../__mocks__/repositoriesResponse";

const server = setupServer(
  rest.get(
    "https://api.github.com/users/RonaldoCaetano/repos",
    (req, res, ctx) => {
      return res(ctx.json(repositoriesResponse));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays repositories", async () => {
  render(<App />);
  const sendButton = screen.getByTestId("send-name");

  fireEvent.click(sendButton);

  server.use(
    rest.get(
      "https://api.github.com/users/RonaldoCaetano/repos",
      (req, res, ctx) => {
        return res(ctx.json(repositoriesResponse));
      }
    )
  );

  await waitFor(() => {
    const repositoriesContainer = screen.getByTestId("repository");

    return expect(repositoriesContainer).toBeTruthy();
  });
});
