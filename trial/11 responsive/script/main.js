// query all id selectors
let background1 = $("#background1");
let background2 = $("#background2");
let background3 = $("#background3");
let background4 = $("#background4");
let background5 = $("#background5");
let background6 = $("#background6");

let ground1 = $("#ground1");
let ground2 = $("#ground2");
let ground3 = $("#ground3");
let ground4 = $("#ground4");
let ground5 = $("#ground5");
let ground6 = $("#ground6");

let pinktree = $("#pinktree");
let signboard = $("#signboard");
let stats = $("#stats");
let skills = $("#skills");
let ukflag = $("#ukflag");
let universitystone = $("#universitystone");
let university_inside = $("#university-inside");
let university_outside = $("#university-outside");
let malaysianflag = $("#malaysianflag");
let intel_inside = $("#intel-inside");
let intel_outside = $("#intel-outside");
let homesign = $("#homesign");
let house_inside = $("#house-inside");
let house_outside = $("#house-outside");
let photoframe = $("#photoframe");
let chess = $("#chess");
let pillar = $("#pillar");
let door = $("#door");
let facebook_icon = $("#facebook-icon");
let pillar2 = $("#pillar2");
let door2 = $("#door2");
let linkedin_icon = $("#linkedin-icon");
let pillar3 = $("#pillar3");
let door3 = $("#door3");
let instagram_icon = $("#instagram-icon");
let pillar4 = $("#pillar4");
let door4 = $("#door4");
let itchio_icon = $("#itchio-icon");
let pillar5 = $("#pillar5");
let door5 = $("#door5");
let github_icon = $("#github-icon");
let email_icon = $("#email-icon");
let resume_holder = $("#resume-holder");
let resume = $("#resume");
let resume_holder2 = $("#resume-holder2");
let relaxer = $("#relaxer");
let wip1 = $("#wip1");
let wip2 = $("#wip2");
let wip3 = $("#wip3");

let unifade = $("#unifade");


let lowerball = $("#lowerball");
let upperball = $("#upperball");

let portfolio = $("#portfolio");
let portfolio_img = $("#portfolio-img");
let portfolio_header = $("#portfolio-header");
let portfolio_paragraph = $("#portfolio-paragraph");
let portfolio_link = $("#portfolio-link");

let player = $("#player");

let title = $("#title");

let sprites_array = [
  pinktree,
  signboard,
  stats,
  skills,
  ukflag,
  universitystone,
  university_inside,
  university_outside,
  malaysianflag,
  intel_inside,
  intel_outside,
  homesign,
  house_inside,
  house_outside,
  photoframe,
  chess,
  pillar,
  door,
  facebook_icon,
  pillar2,
  door2,
  linkedin_icon,
  pillar3,
  door3,
  instagram_icon,
  pillar4,
  door4,
  itchio_icon,
  pillar5,
  door5,
  github_icon,
  resume_holder,
  email_icon,
  resume,
  resume_holder2,
  relaxer,
  wip1,
  wip2,
  wip3
]

let current_title = 99;
let inStats = 0;
let inSkills = 0;

let testtest = 0;
let testtest2 = 0;
let testtest3 = 0;
let testtest4 = 0;
let testtest5 = 0;
let testtest6 = 0;
let testtest7 = 0;
let testtest8 = 0;

// pointer event none
$(player).css("pointer-events", "none");
stats.css("pointer-events", "none");
skills.css("pointer-events", "none");
$("#stat-wrapper").css("pointer-events", "none");

// query screen size
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
/// potential better alternative: var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

// set up fake vertical scrolling height
$("#realcontent").css("height", vh);
let realwidth = $("#realcontent").css("width");
let fakeheight = parseInt(realwidth, 10) + vh-vw;
$("#fakecontent").css("height", fakeheight+"px");

// set background
background1.css("background-image", 'url(image/export/background-country.png)');
background2.css("background-image", 'url(image/export/background-streetstores.png)');
background3.css("background-image", 'url(image/export/background-skyscraper.jpg)');
background4.css("background-image", 'url(image/export/background-mountains.jpg)');
background5.css("background-image", 'url(image/export/background-cloud.png)');
background6.css("background-image", 'url(image/export/background-tot.png)');


