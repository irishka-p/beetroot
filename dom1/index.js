// const app = document.getElementById("js-app");
//
// app.style.borderRadius = "20px";
/* відтерміновує заокруглення бордеру на 5 с 
setTimeout(() => {
  app.style.borderRadius = '20px';
}, 5000)


/* додати класи */
// app.classList.add('test-class-name');

/* забрати класи*/
// app.classList.remove('app');

/* вивести значення в консоль*/
// console.log(app.style.borderRadius);

// app.innerHtml = `
// <p>
// js
// </p>
//  ` переписати дані тобто замість того що там вже є

// не замінювати контент, а просто добавляти
// app.appendChild(
//  <p>
//  js
//  </p>
//
// !!!!!!! не виходить

// const newDiv = document.createElement('div');
// newDiv.innerText = 'Hello';
// newDiv.classList.add('title');
// app.appendChild(newDiv);

//  console.log(items);

//
// for (const k in items) [
//   console.log(k)
// ] не викорис бо виводяться лишні дані

const items = document.getElementsByClassName("js-item");
let count = 0;
for (let item of items) {
  count++;
  console.log(count);
  
  if (count % 2 === 0) continue;
  items[count].style.color = "green";
  
  
}


// Завдання кожен 2 ітем в списку має бути кольоровим, і змінити лістстайл тайп ноне

//* Static
const todoButton = document.getElementById("js-todo-button");
const todoList = document.getElementById("js-todo-list");

// const createNewTodoItem = ( ) => {
//   const todoInput = document.getElementById('js-todo-input');
//   console.log(todoInput.value);
// };
// може бути і так
const createNewTodoItem = () => {
  const value = document.getElementById("js-todo-input").value;

  if (value) {
    if (value.length >= 5) {
      const li = document.createElement("li");
      li.classList.add("todo-item");
      li.innerText = value;

      li.addEventListener("click", () => li.remove());
      todoList.appendChild(li);
      document.getElementById("js-todo-input").value = "";
    } else {
      alert("введіть більше символів (більше 5)");
    }
  } else {
    alert("поле залишилось пусте?");
  }
};

console.log(todoButton);
todoButton.addEventListener("click", createNewTodoItem);

//* Listener
todoButton.addEventListener('click', () =>{
  console.log('!!!');
});
