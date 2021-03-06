const TYPES = {
	"Boolean": "boolean",
	"Buffer": "buffer",
	"Number": "number",
	"String": "string",
	"Object": "object",
	"Date": "date",
	"Array": "array",
	"RegExp": "regexp",
	"Function": "function",
	"Map": "map",
	"Set": "set",
	"WeakMap": "weakmap",
	"WeakSet": "weakset",
	"Symbol": "symbol",
	"Int8Array": "int8array",
	"Uint8Array": "uint8array",
	"Uint8ClampedArray": "uint8clampedarray",
	"Int16Array": "int16array",
	"Uint16Array": "uint16array",
	"Uint32Array": "uint32array",
	"Float32Array": "float32array",
	"Float64Array": "float64array",
	"Error": "error",
	"Promise": "promise"
}

Object.keys(TYPES).forEach(function(name) {
	eval("if(typeof " + name + "!=='undefined')" + name + ".prototype._trickey='" + TYPES[name] + "'");
});

function getType(query) {
	if (query === undefined) {
		return "undefined";
	} else if (query === null) {
		return "null";
	}

	return query._trickey;
}

module.exports = getType;