// set ground
ground1.css("background-image", 'url(image/export/ground-grassdirt.png)');
ground2.css("background-image", 'url(image/export/ground-grassstone.png)');
ground3.css("background-image", 'url(image/export/ground-squarestone.png)');
ground4.css("background-image", 'url(image/export/ground-squarestone.png)');
ground5.css("background-image", 'url(image/export/ground-magical.png)');
ground6.css("background-image", 'url(image/export/ground-tot.png)');

// set ground width
ground1.css("width", realwidth);
ground2.css("width", realwidth);
ground3.css("width", realwidth);
ground4.css("width", realwidth);
ground5.css("width", realwidth);
ground6.css("width", realwidth);

// set sprites css.position -> absolute , css.bottom -> groundHeight
let groundHeight = ground1.css("height");

player.css("bottom", groundHeight);

for (i = 0; i < sprites_array.length; i++) {
  sprites_array[i].attr('draggable', false);
  sprites_array[i].css("position", "absolute");
  sprites_array[i].css("bottom", groundHeight);
}
facebook_icon.css("bottom", "74.3%");
instagram_icon.css("bottom", "74.3%");
linkedin_icon.css("bottom", "74.3%");
itchio_icon.css("bottom", "74.3%");
github_icon.css("bottom", "74.3%");

email_icon.css("bottom", "50%");
resume.css("bottom", "50%");

$(facebook_icon).css("z-index", "500");
$(facebook_icon).wrap($('<a>',{
  href: 'https://www.facebook.com/derrickkueh1995'
}).attr('target','_blank'));
$(instagram_icon).css("z-index", "500");
$(instagram_icon).wrap($('<a>',{
  href: 'https://www.instagram.com/derricktzeshen/'
}).attr('target','_blank'));
$(linkedin_icon).css("z-index", "500");
$(linkedin_icon).wrap($('<a>',{
  href: 'https://www.linkedin.com/in/derrickkueh'
}).attr('target','_blank'));
$(itchio_icon).css("z-index", "500");
$(itchio_icon).wrap($('<a>',{
  href: 'https://ahpek.itch.io/'
}).attr('target','_blank'));
$(github_icon).css("z-index", "500");
$(github_icon).wrap($('<a>',{
  href: 'https://github.com/prodarkjjang'
}).attr('target','_blank'));
$(door).wrap($('<a>',{
  href: 'https://www.facebook.com/derrickkueh1995'
}).attr('target','_blank'));
$(door2).wrap($('<a>',{
  href: 'https://www.instagram.com/derricktzeshen/'
}).attr('target','_blank'));
$(door3).wrap($('<a>',{
  href: 'https://www.linkedin.com/in/derrickkueh'
}).attr('target','_blank'));
$(door4).wrap($('<a>',{
  href: 'https://ahpek.itch.io/'
}).attr('target','_blank'));
$(door5).wrap($('<a>',{
  href: 'https://github.com/prodarkjjang'
}).attr('target','_blank'));
$(email_icon).wrap($('<a>',{
  href: 'mailto:derrickkueh1995@gmail.com'
}));
$(resume).wrap($('<a>',{
  href: 'https://drive.google.com/file/d/1Gmql_jWqaIWEv_fuGxU6oSsiFR2Z83i2/view?usp=sharing'
}).attr('target','_blank'));

// Checkpoint in pixels from the left
let distance = [9700,4000,4000,8000,3700,8100];
let checkPoint = [];
for(let i = 0; i < 6; i++){
  if(i == 0) {
    checkPoint[i] = distance[i];
  } else {
    checkPoint[i] = checkPoint[i - 1] + distance[i];
  }
}

// Set the position of the sprites based on scenes

// Scene 1 - country - 5500
pinktree.css("left", "20px");
signboard.css("left", "1300px");

// Scene 2 - UK - 4000
let checkpoint1 = checkPoint[0] + vw/2;
ukflag.css("left", checkpoint1);
universitystone.css("left", checkpoint1 + 2000);
university_inside.css("left", checkpoint1 + 2400);
university_outside.css("left", checkpoint1 + 2400);

