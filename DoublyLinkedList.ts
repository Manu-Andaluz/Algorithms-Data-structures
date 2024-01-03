type DoublyNode<T> = {
  prev?: DoublyNode<T>;
  value: T;
  next?: DoublyNode<T>;
};

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: DoublyNode<T>;
  private tail?: DoublyNode<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  prepend(item: T): void {
    const node = { value: item } as DoublyNode<T>;
    this.length++;

    if (!this.head) {
      this.head = this.tail = node;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error("Oh no");
    } else if (idx === 0) {
      return this.prepend(item);
    } else if (idx == this.length) {
      return this.append(item);
    }

    const node = { value: item } as DoublyNode<T>;
    let current = this.head;
    this.length++;

    for (let i = 0; i < idx; i++) {
      current = current?.next;
    }

    node.next = current;
    node.prev = current?.prev;

    if (current?.prev) {
      current.prev = node;
    }

    if (current?.next) {
      current.next = node;
    }
  }

  append(item: T): void {
    if (!this.tail) {
      this.append(item);
    }

    const node = { value: item } as DoublyNode<T>;

    node.prev = this.tail;
    this.tail.next = node;

    this.tail = node;
  }

  remove(item: T): T | undefined {
    let current = this.head;

    for (let i = 0; current && i < this.length; i++) {
      if (current.value == item) {
        break;
      }

      current = current?.next;
    }

    if (!current) {
      return;
    }

    this.length--;

    if (this.length == 0) {
      this.head = this.tail = undefined;
      return current.value;
    }

    current.prev = current.next;
    current.next = current.prev;

    if (this.tail == current) {
      this.tail = current.prev;
    }

    if (current == this.head) {
      this.head = current.next;
    }

    current.prev = current.next = undefined;
    return current.value;
  }

  get(idx: number): T | undefined {
    if (idx > this.length) {
      throw new Error("Oh no");
    } else if (!this.head) {
      return;
    }

    let current = this.head as DoublyNode<T> | undefined;

    for (let i = 0; i < idx; i++) {
      if (i == idx) {
        break;
      }
      current = current?.next;
    }

    return current?.value;
  }

  removeAt(idx: number): T | undefined {
    if (idx > this.length) {
      throw new Error("Oh no");
    } else if (!this.head) {
      return;
    }

    let current = this.head as DoublyNode<T> | undefined;
    for (let i = 0; i < idx; i++) {
      if (i == idx) {
        break;
      }
      current = current?.next;
    }

    if (!current) {
      return;
    }

    this.length--;

    if (this.length == 0) {
      this.head = this.tail = undefined;
      return current.value;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;

    current.next = current.prev = undefined;

    return current.value;
  }

  getAt(idx: number) {
    if (!this.head) {
      return;
    } else if (idx > this.length) {
      throw new Error("Oh no");
    }

    let current = this.head as DoublyNode<T> | undefined;

    for (let i = 0; i < idx; i++) {
      if (i == idx) {
        break;
      }
      current = current?.next;
    }

    return current?.value;
  }
}
