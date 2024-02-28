function numberClick(num) {
    document.getElementById('screen').value+=num;
}

function handleDot() {
    var number =  document.getElementById('screen').value;
    if (number.includes('.')) {
        document.getElementById('warning').innerText = 'Only one decimal point is allowed per number.';
    } else if(number == ""){
        document.getElementById('screen').value='0.';
    }else{
        document.getElementById('screen').value+=".";
    }
    setTimeout(function() {
        document.getElementById('warning').innerText = "";
    }, 5000);
}

function handleBack() {
    var number =  document.getElementById('screen').value;
    if (number != "") {
        number = number.slice(0, -1);
        document.getElementById('screen').value = number;
    }else{
        console.log("please enter a number");
    }        
}

function handleOperator(operator) {
    var number =  document.getElementById('screen').value;
    var history =  document.getElementById('history').innerText;
    console.log("history ",history);
    if( ! (validateNUmber(number)) && history.length==0){
        document.getElementById('warning').innerText = "Please enter a valid number before an operation"; 
    }else if(operator =="√"){
        if( history.length!=0 && !history.includes('=') ){
            if(validateNUmber(number)){
                var Root = Math.sqrt(parseFloat(number));
                var result = eval(history + Root);
                document.getElementById('history').innerText += " √(" + number + ") = " + result;
                document.getElementById('screen').value = result;
            }else{
                document.getElementById('warning').innerText = "Please enter a number to calculate the square root.";
            }
        }else{
            if(validateNUmber(number)){
                var result = Math.sqrt(parseFloat(number));
                document.getElementById('history').innerText = " √(" + number + ") = " + result;
                document.getElementById('screen').value = result;
            }else{
                document.getElementById('warning').innerText = "Please enter a number to calculate the square root.";
            }
        }
    }else if(operator == "²" ){
        if( history.length!=0 && !history.includes('=') ){
            if(validateNUmber(number)){
                var square = number * number;
                var result = eval(history + square);
                document.getElementById('history').innerText += " (" + number + ")² = " + result;
                document.getElementById('screen').value = result;
            }else{
                document.getElementById('warning').innerText = "Please enter a number to calculate the square.";
            }
        }else{
            if(validateNUmber(number)){
                var result = number * number;
                document.getElementById('history').innerText = " (" + number + ")² = " + result;
                document.getElementById('screen').value = result;
            }else{
                document.getElementById('warning').innerText = "Please enter a number to calculate the square.";
            }
        }
    }else{
        if( history.length!=0 && !history.includes('=') ){
            document.getElementById('warning').innerText = "Please complete the operation";
        }else{
            document.getElementById('history').innerText = number + " " + operator;
            document.getElementById('screen').value="";
        }
    }
    setTimeout(function() {
        document.getElementById('warning').innerText = "";
    }, 5000);
}

function clearAll() {
    document.getElementById('screen').value="";
    document.getElementById('history').innerText="";
    document.getElementById('warning').innerText="";
}

function validateNUmber(no) {
    if(no =="" || no=='0.')
        return false;
    else
        return true;
}

function equalClick() {
    var number =  document.getElementById('screen').value;
    var history =  document.getElementById('history').innerText;
    if( history.length!=0 && !history.includes('=') ){
        if(validateNUmber(number)){
            if (history.endsWith('/') && parseFloat(number) === 0) {
                document.getElementById('warning').innerText = "Division by zero is not allowed.";
                return;
            }
            var result = eval(history + number);
            document.getElementById('history').innerText += " " + number + " = " + result;
            document.getElementById('screen').value = result;
        }else{
            document.getElementById('warning').innerText = "Please enter a valid number before an operation";
        }
    }else{
        document.getElementById('warning').innerText = "Please enter a valid expression.";
    }
    setTimeout(function() {
        document.getElementById('warning').innerText = "";
    }, 5000);
}