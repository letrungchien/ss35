function show() {
  document.getElementById("container").setAttribute("class", "show");
}

function hide() {
  document.getElementById("container").setAttribute("class", "hide");
}

let books = JSON.parse(localStorage.getItem("books")) || [];

function showBook() {
  let str = "";
  for (let i = 0; i < books.length; i++) {
    str += `
      <div class="item">
          <span>${books[i].name} - <a href="${books[i].url}" target="_blank">${books[i].url}</a></span>
          <button class="btn" onclick="deleBook(${i})">x</button>
      </div>
    `;
  }
  document.getElementById("div").innerHTML = str;
}

showBook();

function addBook() {
  let name = document.getElementById("name").value.trim();
  let url = document.getElementById("url").value.trim();
  if (name === "" || url === "") {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }
  let book = { name: name, url: url };
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  document.getElementById("name").value = "";
  document.getElementById("url").value = "";
  showBook();
}

function deleBook(index) {
  books.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(books));
  showBook();
}

hide();

