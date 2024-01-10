import { CORE_BASE_URL } from "@/config";
import { createQueryString } from "./queryString";

export const validateToken = async (token: string, cs = "") => {
  const userData = await fetch(
    `${CORE_BASE_URL}companies/userinfo?${cs ? createQueryString({ cs }) : ""}`,
    {
      method: "GET",
      headers: {
        Authorization: token,
      },
    }
  );
  return userData.json();
};
