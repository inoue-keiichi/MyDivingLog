export interface lang {
  log: {
    title: string;
    list: string;
    edition: string;
    diveNumber: string;
    date: string;
    country: string;
    location: string;
    entryTime: string;
    exitTime: string;
    visibility: string;
    waterTemp: string;
    weight: string;
    shop: string;
    weather: {
      title: string;
      item: {
        sunny: string;
        partlySunny: string;
        cloudy: string;
        rainy: string;
        snowy: string;
      };
    };
    pressure: {
      title: string;
      start: string;
      end: string;
    };
    tank: {
      title: string;
      unit: string;
      kind: {
        aluminum: string;
        steel: string;
        nitrox: string;
      };
    };
    point: {
      title: string;
      type: {
        beach: string;
        boat: string;
      };
    };
    depth: {
      max: string;
      ave: string;
    };
    suit: {
      title: string;
      item: {
        _3mm: string;
        _5mm: string;
        dry: string;
      };
    };
    accessory: {
      title: string;
    };
    buddy: {
      title: string;
      comment: string;
    };
  };
  profile: {
    title: string;
    history: string;
    dives: string;
    divesValue: string;
    totalTime: string;
    totalTimeValue: string;
    maxDepth: string;
    maxDepthValue: string;
    maxTime: string;
    maxTimeValue: string;
  };
}
