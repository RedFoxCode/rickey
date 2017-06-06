const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

const rickey = require("./lib");
const kind = require("kind-of");

const TYPES = [new Object, new Function, new RegExp]

suite
	.add("kind-of", function() {
		TYPES.map(kind);
	})
	.add("rickey", function() {
		TYPES.map(rickey);
	})
	.on("cycle", function(event) {
		console.log(String(event.target));
	})
	.on("complete", function() {
		console.log("Fastest is " + this.filter("fastest").map("name"));
	})
	.run({
		async: true
	});