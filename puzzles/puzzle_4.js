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
  data: ethers.utils.hexZeroPad("0x1", 32),
  // data: "0x0000000000000000000000000000000000000000000000000000000000000000",
  value: 0
}

setup(puzzleCode, solution)
