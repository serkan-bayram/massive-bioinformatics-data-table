"use client";

import { removeOtherOptions } from "@/app/utils/removeOtherOptions";
import { useSetParams } from "@/app/utils/useSetParams";

/* A component to create sortable and default columns */
export function TableHeading({ columns, column }) {
  const { replace, params, pathname } = useSetParams();

  const filterableColumns = columns.filter((column) => column.isSortable);
  // We get relatable params with column.id
  // and set the new state according to old state
  const handleClick = () => {
    const param = params.get(column.id);

    if (param === null) {
      params.set(column.id, "asc");
    } else if (param === "asc") {
      params.set(column.id, "desc");
    } else if (param === "desc") {
      params.set(column.id, "asc");
    }

    removeOtherOptions(params, filterableColumns, column.id);
    replace(`${pathname}?${params.toString()}`);
  };

  return column.isSortable ? (
    <th className={`px-2 font-medium h-12 text-left`}>
      <button
        title="Sort"
        onClick={handleClick}
        className="hover:bg-secondary
       w-fit p-2 rounded-md  transition-colors flex gap-2 items-center"
      >
        {column.name}
        <i aria-hidden className="fa-solid fa-sort"></i>
      </button>
    </th>
  ) : (
    <th className={`px-2 font-medium h-12 text-left`}>
      <div className="p-2">{column.name}</div>
    </th>
  );
}
