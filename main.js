// Create a program that converts Celsius to Fahrenheit 
// and vice versa. Ask the user whether they want to convert 
// from Celsius to Fahrenheit or from Fahrenheit to Celsius.
// Then, ask for the temperature value. 
// Finally, display the converted temperature to the user.

//Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
//Fahrenheit to Celsius: (°F − 32) × 5/9 = °C

//If Celsius is selected the other one can only be Fahrenheit and vice-versa
//User selects the Temperature type and types in the number in one of the
//boxes. 
//The result will appear in the other box.

//If Celsius is selected then do X math
//If Fahrenheit is selected then do Y math
//If --- is selected then print result as "No temp scale is selected"
//formula.text = input.text + if celsius {x.math} else{y.math}

//Clean up the code

// let input = document.querySelector('#user-input').value;
// let selection = document.getElementById('selection');


// let example = 1/3
// console.log(example);
// let convert = example.toString();
// let dotIndex = convert.indexOf('.');
// if (dotIndex !== -1 && convert.length - dotIndex > 5){
//   example = parseFloat(example);
//   example = example.toFixed(4);
// }
// console.log(example);

// if (dotIndexC !== -1 && convertCelsius.length - dotIndexC > 5){
//   celsiusResult = parseFloat(celsiusResult);
//   celsiusResult = celsiusResult.toFixed(4);
// }


// if (dotIndexF !== -1 && convertFahrenheit.length - dotIndexF > 5){
//   fahrenheitResult = parseFloat(fahrenheitResult);
//   fahrenheitResult = fahrenheitResult.toFixed(4);
// }

const result = document.getElementById('result');
const selection = document.getElementById('selection');
const inputElement = document.getElementById("user-input");

inputElement.addEventListener("input", function() {
  const inputValue = inputElement.value;
  let celsiusResult = (inputValue - 32) * 5/9;
  let fahrenheitResult = inputValue * 9/5 + 32;
  let convertCelsius = celsiusResult.toString();
  let convertFahrenheit = fahrenheitResult.toString();
  let dotIndexC = convertCelsius.indexOf('.');
  let dotIndexF = convertFahrenheit.indexOf('.');
  if (isNaN(inputValue)){
    result.textContent = "You need insert numbers!"
  }
  else{
    if (selection.value === "Celsius"){
      if (inputValue == '') {
        result.textContent = '';
      }
      else {
        if (dotIndexF !== -1 && convertFahrenheit.length - dotIndexF > 5){
          fahrenheitResult = parseFloat(fahrenheitResult);
          fahrenheitResult = fahrenheitResult.toFixed(2);
        }
        result.textContent =  fahrenheitResult + ' °F';
      }
          selection.addEventListener('change', function(){
        if (selection.value === "Celsius"){
          if (inputValue == '') {
            result.textContent = '';
          }
          else {
            if (dotIndexF !== -1 && convertFahrenheit.length - dotIndexF > 5){
              fahrenheitResult = parseFloat(fahrenheitResult);
              fahrenheitResult = fahrenheitResult.toFixed(2);
            }
            result.textContent =  fahrenheitResult + ' °F';
          }
        }
        else if (selection.value === "Fahrenheit"){
          if (inputValue == '') {
            result.textContent = '';
          }
          else {
            if (dotIndexC !== -1 && convertCelsius.length - dotIndexC > 5){
              celsiusResult = parseFloat(celsiusResult);
              celsiusResult = celsiusResult.toFixed(2);
            }
            result.textContent =  celsiusResult + ' °C';
          }        }
        else {
          result.textContent = 'No temperature scale is selected';
        }
    });
    }
    else if (selection.value === "Fahrenheit"){
      if (inputValue == '') {
        result.textContent = '';
      }
      else {
        if (dotIndexC !== -1 && convertCelsius.length - dotIndexC > 5){
          celsiusResult = parseFloat(celsiusResult);
          celsiusResult = celsiusResult.toFixed(2);
        }
        result.textContent =  celsiusResult + ' °C';
      }
      selection.addEventListener('change', function(){
        if (selection.value === "Celsius"){
          if (inputValue == '') {
            result.textContent = '';
          }
          else {
            if (dotIndexF !== -1 && convertFahrenheit.length - dotIndexF > 5){
              fahrenheitResult = parseFloat(fahrenheitResult);
              fahrenheitResult = fahrenheitResult.toFixed(2);
            }
            result.textContent =  fahrenheitResult + ' °F';
          }        }
        else if (selection.value === "Fahrenheit"){
          if (inputValue == '') {
            result.textContent = '';
          }
          else {
            if (dotIndexC !== -1 && convertCelsius.length - dotIndexC > 5){
              celsiusResult = parseFloat(celsiusResult);
              celsiusResult = celsiusResult.toFixed(2);
            }
            result.textContent =  celsiusResult + ' °C';
          }        }
        else {
          result.textContent = 'No temperature scale is selected';
        }
    });
    }
    else {
      result.textContent = 'No temperature scale is selected';
      selection.addEventListener('change', function(){
        if (selection.value === "Celsius"){
          if (inputValue == '') {
            result.textContent = '';
          }
          else {
            if (dotIndexF !== -1 && convertFahrenheit.length - dotIndexF > 5){
              fahrenheitResult = parseFloat(fahrenheitResult);
              fahrenheitResult = fahrenheitResult.toFixed(2);
            }
            result.textContent =  fahrenheitResult + ' °F';
          }        }
        else if (selection.value === "Fahrenheit"){
          if (inputValue == '') {
            result.textContent = '';
          }
          else {
            if (dotIndexC !== -1 && convertCelsius.length - dotIndexC > 5){
              celsiusResult = parseFloat(celsiusResult);
              celsiusResult = celsiusResult.toFixed(2);
            }
            result.textContent =  celsiusResult + ' °C';
          }        }
        else {
          result.textContent = 'No temperature scale is selected';
        }
    });
    }
  }
});






