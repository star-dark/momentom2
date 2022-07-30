const backgroundPic=[
    "IMG/month/1월.png","IMG/month/2월.png","IMG/month/3월.png","IMG/month/4월.png","IMG/month/5월.png","IMG/month/6월.png",
    "IMG/month/7월.png","IMG/month/8월.png","IMG/month/9월.png","IMG/month/10월.png","IMG/month/11월.png","IMG/month/12월.png"
]
const flowerPic = [
    ["IMG/flower/히아신스.jpg","IMG/flower/수선화.jpg","IMG/flower/제비꽃.jpg"],
    ["IMG/flower/물망초.jpg","IMG/flower/아르메리아.jpg","IMG/flower/앵초.jpg"],
    ["IMG/flower/수레국화.jpg","IMG/flower/데이지.jpg","IMG/flower/수선화.jpg"],
    ["IMG/flower/금잔화.jpg","IMG/flower/동백꽃.jpg","IMG/flower/아네모네.png"],
    ["IMG/flower/민들레.jpg","IMG/flower/라일락.jpg","IMG/flower/은방울꽃.jpg"],
    ["IMG/flower/장미.jpg","IMG/flower/카네이션.jpeg","IMG/flower/자스민.jpg"],
    ["IMG/flower/금어초.jpg","IMG/flower/라벤더.jpg","IMG/flower/초롱꽃.jpg"],
    ["IMG/flower/토끼풀.jpg","IMG/flower/해바라기.jpg","IMG/flower/접시꽃.jpg"],
    ["IMG/flower/용담.jpg","IMG/flower/에리카.jpg","IMG/flower/다알리아.jpg"],
    ["IMG/flower/국화.jpg","IMG/flower/카라꽃.jpg","IMG/flower/해당화.jpg"],
    ["IMG/flower/루피너스.jpg","IMG/flower/초롱꽃.jpg","IMG/flower/과꽃.jpg"],
    ["IMG/flower/박하.jpg","IMG/flower/세이지.jpg","IMG/flower/백일홍.jpg"],    
]
const backgroundImg = document.createElement("img")
const ranMonth = Math.floor(Math.random() * backgroundPic.length);
const ranBackground = backgroundPic[ranMonth];
backgroundImg.src = `${ranBackground}`;
backgroundImg.id="randomBackgroundImg"
document.body.appendChild(backgroundImg);

const createFlower = document.createElement("img");
const nextBtn = document.getElementById("next-btn");
const preBtn = document.getElementById("pre-btn");
let picPage = parseInt(0);
const birthFlower = flowerPic[ranMonth][picPage];
createFlower.src = `${birthFlower}`;
createFlower.id = "randomFlowerImg";
document.body.appendChild(createFlower);

function nextImg() {
    if (picPage<2) {
        picPage += 1;
        createFlower.src= `${birthflower[picPage]}`;
    }
    else{
        nextBtn.classList.toggle("hidden");
    }
}

function preImg() {
    if (picPage>0) {
        picPage -= 1;
        createFlower.src= `${birthflower[picPage]}`;
    }
    else{
        preBtn.classList.toggle("hidden");
    }
}