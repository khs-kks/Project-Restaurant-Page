/* eslint-disable no-alert */
import Homepage from "./pageload";
import ContactPage from "./contactload";
import MenuPage from "./menuload";

// MenuPage();
Homepage();
// ContactPage();

const mainContent = document.querySelector("#content");

function deleteDisplay(parent) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}

function renderDisplay() {
  const allTabs = document.querySelectorAll("button");
  allTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      deleteDisplay(mainContent);

      if (tab.textContent === "Home") {
        Homepage();
        renderDisplay();
      } else if (tab.textContent === "Menu") {
        MenuPage();
        renderDisplay();
      } else {
        ContactPage();
        renderDisplay();
      }
    });
  });
}

renderDisplay();
