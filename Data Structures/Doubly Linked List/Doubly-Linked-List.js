class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add new node to the end of the list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // remove node at the end of the list
  pop() {
    if (!this.head) return undefined;
    let currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }
    this.length--;
    return currentTail;
  }

  // remove the beginning node of the list
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      this.head.prev = null;
      currentHead.next = null;
    }
    this.length--;
    return currentHead;
  }

  // add node to the beginning of the list
  unshift(val) {
    if (!this.head) return this.push(val);
    let newNode = new Node(val);
    let currentHead = this.head;
    newNode.next = currentHead;
    currentHead.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  // retrieve node at the specified index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= Math.ceil(this.length / 2)) {
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      let current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  // set the node value of a specified index
  set(index, val) {
    let foundIndex = this.get(index);
    if (foundIndex) {
      foundIndex.val = val;
      return true;
    }
    return false;
  }

  // add a new node at the specified index
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
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }

  // delete node at specified index
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    }
    let removedNode = this.get(index);
    let prevNode = removedNode.prev;
    let nextNode = nextNode.next;
    prevNode.next = nextNode;
    removedNode.prev = null;
    removedNode.next = null;
    nextNode.prev = prevNode;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return removedNode;
  }
}

let list = new DoublyLinkedList();
console.log(list);
list.push(5);
list.length;
list.head.val;
list.tail.val;
list.push(10);
list.push(15);
console.log(list);
