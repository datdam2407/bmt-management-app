import React from 'react'
interface Props {
	value: string | number;
	class?: string;
}

const Cell = (props: Props) => {
	const className: string = 'px-4 py-3 ' + props.class;

	return (
		<td className={className}>{props.value}</td>
	)
}

export default Cell