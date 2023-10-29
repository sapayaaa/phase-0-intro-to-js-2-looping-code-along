// Code your solutions in this file

const writeCards = ( a,e ) => {
  let msg = [];
for(let i=0; i<a.length; i++){
  msg.push( `Thank you, ${a[i]}, for the wonderful ${e} gift!`);
}
return msg;
}
const countDown = (count) =>
{
  let i= count;
  while(i >= 0){
      console.log(count);
      i--;
      count = count -1;
  }
}
console.log(countDown(10))