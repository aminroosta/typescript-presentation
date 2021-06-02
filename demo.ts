const a = [1,2,3];
a.map

const a0 = new Array<number>(3); // any [undefined x 3]
const a1 = new Array(1, 2, 3); // [1, 2, 3]
const a2 = Array(1, 2, 3); // [1, 2, 3]
const yes : boolean = Array.isArray(a0);

const cache : {
	[key: string]: string
} = {};

cache["my-key"] = "some-value";
cache["other-key"] = 123; // Error