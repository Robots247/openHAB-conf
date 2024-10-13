//C to F (read modbus values, divide by 10, transform to F)
// Wrap everything in a function
(function(inputData) {
    x = ((inputData) / 10) * (9 / 5) + 32; 
    //parseFloat(x).toFixed(1);
    var y = x.toFixed(2);
	return y;
    
})(input)
// input variable contains data passed by openhab


