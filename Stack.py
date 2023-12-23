class Node:
    def __init__(self,data):
        self.value = data;
        self.prev = None

class Stack:

    def __init__(self):
        self.length = 0
        self.head = None

    def push(value):
        if self.length == 0:
            self.length += 1
            self.head = Node(value)
            return
        
        newNode = Node(value)
        newNode.prev = self.head
        self.head = newNode

    def pop():
        if self.length == 0:
            head = self.head
            self.head = None
            return  head.value if head else None

        self.length -= 1
        head = sef.head
        self.head = self.head.prev
        return head.value 

    def peek():
        return self.head.value if self.head else None
        

