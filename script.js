const topBlock = document.querySelector('.top-block');
const area = document.querySelector('.area');
const editBlock = document.querySelector('.edit-block');
const styleBlock = document.querySelector('.style-block');
const mainBlock = document.querySelector('.main-block');
const addBlock = document.querySelector('.add-block');
const formCreateTable = document.querySelector('.formCreateTable');
const formCreateList = document.querySelector('.formCreateList');
const colorText = document.forms.formColors.txColor;
const colorBg = document.forms.formColors.bgColor;
const diffColors1 = document.querySelectorAll('.color1');
const diffColors2 = document.querySelectorAll('.color2');
// функція, що викликається при кліку на кнопку edit
function editBtn() {
    area.value = topBlock.innerHTML;
    editBlock.classList.remove('hidden');
    styleBlock.classList.add('hidden');
}
// функція, що викликається при кліку на кнопку save
function saveBtn() {
    topBlock.innerHTML = area.value;
    editBlock.classList.add('hidden');
}
// функція, що викликається при кліку на кнопку style
function styleBtn() {
    editBlock.classList.add('hidden');
    styleBlock.classList.remove('hidden')
}
// функція, що викликається при кліку на кнопку add
function addBtn() {
    mainBlock.classList.add('hidden');
    addBlock.classList.remove('hidden')
}
// функція, що викликається при кліку на кнопку back
function backBtn() {
    mainBlock.classList.remove('hidden');
    addBlock.classList.add('hidden')
}
// функція, що викликається при кліку на поточний радіо-інпут і міняє розмір заданого тексту
function fontSize() {
    topBlock.style.fontSize = event.target.value;
}
// функція, що викликається при кліку на опції select і міняє font-family в заданому тексті
function fontFamily() {
    topBlock.style.fontFamily = event.target.value;
}
// функція, що викликається при кліку на поточний сheckbox і міняє жирність заданого тексту
function fontWeight() {
    topBlock.style.fontWeight = event.target.checked ? 'bold' : 'normal';
}
// функція, що викликається при кліку на поточний сheckbox і міняє стиль в заданому тексті на italic
function fontStyle() {
    event.target.checked ? topBlock.classList.add('style') : topBlock.classList.remove('style');
}
// клік на кнопку text color відбувається звідси(з js) і виконується функція, що міняє колір тексту
const hidBox1 = document.querySelector('.hidBox1');
colorText.onclick = function () {
    hidBox1.classList.remove('hidden');
}
for (let i = 0; i < diffColors1.length; i++) {
    diffColors1[i].onclick = function () {
        topBlock.style.color = diffColors1[i].style.background;
        hidBox1.classList.add('hidden');
    }
}
// клік на кнопку background color відбувається звідси(з js) і виконується функція, що міняє колір фону
const hidBox2 = document.querySelector('.hidBox2');
colorBg.onclick = function () {
    hidBox2.classList.remove('hidden');
}
for (let i = 0; i < diffColors2.length; i++) {
    diffColors2[i].onclick = function () {
        topBlock.style.background = diffColors2[i].style.background;
        hidBox2.classList.add('hidden');
    }
}


// функція, що викликається при кліку на радіо-інпути, для вибору відображення відповідно
// форми для таблиці або форми для списку
function chooseBtn() {
    if (event.target.dataset.create === 'table') {
        formCreateTable.classList.remove('hidden');
        formCreateList.classList.add('hidden');
    }
    else if (event.target.dataset.create === 'list') {
        formCreateTable.classList.add('hidden');
        formCreateList.classList.remove('hidden');
    }
}
// функція, що створює таблицю, і викликається при кліку на кнопку create button
function createTable() {
    let form = document.forms['formCreateTable'];
    let countTr = form.countTr.value;
    let countTd = form.countTd.value;
    let widthBd = form.widthBd.value;
    let heightTD = form.heightTD.value;
    let widthTD = form.widthTD.value;
    let styleBd = form.styleBd.value;
    let colorBd = form.colorBd.value;
    area.value += `<table >`;
    for (let i = 1; i <= countTr; i++) {
        area.value += `<tr>`;
        for (let j = 1; j <= countTd; j++) {
            area.value += `<td style = "border-width: ${widthBd}px; width: ${widthTD}px; 
            height: ${heightTD}px;  border-style:${styleBd}; border-color:${colorBd}">TD</td>`;
        }
        area.value += `</tr>`;
    }
    area.value += `</table>`;
    form.classList.add('hidden');
    backBtn();
    form.reset();
}
// функція, що створює список, і викликається при кліку на кнопку create list
function createList() {
    let li = document.forms['formCreateList'];
    let countLi = li.countLi.value;
    let typeMr = li.typeMr.value;
    area.value +=`<ul type = "${typeMr}" style = "margin: 10px ">`
    for (let i = 1; i <= countLi; i++) {
        area.value += `<li>sms</li>`
    }
    area.value +=`</ul>`;
    li.classList.add('hidden');
    backBtn();
    li.reset();
}

