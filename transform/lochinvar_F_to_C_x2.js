(function(i) {
    // 1. Force to string
    var s = String(i);
    
    // 2. Strip EVERYTHING that is not a digit, a minus sign, or a decimal point
    // This removes " °F", spaces, and any other garbage
    var cleanVal = s.replace(/[^\d.-]/g, ""); 
    
    // 3. Safety check
    if (cleanVal == "" || isNaN(cleanVal)) return 0;
    
    // 4. Parse the clean number
    var f = parseFloat(cleanVal);
    
    // 5. Do the Math: (F - 32) / 1.8
    var c = (f - 32) / 1.8;
    
    // 6. Scale for Lochinvar (Resolution 0.5 means multiply by 2)
    return Math.round(c * 2);
})(input)