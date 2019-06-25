const container = document.getElementById('generate');
const ul = document.createElement('ul');
const li = document.createElement('li');
const img = document.createElement('img');
img.className = 'pic';
const imgAttribute = document.createAttribute('src');
img.setAttributeNode(imgAttribute);

addHTML = document.getElementById('generate').appendChild(ul).appendChild(li).appendChild(img)

const listOfMemes = [
  {'image': "./assets/gta.jpg"},
  {'image': "./assets/nentendi.jpg"},
  {'image': "./assets/tenso.jpg"},
  {'image': "./assets/thisisfine.jpg"},
  {'image': "./assets/titi.jpg"},
]

function memesGenerate() {

  let memes = listOfMemes
  console.log(memes);
  
  getRandom();
}

function getRandom() {
  const meme = listOfMemes[Math.floor(Math.random() * listOfMemes.length)];

  const images = document.getElementsByClassName('pic').src = meme.image

  document.getElementsByClassName('pic').innerHTML = meme

  imgAttribute.value = meme.image
}