// Scene 5 - Intel - 4000
let checkpoint2 = checkPoint[1] + vw/2;
malaysianflag.css("left", checkpoint2);
intel_inside.css("left", checkpoint2 + 2000);
intel_outside.css("left", checkpoint2 + 2000);
// Scene 6 - Working at home - 4000
let checkpoint3 = checkPoint[2] + vw/2;
homesign.css("left", checkpoint3);
house_inside.css("left", checkpoint3 + 1000);
house_outside.css("left", checkpoint3 + 1000);
photoframe.css("left", checkpoint3 + 2700);
// Scene 7 - Hobbies - 3000
let checkpoint4 = checkPoint[3] + vw/2;
chess.css("left", checkpoint4 + 1000);
wip3.css("left", checkpoint4 + 3000);
// Scene 8 - Contact - 3500
let checkpoint5 = checkPoint[4] + vw/2;
pillar.css("left", checkpoint5 + 1200);
door.css("left", checkpoint5 + 1200);
facebook_icon.css("left", checkpoint5 + 1200);

let width_pillar = parseInt($("#pillar").css("width"), 10);

$(window).on('load', function(){

  testtest = parseInt(revealHouseLeft,10) + parseInt(house_inside.css("width"),10)* 0.365;
  testtest2 = parseInt(revealHouseLeft,10) + parseInt(house_inside.css("width"),10)* 0.395;

  testtest3 = parseInt(revealHouseLeft,10) + parseInt(house_inside.css("width"),10)* 0.521;
  testtest4 = parseInt(revealHouseLeft,10) + parseInt(house_inside.css("width"),10)* 0.551;

  testtest5 = parseInt(revealHouseLeft,10) + parseInt(house_inside.css("width"),10)* 0.676;
  testtest6 = parseInt(revealHouseLeft,10) + parseInt(house_inside.css("width"),10)* 0.706;

  testtest7 = parseInt(revealHouseLeft,10) + parseInt(house_inside.css("width"),10)* 0.831;
  testtest8 = parseInt(revealHouseLeft,10) + parseInt(house_inside.css("width"),10)* 0.861;

  width_pillar = parseInt($("#pillar").css("width"), 10);
  console.log("width pillar are " + width_pillar);
  pillar2.css("left", checkpoint5 + 1200+width_pillar);
  door2.css("left", checkpoint5 + 1200+width_pillar);
  instagram_icon.css("left", checkpoint5 + 1200+width_pillar);

  pillar3.css("left", checkpoint5 + 1200+width_pillar*2);
  door3.css("left", checkpoint5 + 1200+width_pillar*2);
  linkedin_icon.css("left", checkpoint5 + 1200+width_pillar*2);

  pillar4.css("left", checkpoint5 + 1200+width_pillar*3);
  door4.css("left", checkpoint5 + 1200+width_pillar*3);
  itchio_icon.css("left", checkpoint5 + 1200+width_pillar*3);

  pillar5.css("left", checkpoint5 + 1200+width_pillar*4);
  door5.css("left", checkpoint5 + 1200+width_pillar*4);
  github_icon.css("left", checkpoint5 + 1200+width_pillar*4);

  $("#preloader").css("opacity", 0);
  setTimeout(function(){ $("#preloader").hide(); }, 2000);
});

pillar.css("transform", "translateX(-50%)");
door.css("transform","translateX(-50%)");
facebook_icon.css("transform","translateX(-50%)" );
pillar2.css("transform", "translateX(-50%)");
door2.css("transform","translateX(-50%)");
instagram_icon.css("transform","translateX(-50%)" );
pillar3.css("transform", "translateX(-50%)");
door3.css("transform","translateX(-50%)");
linkedin_icon.css("transform","translateX(-50%)" );
pillar4.css("transform", "translateX(-50%)");
door4.css("transform","translateX(-50%)");
itchio_icon.css("transform","translateX(-50%)" );
pillar5.css("transform", "translateX(-50%)");
door5.css("transform","translateX(-50%)");
github_icon.css("transform","translateX(-50%)" );

email_icon.css("left", checkpoint5 + 4000);
resume_holder.css("left", checkpoint5 + 4000);
resume.css("left", checkpoint5 + 4500);
resume_holder2.css("left", checkpoint5 + 4500);

