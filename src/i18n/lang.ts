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
    weather: string;
    visibility: string;
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
