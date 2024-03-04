/* A component to control how many rows are shown in Table */
export function ResultCount({ setFilters }) {
  const handleChange = (e) => {
    setFilters((prevValues) => ({
      ...prevValues,
      resultCount: e.target.value,
    }));
  };

  return (
    <div className="flex items-center gap-2">
      <label className="text-sm">Result Count</label>
      <select
        onChange={handleChange}
        className="bg-background border flex-1 
      text-center cursor-pointer focus:ring-1
       focus:ring-accent h-full
       border-muted rounded-md "
        name="resultCount"
        id="resultCount"
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
}
