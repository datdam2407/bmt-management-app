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
                slug: 'sheet-data-latest-date',
                description: 'Tiền sân mới nhất hôm nay'
            },
            {
                name: 'Record Data',
                slug: 'sheet-data',
                description: 'Dữ liệu tiền sân các ngày trước',
            },
            // {
            //     name: 'Comming soonn',
            //     slug: 'ccc',
            //     description: 'ccc',
            // },
        ],
    },
    // {
    //     name: 'User Page',
    //     items: [
    //         {
    //             name: 'Comming soonnn',
    //             slug: 'aaas',
    //             description: 'aaas',
    //         },
    //         {
    //             name: 'Comming soonnnn',
    //             slug: 'bbb',
    //             description: 'bbb',
    //         },
    //         {
    //             name: 'Comming soonnnnn',
    //             slug: 'ccc',
    //             description: 'ccc',
    //         },
    //     ],
    // },
];
