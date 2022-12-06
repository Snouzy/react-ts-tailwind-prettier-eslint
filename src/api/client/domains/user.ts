import Domain from "./domain";
import { MethodsEnum, RESOURCES, DOMAINS } from "../constants";
import { APIGetUserResponse } from "../../../types/user.type";

class User extends Domain {
  public setToken(token: string) {
    this.session.setToken(token);
  }

  public async login(username: string, password: string) {
    const method = MethodsEnum.Post;
    const resource = this.createResource(DOMAINS.USERS, RESOURCES.LOGIN);

    const body = {
      username,
      password,
    };

    return this.session.request<APIGetUserResponse>({ method, resource, body });
  }
  public async getUserToken(userId: string) {
    const { token } = this.session;

    const method = MethodsEnum.Get;
    const resource = this.createResource(DOMAINS.USERS, userId, RESOURCES.TOKEN);

    return this.session.request<APIGetUserResponse>({ method, resource, token });
  }
}

export default User;
