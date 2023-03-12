/* 
  извлекаем модуль в виде объекта в константу moduleData
  где и будет храниться наша переменная timeout со значением 5

  или же мы можем воспользоваться диструктуризацией и написать код следующим образом

  const { timeout } = require('./logs.js');

*/
const moduleData = require('./logs'); // в виде объекта
const { timeout, Client } = require('./logs.js'); // вытаскиваем непосрудствунно только константу timeout
// const { data } = require('./logs.js'); // в данном случае вытащить не получиться, так как будет конфликт, читать в logs.js

console.log(moduleData.timeout);
console.log(timeout, Client);


/*

  если у нас одинаковые название переменных импортируемых с разных файлов также
  пройзойдет ошибка, так как такое название уже будет зарезервировано, пример:

  const {timeout} = require('./logs.js');
  const {timeout} = require('./stats.js);

  пример как делать правильно показан ниже в коде

*/

const { timeout: logsTimeout } = require('./logs.js'); // присваеваем значение константы timeout в переменную logsTimeout
const { timeout: statsTimeout } = require('./stats.js'); // присваеваем значение константы timeout в переменную logsTimeout

console.log(logsTimeout, statsTimeout);

// также можно импортировать слеуюзим образом
const data = require('./logs.js').data; // обращаемся к объекту module.exports к его свойству data в котором храниться= массив

console.log(data);
