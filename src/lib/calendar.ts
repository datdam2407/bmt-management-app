export type Item = {
    name: string;
}

export const calendar: { name: string; items: Item[] }[] = [
    {
        name: 'Lịch đánh cầu tháng 1',
        items: [
            {
                name: 'Thu 2/1 *PT80* C2,3 8pm-10pm Zac',
            },
            {
                name: 'Sun 5/1 Nu C2,3 10am-12pm Zac',
            },
            {
                name: 'Wed 8/1 Nu 1,2 8pm-10pm Dat',
            },
            {
                name: 'Sun 12/1 Nu 1,2 10am-12pm Dat',
            },
            {
                name: 'Wed 15/1 Nu1,2,3 8pm-10pm Dat',
            },
            {
                name: 'Sun 19/1 Nu 1 10am-12pm Dat',
            },

        ],
    },
];
