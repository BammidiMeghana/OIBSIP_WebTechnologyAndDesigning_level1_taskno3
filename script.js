function Convert(){
        var temperatureInput =parseFloat(document.getElementById("temperature").value);
        var convert_from= document.getElementById("convert_from").value;
        var convert_to = document.getElementById("convert_to").value;
        var convertVal;
        var result;

    switch(convert_from) {
        case 'Celsius':
            if(convert_to === "Fahrenheit"){
                convertVal =(temperatureInput*9/5)+32; 
                result='F';
            }else if(convert_to=== "Kelvin"){
                convertVal =temperatureInput+273.15; 
                result='K';
            }else{
                convertVal =temperatureInput; 
                    result='C';
            }
        break;
        case 'Fahrenheit':
            if(convert_to === "Celsius"){
                convertVal =(temperatureInput-32)*5/9; 
                result='C';
            }
            else if(convert_to === "Kelvin"){
                convertVal =(temperatureInput-32)*5/9+273.15; 
                result='K';
            }
            else{
                convertVal =temperatureInput; 
                    result='F';
            }
            break;

        case 'Kelvin':
            if(convert_to === "Celsius"){
                convertVal =temperatureInput-273.15; 
                result='C';
            }
            else if(convert_to === "Fahrenheit"){
                convertVal =(temperatureInput-273.15)*9/5+32; 
                result='F';
            }
            else{
                convertVal =temperatureInput; 
                    result='K';
            }
            break;  
    }
document.getElementById("res").value=convertVal.toFixed(2)+" "+result;
}
