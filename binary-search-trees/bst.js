class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(array) {
    this.root = this.buildTree([...new Set(array)].sort((a, b) => a - b));
  }

  buildTree(array) {
    if (array.length === 0) return null;
    const mid = Math.floor(array.length / 2);
    const root = new Node(array[mid]);

    root.left = this.buildTree(array.slice(0, mid));
    root.right = this.buildTree(array.slice(mid + 1));

    return root;
  }

  insert(value, root = this.root) {
    if (!root) return new Node(value);
    if (value < root.data) root.left = this.insert(value, root.left);
    else if (value > root.data) root.right = this.insert(value, root.right);
    return root;
  }

  deleteItem(value, root = this.root) {
    if (!root) return null;
    if (value < root.data) root.left = this.deleteItem(value, root.left);
    else if (value > root.data) root.right = this.deleteItem(value, root.right);
    else {
      if (!root.left) return root.right;
      if (!root.right) return root.left;

      const min = this._minValue(root.right);
      root.data = min;
      root.right = this.deleteItem(min, root.right);
    }
    return root;
  }

  _minValue(root) {
    while (root.left) root = root.left;
    return root.data;
  }

  find(value, root = this.root) {
    if (!root) return null;
    if (root.data === value) return root;
    return value < root.data
      ? this.find(value, root.left)
      : this.find(value, root.right);
  }

  levelOrder(callback) {
    if (typeof callback !== "function") throw new Error("Callback required");
    const queue = [this.root];
    while (queue.length > 0) {
      const node = queue.shift();
      callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  inOrder(callback, root = this.root) {
    if (!callback) throw new Error("Callback required");
    if (!root) return;
    this.inOrder(callback, root.left);
    callback(root);
    this.inOrder(callback, root.right);
  }

  preOrder(callback, root = this.root) {
    if (!callback) throw new Error("Callback required");
    if (!root) return;
    callback(root);
    this.preOrder(callback, root.left);
    this.preOrder(callback, root.right);
  }

  postOrder(callback, root = this.root) {
    if (!callback) throw new Error("Callback required");
    if (!root) return;
    this.postOrder(callback, root.left);
    this.postOrder(callback, root.right);
    callback(root);
  }

  height(value) {
    const node = this.find(value);
    if (!node) return null;

    const calcHeight = (n) => {
      if (!n) return -1;
      return 1 + Math.max(calcHeight(n.left), calcHeight(n.right));
    };

    return calcHeight(node);
  }

  depth(value, root = this.root, depth = 0) {
    if (!root) return null;
    if (root.data === value) return depth;

    return value < root.data
      ? this.depth(value, root.left, depth + 1)
      : this.depth(value, root.right, depth + 1);
  }

  isBalanced(root = this.root) {
    const check = (node) => {
      if (!node) return 0;
      const left = check(node.left);
      if (left === -1) return -1;
      const right = check(node.right);
      if (right === -1) return -1;
      if (Math.abs(left - right) > 1) return -1;
      return Math.max(left, right) + 1;
    };
    return check(root) !== -1;
  }

  rebalance() {
    const values = [];
    this.inOrder((node) => values.push(node.data));
    this.root = this.buildTree(values);
  }
}