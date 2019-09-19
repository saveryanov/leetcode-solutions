// https://leetcode.com/problems/text-justification/

function lineLength(line) {
    return line.reduce((length, word) => length + word.length, 0);
}

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
    let linesWords = [];

    let lineWords = [];
    let currentLineWidth = 0;
    for (let word of words) {
        if (currentLineWidth + word.length + lineWords.length > maxWidth) {
            linesWords.push(lineWords);
            lineWords = [];
            currentLineWidth = 0;
        }

        lineWords.push(word);
        currentLineWidth += word.length;
    }
    let lastLineWords = lineWords;

    let textLines = [];
    for (lineWords of linesWords) {
        let spacesLeft = maxWidth - lineLength(lineWords);
        let textLine = '';
        if (lineWords.length > 1) {
            let wordsLeft = lineWords.length;
            for (let word of lineWords.slice(0, -1)) {
                let spacesBetweenWords = spacesLeft / (wordsLeft - 1);
                let spacesAfterWord = spacesLeft - Math.ceil(spacesBetweenWords) > 0 ? Math.ceil(spacesBetweenWords) : Math.floor(spacesBetweenWords);
                spacesLeft -= spacesAfterWord;
                wordsLeft--;
                textLine += word + ' '.repeat(spacesAfterWord);
            }
            textLine += lineWords[lineWords.length - 1];
        } else { // single word
            textLine += lineWords[0] + ' '.repeat(spacesLeft);
        }
        textLines.push(textLine);
    }

    let lastTextLine = lastLineWords.join(' ');
    lastTextLine += ' '.repeat(maxWidth - lastTextLine.length);
    textLines.push(lastTextLine);
    return textLines;
}
