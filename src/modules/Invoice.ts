import { HasFormatter } from "../interfaces/Hasformatter.js";

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} paid at $${this.amount} for ${this.details}. `;
  }
}
