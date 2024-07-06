import "./style.css";
import { compareAsc, format } from "date-fns";

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

    dataArray.push(formObject);
    console.log(dataArray);

    const entryDiv = document.createElement("div");
    entryDiv.className = "entry";
    entryDiv.innerHTML = `
        <span style="display: inline;"><strong>Name:</strong> ${formObject.task_name}</span>
        <span style="display: inline;"><strong>Desc:</strong> ${formObject.task_desc}</span> <br />
        <span><strong>Due:</strong> ${formObject.due_date}</span>
        <span><strong>Priority:</strong> ${formObject.priority}</span>
      `;
    rightPane.appendChild(entryDiv);
    form.reset();
  });
});
