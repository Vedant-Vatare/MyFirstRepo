let btn = document.getElementById("btn");
let userInput = document.getElementById("userInput");
let userOutput = document.getElementById("userOutput");
let inputType = document.getElementById("inputType");
let outputType = document.getElementById("outputType");
let steps = document.querySelector(".steps")
btn.addEventListener("click", function checkValues() {
    if (inputType.value == "binary" && outputType.value == "decimal") {
        userOutput.value = bin_dec();
    }
    else if (inputType.value == "binary" && outputType.value == "octal") {
        bin_oct();
    }
    else if (inputType.value == "binary" && outputType.value == "hexadecimal") {
        bin_hex();
    }
});

function bin_dec() {
    var isValid = true;
    var count = 0;
    // store input in an Array
    numArr = userInput.value.split('');
    numArr.forEach((e) => {
        if(e !== '0' && e !== '1') {
          isValid = false;
        }
    })
    // conversion:
    if (isValid) {
        for (i = 0; i < numArr.length; i++) {
            num = Math.pow(2, i);
            last = numArr[numArr.length - 1 - i]
            count += num * last;
        }
        return count;
    } else {
        alert("please enter only 0s and 1s");
    }

}