//Calculate the number and make it a variable
//Convert the number into a string
//Find the decimal point of said string
//If value's length is shorter than 4 just print the result
//If value's length is longer than 4 use .toFix(4) and print the result

// selection.addEventListener('change', function(){
//     console.log('it changed');
// });

// console.log(selection.value);
// function convertCelsius(){
//     let idk = inputElement.value;
//     let result = (idk * 9/5) + 32;
// }
// result.innerHTML = 'hello';
//   console.log("User typed:", inputValue * 9/5 + 32);


// const result = document.getElementById('result');
// const selection = document.getElementById('selection');
// const inputElement = document.getElementById("user-input");

// inputElement.addEventListener("input", function() {
//   const inputValue = inputElement.value;
//   if (selection.value === "Celsius") {
//     result.textContent =  (inputValue * 9/5) + 32 + ' °F';
//   } else if (selection.value === "Fahrenheit") {
//     result.textContent =  (inputValue - 32) * 5/9 + ' °C';
//   }
// });

// selection.addEventListener('change', function(){
//   if (selection.value !== "null") {
//     const inputValue = inputElement.value;
//     if (selection.value === "Celsius") {
//       result.textContent =  (inputValue * 9/5) + 32 + ' °F';
//     } else if (selection.value === "Fahrenheit") {
//       result.textContent =  (inputValue - 32) * 5/9 + ' °C';
//     }
//   } else {
//     result.textContent = "";
//   }
// });


//COPIED 
// const result = document.getElementById('result');
// const selection = document.getElementById('selection');
// const inputElement = document.getElementById("user-input");

