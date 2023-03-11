const allGreetings = document.querySelectorAll(".lang");
allGreetings.forEach((a) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  a.style.color = "#" + randomColor;
});
