//Make a different function for everything that you can reference

// const result = document.getElementById('result');
// const selection = document.getElementById('selection');
// const inputElement = document.getElementById('user-input');

// inputElement.addEventListener('input', function(){
//   if (isNaN(inputElement.value)){
//     result.textContent = 'You need to insert a number'
//   }
//   else {
//     let temp = inputElement.value;
//     let celsiusResult = (temp - 32) * 5 / 9;
//     let fahrenheitResult = temp * 9 / 5 + 32;
//     if (temp == ''){
//       result.textContent = '';
//     }
//     else if (selection.value == 'Celsius'){
//       result.textContent = fahrenheitResult.toFixed(2) + ' °F';
//     }
//     else if (selection.value == 'Fahrenheit'){
//       result.textContent = celsiusResult.toFixed(2) + ' °C';
//     }
//     else {
//       result.textContent = 'No temperature scale is selected'
//     }
//   }
// });

// selection.addEventListener('change', function(){
//   let temp = inputElement.value;
//   let celsiusResult = (temp - 32) * 5 / 9;
//   let fahrenheitResult = temp * 9 / 5 + 32;
//   if (celsiusResult == isNaN || fahrenheitResult == isNaN){
//     result.textContent = 'You need to insert a number'
//   }
//   else {
//     if (temp == ''){
//       result.textContent = '';
//     }
//     else if (selection.value == 'Celsius'){
//       result.textContent = fahrenheitResult.toFixed(2) + ' °F';
//     }
//     else if (selection.value == 'Fahrenheit'){
//       result.textContent = celsiusResult.toFixed(2) + ' °C';
//     }
//     else {
//       result.textContent = 'No temperature scale is selected'
//     }
//   }
// });

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
  else if(inputValue == ''){
    result.textContent = '';
  }
  else{
    if (selection.value === "Celsius"){
      if (dotIndexF !== -1 && convertFahrenheit.length - dotIndexF > 5){
        fahrenheitResult = parseFloat(fahrenheitResult);
        fahrenheitResult = fahrenheitResult.toFixed(2);
      }
      {
        result.textContent =  fahrenheitResult + ' °F';
      }
          selection.addEventListener('change', function(){
        if (selection.value === "Celsius"){
           {
            if (dotIndexF !== -1 && convertFahrenheit.length - dotIndexF > 5){
              fahrenheitResult = parseFloat(fahrenheitResult);
              fahrenheitResult = fahrenheitResult.toFixed(2);
            }
            result.textContent =  fahrenheitResult + ' °F';
          }
        }
        else if (selection.value === "Fahrenheit"){
           {
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
       {
        if (dotIndexC !== -1 && convertCelsius.length - dotIndexC > 5){
          celsiusResult = parseFloat(celsiusResult);
          celsiusResult = celsiusResult.toFixed(2);
        }
        result.textContent =  celsiusResult + ' °C';
      }
      selection.addEventListener('change', function(){
        if (selection.value === "Celsius"){
           {
            if (dotIndexF !== -1 && convertFahrenheit.length - dotIndexF > 5){
              fahrenheitResult = parseFloat(fahrenheitResult);
              fahrenheitResult = fahrenheitResult.toFixed(2);
            }
            result.textContent =  fahrenheitResult + ' °F';
          }        }
        else if (selection.value === "Fahrenheit"){
           {
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
           {
            if (dotIndexF !== -1 && convertFahrenheit.length - dotIndexF > 5){
              fahrenheitResult = parseFloat(fahrenheitResult);
              fahrenheitResult = fahrenheitResult.toFixed(2);
            }
            result.textContent =  fahrenheitResult + ' °F';
          }        }
        else if (selection.value === "Fahrenheit"){
           {
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
