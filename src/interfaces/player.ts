export interface IHeadToHead {
  headToHead: [IPlayer];
}

export interface IPlayer {
  firstname: string;
  lastname: string;
  shortname: string;
  sex: 'MAN' | 'WOMAN';
  picture: IPicture;
  country: ICountry;
  stats: IStats;
}

interface IPicture {
  url: string;
}

interface ICountry {
  picture: IPicture;
  code: string;
}

interface IStats {
  rank: number;
  points: number;
  weight: number;
  height: number;
  age: number;
  last: boolean[];
}
