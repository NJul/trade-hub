const users = [
  {
    id: '760e7a08-97f8-11ee-b9d1-0242ac120002',
    name: 'User',
    email: 'user@mail.com',
    password: '123456',
  },
];

const sellers = [
  {
    id: '8214a6f6-97f8-11ee-b9d1-0242ac120002',
    name: 'Silvia Wuckert',
    email: 'silvia@wuckert.com',
    image_url: '/sellers/silvia-wuckert.png',
  },
  {
    id: '8a9f5afa-97f8-11ee-b9d1-0242ac120002',
    name: 'Stuart Kihn',
    email: 'Stuart@kihn.com',
    image_url: '/sellers/stuart-kihn.png',
  },
  {
    id: '904bf1d4-97f8-11ee-b9d1-0242ac120002',
    name: 'Gail Russel',
    email: 'gail@russel.com',
    image_url: '/sellers/gail-russel.png',
  },
  {
    id: '983484a7-4a32-4298-aba7-1a908c6c6f7e',
    name: 'Laurie Wunsch',
    email: 'laurie@wunsch.com',
    image_url: '/sellers/laurie-wunsch.png',
  },
  {
    id: '963a0a4a-97f8-11ee-b9d1-0242ac120002',
    name: 'Leon Prohaska',
    email: 'leon@prohaska.com',
    image_url: '/sellers/leon-prohaska.png',
  },
  {
    id: '33ff1962-30fd-4bb6-b897-0897c3d5b373',
    name: 'Christy Jaskolski',
    email: 'christy@jaskolski.com',
    image_url: '/sellers/christy-jaskolski.png',
  },
  {
    id: 'aee0617d-ead0-4aa2-a2f5-1f9303611510',
    name: 'Leslie Beahan',
    email: 'leslie@beahan.com',
    image_url: '/sellers/leslie-beahan.png',
  },
  {
    id: 'b704c1a7-d21c-4362-8b9c-b781f5fb5c29',
    name: 'Mitchell Bode',
    email: 'mitchell@bode.com',
    image_url: '/sellers/mitchell-bode.png',
  },
  {
    id: '0421aea0-cc88-4bc2-9197-e5044f503497',
    name: 'Verna Boehm',
    email: 'verna@boehm.com',
    image_url: '/sellers/verna-boehm.png',
  },
  {
    id: '1d845fa2-b285-4dcf-81ee-61427952f0c1',
    name: 'Eugene Stanton',
    email: 'eugene@stanton.com',
    image_url: '/sellers/eugene-stanton.png',
  },
];

const invoices = [
  {
    seller_id: sellers[0].id,
    amount: 324,
    status: 'awaiting',
    date: '2022-12-06',
  },
  {
    seller_id: sellers[1].id,
    amount: 5152,
    status: 'awaiting',
    date: '2022-11-14',
  },
  {
    seller_id: sellers[4].id,
    amount: 621,
    status: 'fulfilled',
    date: '2022-10-29',
  },
  {
    seller_id: sellers[3].id,
    amount: 67590,
    status: 'fulfilled',
    date: '2023-09-10',
  },
  {
    seller_id: sellers[5].id,
    amount: 67373,
    status: 'awaiting',
    date: '2023-08-05',
  },
  {
    seller_id: sellers[7].id,
    amount: 1222,
    status: 'awaiting',
    date: '2023-07-16',
  },
  {
    seller_id: sellers[6].id,
    amount: 5500,
    status: 'awaiting',
    date: '2023-06-27',
  },
  {
    seller_id: sellers[3].id,
    amount: 42511,
    status: 'fulfilled',
    date: '2023-06-09',
  },
  {
    seller_id: sellers[4].id,
    amount: 5646,
    status: 'fulfilled',
    date: '2023-06-17',
  },
  {
    seller_id: sellers[5].id,
    amount: 8546,
    status: 'fulfilled',
    date: '2023-06-07',
  },
  {
    seller_id: sellers[1].id,
    amount: 628,
    status: 'fulfilled',
    date: '2023-08-19',
  },
  {
    seller_id: sellers[5].id,
    amount: 9245,
    status: 'fulfilled',
    date: '2023-06-03',
  },
  {
    seller_id: sellers[2].id,
    amount: 525,
    status: 'fulfilled',
    date: '2023-06-18',
  },
  {
    seller_id: sellers[0].id,
    amount: 2300,
    status: 'fulfilled',
    date: '2023-10-04',
  },
  {
    seller_id: sellers[2].id,
    amount: 5333,
    status: 'fulfilled',
    date: '2022-06-05',
  },
];

const income = [
  { month: 'Jan', income: 4248 },
  { month: 'Feb', income: 3119 },
  { month: 'Mar', income: 3352 },
  { month: 'Apr', income: 1967 },
  { month: 'May', income: 2922 },
  { month: 'Jun', income: 4637 },
  { month: 'Jul', income: 2151 },
  { month: 'Aug', income: 4861 },
  { month: 'Sep', income: 1952 },
  { month: 'Oct', income: 1946 },
  { month: 'Nov', income: 2117 },
  { month: 'Dec', income: 4915 },
];

module.exports = {
  users,
  sellers,
  invoices,
  income,
};
