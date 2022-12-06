import Session from "../session";

class Domain {
  readonly session: Session;

  constructor(domainInit: { session: Session }) {
    this.session = domainInit.session;
  }

  protected createResource(...resources: string[]): string {
    return resources.join("/");
  }

  protected createQueryString(obj: Record<string, string | number | boolean | undefined>): string {
    return Object.keys(obj)
      .filter((key: string) => typeof obj[key] !== "undefined")
      .map((key: string) => `${key}=${encodeURIComponent(obj[key] as string)}`)
      .join("&");
  }

  protected createQueryParams(
    resource: string,
    params: Record<string, string | number | boolean>
  ): string {
    return `${resource}?${this.createQueryString(params)}`;
  }
}

export default Domain;
