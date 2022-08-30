// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");
//   const mobileBtnClose = document.querySelector("[data-menu-close]");

//   menuBtnRef.addEventListener("click", () => {
//     mobileMenuRef.classList.toggle("is-open");
//   });

//   mobileBtnClose.addEventListener("click", () => {
//     mobileMenuRef.classList.toggle("is-open");
//   });
// })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-button]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    body: document.querySelector("body"),
    menuList: document.querySelector(".mob-menu-list"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.menuList.addEventListener("click", removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }

  function removeMenu() {
    refs.menu.classList.add("is-hidden");
  }
})();
