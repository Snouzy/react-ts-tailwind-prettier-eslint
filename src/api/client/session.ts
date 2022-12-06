import request from "./request";
import { MethodsEnum } from "./constants";

import type { Request, ClientResponse, SessionConfig, APIBody } from "./types";

class Session {
  server: string;
  token: string | null = null;

  constructor(config: SessionConfig) {
    const { server } = config;
    this.server = server;
  }

  public setToken(token: string | null): void {
    this.token = token;
  }

  public async request<T>(req: Request): ClientResponse<T> {
    const server = req.server || this.server;
    const endpoint = this.createEndpoint(server, req.resource);

    const init: RequestInit = {
      method: req.method,
      body: this.createBody(req.body),
      headers: this.createHeaders(req),
    };

    return await request<T>(endpoint, init);
  }

  protected createEndpoint(base: string, ...resources: string[]): string {
    return base.slice(-1) === "/"
      ? `${base}${resources.join("/")}`
      : `${base}/${resources.join("/")}`;
  }

  protected createResource(...resources: string[]): string {
    return resources.join("/");
  }

  protected createHeaders(req: Request): Headers {
    const headers = new Headers();

    if (req.token) {
      headers.append("Authorization", `Bearer ${req.token}`);
    }

    if (!req.isMultipart && req.body) {
      headers.append("Content-Type", "application/json");
    }

    switch (req.method) {
      case MethodsEnum.Post: {
        headers.append("Accept", "application/json");

        return headers;
      }
      case MethodsEnum.Put: {
        headers.append("Accept", "application/json");

        return headers;
      }
      case MethodsEnum.Patch: {
        headers.append("Accept", "application/json");

        return headers;
      }
      case MethodsEnum.Head: {
        headers.append("Content-Type", "application/json");
        return headers;
      }
      case MethodsEnum.Get: {
        return headers;
      }
      default:
        return headers;
    }
  }

  protected createBody(body?: APIBody): string {
    return JSON.stringify(body);
  }
}

export default Session;
