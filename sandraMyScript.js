    const sandraPhotos =[
  {
    id:0,
    url:"https://www.sandra-music.com/images/galleries/shooting001/shooting_1985_001a.jpg"
  },
  {
    id:1,
    url:"https://sandra-music.com/images/galleries/jimrakete/shooting_1992_007.jpg"
  },
  {
    id:2,
    url:"https://www.sandra-music.com/images/galleries/shooting003/shooting_1989_001a.jpg"
  },
  {
    id:3,
    url:"https://sandra-music.com/images/galleries/shooting002/shooting_1988_001.jpg"
  },
  {
    id:4,
    url:"https://sandra-music.com/images/galleries/jimrakete/shooting_1992_010.jpg"
  },
  {
    id:5,
    url:"https://sandra-music.com/images/galleries/jimrakete/shooting_1990_001a.jpg"
  },
  {
    id:6,
    url:"https://sandra-music.com/images/galleries/arabesque/arabqsque_004.jpg"
  },
  {
    id:7,
    url:"https://sandra-music.com/images/galleries/shooting004/shooting_2001_004.jpg"
  },
  {
    id:8,
    url:"https://sandra-music.com/images/galleries/live/live_001b.jpg"
  },
  {
    id:9,
    url:"https://sandra-music.com/images/galleries/shooting004/shooting_2009_002a.jpg"
  },
  {
    id:10,
    url:"https://sandra-music.com/images/galleries/shooting003/shooting_1990_001m.jpg"
  }
];
const sandraIframes=[
  {
    id:"Close to seven",
    src:"https://open.spotify.com/embed/album/7wKFlqXZrKdO0dSVw5jB3b?utm_source=generator&theme=0",
  },
  {
    id:"Into a secret land",
    src:"https://open.spotify.com/embed/album/1nIn3GKdFOt9olxMl6zUzV?utm_source=generator&theme=0",
  },
  {
    id:"Painings in yellow",
    src:"https://open.spotify.com/embed/album/0vTt06MrhGMo2Tz5zq5CRY?utm_source=generator&theme=0",
  }
]
const icons =  [
    {
        id:"spotify",
        src:"./iconsForStraming/icons8-spotify-50.png",
        url:"https://open.spotify.com/artist/646StQO8yxIiI3niu1OHnG?si=AezKYcxrToO83Wz-G6nu1A"
    },
    {
        id:"amazon",
        src:"./iconsForStraming/icons8-amazon-50.png",
        url:"https://amazon.co.uk/music/player/artists/B001EDQBLY/sandra?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_RmZXdqHRHxFanjmQx8SwaUIKA"
    },
    {
        id:"apple",
        src:"./iconsForStraming/icons8-apple-50.png",
        url:"https://music.apple.com/us/artist/sandra/14146074"
    },
    {
        id:"deezer",
        src:"./iconsForStraming/icons8-deezer-50.png",
        url:"https://deezer.page.link/2DvkeEtivXkgBNNx8"
    },
    {
        id:"youtube",
        src:"./iconsForStraming/icons8-youtube-50.png",
        url:"https://www.youtube.com/channel/UCefMqcCMiUxvMxdBtIFd6uw"
    },
    {
      id:"wikipedia",
      src:"./iconsForStraming/icons8-wikipedia-50.png",
      url:"https://en.wikipedia.org/wiki/Sandra_(singer)"

    }
    
]
  const shareLinks =[
    {
      id:"xTwitter",
      src:"./iconsForStraming/icons8-twitterx-100.png",
      href:"https://twitter.com/intent/tweet?text=Please%20share%20this%20website%20@if%20you%20wish%20for%20the%20documentary%20about%20Sandra%20to%20become%20a%20reality%20https://wellbetogethersandra.eu"

    },
    {
      id:"facebook",
      src:"./iconsForStraming/icons8-facebook-100.png",
      href:"https://www.facebook.com/sharer/sharer.php?u=https://wellbetogethersandra.eu"

    },
    {
      id:"whatsapp",
      src:"./iconsForStraming/icons8-whatsapp-100.png",
      href:"https://web.whatsapp.com/send?text=https://www.wellbetogethersandra.eu"

    }
  ]

