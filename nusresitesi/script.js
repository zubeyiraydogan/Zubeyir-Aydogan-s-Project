const menuButton = document.querySelector('.menu');
const navList = document.querySelector('.navlist');

menuButton.addEventListener("click", () => {
  navList.classList.toggle('open');
  console.log('i was clicked')
})

const sr = ScrollReveal ({
distance: '65px',
duration: 2600,
delay: 450,
reset: true



}
);
sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});