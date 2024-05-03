
// // const data = require("./first.json");

// // const s = JSON.parse(data)
// // console.log(s)
// import { msg } from "./mod.js";

// console.log(msg);


// // function a(){
// //     let v = 5;
// //     return function(v){
// //         console.log(v+3)
// //     }
// // }

// // a()

// // console.log("the age is" age);

// // let age = 25;
// // console.log(age)

// const obj = [
//     {
//         name:"shop",
//         price:40,
//         id:3
//     },
//     {
//         name:"oil",
//         price:120,
//         id:4
//     },
//     {
//         name:"shampo",
//         price:70,
//         id:3
//     }
// ]
// console.log(obj[0].name);

//console.log(window.screen.width)
// const question = [
//     {
//         question: "which is the largest animal in the world?",
//         answer:[
//             {text:"shark", corret:false},
//             {text:"dog", corret:false},
//             {text:"blue whole", corret:true},
//             {text:"tiger", corret:false},
//         ]
//     },
//     {
//         question: "which is the largest country in the world?",
//         answer:[
//             {text:"bd", corret:false},
//             {text:"india", corret:false},
//             {text:"china", corret:false},
//             {text:"russia", corret:true},
//         ]
//     },
//     {
//         question: "which is the smollest city in the world?",
//         answer:[
//             {text:"nyc", corret:false},
//             {text:"vatican", corret:true},
//             {text:"dc", corret:false},
//             {text:"dhaka", corret:false},
//         ]
//     },
//     {
//         question: "which is the fav game in the world?",
//         answer:[
//             {text:"cricet", corret:false},
//             {text:"hadodo", corret:false},
//             {text:"footboll", corret:true},
//             {text:"boliboll", corret:false},
//         ]
//     }
// ]

// const questions = document.querySelector(".question-c")
// const answerButton = document.querySelector(".answer-button");
// const nextBtn = document.getElementById("next-btn");

// //questions.innerHTML = question.question

// console.log(question, answerButton,nextBtn)

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//     currentQuestionIndex = 0;
//     score=0;
//     nextBtn.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion(){
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//     currentQuestion.answer.forEach((answer)=>{
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButton.appendChild(button)
//     })
// }

// startQuiz()

//  import { msg, uu} from "./mod.js"
// console.log(msg);

const obj = {
    name:"asif", 
    age:25,
    university:"national university"
};

const fg = "kjj"

console.log(JSON.stringify(fg))