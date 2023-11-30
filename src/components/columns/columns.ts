interface Page {
    key: number;
    name: string;
    link: string;
  }
  
  export const pageName: Page[] = [
    { key: 1, name: "Главная", link: "/chief" },
    { key: 2, name: "Продукция", link: "/products" },
    { key: 3, name: "О нас", link: "/aboutUs" },
    { key: 4, name: "Акции", link: "/stock" },
    { key: 5, name: "Топ продаж", link: "topsales" },
    { key: 6, name: "Контакты", link: "contacts" },
    { key: 7, name: "Рецепты", link: "recipes" },
  ];