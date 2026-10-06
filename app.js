const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const emptyMessage = document.querySelector("#empty-message");
const status = document.querySelector("#status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();

  if (!text) {
    status.textContent = "Please enter a topic.";
    input.focus();
    return;
  }

  const item = document.createElement("li");
  item.textContent = text;
  list.append(item);
  emptyMessage.hidden = true;
  status.textContent = `Added: ${text}`;
  input.value = "";
  input.focus();

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    item.remove();
    emptyMessage.hidden = false;
    status.textContent = "Topic Deleted: " + text;
  });
  item.append(deleteButton);

});
