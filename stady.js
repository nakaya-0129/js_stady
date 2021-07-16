let name='Tom';
console.log('hello'+name);

consle.log(typeof name); //タイプを調べる

//静的型付け言語
int num = 12;
//型の宣言させることができない
const hello = function hello(name,age){ //変数を使用するより前に定義する
    console.log('hello'+name + age);
    return name + age;
}

function hello(name,age){　　//使用の前後いずれも可
    console.log('hello'+name + age);
    return name + age;
}

const returnVal=hello('Tom',10);
console.log(returnVal);
let hello ='hello world';
console.log(hello.length); //javascriptが用意しているプロパティー
console.log(hello.toUpperCase());　//何らかの処理を行うものんメソッド

const arry = new Array(1,2,3,4,5,6);
console.log(array[0]); //１を取得
arry[5]=8; //配列の中身は上書きできる

const person ={
　　name: ['code','nakaya'],
    age: 38,
    gender: 'male',
    interest:{
        sports:'baseboll',
        music:'pop'
    }
    getfullName: function(){
        console.log(this.name[0]+this.nsme[1]); //codenakayaが出力される　メソッド
    }
}; //オブジェクトの初期化
person.name='nakaya'
person['age']=12;

const arry =[1,2,3,4,5];
for(let i = 0; i < arry.length; i++){ //配列の長さから要素を取得
    console.log(arry[i]);
}
for(let i in arry){  //添字を取得
    console.log(i);
}
for(let v of arry){ //値を取得 ブラウザによっては対応していない
   console.log(i);
}

const todos =[ //オブジェクトを含む配列
    {
       id: 1,
       title: 'Go to school',
       completed:true
    }
    {
       id: 2,
       title: 'Go to museum',
       completed:true
    }
    {
       id: 3,
       title: 'Go to shopping',
       completed:true
    }
]

for(let i in todos){
    let todo = todo[i];
    if(todo.completed===true){
    consle.log(i,todo.title);
    }
}
if(false){
    console.log('this is true');
}else if(true){
    conole.log('this is false');
}else{
    console.log('this is false');
}        
}  

const hello = name  => console.log('hello'+name); //関数省略形
function hello(callback,lastname){
    console.log(callback);
    console.log('hello'+ callback());
}

function getName(){
   return  'nakaya';
}
hello(getName); //関数は引数として扱える
hello(()=> 'nakaya'); //省略形
hello(function(){
   return 'nakaya'+ name;
} ,'kou');

function doSomething(a,b,callback){ //第3引数にcallbackを定義
    const result = callback(a,b);
    console.log(result);
}
function multplus(a,b){
    return a * b;
}
function plus(a,b){
   return a + b;
}

doSomething(2,2, mutiply);　//それぞれの引数を指定して、返り値を受け取る
doSomerhing(2,3,plus);

const arry =[1,2,3,4,5];
function forEach(ary, callback){ //forEachで値を一つずつ取得
for(let i = 0; i < ary.length; i++){
    callback(ary[i]);　　//関数内で実行
}
}
function log(val){
    console.log(val);
}

forEach(arry,function(val){
});

const arry = [1,2,3,4,5]

arry.forEach(function(val, i, ary){ //値、添字、配列が取得されている
    console.log(val);
})

const = [1,2,3,4,5]
arry.reduce(function(accu,curr){
    console.log(accu,curr);
    return accu + curr;
},10)　//第二引数に初期値を指定　accu = 10となる

const str = 'animation';
const strArry = str.split('');

strArry.reduce((accu,curr)=>{
    return  accu + '<' + curr + '>';
    return `${accu}<${curr}>`; //テンプレートリテラルを使用して簡略化　バッククォーテーション
},"") //初期値を指定

console.log(result);

document.querySelector('#main-title') //id class タグで指定する
const = li = document.queryselectorAll('li')
li.forEach(node => node.style.color ='purple'); //liの要素をpurpleに変更

const btn = document.querySelector('#btn');
function hello()
const btn = document.querySelector('h1');

const hello = function(){
    this.style.color= 'red';
};
btn.addEventListener('click',hello);
document.addEventListener("DOMContentLoaded", function (){ //ユーザーを待たせない
    const h1 = document.querySelector('h1');
    h1.style.color = 'red';
});

window.addEventListener("load",function(){
    const h1 = document.querySelector('h1');
    h1.style.color = "red";
})
const ta = new TextAnimation('.animation-title'); //インスタンスの生成・呼び出し

class TextAnimation {
    costurctor(el) {
        this.el = document.querySelector(el);
        this.chars = el.innerHTML.trim().sprit("");
        this.el.innerHTML = this._soplitText();
    }
    _splitText(){
         return this.chars.replace(/s+/,'&nbsp:');
         return `$(acc)<span class ='char'>${char}<span>`;
    }
    log({
        console.log(this.el);
    });
}

const obj = {    //this = obj
    first_name: 'nakaya',
    last_name: 'ko',
    printFullName: function(){
        console.log(this);
    }.bind({first_name: 'kikuti'}); //thisを指定したオブジェクトに書き換える　bind
}

class Myobj { //this = Myobj
    costructor(){
        this.first_name = 'nakaya';
        this.last_name = 'ko';
    }
    printFullNmame(){
        console.log(this.first_name);
    }
}

class Myobj2 extends Myobj2 {
    constructor(el){
         super(el);
    }
}
const child = document.querySelector('.child');
const io = function(){
    
}
const io =new IntersectionObserver 
io.observe(child){    
}
