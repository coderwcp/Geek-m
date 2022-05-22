import { Token } from "@/types/data";

const initialState: Token = {
  token: "",
  refresh_token: "",
};

export default function login(state = initialState, action: unknown): Token {
  return state;
}
