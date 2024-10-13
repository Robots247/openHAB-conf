//C to F (read modbus values, divide by 2, transform to F)
//for lochinvar outputs with .5 resolution
// Wrap everything in a function
(function(inputData) {
    x = ((inputData) / 2) * (9 / 5) + 32; 
    //parseFloat(x).toFixed(1);
    var y = x.toFixed(2);
	return y;
    
})(input)
// input variable contains data passed by openhab
