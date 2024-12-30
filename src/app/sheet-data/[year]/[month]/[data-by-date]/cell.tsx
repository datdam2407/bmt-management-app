import React from "react";

const Cell = (params: {
  value: string | number;
  class?: string;
}) => {
  // const className: string = `px-4 py-1.5 ${params.class} sm:table-cell sm:px-6 sm:py-3 sm:block`;

  const className: string = "px-4 py-3 " + params.class;

  return <td className={className}>{params.value}</td>;
};

export default Cell;
