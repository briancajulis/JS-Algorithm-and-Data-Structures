class Node {
  constructor(val) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Adds node to end of the list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // removes node at the end of the list
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let prev = current;

    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // add node to the beginning of the list
  unshift(val) {
    if (!this.head) return undefined;
    let newNode = new Node(val);
    if (this.length === 0) {
      this.push(val);
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // remove the beginning node of the list
  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.pop();
    } else {
      let currentHead = this.head;
      this.head = currentHead.next;
    }
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  // retreive node at specified index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // changes the value of the node at a the specified index
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // add a node at a specified index
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    } else if (index === this.length) {
      this.push(val);
      return true;
    }
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  // remove node at a spcecified index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removedNode = this.get(index);
    let prevNode = this.get(index - 1);
    prevNode.next = removedNode.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return removedNode;
  }

  // reverse order of the list
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next,
      prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
