export const explanations: { [key: string]: string } = {
  const: "Imagine you have a special box where you can put things. Once you put something in this box, you can't change it. That's what 'const' does in coding! It creates a box (we call it a variable) that holds something that won't change.",
  let: "Think of 'let' as a magical box that can hold different things at different times. You can put something in it now, and later, you can replace it with something else. It's like having a toy box where you can keep swapping toys!",
  var: "This is like an old-fashioned toy box. It can hold different things, but it's a bit tricky because sometimes it doesn't behave as you expect. We usually prefer to use 'const' or 'let' instead.",
  function: "A function is like a recipe. It's a set of instructions that tell the computer how to do something. You can use this recipe (or function) whenever you need to do that task!",
  if: "This is like a question you ask before doing something. If the answer is yes, you do one thing. If it's no, you might do something else. It helps the computer make decisions!",
  else: "This goes with 'if'. It's like saying 'otherwise'. If the 'if' question is no, then you do what comes after 'else'.",
  for: "Imagine you have to do something over and over again, like counting from 1 to 10. A 'for' loop helps you do that without having to write the same thing many times!",
  while: "This is like saying 'keep doing this as long as something is true'. It's another way to do things over and over, but it keeps going until a condition changes.",
  console: "Think of this as a magical screen where you can write messages to yourself. It's super helpful when you want to check what's happening in your code!",
  log: "This goes with 'console'. It's like writing a note to yourself on that magical screen. You can use it to see what's happening in your code as it runs.",
  return: "When you make a function (remember, that's like a recipe), 'return' is how you give back the result. It's like when you finish baking and present your delicious cake!",
  true: "This is like saying 'yes' or 'correct' in code. It's one of the basic building blocks we use when we want to check if something is right.",
  false: "This is the opposite of 'true'. It's like saying 'no' or 'incorrect' in code. We use it when we want to check if something is wrong.",
  null: "Imagine you have an empty box. Not a box with nothing in it, but a box that doesn't even exist. That's what 'null' represents in code!",
  undefined: "This is like when you're looking for something, but it's not just empty, it's not there at all. It's different from 'null' because it usually means something went wrong or we forgot to define something.",
  array: "An array is like a list of things. Imagine you have a box with compartments, and in each compartment, you can put something different. That's an array!",
  object: "An object is like a backpack. It can hold many different things, and each thing has a name tag. You can put all sorts of information in an object and easily find it later using these name tags.",
  class: "A class is like a blueprint for creating things. If you want to make many similar things, you can use a class as a template. It's like having a mold for making many similar toys!",
  import: "This is like borrowing a toy from a friend. When you 'import' in code, you're bringing in some code that someone else wrote so you can use it in your own program.",
  export: "This is the opposite of 'import'. It's like letting your friends borrow your toys. When you 'export' code, you're making it available for other parts of your program (or even other programs) to use.",
  async: "Imagine you're doing a big puzzle. 'async' is like saying 'I'm going to work on this puzzle, but I might need to wait for some pieces. While I'm waiting, I'll do other things.'",
  await: "This goes with 'async'. It's like saying 'I need this puzzle piece before I can continue. I'll wait here until I get it.'",
  try: "This is like saying 'I'm going to try something, but it might not work'. It's a way to do something that might cause a problem, but in a safe way.",
  catch: "This goes with 'try'. It's like saying 'If what I tried didn't work, here's what I'll do instead'. It helps handle problems in your code gracefully.",
  promise: "A promise in code is like when you promise to do something in real life. It's saying 'I'll do this thing, and when I'm done, I'll let you know if it worked or not.'",
  map: "Imagine you have a list of numbers, and you want to double each one. 'map' is like a magic wand that goes through your list and applies the same change to each item!",
  filter: "This is like having a sieve for your code. If you have a list of things, 'filter' helps you keep only the ones you want, based on some rule you set.",
  reduce: "Think of this as a big mixing bowl. You put in a list of things, and 'reduce' combines them all into one final result, following a recipe you provide.",
  '===': "This is like asking 'Are these two things exactly the same?' It checks if two things are equal and of the same type. It's very precise!",
  '==': "This is similar to '===', but a bit more relaxed. It's like asking 'Are these two things kind of the same?' It might say yes even if the things are not exactly identical.",
  '!=': "This is like asking 'Are these two things different?' It's the opposite of '=='.",
  '!==': "This is the strict version of '!='. It's like asking 'Are these two things definitely not the same?' It checks both value and type, just like '==='.",
  '+': "In math, this means add. In code, it can also mean add, but with strings (text), it means join them together!",
  '-': "This is for subtraction, just like in math class!",
  '*': "This star means multiply in code. It's just like the times tables you learn in school!",
  '/': "This is for division. It's like sharing cookies among friends - how many cookies does each friend get?",
  '%': "This is called 'modulo'. It gives you the remainder after division. Like if you have 5 cookies and 2 friends, each friend gets 2 cookies, and you have 1 left over - that 1 is what % gives you!",
  '++': "This is a shortcut for adding 1 to something. It's like saying 'make this number one bigger'.",
  '--': "This is the opposite of '++'. It subtracts 1 from something. It's like saying 'make this number one smaller'.",
  '&&': "This means 'and' in code. It's used when you want to check if two (or more) things are true at the same time.",
  '||': "This means 'or' in code. It's used when you want to check if at least one of two (or more) things is true.",
  '!': "This means 'not' in code. It's like opposite day - it turns true into false and false into true!",
}

