"use server";

import { redirect, permanentRedirect } from "next/navigation";

export async function RedirectUser() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  redirect("/");
}
