// https://leetcode.com/problems/word-ladder/

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
        let queue = [{ word: this.beginWord, length: 1 }];
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
        return 0;
    }
}

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
function ladderLength(beginWord, endWord, wordList) {
    // main
    if (wordList.indexOf(endWord) === -1) return [];
    if (countWordsDiff(beginWord, endWord) == 1) {
        return 2;
    }

    if (wordList.indexOf(beginWord) === -1) {
        wordList.push(beginWord);
    }

    const wordLadder = new WordLadder(beginWord, endWord, wordList);

    return wordLadder.bfsWayLength();
}
