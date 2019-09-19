// https://leetcode.com/problems/surrounded-regions/

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
    let height = grid.length;
    if (!height) return grid;
    let width = grid[0].length;
    if (!width) return grid;

    function checkIsland(x, y) {
        if (x < 0 || x >= width || y < 0 || y >= height) return;
        if (grid[y][x] !== '1') return;
        grid[y][x] = '0';
        checkIsland(x - 1, y);
        checkIsland(x + 1, y);
        checkIsland(x, y - 1);
        checkIsland(x, y + 1);
    }

    let islandsFound = 0;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (grid[y][x] === '1') {
                islandsFound++;
                checkIsland(x, y);
            }
        }
    }

    return islandsFound;
}
