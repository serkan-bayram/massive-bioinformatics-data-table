/* A component to show API data */

import { TableHeading } from "./ui/TableHeading";

export function Table({ initialData }) {
  // Table headings
  const columns = [
    { name: "Username", id: "username", isSortable: false },
    { name: "Balance", id: "balance", isSortable: true },
    { name: "Created At", id: "createdAt", isSortable: true },
  ];

  return (
    <div
      className="rounded-md border border-x-0
     border-muted w-full overflow-auto"
    >
      <table className="w-full">
        <thead className="bg-accent text-white">
          <tr className="border-b border-muted">
            {/* I have not used a proper key package
                  to keep bundle small for this project */}
            {columns.map((column, index) => (
              <TableHeading key={index} column={column} />
            ))}
          </tr>
        </thead>
        <tbody>
          {initialData.map((data, index) => (
            <tr
              className="border-b border-x
               border-muted transition-colors
               hover:bg-muted/50 last:border-b-0"
              key={index}
            >
              {Object.entries(data).map(([key, value]) => (
                <td className="px-4 p-4" key={key}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
