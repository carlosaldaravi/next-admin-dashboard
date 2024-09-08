import { getUser } from "@/lib/dal";
import React from "react";

async function Profile() {
  const user = await getUser();

  return (
    <div>
      Hola {user?.name} {user?.surname}
    </div>
  );
}

export default Profile;
