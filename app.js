const form = document.querySelector(".quiz-form ");
const text = document.querySelector('.text')
const correctQuestions = ["A", "B", "B", "A"];
let respost = [];
let score = 0

const getUserAnswers = userAnswers =>{
  userAnswers.forEach((answers,index)=>{
    if(answers === correctQuestions[index]){
      score += 25
    }
   })
}

const scrollTop = () =>{
  window.scrollTo({
    top:0,
    behavior: 'smooth',
  })
}

const animateScore = () =>{
  let count = 0
  let int = setInterval(()=>{
    count++
    if(count >= score){
      clearInterval(int)
    }
    text.textContent = `Você acertou ${count}% das respostas`
  },30)
}


form.addEventListener("submit", event => {
  event.preventDefault();

  const userAnswers = []

  correctQuestions.forEach((__,index) => {
    userAnswers.push(form[`inputQuestion${index + 1}`].value)
  })
  
  score = 0

  scrollTop()
  
  getUserAnswers(userAnswers)
  
  animateScore()

});


