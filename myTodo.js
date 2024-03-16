const form = document.querySelector("form");
const todoList = document.querySelector("#todo-list");
const input = document.querySelector("#todo");
let editBox = document.querySelector(".editBox");
let editInput = document.querySelector(".edit");

// Local storage
const storage = JSON.parse(localStorage.getItem("todoList")) || [];

// Form submission event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = input.value.trim(); 
  if (text !== "") {
    storage.push(text);
    localStorage.setItem("todoList", JSON.stringify(storage));
    input.value = "";
    updateList();
  }
});

// Initial display
updateList();

function updateList() {
  display(storage);
}

function display(box) {
  todoList.innerHTML = "";
  box.forEach((data, i) => {
    let li = document.createElement("li"); 
    let div = document.createElement("div");
    let edit = document.createElement("img");
    let del = document.createElement("img");

    li.textContent = data;

    del.src='./images/delete.svg';
    del.onclick = () => {
      storage.splice(i, 1);
      localStorage.setItem("todoList", JSON.stringify(storage));
      updateList();
    };

    edit.src = "./images/edit.svg";
    edit.onclick = () => {
      editInput.value = storage[i]
      editInput.focus = 'true'
      editBox.classList.add("extra");
      editBox.parentElement.classList.add("editBody");

      let btn = document.querySelector(".editBox button");
      btn.onclick = () => {
        storage[i] = editInput.value;
        editBox.classList.remove("extra");
        editBox.parentElement.classList.remove("editBody");
        editInput.value = "";
        localStorage.setItem("todoList", JSON.stringify(storage));
        updateList();
      };
    };

    div.appendChild(edit);
    div.appendChild(del);
    li.appendChild(div);
    div.id = 'delBox'
    todoList.appendChild(li);
  });
};

// const form = document.querySelector("form");
// const todoList = document.querySelector("#todo-list");
// const input = document.querySelector("#todo");
// let editBox = document.querySelector(".editBox");
// let editIput = document.querySelector(".edit");

// // local storage
// const storage = JSON.parse(localStorage.getItem("todoList")) || [];
// // storage
// form.onsubmit = (e) => {
//   e.preventDefault();
//   let text = input.value;
//   storage.push(text);
//   localStorage.setItem("todoList", JSON.stringify(storage));
//   input.value = "";
//   updateList();
// };

// const updateList = ()=> {
//   display(storage)
// }

// function display(box) {
//   // console.log(storage);
//   todoList.innerHTML = ''
//   box.map((data, i) => {
//     let li = document.createElement('span');
//     let div = document.createElement('div')
//     let edit = document.createElement('button')
//     let del = document.createElement('button')
//     li.textContent = data
//     del.textContent = 'Remove'
//     del.onclick = ()=> {
//       storage.splice(i, 1);
//       localStorage.setItem("todoLists", JSON.stringify(storage));
//       updateList()
//     }
//     edit.textContent = 'edit'
//     edit.onclick = ()=> {
//       editIput.value = storage[i]
//       editBox.classList.add('extra')
//       editBox.parentElement.classList.add('editBody')
//       let btn = document.querySelector('.editBox button')
//       btn.onclick = ()=>{
//         storage[i] = editIput.value
//         editBox.classList.remove("extra");
//         editBox.parentElement.classList.remove("editBody");
//         editIput.value = ''
//       localStorage.setItem("todoLists", JSON.stringify(storage));
//       }
//       localStorage.setItem("todoLists", JSON.stringify(storage));
//       updateList()
//     }

//     div.appendChild(edit)
//     div.appendChild(del)
//     li.appendChild(div)
//     todoList.appendChild(li)
//   });
// }
