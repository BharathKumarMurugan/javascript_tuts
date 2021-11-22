function Node(element) {
  this.element = element;
  this.next = null;
}
function LinkedList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  // this.remove = remove;
  this.display = display;
}

function find(item) {
  let currentNode = this.head;
  while (currentNode.element != item) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

function insert(newElement, item) {
  let newNode = new Node(newElement);
  let current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}
function display() {
  let currentNode = this.head;
  while (!(currentNode.next == null)) {
    console.log(currentNode.next.element);
    currentNode = currentNode.next;
  }
}

let cities = new LinkedList();
cities.insert("Bharath", "head");
cities.insert("Kumar", "Bharath");
cities.insert("Murugan", "Kumar");
cities.insert("ABCD", "Murugan");
cities.display();
