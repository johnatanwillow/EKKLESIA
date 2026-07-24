# ⛪ Igreja Ekklesia - Site Institucional

![Status](https://img.shields.io/badge/Status-Ativo-success)
![Versão](https://img.shields.io/badge/Versão-1.0-blue)
![Tecnologias](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS-orange)

## 📖 Sobre o Projeto
Este é o repositório do site oficial da **Igreja Ekklesia**, localizada em Goiânia/GO. O projeto foi desenvolvido com o objetivo de criar uma presença digital acolhedora, informativa e de fácil navegação para a comunidade. O site https://johnatanwillow.github.io/EKKLESIA/ centraliza informações essenciais sobre horários de cultos, nossa visão teológica, projetos sociais, quem somos e canais de atendimento.

## 🏳️‍🌈 Quem Somos
A Igreja Ekklesia é uma **Igreja Cristã Inclusiva**. Compreendemos a necessidade profunda de congregar em um ambiente onde todas as pessoas, especialmente a comunidade cristã LGBTQIAPN+, sintam-se verdadeiramente bem-vindas, respeitadas e amadas exatamente como são. 

Nosso pilar é viver pela fé e sermos aceitos pela graça. Fundamentamos nossa teologia no resgate da essência da mensagem de Cristo: o amor incondicional, combatendo o legalismo e oferecendo um espaço seguro de escuta empática e cuidado clínico (psicológico e psicanalítico) sem julgamentos ou práticas de reversão.

## ⚙️ Estrutura e Páginas
O site é composto por páginas estáticas interligadas e otimizadas para carregamento rápido:
* **Início (`index.html`):** Apresentação, vídeo de boas-vindas, horários de encontros (Cultos e Pequenos Grupos) e mural de avisos com carrossel interativo.
* **Teologia Inclusiva (`inclusao.html`):** Explicação da nossa base bíblica e visão teológica.
* **Ouvir e Acolher (`acolher.html`):** Informações sobre o nosso núcleo de apoio psicológico e psicanalítico.
* **Filantropia (`filantropia.html`):** Detalhes sobre o ministério *Ekklesia em Ação* e arrecadação de doações.
* **Fale Conosco (`contato.html`):** Canais de comunicação, pedidos de oração e dados para contribuições (Dízimos e Ofertas via PIX).

## 🛠️ Tecnologias Utilizadas
Para garantir um sistema leve, responsivo e de fácil manutenção, optei por não utilizar frameworks pesados, construindo a interface com linguagens nativas:
* **HTML5:** Semântica e estruturação do conteúdo.
* **CSS3:** Estilização global e responsividade (Media Queries) em arquivo único. Uso de variáveis nativas (`:root`) para padronização da paleta de cores e da fita arco-íris (inclusive-gradient).
* **JavaScript (Vanilla JS):** Lógica do carrossel de imagens, expansão de mídias e script do botão flutuante de "Voltar ao Topo".
* **FontAwesome:** Biblioteca de ícones vetoriais.

## 📁 Estrutura de Diretórios
O código foi refatorado e organizado para separar estrutura, estilo e comportamento:

```text
/projeto-ekklesia
│── index.html
│── inclusao.html
│── acolher.html
│── filantropia.html
│── quemsomos.html
│── contato.html
│── README.md
├── css/
│   └── style.css       # Folha de estilos unificada
├── js/
│   └── script.js       # Lógica global e componentes interativos
└── images/
    └── logo.png        # Mídias, fotos e ícones do site