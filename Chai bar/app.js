const menu = [
    {
      id: 1,
      title: "spinach omellete",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-1.JPG",
      desc: `In a bowl, beat the eggs, and stir in the baby spinach and Parmesan cheese. Season with onion powder, nutmeg, salt, and pepper.`,
    },
    {
      id: 2,
      title: "Penne",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.JPG",
      desc: ` Penne is the plural form of the Italian penna, deriving from Latin penna, and is a cognate of the English word pen.`,
    },
    {
      id: 3,
      title: "milkshake",
      category: "shakes",
      price: 7.99,
      img: "./images/item-3.JPG",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "mushroom omellete",
      category: "breakfast",
      price: 9.99,
      img: "./images/item-4.JPG",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Kebbab",
      category: "lunch",
      price: 19.99,
      img: "./images/item-5.JPG",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "watermelon",
      category: "shakes",
      price: 4.99,
      img: "./images/item-6.JPG",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon with egg",
      category: "breakfast",
      price: 9.99,
      img: "./images/item-7.JPG",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "donner",
      category: "lunch",
      price: 7.99,
      img: "./images/item-8.JPG",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "faloode",
      category: "shakes",
      price: 8.99,
      img: "./images/item-9.JPG",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "falafel",
      category: "dinner",
      price: 5.99,
      img: "./images/item-10.JPG",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const sectionCenter = document.querySelector(".section-center");
  const container = document.querySelector(".btn-container");
  
  
  window.addEventListener("DOMContentLoaded", function () {
      displayMenuItems(menu);
      displayMenuButtons();
  });


  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item){
        //   console.log(item);
          return `<article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
      });
      displayMenu = displayMenu.join("");
      sectionCenter.innerHTML = displayMenu;
  }

  function displayMenuButtons(){
    const categories = menu.reduce(function(values,item){
      if(!values.includes(item.category)) {
        values.push(item.category);
      }
      return values

    },
    ["all"]
    );
    const categoryBtns = categories.map(function(category){
      return `<button class="filter-btn" type="button" data-id=${category}>
      ${category}
    </button>`
    })
    .join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
     //filter items
  filterBtns.forEach(function(btn){
    btn.addEventListener('click',function(e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem.category);
            if (menuItem.category === category) {
                return menuItem;
            }
            
        });
        // console.log(menuCategory);
        if (category === 'all'){
            displayMenuItems(menu);
        } 
        else {
            displayMenuItems(menuCategory);
        }
    });
});
  }