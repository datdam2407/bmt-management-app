export type Item = {
    name: string;
    slug: string;
    description?: string;
}

export const mainbar: { name: string; items: Item[] }[] = [
    {
        name: 'Layouts',
        items: [
            {
                name: 'User Pages',
                slug: 'routes',
            },
            {
                name: 'Badminton Payment',
                slug: 'sheet-data',
                description: 'Data',
            },
            {
                name: 'ccc',
                slug: 'ccc',
                description: 'ccc',
            },
        ],
    },
    {
        name: 'Dash',
        items: [
            {
                name: 'aaas',
                slug: 'aaas',
                description: 'aaas',
            },
            {
                name: 'bbb',
                slug: 'bbb',
                description: 'bbb',
            },
            {
                name: 'ccc',
                slug: 'ccc',
                description: 'ccc',
            },
        ],
    },
];
