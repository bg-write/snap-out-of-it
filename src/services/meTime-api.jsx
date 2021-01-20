import tokenService from "../services/tokenService";
const BASE_URL = "/api/meTime/";

export function getAll() {
  return fetch(BASE_URL, { mode: "cors" }).then((res) => res.json());
}

export function create(meTime) {
  return fetch(
    BASE_URL,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(meTime),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function update(meTime) {
  return fetch(
    `${BASE_URL}/${meTime._id}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(meTime),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function deleteOne(id) {
  return fetch(
    `${BASE_URL}${id}`,
    {
      method: "DELETE",
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}