window.onload = function changePhotos(){
    
    let sandraTop = document.createElement("div");
    sandraTop.setAttribute("class","sandraTop");
    sandraTop.setAttribute("alt","picture of Sandra Ann Lauer");
    document.body.prepend(sandraTop);
    let sandraTopText = document.createElement("div");
    sandraTopText.setAttribute("class","sandraTopText");
    sandraTop.appendChild(sandraTopText);
    let h1 = document.createElement("h1");
    h1.innerText = "Sandra";
    let h2 = document.createElement("h2");
    h2.innerText = "We'll be together";
    sandraTopText.prepend(h1);
    sandraTopText.append(h2);

    let central = document.getElementById("central"); 
    
    let streamingIframe = document.createElement("div");
    streamingIframe.setAttribute("class","streamingIframe");
    document.body.appendChild(streamingIframe);
    
    
    let streamingEmail = document.createElement("div");
    streamingEmail.setAttribute("class","streamingEmail");
    
    let streaming = document.createElement("div");
    streaming.setAttribute("class","streaming");
    streamingEmail.prepend(streaming);
    
    let emailPetition = document.createElement("div");
    emailPetition.setAttribute("class","emailPetition");
    streamingEmail.append(emailPetition);
    streamingIframe.prepend(streamingEmail);


    let iframeDiv = document.createElement("div");
    iframeDiv.setAttribute("class","iframeDiv");
    streamingIframe.appendChild(iframeDiv);
    
    
    let sandraImage = document.createElement("img");
    sandraImage.setAttribute("class","sandraImage");
    sandraImage.setAttribute("alt","picture of Sandra Ann Lauer")
    sandraImage.src = sandraPhotos[7].url;
    central.prepend(sandraImage);

  
    icons.forEach((e)=>{
        let labels = document.createElement("div");
        labels.setAttribute("class","labels");
        let a = document.createElement("a");
        let iconImg = document.createElement("img");
        iconImg.setAttribute("src",e.src);
        iconImg.setAttribute("class","iconImg");
        a.setAttribute("href",e.url);
        a.setAttribute("target","_blank");
        a.appendChild(iconImg);
        labels.appendChild(a);
        labels.addEventListener("mousemove",function(){
          iconImg.classList.remove("iconImage");
          iconImg.classList.add("enlargeImage");
        });
        labels.addEventListener("mouseout",function(){
          iconImg.classList.remove("enlargeImage");
          iconImg.classList.add("iconImage");
        });
      
        
        streaming.appendChild(labels);
    });  
    
    sandraIframes.forEach(e=>{
    let iframe = document.createElement("iframe");
    iframe.setAttribute("class","spotify");
    iframe.setAttribute("src",e.src);
    iframe.setAttribute("allow","autoplay");
    iframe.setAttribute("allow","clipboard-write");
    iframe.setAttribute("allow","encrypted-media");
    iframe.setAttribute("allow","encrypted-media");
    iframe.setAttribute("allow","fullscreen");
    iframe.setAttribute("allowFullScreen","");
    iframe.setAttribute("allow","picture-in-picture");
    iframe.setAttribute("loading","lazy");
    iframeDiv.append(iframe);
    });
  
    
    let textEmail = document.createElement("p");
    textEmail.setAttribute("class","textEmail");
    textEmail.innerText = "To Whom It May Concern:\nAs a part of the large communty of Sandra fans, scattered across the world.\nSandra is arguably the most successfull singer, which comes out from Germany.\nRegardless of her enormous success as a single artist, along with being a part of accomplished projects Arabesque and Enigma, neither of the established streaming services nor TV stations, has dedicated a documentary project to portray her journey from an unknown girl from Saarbrücken, to a megastar of 80's a 90's.\nWith the devoted base of her fans, around the world, such a project would be beneficial for your company.\nTherefore I would like to appeal to the relevant department of your company to consider such project.\nI am adamant it would benefit your business as well as the enormous base of Sandra's fans.\nYours Sincerely\n\n\n\n ";
    emailPetition.appendChild(textEmail);
    let emailButton = document.createElement("button");
    emailButton.innerHTML="Send"
    emailButton.setAttribute("class","emailButton");
    emailButton.addEventListener("click",()=>{
    window.location.href = "mailto:ECcliplicensing@hbo.com,oliver.fahlbusch@rtl.com,zuschauerservice@sat1.de,zuschauerservice@prosieben.de?&body=To Whom It May Concern:%0D%0A As a part of the large communty of Sandra fans, scattered across the world.%0D%0ASandra is arguably the most successfull singer, which comes out from Germany.%0D%0ARegardless of her enormous success as a single artist, along with being a part of accomplished projects Arabesque and Enigma, neither of the established streaming services nor TV stations, has dedicated a documentary project to portray her journey from an unknown girl from Saarbrücken, to a megastar of 80's a 90's.%0D%0AWith the devoted base of her fans, around the world, such a project would be beneficial for your company.%0D%0ATherefore I would like to appeal to the relevant department of your company to consider such project.%0D%0AI am adamant it would benefit your business as well as the enormous base of Sandra's fans.%0D%0AYours Sincerely%0D%0A"
    })
    emailPetition.appendChild(emailButton);
    
    let shareVia = document.createElement("div");
    shareVia.setAttribute("class","shareVia");
    streamingEmail.appendChild(shareVia);
    shareLinks.forEach((e)=>{
      let shareLinksDiv = document.createElement("div");
      let linkAnchor = document.createElement("a");
      let anchorLogo = document.createElement("img");
      anchorLogo.setAttribute("src",e.src);
      anchorLogo.setAttribute("class","anchorLogo");
      linkAnchor.setAttribute("href",e.href);
      linkAnchor.setAttribute("target","_blank");
      linkAnchor.appendChild(anchorLogo);
      shareLinksDiv.appendChild(linkAnchor);
      shareVia.appendChild(shareLinksDiv);
      linkAnchor.addEventListener("mouseenter",function(){
        anchorLogo.classList.remove("anchorLogo");
        anchorLogo.classList.add("enlargeAnchorLogo");
      });
      linkAnchor.addEventListener("mouseout",function(){
        anchorLogo.classList.remove("enlargeAnchorLogo");
        anchorLogo.classList.add("anchorLogo");
      });

    })
    
    let photoSwap = function(){
    let num1 = Math.round(Math.random()*10);
    let img1 = sandraPhotos[num1].url;
    sandraImage.src = img1;
    };

    setInterval(photoSwap,2000);
}
