btn = document.querySelector('.todo-list-button');
ul = document.querySelector(".todo-list-checklist");
let todoArray = [];
listId = 1;

// Button click add input to array
btn.addEventListener('click', function (e) {
  input = document.querySelector('.todo-list-input').value;
  li = document.createElement("li");
  todoArray.push(input);

  // Creates a li with item id
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li).setAttribute("id", "todo-list-item-"+listId++);

  // Add eventlistener to li
  li.addEventListener('click', function () {
    this.classList.add("item-done");
  });

  e.preventDefault();
});