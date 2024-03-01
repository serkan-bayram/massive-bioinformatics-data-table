"use client";

import { useState } from "react";
import { ResultCount } from "./ui/ResultCount";
import { Search } from "./ui/Search";

/* A component to gather up filter elements */
export function Filters() {
  const [filters, setFilters] = useState({
    searchParams: null,
    resultCount: null,
  });

  return (
    <div>
      <div className="my-2 flex  justify-between">
        <Search setFilters={setFilters} />
        <ResultCount setFilters={setFilters} />
      </div>
    </div>
  );
}
