export default function loadMenu() {
  const content = document.querySelector("#content");
  const header = document.createElement("div");
  const main = document.createElement("div");
  const footer = document.createElement("div");

  header.classList.add("header");

  //   POPULATE HEADER

  const h1 = document.createElement("h1");
  h1.textContent = "Gabby's Bakery";
  header.appendChild(h1);

  const tabs = document.createElement("div");
  tabs.classList.add("tabs");

  const tabhome = document.createElement("button");
  tabhome.classList.add("tabhome");
  tabhome.textContent = "Home";

  const tabmenu = document.createElement("button");
  tabmenu.classList.add("tabmenu");
  tabmenu.classList.add("current-tab");
  tabmenu.textContent = "Menu";

  const tabcontacts = document.createElement("button");
  tabcontacts.classList.add("tabcontacts");
  tabcontacts.textContent = "Contacts";

  tabs.appendChild(tabhome);
  tabs.appendChild(tabmenu);
  tabs.appendChild(tabcontacts);
  header.appendChild(tabs);

  content.appendChild(header);

  //   POPULATE MAIN

  main.classList.add("main");

  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content-menu");

  for (let i = 0; i < 8; i += 1) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const breadImage = document.createElement("img");
    breadImage.setAttribute("src", "./pexels-emmanuel-zua-8714794.jpg");
    breadImage.setAttribute("alt", "Bread picture");
    breadImage.setAttribute("height", "150px");
    breadImage.setAttribute("width", "auto");
    breadImage.classList.add("food-picture");

    const foodTitle = document.createElement("p");
    foodTitle.classList.add("menu-item-title");
    foodTitle.textContent = "Title";

    const foodIngredients = document.createElement("p");
    foodIngredients.classList.add("menu-item-ingredients");
    foodIngredients.textContent = "List of ingredients";

    menuItem.appendChild(breadImage);
    menuItem.appendChild(foodTitle);
    menuItem.appendChild(foodIngredients);
    mainContent.appendChild(menuItem);
  }

  main.appendChild(mainContent);
  content.appendChild(main);

  //   POPULATE FOOTER

  footer.classList.add("footer");
  footer.textContent = "Copyleft 2022";

  const githubLink = document.createElement("a");
  githubLink.setAttribute(
    "href",
    "https://github.com/khs-kks/Project-Restaurant-Page"
  );
  githubLink.textContent = " KHS";

  footer.appendChild(githubLink);
  content.appendChild(footer);
}
