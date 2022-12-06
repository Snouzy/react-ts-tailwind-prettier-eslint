import { rest } from "msw";

import config from "../config";
interface LoginBody {
  username: string;
}
interface LoginResponse {
  username: string;
  firstName: string;
}

export const sleep = (t: number) => new Promise((resolve) => setTimeout(resolve, t));

export const handlers = [
  rest.post<LoginBody, LoginResponse>(`${config.server}/users/login`, async (req, res, ctx) => {
    await sleep(1000);
    const { username } = await req.json();
    return res(
      ctx.json({
        username: username + "!",
        firstName: "John",
      })
    );
  }),
];
