const num=Number(prompt("Enter number!"));
const arr=[]
for (let i=1;i<num+1;i++){
        if (i%2!=0){
            arr.push(i);
        }
    
}
alert(`Odd numbers between ${1} and ${num}:`+arr)
