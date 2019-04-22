function add(x,y) {
	function ParseArg(n) {
		if(Array.isArray(n)) {
			var result = 0;
			for (var index = 0, count=n.length; index<count; index++) 
				result += ParseArg(n[index]);
			return result;
		}
		return (typeof n === "function") ? ParseArg(n()) : (isNaN(n) ? 0 : parseInt(n));
	}
	var result = 0;
	for(var index = 0, count = arguments.length; index < count; index++)
		result += ParseArg(arguments[index]);
	return result;
}