"use client";

export function Search({ setFilters }) {
  // Set filters by user input
  const handleChange = (e) => {
    setFilters((prevValues) => ({
      ...prevValues,
      searchParams: e.target.value,
    }));
  };

  return (
    <input
      onChange={handleChange}
      className="bg-background p-2 border 
      hover:ring-1 hover:ring-accent focus:ring-1
       focus:ring-accent focus:outline-none
        border-muted rounded-md "
      placeholder="Search"
    />
  );
}
