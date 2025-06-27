import { Tree } from "./bst.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) return;
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const randomArray = (size, max = 100) =>
  Array.from({ length: size }, () => Math.floor(Math.random() * max));

const tree = new Tree(randomArray(15));
console.log("Initial tree:");
prettyPrint(tree.root);

console.log("Balanced?", tree.isBalanced());

console.log("Level order:");
tree.levelOrder((node) => console.log(node.data));

console.log("Preorder:");
tree.preOrder((node) => console.log(node.data));

console.log("Inorder:");
tree.inOrder((node) => console.log(node.data));

console.log("Postorder:");
tree.postOrder((node) => console.log(node.data));

tree.insert(120);
tree.insert(130);
tree.insert(150);
tree.insert(160);
tree.insert(170);
console.log("\nAfter inserting values > 100:");
prettyPrint(tree.root);

console.log("Balanced after unbalancing?", tree.isBalanced());

tree.rebalance();
console.log("\nAfter rebalancing:");
prettyPrint(tree.root);

console.log("Balanced?", tree.isBalanced());

console.log("Level order:");
tree.levelOrder((node) => console.log(node.data));

console.log("Preorder:");
tree.preOrder((node) => console.log(node.data));

console.log("Inorder:");
tree.inOrder((node) => console.log(node.data));

console.log("Postorder:");
tree.postOrder((node) => console.log(node.data));