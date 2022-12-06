export interface APIGetUserResponse {
  username: string;
  firstName: string;
}

export interface APIPostUserLoginBody {
  username: string;
  password: string;
}
