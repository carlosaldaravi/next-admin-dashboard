import { UserCircleIcon } from "@heroicons/react/24/outline";
import { formatDateToLocal } from "@/lib/utils";
import { UpdateUser } from "@/components/users/buttons";
import { User } from "@/models/User";
import UserStatus from "@/components/users/status";

export default async function UsersTable({ users }: { users: User[] }) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {users?.map((user) => (
              <div
                key={user.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">{user.id}</p>
                    <div className="mb-2 flex items-center">
                      <UserCircleIcon className="h-6 w-6 text-gray-500" />
                      <p>
                        {user.name} {user.surname}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <UserStatus active={user.active} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">{user.phone}</p>
                    <p>{formatDateToLocal(user.createdAt! as string)}</p>
                    <p>
                      {formatDateToLocal(user.lastSignInAt as string) || "-"}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateUser id={user.id as number} />
                    {/* <DeleteUser id={user.id as number} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  ID
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Usuario
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Teléfono
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Creado el
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Último acceso
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Estado
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users?.map((user) => (
                <tr
                  key={user.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">{user.id}</td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <UserCircleIcon className="h-6 w-6 text-gray-500" />
                      <p>
                        {user.name} {user.surname}
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{user.email}</td>
                  <td className="whitespace-nowrap px-3 py-3">{user.phone}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(user.createdAt as string)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(user.lastSignInAt as string) || "-"}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <UserStatus active={user.active} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateUser id={user.id as number} />
                      {/* <DeleteUser id={user.id as number} /> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
