import { lang } from './lang';

const en: lang = {
  log: {
    title: 'Log',
    list: 'Log List',
    edition: 'Log Edition',
    diveNumber: 'Dive No.',
    date: 'Date',
    country: 'Country',
    location: 'Location',
    entryTime: 'Entry Time',
    exitTime: 'Exit Time',
    visibility: 'Visibility (m)',
    waterTemp: 'Water Temp (\u2103)',
    weight: 'Weight (\u338F)',
    shop: 'Diving Shop',
    weather: {
      title: 'Weather',
      item: {
        sunny: 'Sunny',
        partlySunny: 'Partly Sunny',
        cloudy: 'Cloudy',
        rainy: 'Rainy',
        snowy: 'Snowy',
      },
    },
    pressure: {
      title: 'Pressure',
      start: 'Pressure Start (\u338F/\u33A0)',
      end: 'Pressure End (\u338F/\u33A0)',
    },
    tank: {
      title: 'Tank',
      unit: 'L',
      kind: {
        aluminum: 'Aluminum',
        steel: 'Steel',
        nitrox: 'Nitrox',
      },
    },
    point: {
      title: 'Point',
      type: {
        beach: 'Beach',
        boat: 'Boat',
      },
    },
    depth: {
      max: 'Max Depth (m)',
      ave: 'Average Depth (m)',
    },
    suit: {
      title: 'Suit',
      item: {
        _3mm: '3mm',
        _5mm: '5mm',
        dry: 'dry',
      },
    },
  },
  profile: {
    title: 'Profile',
    history: 'History',
    dives: 'Serial Dive No.',
    divesValue: '%{v} times',
    totalTime: 'Total Time',
    totalTimeValue: '%{v} min',
    maxDepth: 'Max Depth',
    maxDepthValue: '%{v} m',
    maxTime: 'Max Diving Time',
    maxTimeValue: '%{v} min',
  },
};
export default en;
