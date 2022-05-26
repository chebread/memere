export const renderHTML = (content, targetElement) => {
  targetElement.innerHTML = '';
  targetElement.insertAdjacentHTML('afterBegin', content);
};
