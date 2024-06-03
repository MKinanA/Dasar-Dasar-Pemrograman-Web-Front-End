let tombol = document.querySelector('button'),
    hitung = 0;

tombol.innerText = hitung;

tombol.addEventListener('click', () => {
    hitung = hitung + 1;
    tombol.innerText = hitung;
});