import React from "react";

const Cell = (params: {
  value: string | number;
  class?: string;
}) => {
  // Apply padding and extra styling based on the passed class and make it mobile-friendly
  const className: string = `px-4 py-1.5 ${params.class} sm:table-cell sm:px-6 sm:py-3 sm:block`;

  return (
    <td className={className}>
      {params.value}
    </td>
  );
};

export default Cell;
