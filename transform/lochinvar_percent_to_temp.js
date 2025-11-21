(function(i) {
    // 1. Handle invalid inputs
    if (i == null || i == "" || i == "NULL" || i == "UNDEF") return 0;

    // 2. Boiler Settings (MUST MATCH PHYSICAL BOILER SETTINGS)
    // These must match the values in your write script exactly
    var bmsLowTemp = 70;   
    var bmsHighTemp = 180; 
    
    // 3. The input 'i' comes from the Modbus register (0-100)
    var percentage = parseFloat(i);
    
    // 4. Handle parsing errors
    if (isNaN(percentage)) return bmsLowTemp;

    // 5. Reverse Formula: Convert Percentage back to Temperature
    // Formula: (Percentage / 100) * (High - Low) + Low
    var calculatedTemp = (percentage / 100) * (bmsHighTemp - bmsLowTemp) + bmsLowTemp;

    // 6. Return the temperature
    return Math.round(calculatedTemp);
})(input)