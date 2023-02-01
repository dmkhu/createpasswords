function getRandomNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// создаем пароль
function createPassword () {
    let newPassword = [];
    let spisok = ["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z",2,3,4,5,6,7,8,9];
    let i = 0;
    while (i < 10) {
        newPassword.push(spisok[getRandomNum(0, spisok.length - 1)]);
        i++;
    }
    newPassword = newPassword.join("");
    return newPassword
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
