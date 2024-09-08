import React from "react";
import styles from "./table-skeleton.module.css";

const UserTableSkeleton = () => {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <div className="mb-2 w-full rounded-md bg-white p-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div
                  className={`${styles.animatePulse} h-4 bg-gray-300 rounded`}
                ></div>
                <div
                  className={`${styles.animatePulse} h-4 bg-gray-300 rounded`}
                ></div>
                <div
                  className={`${styles.animatePulse} h-4 bg-gray-300 rounded`}
                ></div>
                <div
                  className={`${styles.animatePulse} h-4 bg-gray-300 rounded`}
                ></div>
                <div
                  className={`${styles.animatePulse} h-4 bg-gray-300 rounded`}
                ></div>
                <div
                  className={`${styles.animatePulse} h-4 bg-gray-300 rounded`}
                ></div>
                <div
                  className={`${styles.animatePulse} h-4 bg-gray-300 rounded`}
                ></div>
                <div
                  className={`${styles.animatePulse} h-4 bg-gray-300 rounded`}
                ></div>
              </div>
            </div>
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
                  <span className="sr-only">Editar</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array(10)
                .fill("")
                .map((_, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4">
                      <div
                        className={`${styles.animatePulse} h-4 bg-gray-300 rounded`}
                      ></div>
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`${styles.animatePulse} h-4 bg-gray-300 rounded`}
                      ></div>
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`${styles.animatePulse} h-4 bg-gray-300 rounded`}
                      ></div>
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`${styles.animatePulse} h-4 bg-gray-300 rounded`}
                      ></div>
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`${styles.animatePulse} h-4 bg-gray-300 rounded`}
                      ></div>
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`${styles.animatePulse} h-4 bg-gray-300 rounded`}
                      ></div>
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`${styles.animatePulse} h-4 bg-gray-300 rounded`}
                      ></div>
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`${styles.animatePulse} h-4 bg-gray-300 rounded`}
                      ></div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTableSkeleton;
