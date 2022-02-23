const { setup } = require("./setup");

const puzzleCode = [
  '6000', // PUSH1 00
  '35',   // CALLDATALOAD
  '38',   // CODESIZE
  '18',   // XOR
  '56',   // JUMP
  'fdfd', // REVERT REVERT
  'fdfd', // REVERT REVERT
  'fdfd', // REVERT REVERT
  '5b',   // JUMPDEST
].join('')

//TODO 

// Enter your solution here
const solution = {
  data: ethers.utils.hexZeroPad("0x0", 32),
  value: 0
}

console.log(solution["data"])

setup(puzzleCode, solution)
