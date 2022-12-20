export default function contact() {
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
  tabmenu.textContent = "Menu";

  const tabcontacts = document.createElement("button");
  tabcontacts.classList.add("tabcontacts");
  tabcontacts.classList.add("current-tab");
  tabcontacts.textContent = "Contacts";

  tabs.appendChild(tabhome);
  tabs.appendChild(tabmenu);
  tabs.appendChild(tabcontacts);
  header.appendChild(tabs);

  content.appendChild(header);

  //   POPULATE MAIN

  main.classList.add("main");

  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");

  const phone = document.createElement("div");
  phone.textContent = "📞 123 456 789";

  const address = document.createElement("div");
  address.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA";

  const img = document.createElement("img");
  img.setAttribute("src", "./restaurant-location.png");
  img.setAttribute("alt", "Our location");
  img.classList.add("img-location");

  mainContent.appendChild(phone);
  mainContent.appendChild(address);
  mainContent.appendChild(img);

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
