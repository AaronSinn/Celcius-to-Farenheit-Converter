document.addEventListener('DOMContentLoaded',function(){
    let convert_button = document.getElementById("convert");
    let h2 = document.getElementById("title");
    let result_text = document.getElementById("result");
    let result = null;
    let main_unit = 'C';
    
    let celcius = document.querySelector("#celcius");
    celcius.onclick = function(){
        h2.innerHTML = "Celcius to Farenheit";
        main_unit = 'C';
    }

    let farenheit = document.querySelector("#farenheit");
    farenheit.onclick = function(){
        h2.innerHTML = "Farenheit to Celcius";
        main_unit = 'F';
    }
    
    convert_button.addEventListener('click', function(){
        let input = document.getElementById("input").value;
        if(main_unit==='C'){
            result = (input*9/5) +32;
            result_text.innerHTML=`${input}C° is ${result.toFixed(2)}F°`;
        }
        else{
            result = (input-32)*5/9;
            result_text.innerHTML=`${input}F° is ${result.toFixed(2)}C°`;
        }
    })
})