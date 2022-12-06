import { ClientConfig, Client } from "./types";
import Session from "./session";
import { User } from "./domains";

const createClient = (config: ClientConfig): Client => {
  const { server } = config;

  if (!server) {
    throw Error("No server provided ! Please check your .env file");
  }

  const session = new Session({ server });

  return {
    Session: session,
    User: new User({ session }),
  };
};

export default createClient;
