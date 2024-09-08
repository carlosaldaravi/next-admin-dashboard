"use client";

import { useFormState, useFormStatus } from "react-dom";
import { login } from "@/actions/auth";
import classes from "./login-form.module.css";
import Image from "next/image";

export default function LoginForm() {
  const [state, action] = useFormState(login, undefined);

  return (
    <form action={action} className={classes.formContainer}>
      <div>
        <Image
          src="/images/auth-icon.jpg"
          width={32}
          height={32}
          alt="A lock icon"
          priority
        />
      </div>
      <div>
        <label htmlFor="email">Correo electrónico</label>
        <input id="email" name="email" placeholder="Email" />
      </div>
      {state?.errors?.email && (
        <p className={classes.error}>{state.errors.email}</p>
      )}

      <div>
        <label htmlFor="password">Contraseña</label>
        <input id="password" name="password" type="password" />
      </div>
      {state?.errors?.password && (
        <div>
          <ul className={classes.errorsList}>
            {state.errors.password.map((error) => (
              <li key={error} className={classes.error}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      )}
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      Entrar
    </button>
  );
}
