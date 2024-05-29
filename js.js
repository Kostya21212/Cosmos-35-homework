document.getElementById("randomButton").addEventListener("click", function() {
  const imageNames = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg","09.jpg"];
  const randomIndex = Math.floor(Math.random() * imageNames.length);
  const randomImageName = imageNames[randomIndex];
  const imagePath = "images/" + randomImageName;

  const randomImage = document.getElementById("randomImage");

  randomImage.style.opacity = 0;

  setTimeout(function() {
    randomImage.src = imagePath;
    randomImage.style.opacity = 1;
    document.body.style.backgroundImage = `url(${imagePath})`;
  }, 500);
});

// Початкове значення src картинки установлене на порожній рядок
document.getElementById("randomImage").src = "./images/Background.jpg";
