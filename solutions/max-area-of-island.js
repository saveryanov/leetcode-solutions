// https://leetcode.com/problems/max-area-of-island

/**
 * @param {character[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
    let height = grid.length;
    if (!height) return 0;
    let width = grid[0].length;
    if (!width) return 0;

    function checkIsland(x, y) {
        if (x < 0 || x >= width || y < 0 || y >= height) return 0;
        if (grid[y][x] === 0) return 0;
        grid[y][x] = 0;
        let area = 1;
        area += checkIsland(x - 1, y);
        area += checkIsland(x + 1, y);
        area += checkIsland(x, y - 1);
        area += checkIsland(x, y + 1);
        return area;
    }

    let maxArea = 0;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (grid[y][x] === 1) {
                let area = checkIsland(x, y);
                if (area > maxArea) {
                    maxArea = area;
                }
            }
        }
    }

    return maxArea;
}
