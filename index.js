
document.getElementById("convert-btn").addEventListener("click", function() {
  const inputValue = parseFloat(document.getElementById("input-value").value);
  

  const metersToFeet = (inputValue * 3.28084).toFixed(3);
  const feetToMeters = (inputValue / 3.28084).toFixed(3);
  const litersToGallons = (inputValue * 0.264172).toFixed(3);
  const gallonsToLiters = (inputValue / 0.264172).toFixed(3);
  const kilosToPounds = (inputValue * 2.20462).toFixed(3);
  const poundsToKilos = (inputValue / 2.20462).toFixed(3);
  
  
  document.getElementById("lengthResult").innerHTML = 
      ` <h3>Length (Meter/Feet)</h3>
      ${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${feetToMeters} meters`;
  
  document.getElementById("volumeResult").innerHTML = 
      `<h3>Volume (Liters/Gallons)</h3> 
      ${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`;
  
  document.getElementById("massResult").innerHTML = 
      `<h3>Mass (Kilograms/Pounds)</h3>
      ${inputValue} kilos = ${kilosToPounds} pounds | ${inputValue} pounds = ${poundsToKilos} kilos`;
});