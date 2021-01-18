import tokenService from "../services/tokenService";
const BASE_URL = "/api/quotesSassy/";

export function getAll() {
    return fetch(BASE_URL, { mode: "cors" }).then((res) => res.json());
  }
