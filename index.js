function myRandom(min, max) {
  return Math.random() * (max - min) + min;;
}

const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;

function psButton(gambar) {
  for (let i = 0; i < 10; i++) {
    let x = myRandom(40, screenWidth - 5-30).toString();
    let y = myRandom(50, (screenHeight - (screenHeight/4)) );
    
    const rotate = i%2==0 ? 'animate-reverse-spin' : 'animate-spin-slow'
    // const rotate = Math.round(Math.random()) ;


    const childDiv = document.createElement("div");
    childDiv.className = `w-10 h-10 absolute  z-0 `;
    childDiv.style.top = y + 'px'
    childDiv.style.left = x + 'px'

    const image = document.createElement("img");
    image.src = gambar;
    image.className = `${rotate}  w-full h-full object-contain`;

    childDiv.appendChild(image);

    const referenceElement = document.getElementById("bg");
    referenceElement.appendChild(childDiv);
  }
}

psButton('./src/kotak.png')
psButton('./src/segitiga.png')
psButton('./src/x.png')
psButton('./src/bulet.png')

window.addEventListener('scroll', function() {
  var elements = document.getElementsByTagName('button');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var elementHeight = 400;

    if (scrollPosition >= elementHeight) {
      element.classList.add('tombol-hitam');
    } else {
      element.classList.remove('tombol-hitam');
    }
  }
});







