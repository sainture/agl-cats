import { Pet } from './pets';

export interface Person {
  name: string;
  gender: string;
  age: number;
  pets: Pet[];
}
