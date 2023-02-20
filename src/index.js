module.exports = function check(str, bracketsConfig) {
    const bracketsPair = new Map(bracketsConfig);
    const stack = [];
    for (const char of str) { 
      if (bracketsPair.get(stack.at(-1)) == char) { 
        stack.pop();
      } else {
        stack.push(char);
      }
    }
    return stack.length == 0; 
  }
  
