function show() {
    document.getElementById("formContainer").classList.add("show");
}


function hide() {
    document.getElementById("formContainer").classList.remove("show");
}


function addCategory() {
    const maDanhMuc = document.getElementById("maDanhMuc").value.trim();
    const tenDanhMuc = document.getElementById("tenDanhMuc").value.trim();
    const status = document.querySelector('input[name="status"]:checked').value;

    if (!maDanhMuc || !tenDanhMuc) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    const table = document.getElementById("categoryTable").getElementsByTagName('tbody')[0];

    const newRow = `
        <tr>
            <td>${maDanhMuc}</td>
            <td>${tenDanhMuc}</td>
            <td>
                <button class="${status === 'Đang hoạt động' ? 'btn3' : 'btn4'}">
                    <span><i class="fa-regular fa-circle-dot"></i></span> ${status}
                </button>
            </td>
            <td>
                <button class="btn6"><i class="fa-solid fa-pen"></i></button>
            </td>
        </tr>
    `;

    table.insertAdjacentHTML('beforeend', newRow);


    document.getElementById("maDanhMuc").value = "";
    document.getElementById("tenDanhMuc").value = "";
    hide();
}