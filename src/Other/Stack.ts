type StackNode<T> = {
  value: T;
  previus?: StackNode<T>;
};

export default class Stack<T> {
  public length: number;
  private head?: StackNode<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T) {
    const node = { value: item } as StackNode<T>;
    this.length++;

    if (!this.head) {
      this.head = node;
      return;
    }
    node.previus = this.head;
    this.head = node;
  }

  pop() {
    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head?.value;
    }

    this.length--;
    const head = this.head as StackNode<T>;
    this.head = head.previus;
    return head.value;
  }

  peek() {
    return this.head?.value;
  }
}
