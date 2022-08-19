const wrapper = document.querySelector(".wrapper"),
   generateBtn = wrapper.querySelector(".form button");
qrInput = wrapper.querySelector(".form input");
qrImg = wrapper.querySelector(".qr-code img");
wrapInput = wrapper.querySelector(".form .wrap");
const inputCross = wrapInput.querySelector("img");

generateBtn.addEventListener("click", () => {
   let qrValue = qrInput.value;
   if (!qrValue) return; // if the input is empty then return from here
   generateBtn.innerText = "Generating QR Code...";
   // API and passing the api  to qrImg
   qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
   qrImg.addEventListener("load", () => {
      wrapper.classList.add("active");
      generateBtn.innerText = "Generate QR code";
      wrapInput.classList.add("active");
   });
});

qrInput.addEventListener("keyup", () => {
   if (!qrInput.value) {
      wrapper.classList.remove("active");
      wrapInput.classList.remove("active");
   }
});

inputCross.addEventListener("click", () => {
   wrapper.classList.remove("active");
   wrapInput.classList.remove("active");
   qrInput.value = "";
});
