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
                name: 'Lastest update',
                slug: 'routes',
            },
            {
                name: 'Record Data',
                slug: 'sheet-data',
                description: 'Data',
            },
            {
                name: 'Comming soon',
                slug: 'ccc',
                description: 'ccc',
            },
        ],
    },
    {
        name: 'User Page',
        items: [
            {
                name: 'Comming soon',
                slug: 'aaas',
                description: 'aaas',
            },
            {
                name: 'Comming soon',
                slug: 'bbb',
                description: 'bbb',
            },
            {
                name: 'Comming soon',
                slug: 'ccc',
                description: 'ccc',
            },
        ],
    },
];
