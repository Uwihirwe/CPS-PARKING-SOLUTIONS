document.addEventListener("DOMContentLoaded", function() {
  // Get references to your elements
  const airtel = document.getElementById("airtel");
  const cash = document.getElementById("cash");
  const momo = document.getElementById("momo");
  const spen = document.getElementById("spen");
  const visa = document.getElementById("visa");

  // Set initial display property to "none" for all elements
  airtel.style.display = "none";
  cash.style.display = "none";
  momo.style.display = "none";
  spen.style.display = "none";
  visa.style.display = "none";

  // Add your event listeners here
  airtelBtn.addEventListener("click", () => {
    airtel.style.display = "block";
    cash.style.display = "none";
    momo.style.display = "none";
    spen.style.display = "none";
    visa.style.display = "none";
  });

  cashBtn.addEventListener("click", () => {
    cash.style.display = "block";
    airtel.style.display = "none";
    momo.style.display = "none";
    spen.style.display = "none";
    visa.style.display = "none";
  });

  momoBtn.addEventListener("click", () => {
    momo.style.display = "block";
    airtel.style.display = "none";
    cash.style.display = "none";
    spen.style.display = "none";
    visa.style.display = "none";
  });

  spenBtn.addEventListener("click", () => {
    spen.style.display = "block";
    airtel.style.display = "none";
    cash.style.display = "none";
    momo.style.display = "none";
    visa.style.display = "none";
  });

  visaBtn.addEventListener("click", () => {
    visa.style.display = "block";
    airtel.style.display = "none";
    cash.style.display = "none";
    momo.style.display = "none";
    spen.style.display = "none";
  });
});
