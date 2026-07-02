function getRandomNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function createPassword() {
    // Исходный набор символов (буквы и цифры, без спецсимволов)
    const chars = [
        "A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z",
        "a","b","c","d","e","f","g","h","i","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z",
        2,3,4,5,6,7,8,9
    ];
    const specials = ['%', '№'];
    const length = 15;
    const passwordArray = new Array(length);

    // 1. Выбираем случайную позицию для обязательного спецсимвола
    const specialIndex = Math.floor(Math.random() * 13) + 1;
    // 2. Помещаем туда случайный спецсимвол
    passwordArray[specialIndex] = specials[Math.floor(Math.random() * specials.length)];

    // 3. Заполняем оставшиеся 9 позиций случайными символами из chars
    for (let i = 0; i < length; i++) {
        if (i === specialIndex) continue;
        passwordArray[i] = chars[Math.floor(Math.random() * chars.length)];
    }

    return passwordArray.join('');
}


// генерим масив паролей
function getPasswords (num) {
    let i = 0;
    let passwords = []
    while (i < num) {
        passwords.push(createPassword());
        i++;
    }
    return passwords;
}

//отображение на странице
function getResult(spisok) {
    
    let num = spisok.length;
    let i = 0;
    while (i < num) {
        let div = document.createElement('div');
        div.className = 'passw';
        div.innerHTML = `<p>${spisok[i]}</p>`;
        document.body.append(div);
        i++;
    }
}


// получаем количество
function getNum() {
    deletElement();
    let num = document.querySelector('input').value;
    let passwords = getPasswords(num);
    getResult(passwords);
}


// очищаем старые пароли
function deletElement() {
    let deleteEl = document.querySelectorAll('.passw');
    let El = deleteEl.length;
    while(El != 0) {
        deleteEl[0].remove();
        deleteEl = document.querySelectorAll('.passw');
        El = deleteEl.length;
    }

}

getNum();