// inputElement.addEventListener("input", function() {
//   const inputValue = inputElement.value;
//   if (selection.value === "Celsius"){
//     result.textContent =  inputValue * 9/5 + 32 + ' °F';
//     selection.addEventListener('change', function(){
//       if (selection.value === "Celsius"){
//         result.textContent =  inputValue * 9/5 + 32 + ' °F';
//       }
//       else if (selection.value === "Fahrenheit"){
//         result.textContent = (inputValue - 32) * 5/9 + ' °C';
//       }
//       else {
//         result.textContent = 'No temperature scale is selected';
//       }
//   });
//   }
//   else if (selection.value === "Fahrenheit"){
//     result.textContent = (inputValue - 32) * 5/9 + ' °C';
//     selection.addEventListener('change', function(){
//       if (selection.value === "Celsius"){
//         result.textContent =  inputValue * 9/5 + 32 + ' °F';
//       }
//       else if (selection.value === "Fahrenheit"){
//         result.textContent = (inputValue - 32) * 5/9 + ' °C';
//       }
//       else {
//         result.textContent = 'No temperature scale is selected';
//       }
//   });
//   }
//   else {
//     result.textContent = 'No temperature scale is selected';
//     selection.addEventListener('change', function(){
//       if (selection.value === "Celsius"){
//         result.textContent =  inputValue * 9/5 + 32 + ' °F';
//       }
//       else if (selection.value === "Fahrenheit"){
//         result.textContent = (inputValue - 32) * 5/9 + ' °C';
//       }
//       else {
//         result.textContent = 'No temperature scale is selected';
//       }
//   });
//   }
// });


//2ND COPY

// inputElement.addEventListener("input", function() {
//   const inputValue = inputElement.value;
//   if (isNaN(inputValue)){
//     result.textContent = "You need insert numbers!"
//   }
//   else{
//     if (selection.value === "Celsius"){
//       if (inputValue == '') {
//         result.textContent = '';
//       }
//       else {
//         result.textContent =  inputValue * 9/5 + 32 + ' °F';
//       }
//           selection.addEventListener('change', function(){
//         if (selection.value === "Celsius"){
//           if (inputValue == '') {
//             result.textContent = '';
//           }
//           else {
//             result.textContent =  inputValue * 9/5 + 32 + ' °F';
//           }
//         }
//         else if (selection.value === "Fahrenheit"){
//           if (inputValue == '') {
//             result.textContent = '';
//           }
//           else {
//             result.textContent =  (inputValue - 32) * 5/9 + ' °C';
//           }        }
//         else {
//           result.textContent = 'No temperature scale is selected';
//         }
//     });
//     }
//     else if (selection.value === "Fahrenheit"){
//       if (inputValue == '') {
//         result.textContent = '';
//       }
//       else {
//         result.textContent =  (inputValue - 32) * 5/9 + ' °C';
//       }
//       selection.addEventListener('change', function(){
//         if (selection.value === "Celsius"){
//           if (inputValue == '') {
//             result.textContent = '';
//           }
//           else {
//             result.textContent =  inputValue * 9/5 + 32 + ' °F';
//           }        }
//         else if (selection.value === "Fahrenheit"){
//           if (inputValue == '') {
//             result.textContent = '';
//           }
//           else {
//             result.textContent =  (inputValue - 32) * 5/9 + ' °C';
//           }        }
//         else {
//           result.textContent = 'No temperature scale is selected';
//         }
//     });
//     }
//     else {
//       result.textContent = 'No temperature scale is selected';
//       selection.addEventListener('change', function(){
//         if (selection.value === "Celsius"){
//           if (inputValue == '') {
//             result.textContent = '';
//           }
//           else {
//             result.textContent =  inputValue * 9/5 + 32 + ' °F';
//           }        }
//         else if (selection.value === "Fahrenheit"){
//           if (inputValue == '') {
//             result.textContent = '';
//           }
//           else {
//             result.textContent =  (inputValue - 32) * 5/9 + ' °C';
//           }        }
//         else {
//           result.textContent = 'No temperature scale is selected';
//         }
//     });
//     }
//   }
// });