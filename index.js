const modal = document.getElementById("custom-modal");
let all_price = document.getElementById("all_price");
let phone1 = document.getElementById("phone1");
let phone2 = document.getElementById("phone2");
let phone3 = document.getElementById("phone3");

const openModal = () => {
  modal.classList.remove("d-none");
};
const closeModal = () => {
  modal.classList.add("d-none");
};
const add = (price, id) => {
  console.log(price);
  all_price.innerText = Number(all_price.textContent) + price;
  if (id == 1) {
    phone1.innerText = Number(phone1.textContent) + 1;
  }
  if (id == 2) {
    phone2.innerText = Number(phone2.textContent) + 1;
  }
  if (id == 3) {
    phone3.innerText = Number(phone3.textContent) + 1;
  }
};
const minus = (price, id) => {
  if (Number(all_price.textContent) - price >= 0)
    all_price.innerText = Number(all_price.textContent) - price;
  if (id == 1 && Number(phone1.textContent) - 1 >= 0) {
    phone1.innerText = Number(phone1.textContent) - 1;
  }
  if (id == 2 && Number(phone2.textContent) - 1 >= 0) {
    phone2.innerText = Number(phone2.textContent) - 1;
  }
  if (id == 3 && Number(phone3.textContent) - 1 >= 0) {
    phone3.innerText = Number(phone3.textContent) - 1;
  }
};
