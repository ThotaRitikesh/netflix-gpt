import React from "react";

const Shimmer = () => {
  const num = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center my-3 bg-black">
      {num.map((num) => (
        <div key={num} className="bg-gray-500 w-40 h-56 pr-4"></div>
      ))}
    </div>
  );
};

export default Shimmer;
