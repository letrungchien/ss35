
let employee = JSON.parse(localStorage.getItem("employee")) || [];
function add() {
    let name = document.getElementById("name").value.trim();
    let position = document.getElementById("position").value.trim();
    if (name === "" || position === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    let id = employee.length ? employee[employee.length - 1].id + 1 : 1;
    let employe = {
        id: id,
        name: name,
        position: position
    };
    employee.push(employe);
    localStorage.setItem("employee", JSON.stringify(employee));


    document.getElementById("name").value = "";
    document.getElementById("position").value = "";


    updatePagination();
}

let items = 3; 
let currentPage = 1;


function getPages() {
    return Math.ceil(employee.length / items);
}
function calStartEnd() {
    let start = (currentPage - 1) * items;
    let end = currentPage * items;
    return { start, end };
}
function renderItem() {
    const { start, end } = calStartEnd();
    let str = "";
    for (let i = start; i < end && i < employee.length; i++) {
        str += `
            <tr>
                <td>${employee[i].id}</td>
                <td>${employee[i].name}</td>
                <td>${employee[i].position}</td>
            </tr>`;
    }
    document.getElementById("tbody").innerHTML = str;
}


function renderPage() {
    let pages = getPages();
    let str = "";
    for (let i = 1; i <= pages; i++) {
        str += `<button class="btn2" onclick="clickPage(${i})" ${i === currentPage ? 'style="font-weight: bold;"' : ''}>${i}</button>`;
    }

    document.getElementsByClassName("pages")[0].innerHTML = `
        <button class="btn1" onclick="prevPage()">Pre</button>
        ${str}
        <button class="btn3" onclick="nextPage()">Next</button>
    `;
}

function clickPage(page) {
    currentPage = page;
    renderItem();
    renderPage();
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderItem();
        renderPage();
    }
}
function nextPage() {
    if (currentPage < getPages()) {
        currentPage++;
        renderItem();
        renderPage();
    }
}
function updatePagination() {
    renderItem();
    renderPage();
}
updatePagination();
