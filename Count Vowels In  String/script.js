function vowelsInString(){
            let input = document.getElementById("letters").value;

            let vowels = "aeiou";
            let count =0;
            for(let i = 0 ; i < input.length ; i++){
                if(vowels.includes(input[i].toLowerCase())){
                    count++
                }
            }
             document.getElementById("result").innerHTML = count;
        }