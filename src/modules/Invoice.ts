import { HasFormatter } from "../interfaces/Hasformatter";

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} for ${this.details} at ${this.amount}`;
  }
}
