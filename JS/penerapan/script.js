let tombol = document.querySelector('section#bagian-ketiga > div > button'),
    penghitung = document.querySelector('section#bagian-ketiga > div > p > span');

tombol.addEventListener('click', () => {
    penghitung.textContent = Number(penghitung.textContent) + 1;
});