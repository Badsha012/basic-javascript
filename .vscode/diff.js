

// DIFFERENT WAYS TO USE LOOP



// for(let i=1;i<=20;i++){
//     if(i%2==1)
//     {
//         console.log('odd',i);
//     }
// }


/// give me the list number between 1 to 30 divisible 5
for(let i=1;i<=30;i++){
    if(i % 3===0 || i%5===0){
        console.log(i);
    }
}



/// give me  sum of nmber from 1 to 20 that are are divisible by 3

let sum=0;
for(let i=1;i<=20;i++){
    if(i % 3===0){
        // console.log(i);
        sum=sum+i;
    }
}
    console.log('total ofnumber:',sum);
