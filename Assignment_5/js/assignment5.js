//1. Create a button and div using JS, when clicked on the button your basic details should be shown in the div. The static html file should only contain the basic HTML structure, no div/buttons .

const div1 = document.createElement("div");
div1.setAttribute("id", "ctn-1");
document.body.appendChild(div1);
const btn1 = document.createElement("button");
btn1.setAttribute("id", "btn-1");
btn1.innerHTML = "Click to see Details";
document.body.appendChild(btn1);

btn1.addEventListener("click", function () {
  div1.innerHTML = `
    <h3><center>Details</center></h3>
    <p>Name : Joshva</p>
    <p>Age : 22</p>
    <p>Qualification : BE</p>
    <p>PassOut Year : 2023</p>
    `;
});

// 2. Consider an array with name of 5 fruits, map this array and create five checkboxes with their corresponding names. In a div show the fruit names which are checked.

const div2 = document.createElement("div");
div2.setAttribute("id", "ctn-2");
document.body.appendChild(div2);

const arr = ["Apple", "Orange", "Banana", "Mango", "Grapes"];
const arr2 = [];

arr.forEach((fruit) => {
  const cb = document.createElement("input");
  cb.setAttribute("type", "checkbox");
  cb.value = fruit;
  document.body.appendChild(cb);

  const lable = document.createElement("lable");
  lable.setAttribute("for", fruit);
  lable.textContent = fruit;
  document.body.appendChild(lable);

  cb.addEventListener("click", function () {
    if (cb.checked) {
      arr2.push(fruit);
    } else {
      const index = arr2.indexOf(fruit);
      arr2.splice(index, 1);
    }
    div2.textContent = arr2.join(",");
  });
});

//3. Create a toggle button, console the values as either true/ false when toggled.

const toggle = document.createElement("button");
toggle.id = "toggle";
toggle.textContent = "On";
document.body.appendChild(toggle);
let isBtnOn = false;
toggle.addEventListener("click", function () {
  if (isBtnOn) {
    toggle.textContent = "On";
    isBtnOn = false;
  } else {
    toggle.textContent = "Off";
    isBtnOn = true;
  }
  console.log(isBtnOn);
});

// 4. Create an image slider without referring online codes, completely by yourself.

const div3 = document.createElement("div");
div3.setAttribute("id", "slider");
document.body.appendChild(div3);

const scrs = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
];

scrs.forEach((item) => {
  const img = document.createElement("img");
  img.setAttribute("src", item);
  div3.appendChild(img);
});

let currentIndex = 0;
const images = document.querySelectorAll("img");

function changeImage() {
  images.forEach((img) => {
    img.style.visibility = "hidden";
    img.classList.remove("active");
  });
  images[currentIndex].style.visibility = "visible";
  images[currentIndex].classList.add("active");
  currentIndex = (currentIndex + 1) % images.length;
}

const prev = document.createElement("img");
prev.setAttribute("id", "prev");
prev.setAttribute("src", "images/prev.jpg");
prev.style.cursor = "pointer";
document.body.appendChild(prev);

prev.addEventListener("click", function () {
  currentIndex = (currentIndex - 2 + images.length) % images.length;
  changeImage();
});
const next = document.createElement("img");
next.setAttribute("id", "next");
next.setAttribute("src", "images/next.jpg");
next.style.cursor = "pointer";
document.body.appendChild(next);

next.addEventListener("click", function () {
  changeImage();
});

changeImage();

setInterval(changeImage, 10000);
