const includes = document.querySelectorAll("[data-include]");

includes.forEach(async (element) => {
  const file = element.dataset.include;
  const response = await fetch(file);
  element.outerHTML = await response.text();
});
