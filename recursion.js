
//how many sheep jumped over the fence
//input is a number (num of sheep)
//functin displays number of sheep thatjumped over until none are left and message


//1.Counting Sheep

const sheep = function(num) {
    //base case
    if (num === 0) {
        return "All sheep jumped over the fence"
    } 
    //general case
    return sheep(num - 1) + num + ":Another sheep jumps over the fence"
}




//2. Power calculator

const powerCalculator = function(bas, exp) {
//base case
if(exp < 0) {
    return "exponent should be >=0"
} else if (exp === 0) {
    return 1
}
return bas * powerCalculator(bas, exp -1)
}

//console.log(powerCalculator(base, exp))

//3. Reverse string

const reverseString = function(str) {
    //base case
    if (str === '') {
        return '';
    } else if (str.length === 1) {
        return str;
    }
    return reverseString((str.slice(1))) + str[0]
}

//console.log(reverseString("abc"))

//4. nth triangular number


const nthTriangularNum = function (n) {
    if (n === 1) {
      return 1;
    }
    return n + nthTriangularNum(n - 1);
  };

  //5. str splitter

  const splitStr = function (str, separator) {
    if (str === '') {
      return '';
    }
    const newChar = str[0];
    if (newChar === separator) {
      return splitStr(str.slice(1), separator);
    }
    else {
      return newChar + splitStr(str.slice(1), separator);
    }
  };
  
  console.log(splitStr("he/lo", "/"))

  //6. Fibonacci

  const fibonacci = function(num) {
      if (num <= 2) {
          return 1
      } 
      return (fibonacci(num - 1)) + (fibonacci(num -2));
  }
  
//7. Factorial

const factorial = function(num) {
    if (num === 1) {
        return 1
    } return factorial(num - 1) * num
}

console.log(factorial(5))

//8. Maze

const findWayOut = function (maze, position = 0, row = 0, column = 0, path = [], direction = 'S') {
    if (row >= maze.length || column >= maze[0].length) {
      return;
    }
    if (row < 0 || column < 0) {
      return;
    }
    path[position] = direction;
    position++;
    if (maze[row][column] === 'e') {
      // console.log('We found the path.', path);
      return;
    }
    if (maze[row][column] === ' ') {
      maze[row][column] = 'V';
      findWayOut(maze, position, row, column - 1, path, 'L');
      findWayOut(maze, position, row, column + 1, path, 'R');
      findWayOut(maze, position, row - 1, column, path, 'U');
      findWayOut(maze, position, row + 1, column, path, 'D');
      maze[row][column] = ' ';
    }
    position--;
  };

//10. Anagrams
const anagramFinder = function (word) {
    let list = [];
    if (word.length === 1) {
      list.push(word[0]);
      return list;
    }
    for (let i = 0; i < word.length; i++) {
      const prefix = word[i];
      const rest = word.substring(0, i) + word.substring(i + 1);
      let words = anagramFinder(rest);
      for (let j = 0; j < words.length; j++) {
        list.push(prefix + words[j]);
      }
    }
    return list;
  };

