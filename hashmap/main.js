import { HashMap } from "./hashmap.js";
import { HashSet } from "./hashset.js";

const test = new HashMap(0.75);
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("apple", "green");
test.set("banana", "green");

test.set("moon", "silver");

console.log(test.get("apple"));
console.log(test.has("banana"));
console.log(test.remove("carrot"));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
test.clear();
console.log(test.entries());

const set = new HashSet(0.75);
set.add('apple');
set.add('banana');
set.add('apple');
console.log(set.has('banana'));
console.log(set.length());
console.log(set.keys());
set.remove('apple');
console.log(set.length());
set.clear();
console.log(set.length());