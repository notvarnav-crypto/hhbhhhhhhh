document.addEventListener("DOMContentLoaded", function () {

  const button = document.getElementById("hugButton");
  const input = document.getElementById("nameInput");
  const message = document.getElementById("hugMessage");

  button.addEventListener("click", function () {
    const name = input.value.trim();

    if (name === "") {
      alert("Please enter your name first ❤️");
      return;
    }

    message.innerText = `${name}, this is your cinematic hug 🤗`;
    message.classList.add("show");

    createFloatingHearts();
  });

});

function createFloatingHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = "20px";
    heart.style.animation = "floatUp 3s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes floatUp {
  to {
    transform: translateY(-100vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
