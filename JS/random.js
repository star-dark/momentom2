const backgroundPic=[
    "IMG/month/1월.png","IMG/month/2월.png","IMG/month/3월.png","IMG/month/4월.png","IMG/month/5월.png","IMG/month/6월.png",
    "IMG/month/7월.png","IMG/month/8월.png","IMG/month/9월.png","IMG/month/10월.png","IMG/month/11월.png","IMG/month/12월.png"
]
const flowerPic = [
    ["IMG/flower/히아신스.jpg","IMG/flower/수선화.jpg","IMG/flower/제비꽃.jpg"],
    ["IMG/flower/물망초.jpg","IMG/flower/아르메리아.jpg","IMG/flower/앵초.jpg"],
    ["IMG/flower/수레국화.jpg","IMG/flower/데이지.jpg","IMG/flower/수선화.jpg"],
    ["IMG/flower/금잔화.jpg","IMG/flower/동백나무.jpg","IMG/flower/아네모네.png"],
    ["IMG/flower/민들레.jpg","IMG/flower/라일락.jpg","IMG/flower/은방울꽃.jpg"],
    ["IMG/flower/장미.jpg","IMG/flower/카네이션.jpeg","IMG/flower/자스민.jpg"],
    ["IMG/flower/금어초.jpg","IMG/flower/라벤더.jpg","IMG/flower/초롱꽃.jpg"],
    ["IMG/flower/토끼풀.jpg","IMG/flower/해바라기.jpg","IMG/flower/접시꽃.jpg"],
    ["IMG/flower/용담.jpg","IMG/flower/에리카.jpg","IMG/flower/다알리아.jpg"],
    ["IMG/flower/국화.jpg","IMG/flower/카라꽃.jpg","IMG/flower/해당화.jpg"],
    ["IMG/flower/루피너스.jpg","IMG/flower/초롱꽃.jpg","IMG/flower/과꽃.jpg"],
    ["IMG/flower/박하.jpg","IMG/flower/세이지.jpg","IMG/flower/백일홍.jpg"],    
]
const flowerName = [
    ["히아신스 - 비애","수선화 - 자기주의,자기애","제비꽃 - 겸양"],
    ["물망초 - 나를 잊지 마세요","아르메리아 - 배려", "앵초 - 젊은 시절과 고뇌"],
    ["수레국화 - 행복", "데이지 - 명랑, 순수한 마음", "수선화 - 사랑에 답하여"],
    ["금잔화 - 이별의 슬픔","동백나무 - 당신만을 사랑합니다","아네모네 - 제 곁에 있어 주어서 고마웠어요"],
    ["민들레 - 내 사랑 그대에게 드려요","라일락 - 사랑의 시작","은방울꽃 - 틀림없이 행복해집니다."],
    ["장미 - 당신을 사랑합니다.","카네이션 - 존경","자스민 - 당신은 나의 것"],
    ["금어초 - 욕망","라벤더 - 정절,침묵","초롱꽃 - 성실"],
    ["토끼풀 - 행운과 평화","해바라기 - 그리움, 기다림","접시꽃 - 풍요"],
    ["용담 - 당신이 슬플 때 나는 사랑한다","에리카 - 고독","다알리아 - 친절이 감사합니다"],
    ["국화 - 지혜와 평화","카라 - 순수함","해당화 - 원망"],
    ["루피너스 - 탐욕","초롱꽃 - 감사","과꽃 - 믿음직한 사랑"],
    ["박하 - 다시 사랑","세이지 - 가정의 덕","백일홍 - 인연"]
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
const picFrame= document.getElementById("picframe");
const flowerInfoBox = document.createElement("div");
const infoIcon = document.querySelector("i");
let picPage = 0;
let birthFlower = flowerPic[ranMonth][picPage];
createFlower.src = `${birthFlower}`;
createFlower.id = "randomFlowerImg";
picFrame.appendChild(createFlower);
function nextImg() {
    if (picPage<2) {
        picPage = picPage + 1;
        let birthFlower = flowerPic[ranMonth][picPage];
        createFlower.src= `${birthFlower}`;
    }
}
function preImg() {
    if (picPage>0) {
        picPage -= 1;
        let birthFlower = flowerPic[ranMonth][picPage];
        createFlower.src= `${birthFlower}`;
    }
}
function flowerInfo() {
    let flowerIf = flowerName[ranMonth][picPage];
    flowerInfoBox.innerText = flowerIf;
    flowerInfoBox.id = "Infobox" 
    document.body.appendChild(flowerInfoBox);
}
function removeInfo() {
    document.body.removeChild(flowerInfoBox);
}
nextBtn.addEventListener("click",nextImg);
preBtn.addEventListener("click",preImg);
infoIcon.addEventListener("mouseenter",flowerInfo);
infoIcon.addEventListener("mouseleave",removeInfo);