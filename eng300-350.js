const data = [
    [
      "怠惰な、仕事をしていない",
      "idle"
    ],
    [
      "無知、無教育",
      "ignorance"
    ],
    [
      "～を説明する、～を明らかにする",
      "illustrate"
    ],
    [
      "想像上の",
      "imaginary"
    ],
    [
      "直ちに",
      "immediately"
    ],
    [
      "ますます",
      "increasingly"
    ],
    [
      "独立、自活",
      "independence"
    ],
    [
      "～を指し示す",
      "indicate"
    ],
    [
      "個々の",
      "individual"
    ],
    [
      "～に知らせる",
      "inform"
    ],
    [
      "住民",
      "inhabitant"
    ],
    [
      "内部の",
      "inner"
    ],
    [
      "無罪の、潔白な",
      "innocent"
    ],
    [
      "不安定な",
      "insecure"
    ],
    [
      "場合、事実",
      "instance"
    ],
    [
      "本能",
      "instinct"
    ],
    [
      "施設、慣例",
      "institution"
    ],
    [
      "楽器、道具",
      "instrument"
    ],
    [
      "～をしようと思う",
      "intend"
    ],
    [
      "意図",
      "intent"
    ],
    [
      "意志、意向",
      "intention"
    ],
    [
      "相互に作用する、交流する",
      "interact"
    ],
    [
      "興味深く、おもしろく",
      "interestingly"
    ],
    [
      "(～を)遮る",
      "interrupt"
    ],
    [
      "交差点、交差すること",
      "intersection"
    ],
    [
      "発明(品)",
      "invention"
    ],
    [
      "(～を)調査する",
      "investigate"
    ],
    [
      "～と関係する、～を巻き込む",
      "involve"
    ],
    [
      "内側の",
      "inward"
    ],
    [
      "～を孤立させる",
      "isolate"
    ],
    [
      "象牙",
      "ivory"
    ],
    [
      "ジグソーパズル、糸の子",
      "jigsaw"
    ],
    [
      "研究所",
      "laboratory"
    ],
    [
      "主として",
      "largely"
    ],
    [
      "後者の",
      "latter"
    ],
    [
      "(～に)傾く",
      "lean"
    ],
    [
      "跳ぶ、飛び跳ねる",
      "leap"
    ],
    [
      "講義",
      "lecture"
    ],
    [
      "暇、余暇",
      "leisure"
    ],
    [
      "図書委員、司書",
      "librarian"
    ],
    [
      "文字通り",
      "literally"
    ],
    [
      "肝臓、生活者",
      "liver"
    ],
    [
      "貸し付け、ローン",
      "loan"
    ],
    [
      "ただひとつの、ひとりの、ぽつんと立っている",
      "lone"
    ],
    [
      "大声で、騒々しく",
      "loudly"
    ],
    [
      "贅沢、ぜいたく品",
      "luxury"
    ],
    [
      "壮大な、堂々たる",
      "magnificent"
    ],
    [
      "～を維持する、～を主張する",
      "maintain"
    ],
    [
      "哺乳動物",
      "mammal"
    ],
    [
      "製造",
      "manufacture"
    ]
]

var random = Math.floor(Math.random() * (49 - 0) + 0);
var count = 1;

/** 重複チェック用配列 */
var randoms = [];
/** 最小値と最大値 */
var min = 0, max = 49;
 
/** 重複チェックしながら乱数作成 */
for(i = min; i <= max; i++){
  while(true){
    var tmp = intRandom(min, max);
    if(!randoms.includes(tmp)){
      randoms.push(tmp);
      break;
    }
  }
}
 
/** min以上max以下の整数値の乱数を返す */
function intRandom(min, max){
  return Math.floor( Math.random() * (max - min + 1)) + min;
}

const lblock = document.getElementById("left");

while (count < 11){
  lblock.insertAdjacentHTML('beforeend', '<p name="maruu" class="maru"></p>');
  lblock.insertAdjacentHTML('beforeend', '<p class="question"><br>' + count + '.　' + data[randoms[count - 1]][0] + '</p>');
  lblock.insertAdjacentHTML('beforeend','<input type="text" name="form1" autocomplete="off" onKeyDown="return next_form('+ count +');" class="form">')
  lblock.insertAdjacentHTML('beforeend','<p name="kotae" class="kotae"></p>');
  count++;
}


const cblock = document.getElementById("center");

while (count < 21){
  cblock.insertAdjacentHTML('beforeend', '<p name="maruu" class="maru"></p>');
  cblock.insertAdjacentHTML('beforeend', '<p class="question"><br>' + count + '.　' + data[randoms[count - 1]][0] + '</p>');
  cblock.insertAdjacentHTML('beforeend','<input type="text" name="form1" autocomplete="off" onKeyDown="return next_form('+ count +');" class="form">')
  cblock.insertAdjacentHTML('beforeend','<p name="kotae" class="kotae"></p>');
  count++;
}


const rblock = document.getElementById("right");

while (count < 26){
  rblock.insertAdjacentHTML('beforeend', '<p name="maruu" class="maru"></p>');
  rblock.insertAdjacentHTML('beforeend', "<p question><br>" + count + ".　" + data[randoms[count - 1]][0] + "</p>");
  rblock.insertAdjacentHTML('beforeend','<input type="text" name="form1" autocomplete="off" onKeyDown="return next_form('+ count +');" class="form">')
  rblock.insertAdjacentHTML('beforeend','<p name="kotae" class="kotae"></p>');
  count++;
}

function next_form ( idx ) {
  if( window.event.keyCode == 13 ){
    if ( idx == 25 ){
      console.log("muri")
      return;
    }
    var obj = document.getElementsByName("form1")
    obj[idx].focus();
  }
}




function showResult () {
    const botan = document.getElementById("button");
    botan.style = "box-shadow: none; transform: translateY(5px);"
    
    const textbox = document.getElementsByName("form1");
    var count2 = 1;
    var score = 0;
    while (count2 < 26){
        const user_answer = textbox[count2 - 1].value;
        var answer = data[randoms[count2 - 1]][1];

        if (user_answer === answer) {
            var maruu = document.getElementsByName("maruu");
            maruu[count2 - 1].style = "position: absolute; margin-top: 20px; margin-left: 25px; margin-bottom: 30px; padding-top: 40px; padding-left: 20px; padding-bottom: 20px; padding-right: 100px; border: solid 3px red; border-radius: 50%; z-index: 10;";
            score++;
        } else {
            var batu = document.getElementsByName("maruu");
            batu[count2 - 1].style = "position: absolute; margin-top: 10px; width: 23px; height: 13px; border-left: 4px solid red; border-bottom: 4px solid red; transform: rotate(-45deg);"
            if (user_answer == ""){
                textbox[count2 - 1].style = "color: red; font-weight: bold;";
                textbox[count2 - 1].value = answer;
            } else {
                var kotae = document.getElementsByName("kotae");
                kotae[count2 - 1].insertAdjacentHTML('beforeend', answer)
            }
        }
        count2++;
    }
    const scored = document.getElementById("score");
    scored.insertAdjacentHTML('beforeend', '<h1>'+ score +'／25</h1>'); 
    scored.style = "margin: 2em 0; background: #ffbaba; border:3px solid #ff004c; width:80%; box-shadow:6px 5px 8px -1px #db1c1c inset;"
}
