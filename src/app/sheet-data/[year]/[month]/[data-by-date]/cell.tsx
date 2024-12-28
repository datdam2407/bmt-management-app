import React from "react";


const Cell = (params: {
  value: string | number;
  class?: string;
}) => {
  const className: string = "px-4 py-3 " + params.class;

  return <td className={className}>{params.value}</td>;
};

export default Cell;