const fs = require('fs');

// so we have the append file that we can use to create new files.
fs.appendFile('log.txt',`${process.argv[2]}\n`,(err) =>{
    err ? console.log(err) : console.log('Commit logged!')
});

// the purpose of this is to real a files date and convert it to utf-8 and log it in the terminal  
fs.readFile('data.csv','utf-8',(error,data)=>{
    error ? console.log(error) : console.log(data)
});

// this will allow for you to write a fle in this case oys will be a txt file 
fs.writeFile('log.txt', 'time',(err) => {
    err ? console.log(err) : console.log('success!')
})

const inquirer = require('inquirer');
// the inquirer method allows for you to prompt a user a question in the terminal 
// for this method youll need to have it in one of the dependices in the package.json

inquirer
// here we that the prompt the type is the type of answer that will be recieved 
// the message is what will pop up and the user will see 
// the name is the name of the prompt that it will be stored as 
    .prompt([
        {
            type:'input',// checkbox or  list are the other option 
            message:'what is your name',
            name:'username'
            // choice:['1','2','3']
        }
])

// there are many types of ways that you can loop through arrays but one way to do it espically with using node is a for of loop

const moreSongs = [
    ['Bad Guy', 1],
    ['The Wheels on the Bus', 2],
    ['Friday', 3],
  ];
  
  // for of loop
  for (const song of moreSongs) {
    console.log(song);
  }

  function howManyArgs(...args) {
    return `You passed ${args.length} arguments.`; // point out the template literal
  }
  
  console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
  console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.
  
  // 1. spread
  const dragons = ["Drogon", "Viserion", "Rhaegal"];
  const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons
  
  console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]

  // 2. Nested Object
const js = {
    name: 'JavaScript',
    type: 'programming language',
    version: 'ES6',
    tools: {
      frameworks: {
        framework1: 'AngularJS',
        framework2: 'Vue.js',
      },
      libraries: {
        library1: 'jQuery',
        library2: 'React',
      },
    },
  };
  
  const { framework1, framework2 } = js.tools.frameworks;
  
  console.log(framework1); // <= AngularJS
  console.log(framework2); // <= Vue.js