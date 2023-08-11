const fun = () =>{ 
let a = confirm("are you sure to play");
let random_num = Math.floor(Math.random() * 100) + 1;
console.log(random_num);
// alert(random_num);
// let random_num=2;
let count = 0;
if (a) {
    do {
        let input = prompt("enter your guess");
        input = Number.parseInt(input);
        count++;
        if(input>random_num) {
            alert("the random no. is less than your input Try again");
        }
        else if(input<random_num) {
            alert("the random no. is greater than your input Try again");
        }
        else {   
            if(count<=5) {
            alert("👍👍you won👍👍 you guessed in "+count +" attempts, right number is : "+ random_num); 
            }
            else {
            alert("👍👍you loss👍👍 you guessed in "+count +" attempts, right number is :  "+ random_num +"  try again");
            }
            break;
        }
    } while(count!=5);
}
else {
    alert("You quite the game!!");
}
}
