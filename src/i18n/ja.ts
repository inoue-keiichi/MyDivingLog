import { lang } from './lang';

const ja: lang = {
  log: {
    title: 'Log',
    list: 'Log List',
    edition: 'Log Edition',
    diveNumber: 'ダイブ本数',
    date: '日付',
    country: '国',
    location: '場所',
    entryTime: '潜水開始時刻',
    exitTime: '潜水終了時刻',
    weather: '天気',
    visibility: '透明度 (m)',
    point: {
      title: 'ポイント',
      type: {
        beach: 'ビーチ',
        boat: 'ボート',
      },
    },
    depth: {
      max: '最大水深 (m)',
      ave: '平均水深 (m)',
    },
    suit: {
      title: '天気',
      item: {
        _3mm: '3mm',
        _5mm: '5mm',
        dry: 'ドライ',
      },
    },
  },
  profile: {
    title: 'Profile',
    history: 'History',
    dives: 'ダイブ本数',
    divesValue: '%{v} 本',
    totalTime: 'トータル潜水時間',
    totalTimeValue: '%{v} 分',
    maxDepth: '最大深度',
    maxDepthValue: '%{v} m',
    maxTime: '最大潜水時間',
    maxTimeValue: '%{v} 分',
  },
};
export default ja;
