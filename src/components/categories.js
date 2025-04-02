class Categories extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  loadData() {
    this.data = [
      {
        title: "brake system",
        images: {
          lg: "/public/brake.webp",
          md: "/public/brake.webp",
          sm: "/public/brake.webp",
          xs: "/public/brake.webp"
        },
        items: [
          "electric brakes",
          "emergency brakes",
          "hydraulic brakes",
          "mechanical brakes"
        ],
        link: "#",
        linkText: "shop all"
      },
      {
        title: "lighting parts",
        images: {
          lg: "/public/lighting.webp",
          md: "/public/lighting.webp",
          sm: "/public/lighting.webp",
          xs: "/public/lighting.webp"
        },
        items: [
          "fog lights",
          "turn signals",
          "tail lights",
          "switches & relays"
        ],
        link: "#",
        linkText: "shop all"
      },
      {
        title: "tires & wheels",
        images: {
          lg: "/public/tires.webp",
          md: "/public/tires.webp",
          sm: "/public/tires.webp",
          xs: "/public/tires.webp"
        },
        items: [
          "atturo tires",
          "moto Metals",
          "wheels tires",
          "XD wheels"
        ],
        link: "#",
        linkText: "shop all"
      }
    ];
  }

  render () {
    this.shadow.innerHTML =
    /*html*/`
    <style>

        button{
            background-color: transparent;
            border: none;
        }

        ul{ 
            list-style: none; 
            padding: 0; 
            margin: 0; 
        }

        img{
            max-width: 100%;
            object-fit: cover;
        }


        h1, h2, h3, h4, h5, h6, span, li, label, a{ 
            margin: 0;
            font-family: "Ubuntu", serif;
        }

        a{
            text-decoration: none;
            color: inherit;
        }


        img, picture{
            object-fit: cover;
            width: 100%;
        }

        footer{  
            width: 90%;
        }

        .categories{ 
            display: grid;
            grid-template-columns: repeat(3, 1fr);  
            gap: 2rem; 
            width: 100%;
            padding: 2rem;
        }

        .category{ 
            align-items: center;
            background-color: hsl(0, 0%, 96%);
            display: grid;
            gap: 0.5rem;
            grid-template-columns: repeat(2, 1fr);
            padding: 2.5rem;
        }

        .category-info{ 
            display: flex; 
            flex-direction: column;
            gap: 1rem
        }

        .category-title h2{
            font-size: 1.2rem;
            text-align: left;
            font-weight: 700;
            text-transform: uppercase;
        }

        .sub-categories ul{
            display: flex;
            flex-direction: column;
            gap:0.5rem;
        }

        .sub-categories ul li{
            font-size: 0.9rem;
            font-weight: 400;
            text-transform: capitalize;
        }

        .category-link a{
            font-size: 0.85rem;
            text-transform: capitalize;
            font-weight: 700;

        }

        .category-link a::after{
            color: hsl(42 98%, 54%);
            content: ">>";
            margin-left: 0.5rem;
        }

    </style>
    <section class="categories"></section>
 `;
 const categoriesSection = this.shadow.querySelector('.categories');

 this.data.forEach(category => {
   
   const categoryDiv = document.createElement('div');
   categoryDiv.className = 'category';
   categoriesSection.appendChild(categoryDiv); 
   
   const imageDiv = document.createElement('div');
   imageDiv.className = 'category-image';
   imageDiv.innerHTML = `
     <picture>
       <source srcset="${category.images.lg}" media="(min-width: 1920px)">
       <source srcset="${category.images.md}" media="(min-width: 1024px)">
       <source srcset="${category.images.sm}" media="(min-width: 768px)">
       <source srcset="${category.images.xs}" media="(min-width: 480px)">
       <img src="${category.images.xs}" alt="${category.title}">
     </picture>
   `;
   categoryDiv.appendChild(imageDiv);

   const infoDiv = document.createElement('div');
   infoDiv.className = 'category-info';
   categoryDiv.appendChild(infoDiv);

   const title = document.createElement('h2');
   title.className = 'category-title';
   title.textContent = category.title;
   infoDiv.appendChild(title);

   const subCategories = document.createElement('div');
   subCategories.className = 'sub-categories';
   const ul = document.createElement('ul');
   
   category.items.forEach(item => {
     const li = document.createElement('li');
     li.textContent = item;
     ul.appendChild(li);
   });
   
   subCategories.appendChild(ul);
   infoDiv.appendChild(subCategories);

   const linkDiv = document.createElement('div');
   linkDiv.className = 'category-link';
   const link = document.createElement('a');
   link.href = category.link;
   link.textContent = category.linkText;
   linkDiv.appendChild(link);
   infoDiv.appendChild(linkDiv);
     });
  }
}

customElements.define('categories-component', Categories);
