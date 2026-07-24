/*
===================================================================================
AUTOR: Johnatan Willow
DATA DE CRIAÇÃO: 05 de Julho de 2026
PROJETO: Site da Igreja Ekklesia (Igreja Cristã Inclusiva)
ARQUIVO: script.js (Global para todas as páginas)
===================================================================================
*/

// ==========================================================================
// 1. LÓGICA DO CARROSSEL (Aplicado na index.html)
// ==========================================================================
const slide = document.getElementById('carouselSlide');
let counter = 0;
const totalSlides = 3;
let slideInterval;

function updateSlide() {
    if (slide) {
        slide.style.transform = `translateX(-${counter * 33.333}%)`;
    }
}

function moveSlide(direction) {
    counter += direction;
    if (counter >= totalSlides) counter = 0;
    if (counter < 0) counter = totalSlides - 1;
    updateSlide();
    resetInterval();
}

function autoPlay() {
    moveSlide(1);
}

function resetInterval() {
    clearInterval(slideInterval);
    if (slide) {
        slideInterval = setInterval(autoPlay, 5000);
    }
}


// ==========================================================================
// 2. FUNÇÕES GLOBAIS (Aplicado em várias páginas)
// ==========================================================================

// Função global para abrir imagens em uma nova aba
function openImage(url) {
    window.open(url, '_blank');
}


// ==========================================================================
// 3. INICIALIZAÇÃO
// ==========================================================================

// Inicia o carrossel quando a página carrega, verificando antes se ele existe
if (slide) {
    resetInterval();
}
// ==========================================================================
// 4. BOTÃO VOLTAR AO TOPO
// ==========================================================================
const btnTopo = document.getElementById("btnVoltarTopo");

// Verifica a rolagem da tela para mostrar ou esconder o botão
window.addEventListener("scroll", function() {
    if (btnTopo) {
        // Se a página rolar mais de 300 pixels para baixo, o botão aparece
        if (window.scrollY > 300) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    }
});

// Ação de clique para subir suavemente
if (btnTopo) {
    btnTopo.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Isso garante a animação suave
        });
    });
}