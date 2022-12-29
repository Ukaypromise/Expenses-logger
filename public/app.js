import { Invoice } from "./modules/Invoice";
import { Payment } from "./modules/Payments";
let docOne;
let docTwo;
docOne = new Invoice("John", "Website development", 250);
docTwo = new Payment("James", "Ruby on Rails book", 200);
let invoices = [];
let invoiceOne = new Invoice('Promise', 'House rent', 400);
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
