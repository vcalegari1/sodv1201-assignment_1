$(document).ready(function() { 
    $("#fahrenheit-button").click(function() {
      const fahrenheit = $("#temp-input").val();
  
      // Input Validation 
      if (isNaN(fahrenheit)) {
        $("#result").text("Please enter a valid temperature.");
        return;
      }
  
      const celsius = (fahrenheit - 32) * (5 / 9);
      $("#result").text(fahrenheit + "°F = " + celsius.toFixed(2) + "°C");
    });
  
    $("#celsius-button").click(function() {
      const celsius = $("#temp-input").val();
  
      // Input Validation 
      if (isNaN(celsius)) {
        $("#result").text("Please enter a valid temperature.");
        return;
      }
  
      const kelvin = parseFloat(celsius) + 273.15;
      $("#result").text(celsius + "°C = " + kelvin.toFixed(2) + "K");
    });
  }); 
  