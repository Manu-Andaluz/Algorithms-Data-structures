type Node<T> = {
  value: T;
  nextNode?: Node<T>;
};

export class Queue<T> {
  public length: number;
  public head?: Node<T>;
  public tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T) {
    const node = { value: item } as Node<T>;
    this.length++;

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    this.tail.nextNode = node;
    this.tail = node;
  }

  deque() {
    if (!this.head) {
      return undefined;
    }
    this.length--;
    const head = this.head;
    this.head = this.head.nextNode;

    if (this.length === 0) {
      this.tail = undefined;
    }

    return head.value;
  }

  peek() {
    return this.head?.value;
  }
}
