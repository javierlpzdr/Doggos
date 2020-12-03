export enum Breeds {
  CHIHUAHUA = "chihuahua",
  GOLDEN = "golden"
}

export interface Doggo {
  code: number;
  breed: Breeds;
  name: string;
}
