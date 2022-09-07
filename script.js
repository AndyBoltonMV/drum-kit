const buttonList = document.getElementsByClassName("drum");
const buttons = Array.from(buttonList);

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    const sound = new Audio(`./assets/${element.id}.wav`);
    sound.play();
  });
});
