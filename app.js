
// const question ='ゲーム市場最も売れたゲーム機は次の内どれ？'
// const answers = [
//   'スーパーファミコン',
//   'プレイステーション2',
//   'ニンテンドースイッチ',
//   'ニンテンドーDS'
// ];
//
// const correct = 'ニンテンドーDS';
//
// console.log();

//上記のようなクイズ文をまとめた配列↓↓↓
const quiz =[
  {
    question:'ゲーム市場最も売れたゲーム機は次の内どれ？',
    answers:[
     'スーパーファミコン',
     'プレイステーション2',
     'ニンテンドースイッチ',
     'ニンテンドーDS'],
     correct : 'ニンテンドーDS'
   },
   {
     question:'糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
     answers:[
      'MOTHER2',
      'スーパーマリオブラザーズ3',
      'スーパードンキーコング',
      '星のカービィ'],
      correct :'MOTHER2'
    },
    {
      question:'シーズー犬ジロ君の好物といえば？',
      answers:[
       '刺身',
       'カレー',
       'さつまいも',
       '麻婆豆腐'],
       correct:'さつまいも'
     }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


//定数の文字列をHTMLに反映させる


const $bottun = document.getElementsByTagName('button')
let bottunLength = $bottun.length

// $bottun[0].textContent = answers[0];
// $bottun[1].textContent = answers[1];
// $bottun[2].textContent = answers[2];
// $bottun[3].textContent = answers[3];

const setupQuiz = () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let bottunIndex = 0;

  while (bottunIndex < bottunLength) {
    $bottun[bottunIndex].textContent = quiz[quizIndex].answers[bottunIndex];
  bottunIndex++;
  }
}

setupQuiz();
//ボタンをクリックしたら正誤判定

const clickHandler =(e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
  window.alert('正解！');
  score ++;
 }else {window.alert('不正解…')
   }

    quizIndex ++;

if (quizIndex < quizLength) {
//問題数がまだある場合
setupQuiz();
}else {
//問題数がない場合
  window.alert('おしまい！あなたの正解数は' + score + '/' + quizLength + 'です！')
}

};

let handleIndex = 0;

while (handleIndex < bottunLength) {
  $bottun[handleIndex].addEventListener('click', (e) => {
   clickHandler(e);
  });
  handleIndex ++;
}
