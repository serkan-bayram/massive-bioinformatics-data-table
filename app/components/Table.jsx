import { TableHeading } from "./ui/TableHeading";
import { TableBody } from "./ui/TableBody";
import { RemoveFilters } from "./ui/RemoveFilters";

/* A component to show API data */
export function Table({ initialData }) {
  // Table headings
  // The order should match the initialData order
  const columns = [
    { name: "Username", id: "username", isSortable: false },
    { name: "Age", id: "age", isSortable: true },
    { name: "Balance", id: "balance", isSortable: true },
    { name: "Gender", id: "gender", isSortable: false },
  ];

  return (
    <div
      className="rounded-md border border-x-0
     border-muted w-full overflow-auto "
    >
      <table className="w-full ">
        <thead className="bg-accent text-white">
          <tr className="border-b border-muted">
            {/* I have not used a proper key package
                  to keep bundle small for this project */}
            {columns.map((column, index) => (
              <TableHeading columns={columns} key={index} column={column} />
            ))}
          </tr>
        </thead>
        <TableBody columns={columns} initialData={initialData} />
      </table>
      <RemoveFilters />
    </div>
  );
}
