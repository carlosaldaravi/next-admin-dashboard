"use server";
import { SignupFormSchema, FormState } from "@/lib/definitions";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

const apiURL = process.env.API_URL;

export async function login(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${apiURL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: validatedFields.data.email,
      password: validatedFields.data.password,
    }),
  });

  if (!response.ok) {
    return {
      errors: {
        password: ["Usuario o contraseña incorrectos."],
      },
    };
  }
  const resData = await response.json();

  const token = resData.token;

  await createSession(token);

  redirect("/dashboard");
}
export async function logout() {
  deleteSession();
  redirect("/auth/login");
}
