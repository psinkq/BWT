
const container = document.getElementById('container');
const numBlocks = Math.floor(Math.random() * 7) + 6; // Случайное число от 6 до 12

for (let i = 0; i < numBlocks; i++) {
  const block = document.createElement('div');
  block.className = 'block'; // Добавляем класс для стилизации (опционально)

  // Здесь задайте содержимое блока.  Замените это на ваш собственный контент.
  block.innerHTML = `
    <h3>Блок ${i + 1}</h3>
    <p>Это содержимое блока номер ${i + 1}.  Можно добавить здесь больше информации, например, данные из API.</p>
  `;

  container.appendChild(block);
}