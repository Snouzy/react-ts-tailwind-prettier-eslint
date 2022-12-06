import Session from "./session";
import { MethodsEnum } from "./constants";
import { APIPostUserLoginBody } from "../../types/user.type";

import type { User } from "./domains";
export interface ClientConfig {
  server: string | undefined;
}

export interface Client {
  Session: Session;
  User: User;
}

export interface SessionConfig {
  server: string;
}

export type APIBody = APIPostUserLoginBody;

export interface Request {
  method: MethodsEnum;
  server?: string;
  resource: string;
  body?: APIBody;
  token?: string | null;
  isMultipart?: boolean;
  isNested?: boolean;
}

export interface APIErrorDetail {
  field: string;
  message: string;
}

export interface APIError {
  name: string;
  message: string;
  details?: APIErrorDetail[];
}

interface ClientResponseSuccess<T> {
  error: null;
  data: T;
}

interface ClientResponseFailure {
  error: APIError;
  data: null;
}

export type ClientResponse<T> = Promise<ClientResponseSuccess<T> | ClientResponseFailure>;
