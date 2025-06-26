const LinkedList = require("./linkedList");

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

list.prepend("mouse");
console.log("After prepend:", list.toString());

console.log("Size:", list.size());

console.log("Head:", list.head().value);

console.log("Tail:", list.tail().value);

console.log("At index 3:", list.at(3)?.value);

list.pop();
console.log("After pop:", list.toString());

console.log("Contains 'cat':", list.contains("cat"));
console.log("Contains 'turtle':", list.contains("turtle"));

console.log("Find 'hamster':", list.find("hamster"));
console.log("Find 'turtle':", list.find("turtle"));

list.insertAt("lizard", 2);
console.log("After insertAt at index 2:", list.toString());

list.removeAt(4);
console.log("After removeAt index 4:", list.toString());