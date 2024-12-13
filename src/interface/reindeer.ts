export type AlingmentReindeer = 'left' | 'right' | 'alls'

export interface IReindeer {
  id: number,
  name: string
}

export interface IAlignment {
  id: number;
  name: string;
  left: IReindeer[];
  right: IReindeer[];
}

export interface IWeather {
  temperature: string;
  condition: string;
}