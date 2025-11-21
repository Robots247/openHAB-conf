(function(i) {
    // Safety check: Handle null, empty, or undefined inputs gracefully
    if (i == null || i == "" || i == "NULL" || i == "UNDEF") return 0;

    // Boiler Parameter Settings (MUST MATCH PHYSICAL BOILER SETTINGS)
    // Verify these on your Lochinvar Screen: Menu > Setup > BMS
    // "BMS Temp Setpoint at Low Analog Input"
    var bmsLowTemp = 70;   
    // "BMS Temp Setpoint at High Analog Input"
    var bmsHighTemp = 180; 
    
    // Convert input string to float
    var targetTemp = parseFloat(i);
    
    // Handle parsing error (e.g., if input was text "70.5 F")
    if (isNaN(targetTemp)) return 0;

    // Safety Clamps: Ensure we don't send values outside the defined range
    if (targetTemp < bmsLowTemp) targetTemp = bmsLowTemp;
    if (targetTemp > bmsHighTemp) targetTemp = bmsHighTemp;

    // Calculate Percentage (0-100)
    // Formula: (Target - Low) / (High - Low) * 100
    // Example: (125 - 70) / (180 - 70) * 100 = 55 / 110 * 100 = 50%
    var percentage = ((targetTemp - bmsLowTemp) / (bmsHighTemp - bmsLowTemp)) * 100;

    // Round to nearest integer for Modbus
    return Math.round(percentage);
})(input)