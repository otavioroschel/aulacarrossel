const bebidas = [
    { nome: "Coca-Cola 2L", preco: "R$ 16,00", imagem: "./css/assets/coca2l.png" },
    { nome: "Pepsi 2L", preco: "R$ 15,00", imagem: "./css/assets/pepsi2l.webp" },
    { nome: "Guaraná Antartica 2L", preco: "R$ 14,00", imagem: "./css/assets/guaranaantartica.jpg" },
    { nome: "Fanta Laranja 2L", preco: "R$ 14,00", imagem: "./css/assets/fanta2l.png" },
    { nome: "Sprite 2L", preco: "R$ 14,00", imagem: "./css/assets/sprite.jpg" },
    { nome: "H2OH! 1,5L", preco: "R$ 12,00", imagem: "./css/assets/h20h.webp" },
    { nome: "Schweppes 1,5L", preco: "R$ 12,00", imagem: "./css/assets/citrus.webp" },
    { nome: "Guaraná Jesus 2L", preco: "R$ 12,00", imagem: "./css/assets/guaranajesus.webp" },
];

const cardBebidas = document.querySelector(".cardbebidas");

bebidas.forEach(bebida => {
    const card = document.createElement("div");
    card.classList.add("bebida-card");

    card.innerHTML = `
        <img src="${bebida.imagem}" alt="${bebida.nome}" class="bebida-img">
        <h3 class="bebida-nome">${bebida.nome}</h3>
        <p class="bebida-preco">${bebida.preco}</p>
    `;

    cardBebidas.appendChild(card);
});
