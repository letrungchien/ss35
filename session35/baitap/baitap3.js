const products = [
  {
      id: 1,
      name: 'Laptop Dell XPS 15',
      price: 35990000,
      image: './img/1.png',
      description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
  },
  {
      id: 2,
      name: 'iPhone 15 Pro Max',
      price: 32990000,
      image:  './img/2.png',
      description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',
  },
  {
      id: 3,
      name: 'Samsung Galaxy S24 Ultra',
      price: 28990000,
      image:  './img/3.png',
      description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
  },
  {
      id: 4,
      name: 'Tai nghe Sony WH-1000XM5',
      price: 7990000,
      image:  './img/4.png',
      description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
  },
  {
      id: 5,
      name: 'Apple Watch Series 9',
      price: 11990000,
      image:  './img/5.png',
      description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.',
  },
  {
      id: 6,
      name: 'Loa JBL Charge 5',
      price: 3990000,
      image:  './img/6.png',
      description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
  },
];
localStorage.setItem("products",JSON.stringify(products));

function show() {
  let str="";
  for (let i = 0; i < products.length; i++) {
      str+=`
      <div class="content">
          <img src="${products[i].image}" alt=""><br>
          <div class="content1">
              <b>${products[i].name}</b>
              <p>${products[i].description}</p>
              <p>${products[i].price.toLocaleString('vi-VN')} VNĐ</p>
          </div>
          <button class="btn">Buy</button>
      </div>
      `
  }
  document.getElementById("div").innerHTML=str;
}
function search() {
  let products=JSON.parse(localStorage.getItem("products"));
  let str="";
  let name=document.getElementById("text").value;
  for (let i = 0; i < products.length; i++) {
      if(products[i].name.toLowerCase().includes(name.toLowerCase())){
      str+=`
      <div class="content">
          <img src="${products[i].image}" alt=""><br>
          <div class="content1">
              <b>${products[i].name}</b>
              <p>${products[i].description}</p>
              <p>${products[i].price.toLocaleString('vi-VN')} VNĐ</p>
          </div>
          <button class="btn">Buy</button>
      </div>
      `
      }
  }
  document.getElementById("div").innerHTML=str;
}
search();