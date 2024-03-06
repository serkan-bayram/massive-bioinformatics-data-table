import { ResultCount } from "./ui/ResultCount";
import { Search } from "./ui/Search";

/* A component to gather up filter elements */
export function Filters() {
  return (
    <div>
      <div className="my-2 flex  justify-between">
        <Search />
        <ResultCount />
      </div>
    </div>
  );
}
