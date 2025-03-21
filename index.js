const farmAnimals = 'cow horse sheep pig chicken';


const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');
console.log(moo, neigh, baa, oink, cluck);


const [bessie, , dolly, babe, little] = farmAnimals.split(' ');
console.log(bessie, dolly, babe, little); 


const [blackAndWhite, , white, pink] = ['black and white', 'brown', 'white', 'pink', 'yellow'];
console.log(blackAndWhite, white, pink); 


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors;
console.log(red, orange, yellow, green, blue, indigo, violet); 


const [r, o, y, g, b, , v] = colors;
console.log(r, o, y, g, b, v); 


const [, , , , , indg] = colors;
console.log(indg); 


const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};


const { muppetName, color, song, job, partner } = muppet;
console.log(muppetName, color, song, job, partner); 


const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};


const { 
  album: { theMuppetMovie: { song2, song4 } }, 
  nestedJob, 
  nestedPartner 
} = nestedMuppet;

console.log(song2, song4, nestedJob, nestedPartner);