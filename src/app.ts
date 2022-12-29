import { Invoice } from "./modules/Invoice.js";
import { Payment } from "./modules/Payments.js";
import { HasFormatter } from "./interfaces/Hasformatter";
import { ListTemplate } from "./modules/ListTemplates.js";


const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault()

    let values : [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber]
    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values)
    }else{
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'end')
})

