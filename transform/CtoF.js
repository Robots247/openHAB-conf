//C to F (read modbus values, divide by 10, transform to F)
// Wrap everything in a function
(function(i) {
    return (i) / 10 * (9 / 5) + 32;
    
})(input)
// input variable contains data passed by openhab


