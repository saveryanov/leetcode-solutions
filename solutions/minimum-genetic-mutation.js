// https://leetcode.com/problems/minimum-genetic-mutation/

function countWordsDiff(word1, word2) {
    let diffCount = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            diffCount++;
        }
    }
    return diffCount;
}

class WordLadder {
    constructor(beginWord, endWord, wordList) {
        this.beginWord = beginWord;
        this.endWord = endWord;
        this.wordList = wordList;
        this.graph = this.buildGraph();
    }

    buildGraph() {
        let graph = {};
        for (let word of this.wordList) {
            graph[word] = [];
            for (let anotherWord of this.wordList) {
                if (anotherWord == word) continue;
                if (countWordsDiff(word, anotherWord) == 1) {
                    graph[word].push(anotherWord);
                }
            }
        }
        return graph;
    }


    bfsWayLength() {
        let visited = {};
        let queue = [{ word: this.beginWord, length: 0 }];
        visited[this.beginWord] = true;
        while (queue.length) {
            let current = queue.shift();
            if (current.word == this.endWord) {
                return current.length;
            }
            for (let childWord of this.graph[current.word]) {
                if (visited[childWord]) continue;
                visited[childWord] = true;
                queue.push({ word: childWord, length: current.length + 1 });
            }
        }
        return -1;
    }
}

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
function minMutation(start, end, bank) {
    // main
    if (bank.indexOf(end) === -1) return -1;
    if (countWordsDiff(start, end) == 1) {
        return 1;
    }

    if (bank.indexOf(start) === -1) {
        bank.push(start);
    }

    const wordLadder = new WordLadder(start, end, bank);

    return wordLadder.bfsWayLength();
};
