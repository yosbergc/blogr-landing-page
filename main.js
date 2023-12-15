let companyDesktop = document.querySelector('.companyDesktop');
let companyContainer = document.querySelector('.companyContainer');
let productDesktop = document.querySelector('.productDesktop');
let productContainer = document.querySelector('.productContainer');
let connectDesktop = document.querySelector('.connectDesktop');
let connectContainer = document.querySelector('.connectContainer');

companyDesktop.addEventListener('click', () => {
    productContainer.classList.add('hide');
    connectContainer.classList.add('hide');
    if (companyContainer.classList.contains('hide')) {
        companyContainer.classList.remove('hide');
    } else {
        companyContainer.classList.add('hide');
    }
})
productDesktop.addEventListener('click', () => {
    companyContainer.classList.add('hide');
    connectContainer.classList.add('hide');
    if (productContainer.classList.contains('hide')) {
        productContainer.classList.remove('hide');
    } else {
        productContainer.classList.add('hide');
    }
})
connectDesktop.addEventListener('click', () => {
    companyContainer.classList.add('hide');
    productContainer.classList.add('hide');
    if (connectContainer.classList.contains('hide')) {
        connectContainer.classList.remove('hide');
    } else {
        connectContainer.classList.add('hide');
    }
})