export interface GameCard {
  activity: string;
  age: string;
  description?: string;
  id: string;
  imgLink: string;
  name: string;
  type: string;
  youtubeLink: string;
}

export interface GameCardParams {
  activity?: string;
  age?: string;
  description?: string;
  id?: string;
  imgLink?: string;
  name?: string;
  type?: string;
  youtubeLink?: string;
}
