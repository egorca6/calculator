function calculator(string){
  // код пишите внутри этой функции
  const myArray = string.split(' '); // строку в массив длиной 3 элемента

  const operand1 = +(myArray[0]);
  const operand2 = +(myArray[2]);
  const znak = myArray[1];
  let resultArab;
  let resultArabToRonan;
  let resToRoman;
  let res1;
  let res2;
  let z;
// console.log(operand1, typeof operand1, myArray[0], typeof myArray[0], isNaN(operand1))
// console.log(operand2, typeof operand2, myArray[2], typeof myArray[2], isNaN(operand2))
// console.log('Тип Результата '+ typeof resToRoman)
// console.log('Тип функциии '+ typeof calculator)
  if (myArray[0] == '' || myArray.length != 3  || myArray[0] > 10 || myArray[2] > 10 || res1 > 10 || res2 > 10 
  || isNaN(operand1) != isNaN(operand2) || operand1 == 0 || operand2 == 0) {
    throw new Error("Данные неполны");
  }
 
  if (!isNaN(operand1)) {                // значит работаем с арабскими цифрами
    switch (znak) {
      case '+':
        return resultArab = String(operand1 + operand2);

      case '-':
        return resultArab = String(operand1 - operand2);

      case '*':
        return resultArab = String(operand1 * operand2);

      case '/':
        return resultArab = String(Math.floor(operand1 / operand2));

      default: throw new Error("Данные неполны"); 
    }
  } 

  else {                             

    const romanObject = {
      'I': 1, 'II': 2, 'III': 3, "IV": 4, "V": 5, "VI": 6, "VII": 7, "VIII": 8, "IX": 9, "X": 10,
    };

    const key = Object.keys(romanObject);
    key.forEach(i => {
      if (i === myArray[0]) {
        res1 = romanObject[i];
       return res1};
      
    });
    key.forEach(i => {
      if (i === myArray[2])
        {res2 = romanObject[i]
      return res2};

    });
if (!key.includes(myArray[0])) {throw new Error("Не больше X")}
if (!key.includes(myArray[2])) {throw new Error("Не больше X")}

    function znakRoman(a, b) {
      switch (znak) {
        case '+':
          return resultArabToRonan = String(a + b);

        case '-':
          return resultArabToRonan = String(a - b);

        case '*':
          return resultArabToRonan = String(a * b);

        case '/':
          return resultArabToRonan = String(Math.floor(a / b));
        default: throw new Error("Данные неполны");
 
      } 
    };
    
    z = znakRoman(res1, res2);
 console.log(z);


const arab = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
const roman = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];

function arabToRoman(number)
{
	if(!number) return '';

	let ret = '';
	let i = arab.length - 1;  //12
	while(number > 0)  
	{
		if(number >= arab[i])
		{
			ret += roman[i];
			number -= arab[i];
		} 
		else
		{
			i--;
		}
	
	}
if (z > 0) {    // проверка чтобы римская не была отрицательной
  return ret;
}
else { return '' };
}
	
}
return arabToRoman(z);

    }
 

 



console.log('ФИНАЛ '+ calculator('X + X'));





