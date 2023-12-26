from typing import Optional


class Node:
    def __init__(self, value):
        self.value = value
        self.prev: Optional["Node"] = None


class Stack:
    def __init__(self):
        self.length = 0
        self.head = None

    def push(self, value):
        new_node = Node(value)
        if self.head is None:
            self.length += 1
            self.head = new_node
            return
        else:
            new_node.prev = self.head
            self.head = new_node

    def pop(self):
        if self.head is None:
            head = self.head
            self.head = None
            return head.value if head else None

        self.length -= 1
        head = self.head
        self.head = self.head.prev
        return head.value

    def peek(self):
        return self.head.value if self.head else None
