"use client";

import { useSetParams } from "@/app/utils/useSetParams";
import { useEffect, useState } from "react";

// Set filters by user input
export function Search() {
  const { params, replace, pathname } = useSetParams();

  const [inputValue, setInputValue] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Debounce user input
  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      if (inputValue !== null) {
        params.set("search", inputValue);
        replace(`${pathname}?${params.toString()}`);
      }
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue]);

  return (
    <input
      onChange={handleChange}
      className="bg-background p-2 border 
      hover:ring-1 hover:ring-accent focus:ring-1
       focus:ring-accent focus:outline-none
        border-muted rounded-md min-w-[2rem] "
      placeholder="Search"
    />
  );
}
