export type Item = {
    name: string;
}

export const calendar: { name: string; items: Item[] }[] = [
    {
        name: 'Lịch đánh cầu tháng 3',
        items: [
            {
                name: 'Wed 5/3 Nu 1,2,3 Minh',
            },
            {
                name: 'Wed 12/3 Nu 1,2,3  8pm-10pm (dat)',
            },
            {
                name: 'Wed 19/3 Nu1,2,3  8pm-10pm  (dat)',
            },
            {
                name: 'Sun 23/3 Nu 2 10am-12pm (minh)',
            },
            {
                name: 'Wed 26/3 Nu 1,3  8pm-10pm  (dat)',
            },
        ],
    },
];
