import { Invoice } from "./modules/Invoice";
import { Payment } from "./modules/Payments";
import { HasFormatter } from "./interfaces/Hasformatter";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("John", "Website development", 250);
docTwo = new Payment("James", "Ruby on Rails book", 200);



let invoices: Invoice[] = []
let invoiceOne = new Invoice('Promise', 'House rent', 400)

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault()
   console.log( type.value,
    tofrom.value,
    details.value,
    amount.value);
   

})

