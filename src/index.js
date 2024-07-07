import "./style.css";
import { format } from "date-fns";
import { createEntryDiv, appendToRightPane } from "./domUtils";

document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("myForm");
  const rightPane = document.getElementById("rightPane");
  const dataArray = [];

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    const priority = document.querySelector(
      'input[name="priority"]:checked'
    ).value;
    formObject["priority"] = priority;

    //const formattedDate = format(new Date(formObject.date), "MM/dd/yyyy");
    //formObject.date = formattedDate;

    dataArray.push(formObject);
    console.log(dataArray);

    const entryDiv = createEntryDiv(formObject);
    appendToRightPane(entryDiv);

    form.reset();
  });
});
