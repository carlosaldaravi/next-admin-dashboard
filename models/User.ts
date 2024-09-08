import { Roles } from "./enums/Roles";

export class User {
  id: number | null;
  name: string | null;
  surname: string | null;
  email: string | null;
  phone: string | null;
  role: Roles | null;
  //   company: Company | null;
  password?: string;
  active: boolean;
  activatedAt: string | Date | null;
  createdAt: string | Date | null;
  lastSignInAt: string | Date | null;

  constructor() {
    this.id = null;
    this.name = null;
    this.surname = null;
    this.email = null;
    this.phone = null;
    this.role = null;
    // this.company = null;
    // this.subscription = null;
    this.active = true;
    this.activatedAt = null;
    this.createdAt = null;
    this.lastSignInAt = null;
  }
}