email_icon.css("transform","translateX(-50%)");
resume.css("transform","translateX(-50%)" );
resume_holder.css("transform","translateX(-50%)" );
resume_holder2.css("transform","translateX(-50%)" );


// Scene 9 - Chill - share with contact
relaxer.css("left", checkpoint5 + 6000);

// Set sprites height
pinktree.css("height", "80%");
signboard.css("height", "30%");

ukflag.css("height", "80%");
universitystone.css("height", "20%");
university_inside.css("height", "80%");
university_outside.css("height", "80%");

malaysianflag.css("height", "80%");
intel_inside.css("height", "82%");
intel_outside.css("height", "82%");

homesign.css("height", "30%");
house_inside.css("height", "80%");
house_outside.css("height", "80%");

chess.css("height", "60%");

pillar.css("height", "85%");
door.css("height", "71%");
pillar2.css("height", "85%");
door2.css("height", "71%");
pillar3.css("height", "85%");
door3.css("height", "71%");
pillar4.css("height", "85%");
door4.css("height", "71%");
pillar5.css("height", "85%");
door5.css("height", "71%");
facebook_icon.css("height", "10.1%");
instagram_icon.css("height", "10.1%");
linkedin_icon.css("height", "10.1%");
itchio_icon.css("height", "10.1%");
github_icon.css("height", "10.1%");
email_icon.css("height", "10%");
resume_holder.css("height", "30%");
resume.css("height",  "10%");
resume_holder2.css("height", "30%");
relaxer.css("height", "20%");

lowerball.css("height", "20%");
upperball.css("height", "20%");


// Reveal uni and intel and house
let uniLeft = university_outside.css("left");
let revealUniLeft = parseInt(uniLeft, 10) - vw/2;
let revealUniRight = revealUniLeft + 1080;
console.log("revealUniLeft is " + revealUniLeft);

let intelLeft = intel_outside.css("left");
let revealIntelLeft = parseInt(intelLeft, 10) - vw/2;
let revealIntelRight = revealIntelLeft + 1000;
console.log("intelLeft is " + intelLeft);

let houseLeft = house_outside.css("left");
let revealHouseLeft = parseInt(houseLeft, 10) - vw/2;
let revealHouseRight = revealHouseLeft + 5400;
console.log("houseLeft is " + houseLeft);


// Resize window will recalibrate all parameters
window.addEventListener("resize", recalibrate);

function recalibrate() {
  // set height of background;
vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
/// potential better alternative: var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

$("#realcontent").css("height", vh);
realwidth = $("#realcontent").css("width");
fakeheight = parseInt(realwidth, 10) + vh-vw;
$("#fakecontent").css("height", fakeheight+"px");
ground1.css("width", realwidth);
groundHeight = ground1.css("height");

player.css("bottom", groundHeight);
for (i = 0; i < sprites_array.length; i++) {
  sprites_array[i].css("position", "absolute");
  sprites_array[i].css("bottom", groundHeight);
}

facebook_icon.css("bottom", "74.3%");
instagram_icon.css("bottom", "74.3%");
linkedin_icon.css("bottom", "74.3%");
itchio_icon.css("bottom", "74.3%");
github_icon.css("bottom", "74.3%");

email_icon.css("bottom", "50%");
resume.css("bottom", "50%");

width_pillar = parseInt($("#pillar").css("width"), 10);
console.log("width pillar are " + width_pillar);
pillar2.css("left", checkpoint5 + 1200+width_pillar);
door2.css("left", checkpoint5 + 1200+width_pillar);
instagram_icon.css("left", checkpoint5 + 1200+width_pillar);
pillar3.css("left", checkpoint5 + 1200+width_pillar*2);
door3.css("left", checkpoint5 + 1200+width_pillar*2);
linkedin_icon.css("left", checkpoint5 + 1200+width_pillar*2);
pillar4.css("left", checkpoint5 + 1200+width_pillar*3);
door4.css("left", checkpoint5 + 1200+width_pillar*3);
itchio_icon.css("left", checkpoint5 + 1200+width_pillar*3);
pillar5.css("left", checkpoint5 + 1200+width_pillar*4);
door5.css("left", checkpoint5 + 1200+width_pillar*4);
github_icon.css("left", checkpoint5 + 1200+width_pillar*4);

// revealUniLeft = uniLeft - vw/2;
// revealUniRight = revealUniLeft + 1000;

// revealIntelLeft = intelLeft - vw/2;
// revealIntelRight = revealIntelLeft + 1000;

// revealHouseLeft = houseLeft - vw/2;
// revealHouseRight = revealHouseLeft + 1000;
}

