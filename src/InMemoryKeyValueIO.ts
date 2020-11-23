import { KeyValueIO } from "./KeyValueIO.ts";

export class InMemoryKeyValueIO implements KeyValueIO {
  private map: {[key:string]:string} = {}
  save(key: string, value: string, callback: (err?: Error) => void) {
    this.map[key] = value;
    setTimeout(() => callback(), 10);
  }
  load(key: string, callback: (err?: Error, value?: string) => void) {
    setTimeout(() => callback(undefined, this.map[key]), 10);
  }
}