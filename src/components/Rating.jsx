import React from "react";

const Rating = ({ rate }) => {
  const currentRate = rate.toFixed(0);
  const numbers = Array.from({ length: 5 }, (item, index) => {
    return index + 1;
  });

  const stars = [];
  return (
    <div className="flex gap-1 items-center">
      {numbers.map((num) => (
        <svg
        key={num}
          xmlns="ht tp://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-5 stroke-yellow-400 ${currentRate >= num && "fill-yellow-400" }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
