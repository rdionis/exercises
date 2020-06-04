// let space = "";
// for(i=1;i<=10;i++){
//   space = "";
//   for(j=i;j<10;j++){
//     space += " ";
//   }
//   for(k=0;k<(i*2)-1;k++){
//     space += "*";
//   }
//   console.log(space);
// } 


// let space2 = "";
// for (i = 10; i <= 10; i--) {
//     space2 = " ";
//     for (j = 0; j < i; j++) {
//         space2 += "j";
//     }
//     for (k = 0; k > i; k--) {
//         space2 += "*";
//     }
//     console.log(space2);
// }



// for (i = 10; i < 10; i++) {
//     for (j = 10; j < i; j--) {
//         myString += 'j';
//     }
//     let myString = '';
//     for (k = 0; k > i; k--) {
//         myString += "*";
//     }
//     for (let l = 20; l > i; l--) {
//         myString += 'l';
//     }
//     console.log(myString);
// }


for (let i = 10; i >= 1; i--) {
    let myString = "";
    for (let j = i; j < 10; j++) {
        myString += 'j';
    }
    for (let k = 0; k < i * 2 - 1; k++) {
        myString += '*';
    }

    console.log(myString);
}