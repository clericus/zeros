module.exports = function getZerosCount(number) {
  let countZero=0;
  let arr=[];                                         //array for exponentiation of 5
  for (let i = 1; i <= 12; i++) {
    if (Math.pow(5, i) <= number){
      arr.push(Math.pow(5, i))                        //pushing of exponentiation of 5? less then 'number'
    }
  }
  for (let i = 0; i < arr.length; i++){               //for every exponentiation of 5
    for (let j = arr[i]; j <= number; j+=arr[i]){ 
      countZero+=1;                                
    }
  }
  return countZero;
}
