// Створіть функцію або функції які наповнюють тег body HTML-тегами article. 
// Вміст кожного article додається за допомогою циклу та складається з заголовка -тег h3, зображення - тег img, опису - тег p. 
// Вміст тегів та атрибути отримуєте програмно(!) з наданого масиву об'єктів contentArray. 
// В проект можна самостійно додати файли-зображень з гугла або створити однотипні зображення-заглушки на сайті https://dummyimage.com/

// Масив об'єктів для генерації контенту
const contentArray = [
  {
    title: 'Манго',
    text: 'Манго багате на вітамін C та антиоксиданти, корисне для імунітету.',
    imagePath: './images/mango.jpg',
    altText: 'Зображення манго'
  },
  {
    title: 'Драконів фрукт',
    text: 'Драконів фрукт сприяє зниженню рівня цукру в крові.',
    imagePath: './images/dragonFruit.jpg',
    altText: 'Зображення драконівого фрукта'
  },
  {
    title: 'Лічі',
    text: 'Лічі містить багато вітаміну В, корисне для нервової системи.',
    imagePath: './images/lychee.jpg',
    altText: 'Зображення лічі'
  },
  // додайте більше об'єктів за бажанням
];

function createArticle(content) {
  const article = document.createElement('article');
  const title = document.createElement('h3');
  title.textContent = content.title;
  const image = document.createElement('img');
  image.src = content.imagePath;
  image.alt = content.altText;
  const text = document.createElement('p');
  text.textContent = content.text;
  article.appendChild(title);
  article.appendChild(image);
  article.appendChild(text);
  return article;
}

function addArticles(contentArray) {
  const body = document.body;
  contentArray.forEach(content => {
      const article = createArticle(content);
      body.appendChild(article);
  });
}

addArticles(contentArray);