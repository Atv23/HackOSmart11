const card = document.querySelector('#card');
const heading = document.querySelector('#heading');

card.addEventListener('mousemove', e => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

card.addEventListener('mouseenter', e => {
  card.classList.add('active');
  heading.style.textShadow = '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0f0, 0 0 70px #0f0, 0 0 80px #0f0, 0 0 100px #0f0, 0 0 150px #0f0';
});

card.addEventListener('mouseleave', e => {
  card.classList.remove('active');
  heading.style.textShadow = '';
});
