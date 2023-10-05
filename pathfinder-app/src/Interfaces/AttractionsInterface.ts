export interface IAttraction {
  id: number;
  name: string;
  description: string;
  location: string;
  city: string;
  state: string;
}

export interface ICreateAttraction {
  name: string;
  description: string;
  location: string;
  city: string;
  state: string;
}
