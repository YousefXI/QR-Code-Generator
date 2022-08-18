const wrapper = document.querySelector(".wrapper"),
   generateBtn = wrapper.querySelector(".form button");
qrInput = wrapper.querySelector(".form input");

generateBtn.addEventListener("click", () => {
   let qrValue = qrInput.value;
   console.log(qrValue);

   wrapper.classList.add("active");
});
