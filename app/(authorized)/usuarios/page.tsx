import React, { Suspense } from "react";
import { getUsers } from "@/lib/dal";
import { UserPagination } from "@/lib/definitions";
import Search from "@/components/search";
import Pagination from "@/components/users/pagination";
import UsersTable from "@/components/users/table";
import UserTableSkeleton from "@/components/users/table-skeleton";

async function Users({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: number;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";
  const { users, totalUsers, totalPages }: UserPagination = (await getUsers(
    query,
    currentPage
  )) as UserPagination;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-center">
        <h1 className="text-3xl font-bold">Usuarios</h1>
      </div>
      <div className="mt-4 flex w-full items-center justify-center gap-2 md:mt-8">
        <Search placeholder="Buscar usuario ..." />
      </div>
      <Suspense key={query + currentPage} fallback={<UserTableSkeleton />}>
        <UsersTable users={users} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} totalUsers={totalUsers} />
      </div>
    </div>
  );
}

export default Users;
