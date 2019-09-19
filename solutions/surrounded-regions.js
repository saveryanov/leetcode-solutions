// https://leetcode.com/problems/surrounded-regions/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
    let height = board.length;
    if (!height) return board;
    let width = board[0].length;
    if (!width) return board;

    function copyRegion(x, y) {
        if (x < 0 || x >= width || y < 0 || y >= height) return;
        if (board[y][x] != 'O') return;
        board[y][x] = 'Z';
        copyRegion(x - 1, y);
        copyRegion(x + 1, y);
        copyRegion(x, y - 1);
        copyRegion(x, y + 1);
    }

    for (let y = 1; y < height - 1; y++) {
        copyRegion(0, y);
        copyRegion(width - 1, y);
    }
    for (let x = 0; x < width; x++) {
        copyRegion(x, 0);
        copyRegion(x, height - 1);
    }

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (board[y][x] == 'O') board[y][x] = 'X';
            if (board[y][x] == 'Z') board[y][x] = 'O';
        }
    }
}