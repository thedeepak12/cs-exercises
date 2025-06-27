function knightMoves(start, end) {
  const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  const isValid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

  const queue = [];
  const visited = new Set();

  queue.push({ position: start, path: [start] });
  visited.add(start.toString());

  while (queue.length > 0) {
    const { position, path } = queue.shift();
    const [x, y] = position;

    if (x === end[0] && y === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((pos) => console.log(pos));
      return path;
    }

    for (let [dx, dy] of directions) {
      const [nx, ny] = [x + dx, y + dy];
      const nextPos = [nx, ny];

      if (isValid(nx, ny) && !visited.has(nextPos.toString())) {
        visited.add(nextPos.toString());
        queue.push({ position: nextPos, path: [...path, nextPos] });
      }
    }
  }

  return null;
}

knightMoves([0, 0], [1, 2]);
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);