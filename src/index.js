import "./style.css";
import { compareAsc, format } from "date-fns";

const content = "Hello, Webpack!";
const menu = document.querySelector(".menu");
// menu.innerHTML = content;

const listItems = "my List";
const list = document.querySelector(".content");
//list.innerHTML = listItems;

const gate = format(new Date(2014, 4, 21), "MMM-dd-yyyy");
//=> '2014-02-11'

console.log(gate);

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
];
console.log(dates.sort(compareAsc));
