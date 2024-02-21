const place_holder = [
  {
    id: 0,
    title: "Item 1",
    url: "",
    description: "Loptum Ipsin",
    price: 1,
    marketPrice: 2,
  },
];
const product = {
  id: 0,
  title: "Item 1",
  status: "1 Semester",
  url: "",
  description: "Loptum Ipsin",
  price: 1,
  marketPrice: 2,
};
const order = [
  {
    id: 1,
    stripe_id: "123123123123",
    name: "",
    seller: "",
    meetup_time:"",
    meetup_address: "",
    total: "",
    created_at:"" ,
    ordered_items: [...place_holder],
  },
];

export { place_holder, product, order };
