// https://leetcode.com/problems/island-perimeter/

/**
 * DFS solution
 *
 * @param {character[][]} grid
 * @return {number}
 */
function islandPerimeterDfs(grid) {
    let height = grid.length;
    if (!height) return grid;
    let width = grid[0].length;
    if (!width) return grid;

    function checkIsland(x, y) {
        if (x < 0 || x >= width || y < 0 || y >= height) return 0; // if out of bounds
        if (grid[y][x] === 0 || grid[y][x] === 2) return 0; // if visited or water
        grid[y][x] = 2; // mark this cell as visited
        let perimeter = 0;
        if (x - 1 < 0 || grid[y][x - 1] === 0) {
            perimeter++;
        }
        if (x + 1 >= width || grid[y][x + 1] === 0) {
            perimeter++;
        }
        if (y - 1 < 0 || grid[y - 1][x] === 0) {
            perimeter++;
        }
        if (y + 1 >= height || grid[y + 1][x] === 0) {
            perimeter++;
        }
        perimeter += checkIsland(x - 1, y);
        perimeter += checkIsland(x + 1, y);
        perimeter += checkIsland(x, y - 1);
        perimeter += checkIsland(x, y + 1);
        return perimeter;
    }

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (grid[y][x] === 1) {
                return checkIsland(x, y);
            }
        }
    }

    return 0;
}


/**
 * Simple solution
 *
 * @param {character[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
    let height = grid.length;
    if (!height) return grid;
    let width = grid[0].length;
    if (!width) return grid;

    function getCellPerimeter(x, y) {
        if (x < 0 || x >= width || y < 0 || y >= height) return 0; // if out of bounds
        if (grid[y][x] === 0) return 0;
        let perimeter = 0;
        if (x - 1 < 0 || grid[y][x - 1] === 0) {
            perimeter++;
        }
        if (x + 1 >= width || grid[y][x + 1] === 0) {
            perimeter++;
        }
        if (y - 1 < 0 || grid[y - 1][x] === 0) {
            perimeter++;
        }
        if (y + 1 >= height || grid[y + 1][x] === 0) {
            perimeter++;
        }
        return perimeter;
    }

    let perimeter = 0;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (grid[y][x] === 1) {
                perimeter += getCellPerimeter(x, y);
            }
        }
    }

    return perimeter;
}
