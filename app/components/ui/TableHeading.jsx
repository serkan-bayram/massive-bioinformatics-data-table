"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

/* A component to create sortable and default columns */
export function TableHeading({ column }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // We get relatable params with column.id
  // and set the new state according to old state
  const handleClick = () => {
    const params = new URLSearchParams(searchParams);

    const param = params.get(column.id);

    if (param === null) {
      params.set(column.id, "asc");
    } else if (param === "asc") {
      params.set(column.id, "desc");
    } else if (param === "desc") {
      params.set(column.id, "asc");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return column.isSortable ? (
    <th className={`px-2 font-medium h-12 text-left`}>
      <button
        title="Sırala"
        onClick={handleClick}
        className="hover:bg-secondary
       w-fit p-2 rounded-md  transition-colors flex gap-2 items-center"
      >
        {column.name}
        <i className="fa-solid fa-sort"></i>
      </button>
    </th>
  ) : (
    <th className={`px-2 font-medium h-12 text-left`}>
      <div className="p-2">{column.name}</div>
    </th>
  );
}