let lastScrollTop = pageYOffset || 0;
// Main scroll event
$(window).on('scroll', function() {
  // Change background and ground 
  changeScene();
  // horizontal scrolling
  $("#realcontent").css("left", -$(window).scrollTop());
  // parallax effect on background
  background1.css("left", -$(window).scrollTop()/40);
  background2.css("left", checkPoint[0]/49-$(window).scrollTop()/50);
  background3.css("left", checkPoint[1]/49-$(window).scrollTop()/50);
  background4.css("left", checkPoint[2]/30-$(window).scrollTop()/30);
  background5.css("left", checkPoint[3]/30-$(window).scrollTop()/30);
  background6.css("left", checkPoint[4]/49-$(window).scrollTop()/50);
  // scrolldown fading
  enterScroll();
  // university fading
  enterUniversity();
  // intel fading
  enterIntel();
  // house fading
  enterHouse();
  // portfolio fading
  enterPortfolio();
  // stat appearing
  enterStat();
  // skill appearing
  enterSkill();
  // player walking animation
    player.css("height", "419px");
    player.css("width", "209px");
  var st = window.pageYOffset || document.documentElement.scrollTop; 
  if (st > lastScrollTop){
     // downscroll code
    if($(window).scrollTop() < checkPoint[0]) {
      player.css("animation", "walkingRight_casual 0.8s step-end infinite");
    } else if($(window).scrollTop() >= checkPoint[0] && $(window).scrollTop() < checkPoint[1]) {
      player.css("animation", "walkingRight_cold 0.8s step-end infinite");
    } else if($(window).scrollTop() >= checkPoint[1] && $(window).scrollTop() < checkPoint[2]) {
      player.css("animation", "walkingRight_formal 0.8s step-end infinite");
    } else if($(window).scrollTop() >= checkPoint[2] && $(window).scrollTop() < checkPoint[3]) {
      player.css("animation", "walkingRight_mask 0.8s step-end infinite");
    } else if($(window).scrollTop() >= checkPoint[3] && $(window).scrollTop() < checkPoint[4]) {
      player.css("animation", "walkingRight_magical 0.8s step-end infinite");
      player.css("height", "500.2px");
      player.css("width", "520.2px");
    } else if($(window).scrollTop() >= checkPoint[4] && $(window).scrollTop() < checkPoint[5]) {
      player.css("animation", "walkingRight_holy 0.8s step-end infinite");
    }
  } else {
     // upscroll code
     
    if($(window).scrollTop() < checkPoint[0]) {
      player.css("animation", "walkingLeft_casual 0.8s step-end infinite");
    } else if($(window).scrollTop() >= checkPoint[0] && $(window).scrollTop() < checkPoint[1]) {
      player.css("animation", "walkingLeft_cold 0.8s step-end infinite");
    } else if($(window).scrollTop() >= checkPoint[1] && $(window).scrollTop() < checkPoint[2]) {
      player.css("animation", "walkingLeft_formal 0.8s step-end infinite");
    } else if($(window).scrollTop() >= checkPoint[2] && $(window).scrollTop() < checkPoint[3]) {
      player.css("animation", "walkingLeft_mask 0.8s step-end infinite");
    } else if($(window).scrollTop() >= checkPoint[3] && $(window).scrollTop() < checkPoint[4]) {
      player.css("animation", "walkingLeft_magical 0.8s step-end infinite");
      player.css("height", "500.2px");
      player.css("width", "520.2px");
    } else if($(window).scrollTop() >= checkPoint[4] && $(window).scrollTop() < checkPoint[5]) {
      player.css("animation", "walkingLeft_holy 0.8s step-end infinite");
    }
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

  // back to idle after walking 
  clearTimeout($.data(this, 'scrollTimer'));
  $.data(this, 'scrollTimer', setTimeout(function() {
      if($(window).scrollTop() < checkPoint[0]) {
        player.css("animation", "idle_casual 0.8s step-end infinite");
      } else if($(window).scrollTop() >= checkPoint[0] && $(window).scrollTop() < checkPoint[1]) {
        player.css("animation", "idle_cold 0.1s step-end infinite");
      } else if($(window).scrollTop() >= checkPoint[1] && $(window).scrollTop() < checkPoint[2]) {
        player.css("animation", "idle_formal 0.8s step-end infinite");
      } else if($(window).scrollTop() >= checkPoint[2] && $(window).scrollTop() < checkPoint[3]) {
        player.css("animation", "idle_mask 0.8s step-end infinite");
      } else if($(window).scrollTop() >= checkPoint[3] && $(window).scrollTop() < checkPoint[4]) {
        player.css("animation", "idle_magical 0.8s step-end infinite");
        player.css("height", "500.2px");
        player.css("width", "520.2px");
      } else if($(window).scrollTop() >= checkPoint[4] && $(window).scrollTop() < checkPoint[5]) {
        player.css("animation", "idle_holy 0.8s step-end infinite");
      }
      console.log("Haven't scrolled in 250ms!");
  }, 250));

  // title appearing
  if($(window).scrollTop() >= 300 && $(window).scrollTop() < checkPoint[0]) {
    title.html("Personal Info");
    if(current_title != 0) {
      title.css("animation", "none");
      window.requestAnimationFrame(function(){
        title.css("animation", "title_fade 2s");
      });
      current_title = 0;
    }
  } else if($(window).scrollTop() >= checkPoint[0] && $(window).scrollTop() < checkPoint[1]) {
    title.html("Education");
    if(current_title != 1) {
      title.css("animation", "none");
      window.requestAnimationFrame(function(){
        title.css("animation", "title_fade 2s");
      });
      current_title = 1;
    }
  } else if($(window).scrollTop() >= checkPoint[1] && $(window).scrollTop() < checkPoint[2]) {
    title.html("Work Experience");
    if(current_title != 2) {
      title.css("animation", "none");
      window.requestAnimationFrame(function(){
        title.css("animation", "title_fade 2s");
      });
      current_title = 2;
    }
  } else if($(window).scrollTop() >= checkPoint[2] && $(window).scrollTop() < checkPoint[3]) {
    title.html("Personal Projects");
    if(current_title != 3) {
      title.css("animation", "none");
      window.requestAnimationFrame(function(){
        title.css("animation", "title_fade 2s");
      });
      current_title = 3;
    }
  } else if($(window).scrollTop() >= checkPoint[3] && $(window).scrollTop() < checkPoint[4]) {
    title.html("Interest");
    if(current_title != 4) {
      title.css("animation", "none");
      window.requestAnimationFrame(function(){
        title.css("animation", "title_fade 2s");
      });
      current_title = 4;
    }
  } else if($(window).scrollTop() >= checkPoint[4] && $(window).scrollTop() < checkPoint[5]) {
    title.html("Contact");
    if(current_title != 5) {
      title.css("animation", "none");
      window.requestAnimationFrame(function(){
        title.css("animation", "title_fade 2s");
      });
      current_title = 5;
    }
  }
  

  // Debug
  console.log($(window).scrollTop());
  console.log("pageyoffset is " + window.pageYOffset);
});





function enterUniversity() {
  let scrollPos = $(window).scrollTop();
  if (scrollPos > revealUniLeft && scrollPos < revealUniRight) { 
    university_outside.fadeOut(400);
  } else {
    university_outside.fadeIn(400);
  }
}

function enterIntel() {
  let scrollPos = $(window).scrollTop();
  if (scrollPos > revealIntelLeft && scrollPos < revealIntelRight) { 
    intel_outside.fadeOut(400);
  } else {
    intel_outside.fadeIn(400);
  }
}

function enterHouse() {
  let scrollPos = $(window).scrollTop();
  if (scrollPos > revealHouseLeft && scrollPos < revealHouseRight) { 
    house_outside.fadeOut(400);
  } else {
    house_outside.fadeIn(400);
  }
}

function changeScene() {
  let scrollPos = $(window).scrollTop();
  if (scrollPos < checkPoint[0]) { 
    $("#ground").css("background-image", 'url(image/export/1.png)');
    activeBackground(1);
  } else if (scrollPos >= checkPoint[0] && scrollPos < checkPoint[1]) {
    $("#ground").css("background-image", 'url(image/export/2.png)');
    activeBackground(2);
  } else if (scrollPos >= checkPoint[1] && scrollPos < checkPoint[2]) {
    $("#ground").css("background-image", 'url(image/export/5.png)');
    activeBackground(3);
  } else if (scrollPos >= checkPoint[2] && scrollPos < checkPoint[3]) {
    $("#ground").css("background-image", 'url(image/export/3.png)');
    activeBackground(4);
  } else if (scrollPos >= checkPoint[3] && scrollPos < checkPoint[4]) {
    $("#ground").css("background-image", 'url(image/export/7.png)');
    activeBackground(5);
  } else if (scrollPos >= checkPoint[4] && scrollPos < checkPoint[5]) {
    $("#ground").css("background-image", 'url(image/export/8.png)');
    activeBackground(6);
  }
}

function activeBackground(background) {
  let i;
  let backgroundid = "background";
  let groundid = "ground";
  for (i = 1; i < 9; i++) {
    backgroundid = "#background" + i;
    groundid = "#ground" + i;
    if(i == background) {
      $(backgroundid).css("opacity", 1);
      $(groundid).css("opacity", 1);
    } else {
      $(backgroundid).css("opacity", 0);
      $(groundid).css("opacity", 0);
    }
  }
}


// to do: 
//// must have
// preload the rest in SS  - nid to preload!!!!!
// make it work on safari
// make it mobile responsive

//should have mobile frenly
// should have cleaner code

/// to fix
//github pillar
// resume and email when resize drop to floor

//// could have
// remove mountains and norway
// fix player size
// fix ground not connecting
//contact clean up
// easter egg


function enterStat() {
  let scrollPos = $(window).scrollTop();
  if (scrollPos > 2200 && scrollPos < 4200) { 
    console.log("im in");
    if(inStats == 0) {
      lowerball.css("animation", "none");
      upperball.css("animation", "none");
      stats.css("animation", "none");
      window.requestAnimationFrame(function(){
        lowerball.css("animation", "lowerball-movement 0.4s forwards");
        upperball.css("animation", "upperball-movement 0.4s forwards");
        stats.css("animation", "stat-vertical-expand 0.1s 0.2s forwards, stat-horizontal-expand 0.2s 0.3s forwards");
      });
      inStats = 1;
    }
  } else {
    if(inStats == 1) {
      lowerball.css("animation", "none");
      upperball.css("animation", "none");
      stats.css("animation", "none"); 
      window.requestAnimationFrame(function(){
        lowerball.css("animation", "lowerball-movement 0.6s reverse forwards ");
        upperball.css("animation", "upperball-movement 0.6s reverse forwards ");
        stats.css("animation", "stat-horizontal-shrink 0.2s forwards");
      });
      inStats = 0;
    }
  }
}

function enterSkill() {
  let scrollPos = $(window).scrollTop();
  if (scrollPos > 6200 && scrollPos < 8200) { 
    console.log("im in");
    if(inSkills == 0) {
      lowerball.css("animation", "none");
      upperball.css("animation", "none");
      skills.css("animation", "none");
      window.requestAnimationFrame(function(){
        lowerball.css("animation", "lowerball-movement 0.4s forwards");
        upperball.css("animation", "upperball-movement 0.4s forwards");
        skills.css("animation", "stat-vertical-expand 0.1s 0.2s forwards, stat-horizontal-expand 0.2s 0.3s forwards");
      });
      inSkills = 1;
    }
  } else {
    if(inSkills == 1) {
      lowerball.css("animation", "none");
      upperball.css("animation", "none");
      skills.css("animation", "none"); 
      window.requestAnimationFrame(function(){
        lowerball.css("animation", "lowerball-movement 0.6s reverse forwards ");
        upperball.css("animation", "upperball-movement 0.6s reverse forwards ");
        skills.css("animation", "stat-horizontal-shrink 0.2s forwards");
      });
      inSkills = 0;
    }
  }
}

// enter portfolio
function enterPortfolio() {
  let scrollPos = $(window).scrollTop();
  console.log("portfolio-----------");
 
  
  if (scrollPos > testtest && scrollPos < testtest2) { 
    
    portfolio_img.attr("src","image/ss/interactive-resume.png");
    portfolio_header.html("Derrick's Interactive Resume");
    portfolio_paragraph.html("I got the inspiration to create my own interactive resume after coming across cool websites like NuuNeoi's profile, Salvato's and Leonardi's \
    interactive resume. The problem was i have no art skills at that time so i have been putting it off until i picked up photoshop and illustrator in a gamejam. \
    It got me thinking'If I can animate something in Unity, what is stopping me from making something cool in my own website?' Thus, it begins. ");
    portfolio_link.attr("href","#portfolio-link");
    portfolio.fadeIn(300);
  } else if (scrollPos > testtest3 && scrollPos < testtest4) { 
    portfolio_img.attr("src","image/ss/sticky-slime-situation.png");
    portfolio_header.html("Sticky Slime Situation");
    portfolio_paragraph.html("This was my game submission for my second gamejam - GMTK2020. The theme was 'Out Of Control' and there was a two day time limit. My initial \
    plan was to create a boss fight where it have a set of attack patterns which will unlock overtime as its health decreases, but as time flies by while i draw and animate \
    my sprites, i knew i had to keep it priorities organised and limit my scope. In the end, i was rushing until i didn't even have time to implement my hero's health \
    so it became a sudden death mode for the player. Way to go huh.");
    portfolio_link.attr("href","https://ahpek.itch.io/sticky-slime-situation");
    portfolio.fadeIn(300);
  } else if (scrollPos > testtest5 && scrollPos < testtest6) { 
    portfolio_img.attr("src","image/ss/baodesignstudio.png");
    portfolio_header.html("Bao Design Studio");
    portfolio_paragraph.html("My friend had just started his own interior design company and he told me a website would help to boost his online presence. I took it as \
    a challenge to create my first website and worked on it from scratch using HTML, CSS and Javascript. It took me just a few days to get it uploaded on netlify, but \
    the loading speed was abysmal and i soon found out the image used were all in megabytes as my friend and I thought that all those HD images would be great for \
    presentation. Well, you learn something everyday. We found another problem when i was ready to pass it to him. How does he add or modify content on the website? \
    Will he need to find me for changes everytime? The answer was CMS. It was also at that time when i found out that wordpress wasn't just a drag and drop website \
    builder, it was much more powerful than that. I ended up recreating the website in wordpress using Elementor and that was that. For now.");
    portfolio_link.attr("href","https://baodesignstudio.com/");
    portfolio.fadeIn(300);
  } else if (scrollPos > testtest7 && scrollPos < testtest8) { 
    portfolio_img.attr("src","image/ss/liar.png");
    portfolio_header.html("Loner In A Relationship");
    portfolio_paragraph.html("Community Game Jam 2019 - my first ever gamejam hosted by fellow game dev youtubers. The theme was 'liar' with a one week time limit and \
    immediately my first gut feeling was to make a game whose controls are reversed, messed up etc but after going through the discord channel, i realised almost everyone \
    was having the same idea so deep down, the special snowflake wannabe me decided to scrap that and go ahead with a different approach - acronyms. Do you know the \
    feeling when you have tons of cool ideas and features in your mind waiting to be implemented and shock the world, which ended up being pushed aside because you \
    overestimated your own capabilities, so you end up devoting most of the time planning on paper and only one percent on real work? Yes, this is it.");
    portfolio_link.attr("href","https://ahpek.itch.io/loner-in-a-relationship-liar");
    portfolio.fadeIn(300);
  } else {
    portfolio.fadeOut(300);
  }
}


function enterScroll() {
  let scrollPos = $(window).scrollTop();
  if (scrollPos >= 0 && scrollPos < 300) { 
    $("#scrolldown").fadeIn();
  } else {
    $("#scrolldown").fadeOut();
  }
}