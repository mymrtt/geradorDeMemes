const container = document.getElementById('gerador');
const ul = document.createElement('ul');
const li = document.createElement('li');

addHTML = document.getElementById('gerador').appendChild(ul).appendChild(li);
addHTML.innerHTML = addHTML;

const listOfMemes = [
  {
    'image': "./assets/gta.jpg"
  },
  {
    'image': "./assets/nentendi.jpg"
  },
  {
    'image': "./assets/tenso.jpg"
  },
  {
    'image': "./assets/thisisfine.jpg"
  },
  {
    'image': "./assets/titi.jpg" 
  }
]

function generateMemes() {

  let memes = listOfMemes[0].image;
  console.log(memes);

  getRandom();
}

function getRandom() {
  const meme = Math.floor(Math.random() * 10);
  console.log(meme);
}