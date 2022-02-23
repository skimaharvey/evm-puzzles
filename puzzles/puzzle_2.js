const { setup } = require("./setup");

const puzzleCode = [
  '36',   // CALLDATASIZE
  '38',   // CODESIZE
  '03',   // SUB
  '56',   // JUMP
  'fdfd', // REVERT REVERT
  'fdfd', // REVERT REVERT
  '5b',   // JUMPDEST
].join('')

// Enter your solution here
const solution = {
  data: ethers.utils.hexZeroPad("0x1", 1),
  value: 0
}

// console.log("sol", solution.data)

setup(puzzleCode, solution)
