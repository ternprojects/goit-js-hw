export const tempImg = item => {
  return `
  <li>
    <img src="${item.preview}"
    data-source = "${item.original}"
    alt="${item.description}">
  </li>
  `;
}