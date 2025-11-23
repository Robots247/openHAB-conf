(function(i) {
    // Simple Pass-Through
    // We are handling all scaling logic inside the Rules now.
    // This prevents "Double Conversion" errors.
    
    if (i == null || i == "" || i == "NULL" || i == "UNDEF") return 0;
    
    var val = parseFloat(i);
    if (isNaN(val)) return 0;
    
    return Math.round(val);
})(input)