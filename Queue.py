from typing import Optional


class Node:
    def __init__(self, value):
        self.value = value
        self.next: Optional["Node"] = None


class Queue:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def EnQueue(self, item):
        node = Node(item)
        self.length += 1

        if self.tail is None:
            self.head = self.tail = node
            return
        self.tail.next = node
        self.tail = node

    # Method to remove an item from the queue
    def DeQueue(self):
        if self.head is None:
            return

        self.length -= 1
        head = self.head
        self.head = self.head.next

        if self.head is None:
            self.tail = None
