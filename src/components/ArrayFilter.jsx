import React from "react";
import { Link } from "react-router-dom";

const ArrayFilter = ({ arr, userValue, alphabet, setMessage }) => {
  // filtering diseases
  let filteredItem = arr.filter((item) => {
    return item.name.toLowerCase().includes(userValue.toLowerCase());
  });

  return (
    <>
      {filteredItem.length === 0
        ? setMessage(true)
        : (setMessage(false),
          (
            <ul className=" border-b-2 border-gray-600 pb-8">
              <li className="uppercase text-primary text-2xl font-medium py-5">
                {alphabet.letter}
              </li>
              {/* mapping diseases */}
              {filteredItem.map((item) => (
                <li
                  key={item.id}
                  className="text-lg leading-8 tracking-wide text-gray-600 underline pl-5 normal-case"
                >
                  <Link to={`/ourservices/${item.name}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          ))}
    </>
  );
};

export default ArrayFilter;
