import React from 'react';
import { Player } from '../../lib/types'
import Cell from './Cell';

const Table = ({ data, headers }: { data: Player[], headers: string[] }) => {
	return (
		<div className='px-2 py-2'>
			<div className='relative overflow-x-auto shadow-md rounded-lg'>
				<table className='w-full text-sm text-center text-gray-500'>
					<thead className='text-gray-400 uppercase bg-gray-700'>
						<tr>
							{headers.map(header => <Cell key={header} value={header} class="font-extrabold" />)}
						</tr>
					</thead>
					<tbody>
						{data.map((item, i) => (
							<tr key={i} className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
								{Object.values(item).map((value: string | number, i: number) => {
									if (!i) return <Cell key={i} value={value} class='whitespace-nowrap text-white font-extrabold' />;
									else if (i === 6 && +value > 0) return <Cell key={i} value={value} class='whitespace-nowrap text-red-400 font-extrabold' />;
									else return <Cell key={i} value={value} />;
								})}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Table;