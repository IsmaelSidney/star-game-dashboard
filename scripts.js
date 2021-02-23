const info = document.querySelector(".game-info");
const menuItem = document.querySelector(".menu-itens-list");
const cardsGame = document.querySelector(".cards-carrousel");
const cardsType = document.querySelector(".cards-carrousel-type");

const checkedGame = (item) => {
  for (let i = 0; i <= cardsType.children.length + 1; i++) {
    if (cardsType.children[i].id == item) {
      console.log(cardsGame.children[i].id);
      cardsType.children[i].classList.add("active");
      continue;
    }
    cardsType.children[i].classList.remove("active");
  }
};

const checkedCategory = (item) => {
  for (let i = 0; i < cardsGame.children.length; i++) {
    if (cardsGame.children[i].id == item) {
      cardsGame.children[i].classList.add("activeCategory");
      cardsGame.children[i].style.transform = `translateX(calc(-150px * ${i}))`;
      console.log(cardsGame.children[i].getAttribute('id'))
      cardsGame.children[i].animate(
        [
          { transform: "translateX(0px)" },
          { transform: `translateX(calc(-150px * ${i}))` },
        ],
        {
          duration: 600,
        }
      );
      var cont = cardsGame.children[i].id;
    //   console.log(cont);
      for (let j = 0; j < cont - 1; j++) {
        // console.log(cardsGame.children[j].id);
        cardsGame.children[j].style.transform = `translateX(calc(190px))`;
        // cardsGame.children[j].animate(
        //   [
        //     { transform: "translateX(0px)" },
        //     { transform: `translateX(-190px)` },
        //   ],
        //   {
        //     duration: 600,
        //   }
        // );
      }
      continue;
    }
    cardsGame.children[i].classList.remove("activeCategory");
    cardsGame.children[i].style.transform = "";
  }
};

const checkedMenu = (item) => {
  let menus = ["home", "mark", "chat", "profile", "config"];
  for (let i = 0; i < menuItem.children.length; i++) {
    if (menuItem.children[i].id == menus[item - 1]) {
      menuItem.children[i].classList.add("activeMenu");
      continue;
    }
    menuItem.children[i].classList.remove("activeMenu");
  }
};
