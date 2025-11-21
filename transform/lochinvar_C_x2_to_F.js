(function(i) {
    // 1. Force to string and clean (The register sends raw numbers, but safety first)
    var s = String(i).replace(/[^\d.-]/g, ""); 
    
    if (s == "" || isNaN(s)) return 0;
    
    // 2. Parse Integer
    var raw = parseInt(s);
    
    // 3. Do the Math: (Raw / 2) * 1.8 + 32
    // Example: Raw 100 -> 50C -> 122F
    var c = raw / 2.0;
    var f = (c * 1.8) + 32;
    
    // 4. Return rounded to 1 decimal place
    return Math.round(f * 10) / 10;
})(input)