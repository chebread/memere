import '../routes/home.css';
export const renderHTML = (content, targetElement) => {
  targetElement.innerHTML = '';
  targetElement.insertAdjacentHTML('afterBegin', content);
};
