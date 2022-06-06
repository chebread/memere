export const appendHTML = (elem, targetElement) => {
  targetElement.innerHTML = '';
  targetElement.appendChild(elem);
};
