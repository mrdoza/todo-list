export function createEntryDiv(formObject) {
  const entryDiv = document.createElement("div");
  entryDiv.className = "entry";
  entryDiv.innerHTML = `<span style="display: inline;"><strong>Name:</strong> ${formObject.task_name}</span>
        <span style="display: inline;"><strong>Desc:</strong> ${
          formObject.task_desc
        }</span> <br />
        <span><strong>Due:</strong> ${formObject.date}</span>
        <span><strong>Priority:</strong> ${formObject.priority}</span>
        <button class="delete-btn">Delete</button>
      `;

  const deleteBtn = entryDiv.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    entryDiv.remove();
  });

  return entryDiv;
}

export function appendToRightPane(entryDiv) {
  const rightPane = document.getElementById("rightPane");
  rightPane.appendChild(entryDiv);
}
