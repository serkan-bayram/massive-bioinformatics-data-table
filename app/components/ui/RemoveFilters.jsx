"use client";

import { useSetParams } from "@/app/utils/useSetParams";

export function RemoveFilters() {
  const { params, replace, pathname } = useSetParams();

  const removeFilters = () => {
    replace(`${pathname}`);
  };

  return (
    params.size > 0 && (
      <button
        onClick={removeFilters}
        className="fixed bottom-3 bg-accent text-muted 
      rounded-md p-2 right-2"
      >
        Remove Filters
      </button>
    )
  );
}
