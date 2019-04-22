function add(x,y) {
	function ParseArg(n) {
		if(Array.isArray(n)) return add.apply(this, n);
		return (typeof n === "function") ? ParseArg(n()) : (isNaN(n) ? 0 : parseInt(n));
	}
	return arguments.length <= 1 ? ParseArg(arguments[0]) : ParseArg(arguments[0]) + add([].slice.call(arguments,1));
}