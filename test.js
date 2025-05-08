/*let name = "John";
let admin = name;

alert(admin);*/

/*let ourPlanetName = "earth";
let currentUserName = "김진영";*/


//let name = "John";

// 변수를 문자열 중간에 삽입
//alert( `Hello, ${name}!` ); // Hello, John!

// 표현식을 문자열 중간에 삽입
//alert( `the result is ${1 + 2}` ); // the result is 3

//let isGreater = 0 > 1;

//alert( isGreater ); // true (비교 결과: "yes")

//let name = "Ilya";

//alert( `hello ${1}` ); // hello 1

//alert( `hello ${"name"}` ); // hello name

//alert( `hello ${name}` ); // hello Ilya

//let name = prompt('당신의 이름을 입력해주세요.', '');

//alert(`당신의 이름은 ${name}입니다.`);

//let age = Number("123");

//alert(typeof age);

//let apples = "2";
//let oranges = "3";

// 이항 덧셈 연산자가 적용되기 전에, 두 피연산자는 숫자형으로 변화합니다.
//alert( +apples + +oranges); 

//let a = 1, b = 1;

//let c = ++a; // 2
//let d = b++; // 1

//alert(a); //2
//alert(b); //2
//alert(c); //2
//alert(d); //1

/*let a = 1, b = 1;

alert( ++a );
alert( b++ );*/

/*1
-1
1
2
6
9px
$45
2
NaN
Infinity
-9 5
-14
1
?
?*/

//let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
//let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

//alert(+a + +b); // 12

/*let age = prompt('나이를 입력해 주세요.', '');
let accessAllowed = (age > 18) ? true : false;

alert(accessAllowed);*/

/*let question = prompt("자바스크립트의 ‘공식’ 이름은 무엇일까요?", "");

if (question == "ECMAScript") {
    alert("정답입니다!");
} else {
    alert("모르셨나요? 정답은 ECMAScript입니다!");
}*/

/*let value = prompt("숫자를 입력하세요.", "");

if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else if (value == 0) {
    alert(0);
}*/


/*let result;
let a = prompt('A', '');
let b = prompt('B', '');

(+a + +b < 4) ? result = '미만' : result = '이상';

alert("a:" + a + "b:" + b + "결과:" + result);*/

//let result = (a + b < 4) ? '미만' : '이상';

/*let login = prompt('당신의 직책은?', '');
let message = (login == '직원') ? '안녕하세요.' :
    (login == '임원') ? '환영합니다.' :
    (login == '') ? '로그인이 필요합니다.' :
    '';

alert(message);*/

/*let age = 15;

if (!(age >= 14 && age <= 90)) {
    alert("14세 이상 90세 이하에 속하지않습니다.");
}*/

/*let age = 10;

if (age < 14 || age > 90) {
    alert("14세 이상 90세 이하에 속하지않습니다.");
}*/

/*let admin = prompt("아이디를 입력하세요", "");

if (admin == "admin") {
    let password = prompt("비밀번호를 입력하세요", "");

    if (password == "master") {
        alert("환영합니다!");
    } else if (password == "" || pass == null) {
        alert("취소되었습니다.");
    } else {
        alert("인증에 실패하였습니다.");
    }
} else if (admin == "" || admin == null) {
    alert("취소되었습니다.");
} else {
    alert("아이디를 다시 입력하세요.");
}*/

/*for (let i = 1; i <= 10; i++) {

    if (i % 2 == 0) {
        alert(i);
    }

}*/

/*for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

let i = 0

while (i < 3) {
    alert( `number ${i++}!` );
}*/



/*while (true) {
    let value = prompt("숫자를 입력하세요", "");

    if (value > 100 || value == "" || value == null) {
        break
    }
}*/

/*let num;

do {
    let num = prompt("숫자를 입력하세요", "");
} while (num <= 100 && num)*/

/*let n = 10

nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if( i % j == 0) continue nextPrime;
    }
    
    alert(i);
}*/

/*let browser;

if (browser == 'Edge') {
    alert( "Edge를 사용하고 계시네요!" );
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert( "저희 서비스가 지원하는 브라우저를 사용하고 계시네요." );
} else {
    alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
}*/

/*let a = +prompt("a", "");

switch (a) {
    case 0:
        alert( 0 );
        break;

    case 1:
        alert( 1 );
        break;
        
    case 2:
    case 3:
        alert( '2,3' );
        break;
}*/

/*function showMessage(from, text) {
    if (text === undefined) {
      text = 'no text given';
    }
  
    alert( from + ": " + text );
}

showMessage("kim");*/

/*let age = prompt("");

function checkAge(age) {
    if (age > 18) {
      return true;
    } 
    return confirm('보호자의 동의를 받으셨나요?');
}

checkAge(age);*/

//function checkAge(age) {
    //return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?');
    //return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
//}



/*function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function min(a, b) {
    return (a < b) ? a : b
}*/

/*function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`${n}은 양의 정수이어야 합니다.`);
  } else {
    alert( pow(x, n) );
  }*/

/*function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function ok() {
    alert("동의");
}

function cancle() {
    alert("취소");
}

ask("동의하십니까", ok, cancle);*/

/*function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask (
    "동의하십니까",
    function() {
        alert("동의");
    },
    function() {
        alert("취소");
    },
)*/

//sayHi("John"); // Hello, John

/*function sayHi(name) {
  alert( "Hello, " + name );
}*/

/*let age = prompt("나이를 알려주세요.", 18);
let welcome;*/

// 조건에 따라 함수를 선언함
/*if (age < 18) {

  welcome = function() {
    alert("안녕!");
  };

} else {

    welcome = function() {
        alert("안녕하세요!");
    };

}

welcome();*/

/*welcome = (age < 18) ? 
    function() {alert("안녕!")} : 
    function() {alert("안녕하세요!")};

welcome();*/

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
   
ask (
    "동의하십니까?",
    () => alert("동의하셨습니다."),
    () => alert("취소 버튼을 누르셨습니다.")
);

