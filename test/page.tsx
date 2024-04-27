"use client";
import products from "../product";

import React, { useState } from "react";

function Test() {
  const [available, setAvailable] = useState(false);

  function checkAvailable() {
    setAvailable((prevAvailable) => !prevAvailable);
  }

  const filteredProducts = products.filter((product) => {
    const isAvailabilityMatch = !available || product.availability; // true OR available
    return product.availability === isAvailabilityMatch;
  });

  return (
    <div>
      <label htmlFor="available">
        <input
          type="checkbox"
          id="available"
          checked={available}
          onChange={checkAvailable}
        />
        {""} Available
      </label>

      {filteredProducts.map((product) => {
        return (
          <div className="flex ">
            <h1>{product.category}</h1>
            <div className="mx-auto"></div>
            <h1>{product.show}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Test;
