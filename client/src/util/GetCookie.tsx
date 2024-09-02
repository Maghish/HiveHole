import Cookie from "js-cookie";

function GetCookie(cookieName: string) {
  return Cookie.get(cookieName);
}

export default GetCookie;
