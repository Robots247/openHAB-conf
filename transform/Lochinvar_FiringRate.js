(function(i) {
    var raw = parseFloat(i);
    
    // If boiler reports 0, it's off.
    if (raw == 0) return 0;
    
    // The boiler's "Minimum Fire" via Modbus reports as ~21.
    // The screen says 10%.
    // We need to scale the range [21, 100] down to [10, 100].
    
    var minModbus = 21;
    var maxModbus = 100;
    var minScreen = 10;
    var maxScreen = 100;
    
    // Clamp lower bound (anything between 1 and 21 becomes 10)
    if (raw < minModbus) return minScreen;
    
    // Linear Interpolation Formula:
    // Y = Y1 + (X - X1) * ((Y2 - Y1) / (X2 - X1))
    var corrected = minScreen + (raw - minModbus) * ((maxScreen - minScreen) / (maxModbus - minModbus));
    
    // Round to nearest integer
    return Math.round(corrected);
})(input)