import "server-only";

import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { decrypt } from "@/lib/session";
import { User } from "@/models/User";
import { UserResponse } from "./definitions";

const apiURL = process.env.API_URL;
const token = cookies().get("session")?.value;

export const verifySession = cache(async () => {
  const session = await decrypt(token);

  if (!session?.sub) {
    redirect("/auth/login");
  }

  return { isAuth: true, userId: session.sub };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const response = await fetch(`${apiURL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});

export const getUsers = cache(async (query: string, page: number) => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const response = await fetch(
      `${apiURL}/users/paginated?query=${query}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    const users: User[] = json.data.map((user: UserResponse) => {
      return {
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        phone: user.phone,
        role: user.role,
        //: user.company: CompanyResponse,
        active: user.active,
        activatedAt: user.activated_at,
        subscriptionCancelAtPeriodEnd: user.subscription_cancel_at_period_end,
        subscriptionExpiredAt: user.subscription_expired_at,
        subscriptionPlanId: user.subscription_plan_id,
        // usersubscriptionPlan?: SubscriptionPlanResponse,
        ssoTokenExpiredAt: user.sso_token_expired_at,
        createdAt: user.created_at,
        lastSignInAt: user.last_sign_in_at,
        trialEndsAt: user.trial_ends_at,
      };
    });
    const totalUsers: number = json.total;
    const totalPages: number = json.last_page;
    return { users, totalUsers, totalPages };
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});
