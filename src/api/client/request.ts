import HttpStatus from "http-status-codes";

import { MethodsEnum, ERRORS } from "./constants";

import type { APIError, ClientResponse } from "./types";

async function request<T>(endpoint: RequestInfo, init: RequestInit): ClientResponse<T> {
  try {
    const response = await fetch(endpoint, init);

    if (init.method === MethodsEnum.Head) {
      switch (response.status) {
        case HttpStatus.NOT_FOUND: {
          return { error: ERRORS.NOT_FOUND, data: null };
        }
        case HttpStatus.FORBIDDEN: {
          return { error: ERRORS.FORBIDDEN, data: null };
        }
        case HttpStatus.UNAUTHORIZED: {
          return { error: ERRORS.UNAUTHORIZED, data: null };
        }
        case HttpStatus.NO_CONTENT: {
          // Shenanigan to ensure client response type consistency.
          return { error: null, data: "NO CONTENT" as unknown as T };
        }
        default: {
          return { error: ERRORS.NOT_HANDLED, data: null };
        }
      }
    }

    switch (response.status) {
      case HttpStatus.OK:
      case HttpStatus.CREATED: {
        const data = (await response.json()) as T;
        return { error: null, data };
      }
      case HttpStatus.BAD_REQUEST:
      case HttpStatus.UNAUTHORIZED:
      case HttpStatus.CONFLICT:
      case HttpStatus.FORBIDDEN: {
        const data = (await response.json()) as { error: APIError };
        return { error: data.error, data: null };
      }
      case HttpStatus.NOT_FOUND: {
        return { error: ERRORS.NOT_FOUND, data: null };
      }
      case HttpStatus.NO_CONTENT: {
        // Shenanigan to ensure client response type consistency.
        return { error: null, data: "NO CONTENT" as unknown as T };
      }
      default: {
        return { error: ERRORS.NOT_HANDLED, data: null };
      }
    }
  } catch (e) {
    return { error: ERRORS.UNKNOWN, data: null };
  }
}

export default request;
