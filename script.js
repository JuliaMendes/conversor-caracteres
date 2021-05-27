const text = document.querySelector('.text_box')
const converterButton = document. querySelector('button')
const opcionselect = document.querySelectorAll('.caracters')

let valueText
let valueSelect
let toReplace = ','
let per = ','


converterButton.addEventListener('click', getText)
opcionselect[0].addEventListener('change', getSelectIndexZero)
opcionselect[1].addEventListener('change', getSelectIndexOne)

function getText(){
    valueText = text.value

    ChangeText()
}

function getSelectIndexZero(){
    toReplace = opcionselect[0].value
}

function getSelectIndexOne(){
    per = opcionselect[1].value
}

function ChangeText(){
    text.value = valueText.replaceAll(toReplace, per)
}