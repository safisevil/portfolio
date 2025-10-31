// 💖 Floating hearts animation on click
document.addEventListener("click", (e) => {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
});
