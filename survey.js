const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable: ', (answer) => {
  rl.question('What\'s an activity you like doing? ', (answer1) => {
    rl.question('What do you listen to while doing that? ', (answer2) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer3) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer4) => {
          rl.question('Which sport is your absolute favourite? ', (answer5) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer6) => {
              console.log(`${answer} likes to ${answer1} while listening to his favorite song, ${answer2}. Their favorite meal is ${answer3} and his favorite thing about that is ${answer4}. Their favorite sport is ${answer5}, how EXCITING!! Lastly, his favorite superpower is ${answer6}`)
                rl.close();
            });
           
          });
         
        });
      
      });
      
    });
    
  });
});





