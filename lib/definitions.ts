import { User } from "@/models/User";
import { z } from "zod";

export type ErrorsType = {
  [key: string]: string;
};

export type SessionPayload = {
  userId?: string;
  token?: string;
  expiresAt: Date;
};

export const SignupFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(6, { message: "Be at least 6 characters long" })
    // .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    // .regex(/[0-9]/, { message: "Contain at least one number." })
    // .regex(/[^a-zA-Z0-9]/, {
    //   message: "Contain at least one special character.",
    // })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type Revenue = {
  month: string;
  revenue: number;
};

export type UserPagination = {
  users: User[];
  totalUsers: number;
  totalPages: number;
};

export interface UserResponse {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  role: string;
  // company: CompanyResponse | null;
  active: boolean;
  activated_at: string | null;
  subscription_cancel_at_period_end: boolean;
  subscription_expired_at: string | null;
  subscription_plan_id: number | null;
  // subscription_plan?: SubscriptionPlanResponse | null;
  sso_token_expired_at: string | null;
  created_at: string;
  last_sign_in_at: string | null;
  trial_ends_at: string;
  // invoices: InvoiceResponse[] | null;
}
