#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    struct Node *prev; // Pointer to the previous node
    int value;         // Value of the node
    struct Node *next; // Pointer to the next node
} Node;

typedef struct
{
    int length;
    Node *head;
    Node *tail;
} DoublyLinkedList;

// Function to initialize a doubly linked list
DoublyLinkedList *createDoublyLinkedList()
{
    DoublyLinkedList *list = (DoublyLinkedList *)malloc(sizeof(DoublyLinkedList));

    if (list == NULL)
    {
        fprintf(stderr, "Memory allocation failed\n");
        return NULL;
    }

    list->length = 0;
    list->head = NULL;
    list->tail = NULL;

    return list;
}

// Function to add a new node to the beginning of the list
void prepend(DoublyLinkedList *list, int item)
{
    Node *newNode = (Node *)malloc(sizeof(Node));
    if (newNode == NULL)
    {
        fprintf(stderr, "Memory allocation failed\n");
        return;
    }

    newNode->value = item;
    newNode->next = NULL;
    newNode->prev = NULL;
    list->length++;

    if (list->head == NULL)
    {
        list->head = list->tail = newNode;
        return;
    }

    list->head->prev = newNode;
    newNode->next = list->head;
    list->head = newNode;
}

// Function to add a new node to the end of the list
void append(DoublyLinkedList *list, int item)
{
    Node *newNode = (Node *)malloc(sizeof(Node));
    if (newNode == NULL)
    {
        fprintf(stderr, "Memory allocation failed\n");
        return;
    }

    newNode->value = item;
    newNode->next = NULL;
    newNode->prev = NULL;
    list->length++;

    if (list->tail == NULL)
    {
        list->head = list->tail = newNode;
        return;
    }

    list->tail->next = newNode;
    newNode->prev = list->tail;
    list->tail = newNode;
}

void insertAt(DoublyLinkedList *list, int item, int index)
{
    if (index > list->length - 1 || index < 0)
    {
        fprintf(stderr, "Error, Index out of bound\n");
        return;
    }

    if (index == 0)
    {
        prepend(list, item);
        return;
    }

    if (index == list->length - 1)
    {
        append(list, item);
        return;
    }

    Node *newNode = (Node *)malloc(sizeof(Node));
    if (newNode == NULL)
    {
        fprintf(stderr, "Memory allocation failed\n");
        return;
    }

    newNode->value = item;

    Node *current = list->head;
    for (int i = 1; i < index; i++)
    {
        current = current->next;
    }

    newNode->prev = current->prev;
    newNode->next = current;
    current->prev->next = newNode;
    current->prev = newNode;
    list->length++;
}

int removeItem(DoublyLinkedList *list, int item)
{
    if (list->head == NULL)
    {
        fprintf(stderr, "The list is empty\n");
        return -1;
    }

    if (list->length == 1)
    {
        return removeAt(list, 0);
    }

    Node *current = list->head;
    for (int i = 0; i < list->length; i++)
    {
        if (current->value == item)
        {
            break;
        }

        current = current->next;
    }

    if (current == NULL)
    {
        fprintf(stderr, "Item not found\n");
        return -1;
    }

    list->length--;
    return removeNode(current);
}

int removeAt(DoublyLinkedList *list, int index)
{
    if (index > list->length - 1 || index < 0)
    {
        fprintf(stderr, "Error, Index out of bound\n");
        return -1;
    }

    if (list->head == NULL)
    {
        fprintf(stderr, "The list is empty\n");
        return -1;
    }

    list->length--;

    if (list->length == 0)
    {
        Node *temp = list->head;
        int tempValue = temp->value;

        list->head = list->tail = NULL;
        free(temp);
        return tempValue;
    }

    if (index == 0)
    {
        Node *temp = list->head;
        int tempValue = temp->value;

        list->head = list->head->next;
        list->head->prev = NULL;

        free(temp);
        return tempValue;
    }

    if (index == list->length) // We already subtracted the length by 1
    {
        Node *temp = list->tail;
        int tempValue = temp->value;

        list->tail = list->tail->prev;
        list->tail->next = NULL;

        free(temp);
        return tempValue;
    }

    Node *current = list->head;
    for (int i = 1; i < index; i++)
    {
        current = current->next;
    }

    return removeNode(current);
}

int removeNode(Node *node)
{
    int nodeValue = node->value;

    if (node->prev)
    {
        node->prev->next = node->next;
    }

    if (node->next)
    {
        node->next->prev = node->prev;
    }

    free(node);
    return nodeValue;
}

int get(DoublyLinkedList *list, int index)
{
    if (index > list->length - 1 || index < 0)
    {
        fprintf(stderr, "Error, Index out of bound\n");
        return -1;
    }

    Node *current = list->head;
    for (int i = 0; i < index; i++)
    {
        current = current->next;
    }

    if (current == NULL)
    {
        fprintf(stderr, "Error, Item not found\n");
        return -1;
    }

    return current->value;
}

void main()
{
    DoublyLinkedList *list = createDoublyLinkedList();

    append(list, 1);
    append(list, 2);
    append(list, 3);
    append(list, 4);
    append(list, 5);

    printf("%d\n", get(list, 0));
    printf("%d\n", get(list, 1));
    printf("%d\n", get(list, 2));
    printf("%d\n", get(list, 3));
    printf("%d\n", get(list, 4));

    removeItem(list, 3);
    printf("Removed Item 3 \n");

    printf("%d\n", get(list, 0));
    printf("%d\n", get(list, 1));
    printf("%d\n", get(list, 2));
    printf("%d\n", get(list, 3));

    removeAt(list, 0);
    printf("Removed Item at 0 \n");

    printf("%d\n", get(list, 0));
    printf("%d\n", get(list, 1));
    printf("%d\n", get(list, 2));

    append(list, 10);
    printf("Appended 10 \n");

    printf("%d\n", get(list, 0));
    printf("%d\n", get(list, 1));
    printf("%d\n", get(list, 2));
    printf("%d\n", get(list, 3));

    prepend(list, 100);
    printf("Prepended 100 \n");

    printf("%d\n", get(list, 0));
    printf("%d\n", get(list, 1));
    printf("%d\n", get(list, 2));
    printf("%d\n", get(list, 3));
    printf("%d\n", get(list, 4));

    removeAt(list, list->length - 1);
    printf("Removed Item at last \n");

    printf("%d\n", get(list, 0));
    printf("%d\n", get(list, 1));
    printf("%d\n", get(list, 2));
    printf("%d\n", get(list, 3));
}
