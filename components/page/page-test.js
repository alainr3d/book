var page = Object.create(Page);

page.init();
page.setEl(document.querySelector('.page'));
page.setEl(document.querySelector('.page'));
console.log(page.getEl());
page.closePage();

window.page = page;

//var pageEl = document.querySelector('.page');
//pageEl.style.border = "3px solid yellow ";