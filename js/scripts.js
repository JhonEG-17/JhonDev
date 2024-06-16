//1.- FUNCION CANVAS PARA FONDO ESTILO MATRIX

const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const cols = Math.floor(canvas.width / 20) + 1;
const position_y = Array(cols).fill(0);

function matrix() {
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00bfff';
    ctx.font = '15pt monospace';

    position_y.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) {
            position_y[ind] = 0;
        } else {
            position_y[ind] = y + 20;
        }
    });
}

//PARA EL CASO DE SER UN DISPOSITIVO MOVIL
setInterval(matrix, 50);

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    const rows = document.querySelectorAll('.matrix-row');

    setInterval(() => {
        rows.forEach(row => {
            let content = row.getAttribute('data-content');
            content = content.slice(1) + content.charAt(0);
            row.setAttribute('data-content', content);
        });
    }, 100);
}

//2.- FUNCION DE CARRUCEL PARA PROYECTOS Y CERTIFICADOS

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3, // Número de slides que quieres ver al mismo tiempo
    spaceBetween: 5, // Espacio entre cada slide
    loop: true,
    coverflowEffect: {
        depth: 200,
        modifier: 1,
        slideShadows: true,
        rotate: 0,
        stretch: 0
    }
});