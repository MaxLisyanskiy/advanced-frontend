import { CounterSchema } from "entities/Counter";

export interface StateSchema {
  counter: CounterSchema;
}

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
