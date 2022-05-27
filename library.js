// 1-changing sides images w/ each mouseover -done
// 2-optional sound play when page is loaded
// 3-link book search w/ an api -done
// 4-make a book list
// book info appear as cards?
// shareable book list(includes date,priority..)
// contact section,able to send a msg
//add simple games like quiz?


function getBooks(){
document.getElementById('output').innerHTML='';
fetch("http://openlibrary.org/search.json?q="+document.getElementById('text').value)
.then(a => a.json())
.then(response => {
  for(let i=0;i<10;i++){
document.getElementById('output').innerHTML+="<h2>"+response.docs[i].title+'</h2>'+response.docs[i].author_name[0]+'<br><img src="http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg"><br>';
  }
});

}


  let side1 = document.getElementById('side1');
  let side2 = document.getElementById('side2');

let paintings = ['url("https://www.teahub.io/photos/full/311-3112807_hd-classical-nature-paintings.jpg")','url("https://d16kd6gzalkogb.cloudfront.net/magazine_images/Vincent-van-Gogh-Whaet-Field-with-Cypresses.-Image-via-wikimedia.org_.jpg")','url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwr_G9taSXXJz33J1bdj65f4TeVxzGfThnA&usqp=CAU")','url("https://c4.wallpaperflare.com/wallpaper/640/405/258/painting-classic-art-nature-landscape-wallpaper-thumb.jpg")','url("https://cdn.shortpixel.ai/spai/w_1003+q_lossy+ret_img+to_webp/https://theartist.me/wp-content/uploads/2017/07/Morning-on-the-Seine-near-Giverny-by-Claude-Monet.jpg")','url("https://w0.peakpx.com/wallpaper/904/188/HD-wallpaper-edwin-church-above-the-clouds-at-sunrise-american-art-nature-classical-art-romanticism.jpg")','url("https://img.artpal.com/855301/7-18-5-17-6-12-45m.jpg")','url("https://ae01.alicdn.com/kf/HTB1WGu4IFXXXXcWXFXXq6xXFXXXc/Canvas-Wall-Art-Water-Lilies-by-Claude-Monet-Painting-Print-Green-Garden-Canvas-Artwork-Classic-Nature.jpg_Q90.jpg_.webp")'
]

let counter1 =0;
let counter2=0;

function setCounterValue(counter) {
  return counter < paintings.length - 1 ? counter + 1 : 0;
}

  side1.addEventListener('mouseover', () => {
      // handle the click event
      side1.style.backgroundImage = paintings[counter1];
  counter1 = setCounterValue(counter1);
  });
  side2.addEventListener('mouseover', () => {
    // handle the click event
    side2.style.backgroundImage = paintings[counter2];
counter2 = setCounterValue(counter2);
});
let firePlaceSound = new Audio('crackling-fireplace-nature-sounds-8012.mp3');
let jungleSound = new Audio('mixkit-jungle-rain-and-birds-2392.wav')
let beachSound = new Audio('sandy-beach-calm-waves-water-nature-sounds-8052.mp3')
let body = document.getElementsByTagName(body);

function playSound(){
  if(window.confirm("Do you want to play natue sound?")) {
    window.open("fireplaceSound.play()", "Thanks for Visiting!");
  }
  

}

playSound();

