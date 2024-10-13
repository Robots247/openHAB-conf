//Trasform Boiler Status codes to Stings


// Wrap everything in a function
(function(i) {
var output 
	switch (i){
  case 2:
    output = "Heat Demand blocked due to high absolute outlet temperature";
    break;
  case 3:
    output= "Heat Demand blocked due to high absolute flue temperature";
    break;
  case 4:
     output= "Heat Demand blocked due to high absolute Delta T (Outlet - Inlet)";
    break;
  case 8:
    output= "Heat Demand blocked due to low 24VAC Voltage";
    break;
  case 9:
    output= "Outdoor Shutdown";
    break;
  case 10:
    output= "Block due do to switch on boiler set to 'OFF'";
    break;
  case 12:
    output= "Block due to no communication with Cascade";
    break;
  case 16:
    output= "Service Function";
    break;
  case 19:
     output= "DHW Function Storage Tank";
    break;
  case 21:
    output= "SH heat demand function from Room Thermostat";
    break;
  case 22:
    output= "SH function Heat demand from Room Thermostat";
    break;
  case 23:
    output= "SH function heat demand from cascade";
    break;  
  case 30:
    output = "Heat Demand activated by freeze protection";
    break;
  case 32:
    output= "DHW Pump Delay";
    break;
  case 33:
     output= "SH Heat Pump Delay";
    break;
  case 34:
    output= "No Heat Function (After Pump Delay)";
    break;
  case 40:
    output= "Lockout";
    break;
  case 32764:
    output= "Busy with updating status";
    break;
  case 32765:
    output= "DHW blocked due to no present tank sensor";
    break;
  case 32766:
    output= "Burner control(s) manually shut down";
    break;
  case 32767:
     output= "Code not present";
    
}
   
	return output;
  
  })(input)
// input variable contains data passed by openhab  

