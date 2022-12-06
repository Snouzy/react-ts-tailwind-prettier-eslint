export enum MethodsEnum {
  Get = "GET",
  Put = "PUT",
  Patch = "PATCH",
  Delete = "DELETE",
  Post = "POST",
  Head = "HEAD",
}

export enum RequestStatusEnum {
  Idle = "idle",
  Pending = "pending",
  Resolved = "resolved",
  Rejected = "rejected",
}

export const ERRORS = {
  NO_CONTENT: {
    name: "NO_CONTENT",
    message: "NO_CONTENT",
  },
  UNAUTHORIZED: {
    name: "CLIENT_ERROR",
    message: "UNAUTHORIZED",
  },
  NOT_FOUND: {
    name: "CLIENT_ERROR",
    message: "RESOURCE_NOT_FOUND",
  },
  FORBIDDEN: {
    name: "CLIENT_ERROR",
    message: "FORBIDDEN",
  },
  UNKNOWN: {
    name: "CLIENT_ERROR",
    message: "UNKNOWN_ERROR",
  },
  NOT_HANDLED: {
    name: "CLIENT_ERROR",
    message: "STATUS_NOT_HANDLED",
  },
};

export const DOMAINS = {
  USERS: "users",
} as const;

export const RESOURCES = {
  LOGIN: "login",
  TOKEN: "token",
} as const;
