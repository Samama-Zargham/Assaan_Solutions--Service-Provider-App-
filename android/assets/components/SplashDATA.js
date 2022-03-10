import { Icons } from './Icons';

const PAGES = {
  slides: [
    {
      key: 'one',
      title: 'Here you can apply for Electrition Services',
      imageTiltle: require('../src/imgs/Mylogo.png'),
      text: 'I am an electrician by profession\n but an engineer by knowledge and intelligence',
      image: require('../src/imgs/electrition.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 'two',
      title: 'Here you can apply for Cleaning Services',
      imageTiltle: require('../src/imgs/Mylogo.png'),
      text: 'The objective of cleaning is not just to clean\n but to feel happiness living within that environment.',
      image: require('../src/imgs/cleaning.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 'three',
      title: 'Here you can apply for Plumber Services',
      imageTiltle: require('../src/imgs/Mylogo.png'),
      text: 'The more they overthink the plumbing\n the easier it is to stop up the drain',
      image: require('../src/imgs/plumber.png'),
      backgroundColor: '#febe29',
    },
  ],
};
const ser_Icon = [
  { type: Icons.MaterialIcons, iname: "electrical-services", serName: "Electrical" },
  { type: Icons.MaterialIcons, iname: "handyman", serName: "Handyman" },
  { type: Icons.MaterialCommunityIcons, iname: "broom", serName: "Cleaning" },
  { type: Icons.MaterialIcons, iname: "plumbing", serName: "Plumbing" },
];
const REC_Services = [
  {
    title: 'Plumbing Services',
    image: require('../src/imgs/plumber1.jpg'),
    ratings: 3.7,
    priceStart: '$50',
  },

  {
    title: 'Cleaning Services',
    image: require('../src/imgs/clean.jpg'),
    ratings: 4.1,
    priceStart: '$40',
  },
  {
    title: 'Home Services',
    image: require('../src/imgs/handyman.png'),
    ratings: 2.5,
    priceStart: '$28',
  },

];
const REC_Services2 = [
  {
    title: 'Electrical Installation',
    image: require('../src/imgs/clean.jpg'),
    ratings: 4.1,
    priceStart: '$40',
    sale: "Upto 50% off"
  },
  {
    title: 'Recessed lighting',
    image: require('../src/imgs/handyman.png'),
    ratings: 2.5,
    priceStart: '$28',
    sale: "Upto 20% off"
  },
  {
    title: 'Switch Changing',
    image: require('../src/imgs/plumber1.jpg'),
    ratings: 3.7,
    priceStart: '$50',
    sale: "Upto 25% off"

  },

  {
    title: 'Electrical Maintenance',
    image: require('../src/imgs/clean.jpg'),
    ratings: 4.1,
    priceStart: '$40',
    sale: "Upto 40% off"

  },
  {
    title: 'Electrical Shortage',
    image: require('../src/imgs/handyman.png'),
    ratings: 2.5,
    priceStart: '$28',
    sale: "Upto 30% off"

  },

];
const REC_Services1 = [
  {
    title: 'Cleaning Services',
    image: require('../src/imgs/p1.jpg'),
    ratings: 3.7,
    priceStart: '$50',
  },
  {
    title: 'Cleaning Services',
    image: require('../src/imgs/c1.jpg'),
    ratings: 4.1,
    priceStart: '$40',
  },
  {
    title: 'Cleaning Services',
    image: require('../src/imgs/e1.jpg'),
    ratings: 2.5,
    priceStart: '$28',
  },

];
export { PAGES, ser_Icon, REC_Services, REC_Services1, REC_Services2 };