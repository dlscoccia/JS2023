export enum Color {
  red,
  blue,
  green,
  black,
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
