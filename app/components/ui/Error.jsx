import { useState } from "react";

export function Error({ error }) {
  const [remove, setRemove] = useState(false);

  let message = "";
  if (error === "multipleSortOptions") {
    message = "Multiple sort options are not allowed.";
  }

  const removePopup = () => {
    setRemove(true);
  };

  if (remove) {
    return null;
  }

  return (
    <tr
      className="fixed bottom-4 left-4 bg-red-500 
    rounded-md p-4 max-w-[25ch]"
    >
      <td>
        Error: {message}{" "}
        <button onClick={removePopup} className="block mt-3 text-sm">
          Close
        </button>
      </td>
    </tr>
  );
}
