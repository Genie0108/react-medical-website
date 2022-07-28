import React from "react";

const ArrayFilter = ({ arr, userValue }) => {
  // filtering diseases
  let filteredItem = arr.filter((item) => {
    return item.name.toLowerCase().includes(userValue.toLowerCase());
  });
  return (
    <ul>
      {/* mapping diseases */}
      {filteredItem.map((item) => (
        <li
          key={item.id}
          className="text-base tracking-wide text-gray-600 underline pb-1 pl-5 normal-case"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ArrayFilter;
