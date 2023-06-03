import React from "react";
import { UseProductContext } from "../context/ProductContext";

function Sorting() {
  const { getSortingValues } = UseProductContext();

  return (
    <div className="flex items-center">
      <p className="font-text1 font-bold text-orange-600">Sort By:</p>
      <select
      defaultValue={'default'}
        onClick={getSortingValues}
        className="font-text1 font-bold bg-transparent border"
        name="sort"
        id="sort"
      >
        <option disabled className="font-bold text-white bg-blue-500" value="default">
         None
        </option>
        <option className="hidden" value="#" disabled></option>

        <option className="font-bold text-white bg-blue-500" value="lowest">
          Lowest Price
        </option>
        <option className="hidden" value="#" disabled></option>

        <option className="font-bold text-white bg-blue-500" value="highest">
          Highest Price
        </option>
        <option className="hidden" value="#" disabled></option>

        <option className="font-bold  text-white bg-blue-500 " value="a-z">
          A-Z
        </option>
        <option className="hidden" value="#" disabled></option>

        <option className="font-bold  text-white bg-blue-500 " value="z-a">
          Z-A
        </option>
      </select>
    </div>
  );
}

export default Sorting;
