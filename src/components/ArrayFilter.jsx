import React from "react";
import { Link } from "react-router-dom";

const ArrayFilter = ({ arr, userValue, letter, id }) => {
  // filtering diseases
  let filteredItem = arr.filter((item) => {
    return item.name.toLowerCase().includes(userValue.toLowerCase());
  });

  return (
    <>
      {filteredItem.length !== 0 && (
        <ul className=" border-b-2 border-gray-600 mb-8 pb-2" id={id}>
          <li className="uppercase text-primary text-2xl font-medium">
            {letter}
            {/* mapping diseases */}
            {filteredItem.map((item) => (
              <li
                key={item.id}
                className="text-base leading-8 text-gray-600 underline pl-5 normal-case"
              >
                <Link to={`/ourservices/${item.name}`} className="capitalize">
                  {item.name}
                </Link>
              </li>
            ))}
          </li>
        </ul>
      )}
    </>
  );
};

export default ArrayFilter;
