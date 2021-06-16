// Call eva.replace(); to replace all elements with the data-eva data attribute with SVG elements.
//You can also pass some additional parameters to the replace method to modify the replace function behavior.
// Reference => [https://github.com/akveo/eva-icons]
eva.replace({
  height: 24,
  width: 24,
  fill: "#390d5d",
  animation: {
    type: "shake", // zoom, pulse, shake, flip
    hover: true, // default true
    infinite: true, // default false
  },
});

// Add some backend code here
const ham =  document.querySelector('#hamb')
const { body } = document

ham.addEventListener('click', e =>{ 
    body.classList.toggle('show-nav')
})