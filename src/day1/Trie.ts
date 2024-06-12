type Node = {
    value: string;
    key: string;
    childrend?: { [key: string]: Node };
    isEndOfWord: boolean;
};

export default class Trie {
    private data: Node[];
    private head?: Node;
    public height: number;

    constructor() {
        this.data = [];
        this.head = undefined;
        this.height = 0;
    }

    insert(word: string): void {}

    delete(item: string): void {}

    getIdx(str: string): number {
        return str.charCodeAt(0) - "a".charCodeAt(0);
    }

    find(partial: string): string[] | undefined {
        return;
        // if (this.data.length === 0) {
        //     return [];
        // }
        //
        // const path: string[] = [];
        //
        // for (let i = 0; i < partial.length; i++) {
        //     const character = this.getIdx(partial[i]);
        //
        //     if (!this.data[character]) {
        //         return undefined;
        //     }
        //
        //     path.push(this.data[character]);
        // }
        //
        // return path;
    }
}
