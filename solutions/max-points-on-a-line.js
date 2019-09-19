// https://leetcode.com/problems/max-points-on-a-line/
function getK(a, b) {
    return a[0] === b[0] ? 'Infinity' : 10000000 * -(b[1] - a[1]) / (b[0] - a[0]);
}

/**
 * @param {number[][]} points
 * @return {number}
 */
function maxPoints(points) {
    let maxPointsOnLine = 0;
    for (let i = 0; i < points.length; i++) {
        let a = points[i];
        let lines = { Infinity: 0 };
        let pointCount = 1;
        for (let j = i + 1; j < points.length; j++) {
            let b = points[j];
            if (a[0] === b[0] && a[1] === b[1]) {
                pointCount++;
                continue;
            }

            let k = getK(a, b);
            lines[k] = (lines[k] || 0) + 1;
        }

        for (let k of Object.keys(lines)) {
            let count = lines[k] + pointCount;
            if (maxPointsOnLine < count) {
                maxPointsOnLine = count;
            }
        }
    }
    return maxPointsOnLine;
}