export const getSuggestions = (prefix: string): string[] => {
  return Object.keys(explanations).filter(key => key.startsWith(prefix))
}

export const getExplanation = (word: string): string => {
  return explanations[word] || "Oops! I don't know about this yet. But coding is all about learning new things, so let's discover it together!"
}

export const codeExamples: { [key: string]: { title: string, description: string, code: string } } = {
  variables: {
    title: "Variables: Our Code's Memory Boxes",
    description: "Learn how to store and use information in your code.",
    code: `// Let's create some variables!

// This is a constant - it won't change
const myName = "Cody the Coder";

// This is a variable that can change
let myAge = 10;

// Let's use our variables
console.log("Hello, my name is " + myName);
console.log("I am " + myAge + " years old");

// We can change the value of 'let' variables
myAge = 11;
console.log("Next year, I'll be " + myAge);`
  },
  functions: {
    title: "Functions: Our Code's Super Powers",
    description: "Discover how to create reusable blocks of code.",
    code: `// Let's create a function!
function greet(name) {
  return "Hello, " + name + "!";
}

// Now let's use our function
console.log(greet("Alice"));
console.log(greet("Bob"));

// We can also create functions that do math
function addNumbers(a, b) {
  return a + b;
}

console.log("5 + 3 = " + addNumbers(5, 3));`
  },
  conditionals: {
    title: "Conditionals: Making Decisions in Code",
    description: "Learn how to make your code decide what to do.",
    code: `// Let's create a function that decides if a number is big or small
function describeNumber(number) {
  if (number > 100) {
    return number + " is a big number!";
  } else if (number > 50) {
    return number + " is a medium number.";
  } else {
    return number + " is a small number.";
  }
}

// Now let's use our function
console.log(describeNumber(25));
console.log(describeNumber(75));
console.log(describeNumber(150));`
  },
  loops: {
    title: "Loops: Doing Things Over and Over",
    description: "Explore how to repeat actions in your code.",
    code: `// Let's count from 1 to 5 using a for loop
for (let i = 1; i <= 5; i++) {
  console.log("Counting: " + i);
}

// Now let's use a while loop to count down
let countdown = 5;
while (countdown > 0) {
  console.log(countdown + "...");
  countdown = countdown - 1;
}
console.log("Blast off!");`
  },
  arrays: {
    title: "Arrays: Lists of Things in Code",
    description: "Learn how to work with collections of data.",
    code: `// Let's create an array of fruits
const fruits = ["apple", "banana", "orange", "mango"];

// We can access items in the array by their index (position)
console.log("The first fruit is: " + fruits[0]);

// We can also loop through all items in the array
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit " + (i + 1) + ": " + fruits[i]);
}

// We can add a new item to the end of the array
fruits.push("grape");
console.log("We added a new fruit: " + fruits[fruits.length - 1]);`
  }
}

