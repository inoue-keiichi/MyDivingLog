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
    visibility: '透明度 (m)',
    waterTemp: '水温 (\u2103)',
    weight: 'ウェイト (\u338F)',
    shop: 'ダイビングショップ',
    weather: {
      title: '天気',
      item: {
        sunny: '晴れ',
        partlySunny: '晴れ/曇り',
        cloudy: '曇り',
        rainy: '雨',
        snowy: '雪',
      },
    },
    pressure: {
      title: 'タンク圧',
      start: 'タンク圧開始 (\u338F/\u33A0)',
      end: 'タンク圧終了 (\u338F/\u33A0)',
    },
    tank: {
      title: 'タンク',
      unit: 'L',
      kind: {
        aluminum: 'アルミ',
        steel: 'スチール',
        nitrox: 'ナイトロックス',
      },
    },
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
      title: 'スーツ',
      item: {
        _3mm: '3mm',
        _5mm: '5mm',
        dry: 'ドライ',
      },
    },
    accessory: {
      title: 'アクセサリー',
    },
    buddy: {
      title: 'バディ',
      placeholder: 'コメント',
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
