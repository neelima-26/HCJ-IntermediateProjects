 function calculate(){
        let input = document.getElementById("numbers").value;

        let array = input.split(" ").map(Number);
        let sum =0;
        for(let i = 0 ; i < array.length ; i++){
        sum +=array[i];
        }
        document.getElementById("result").innerHTML = "sum =" + sum ;
       }