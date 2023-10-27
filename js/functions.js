function doTime(startTime, endTime, startEventTime, eventTime){
  const startTimeArray = startTime.split(':').map((time)=>Number(time));
  const endTimeArray = endTime.split(':').map((time)=>Number(time));
  const startEventTimeArray = startEventTime.split(':').map((time)=>Number(time));
  const eventTimeArray = [(Math.floor(eventTime / 60)), (eventTime % 60)];
  const endEventTimeArray = [Number(startEventTimeArray[0]) + Number(eventTimeArray[0]),
    Number(startEventTimeArray[1]) + Number(eventTimeArray[1])];
//проверка, что встреча начнется не раньше, чем начинается рабочий день || заканчивается не позже, чем заканчивается рабочий день
  if(startTimeArray[0] > startEventTimeArray[0] || endTimeArray[0] < endEventTimeArray[0]){
    return false;
  }
  else if((startTimeArray[0] === startEventTimeArray[0] && startTimeArray[1] > startEventTimeArray[1]) ||
   (endTimeArray[0] === endEventTimeArray[0] && endTimeArray[1] < endEventTimeArray[1])){
    return false;
  }
  return true;
}

/*
//Функция для проверки длины строки.
function checkLength(string, length){
  return string.length <= length ;
}

//Функция для проверки, является ли строка палиндромом.
function isPalindrome(rawString){
  let string = rawString.replaceAll(' ','').toLowerCase();
  const length = string.length;
  for(let i = 0; i < Math.floor(length / 2); i++){
    if(!(string.at(i) === string.at(length - 1 - i))){
      return false;
    }
  }
  return true;
}

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
function getNumber(rawString){
  let string = String(rawString);
  let number = '';
  for(let i = 0; i < string.length; i++){
    if(!Number.isNaN(parseInt(string.at(i)))){
      number += string.at(i);
    }
  }
  if(number === ''){
    return NaN;
  }
  return parseInt(number);
}
*/
