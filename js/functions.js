//Функция для проверки длины строки.
function checkLength(string, length){
  return string.length <= length ;
}

//Функция для проверки, является ли строка палиндромом.
function isPalindrome(string){
  string = string.replaceAll(' ','');
  string = string.toLowerCase();

  const length = string.length;
  for(let i = 0; i < (length / 2); i++){
    if(!(string.at(i) === string.at(length - 1 - i))){
      return false;
    }
  }
  return true;
}

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
function getNumber(string){
  string = String(string);
  let number = '';
  for(let i = 0; i < string.length; i++){
    if(!Number.isNaN(parseInt(string.at(i)))){
      number += string.at(i);
    }
  }
}
