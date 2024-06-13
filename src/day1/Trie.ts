class Node {
    value: string | null;
    children: Array<Node | null>;
    isEndOfWord: boolean;

    constructor(value: string | null = null) {
        this.value = value;
        this.children = new Array(26).fill(null);
        this.isEndOfWord = false;
    }
}

export default class Trie {
    private head: Node;
    public height: number;

    constructor() {
        this.head = new Node();
        this.height = 0;
    }

    insert(word: string): void {
        let current = this.head;

        for (let i = 0; i < word.length; i++) {
            const idx = this.getIdx(word[i]);

            if (current.children[idx] === null) {
                current.children[idx] = new Node(word[i]);
            }

            current = current.children[idx]!;
        }

        current.isEndOfWord = true;
    }

    walk(node: Node | null, deph: number, word: string): boolean {
        if (!node) {
            return false;
        }

        if (deph === word.length) {
            if (node.isEndOfWord) {
                node.isEndOfWord = false;
            }

            return node.children.every((child) => child === null);
        }

        const idx = this.getIdx(word[deph]);

        if (this.walk(node.children[idx], deph + 1, word)) {
            node.children[idx] = null;

            return !node.isEndOfWord && node.children.every((child) => child === null);
        }

        return false;
    }

    delete(item: string): void {
        this.walk(this.head, 0, item);
    }

    getIdx(str: string): number {
        return str.charCodeAt(0) - "a".charCodeAt(0);
    }

    dfs(node: Node, prefix: string, arr: string[]): void {
        if (node.isEndOfWord) {
            arr.push(prefix);
        }

        for (let i = 0; i < node.children.length; i++) {
            if (node.children[i]) {
                this.dfs(node.children[i]!, prefix + node.children[i]!.value, arr);
            }
        }
    }

    find(partial: string): string[] {
        let current = this.head;
        const words: string[] = [];
        let path = "";

        for (let i = 0; i < partial.length; i++) {
            const idx = this.getIdx(partial[i]);
            if (!current.children[idx]) {
                return [];
            }
            current = current.children[idx]!;
            path += partial[i];
        }

        this.dfs(current, path, words);

        return words;
    }
}
