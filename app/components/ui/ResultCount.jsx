"use client";

import { useSetParams } from "@/app/utils/useSetParams";

/* A component to control how many rows are shown in Table */
export function ResultCount() {
  const { params, replace, pathname } = useSetParams();

  // This specifies how many options user will have
  const resultOptions = [5, 10, 20, 30];

  const handleChange = (e) => {
    params.set("count", e.target.value);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <label className="text-sm text-center">Result Count</label>
      <select
        onChange={handleChange}
        className="bg-background border flex-1 
      text-center cursor-pointer focus:ring-1
       focus:ring-accent h-full
       border-muted rounded-md "
        name="resultCount"
        id="resultCount"
      >
        {resultOptions.map((option, index) => (
          <option key={index} value={`${option}`}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
