// https://leetcode.com/problems/word-ladder-ii/
/*
Runtime: 1908 ms, faster than 39.10% of JavaScript online submissions for Word Ladder II.
Memory Usage: 73.7 MB, less than 100.00% of JavaScript online submissions for Word Ladder II.
*/


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
        this.shortestWayLength = wordList.length;
        this.graph = this.buildGraph();
        this.shortestWayLengths = {}; // cached shortest ways lenghts from words to endWord
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

    // bfs with cache for searching shortest way length from some word to endWord (maxDepth can be used for rejecting ways by length)
    // zero length is used when no way to endWord (length from endWord to endWord is 1)
    bfsWayLength(beginWord, maxDepth) {
        if (this.shortestWayLengths[beginWord] !== undefined) return this.shortestWayLengths[beginWord];

        let visited = {};
        let queue = [[beginWord]];
        visited[beginWord] = true;
        while (queue.length) {
            let currentWay = queue.shift();
            let currentWord = currentWay[currentWay.length - 1];
            if (currentWord == this.endWord) { // way found
                this.shortestWayLengths[beginWord] = currentWay.length; // cache this way
                return currentWay.length;
            }
            for (let childWord of this.graph[currentWord].filter(word => word != this.beginWord)) {
                if (visited[childWord]) continue;
                visited[childWord] = true;
                if (maxDepth && maxDepth < currentWay.length + 1) continue;
                queue.push([...currentWay, childWord]);
            }
        }
        this.shortestWayLengths[beginWord] = 0;
        return 0;
    }

    dfsWays(way) {
        const currentWord = way[way.length - 1];
        if (!this.graph[currentWord] || !this.graph[currentWord].length) return [];
        if (way.length > this.shortestWayLengths[this.beginWord]) return [];

        if (currentWord == this.endWord) {
            return [way];
        }

        let waysFound = [];
        const nextWords = this.graph[currentWord].filter(nextWord => way.indexOf(nextWord) === -1);
        for (let nextWord of nextWords) {
            // we reject all ways that longer than shortest way from beginWord to endWord
            let shortestWayLengthFromNextWord = this.bfsWayLength(nextWord, this.shortestWayLengths[this.beginWord]);
            if (!shortestWayLengthFromNextWord) continue;
            // we reject this way if it can't be good as best way from beginWord to endWord
            if (this.shortestWayLengths[this.beginWord] < way.length + shortestWayLengthFromNextWord) continue;
            let nextWordWays = this.dfsWays([...way, nextWord]);
            waysFound.push(...nextWordWays);
        }
        return waysFound;
    }

    getShortestWays() {
        if (countWordsDiff(this.beginWord, this.endWord) == 1) {
            return [[this.beginWord, this.endWord]];
        }
        let shortestWay = this.bfsWayLength(this.beginWord);
        if (!shortestWay) return [];

        return this.dfsWays([this.beginWord]);
    }
}

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
function findLadders(beginWord, endWord, wordListArg) {
    // main
    if (wordListArg.indexOf(endWord) === -1) return [];

    let wordList = [...wordListArg];
    if (wordListArg.indexOf(beginWord) === -1) {
        wordList.push(beginWord);
    }

    const wordLadder = new WordLadder(beginWord, endWord, wordList);
    let ways = wordLadder.getShortestWays();

    return ways;
}
