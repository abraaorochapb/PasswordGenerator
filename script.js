const generatePasswordBtn = document.querySelector('#generate-password')
const generatedPasswordElemet = document.querySelector('#generated-password')

//functions

const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 97)
}
const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 65)
}
const getNumber = () => {
  return Math.floor(Math.random() * 10).toString()
}

const getSymbol = () => {
  const symbols = '!@#$%^&*(){}[]=<>/.,+-_='
  return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = () => {
  const password = []
  for (let i = 0; i < 4; i++) {
    password.push(getNumber())
    password.push(getLetterLowerCase())
    password.push(getLetterUpperCase())
    password.push(getSymbol())
  }
  generatedPasswordElemet.style.display = 'block'
  generatedPasswordElemet.querySelector('h4').innerHTML = password.join('')
}

//events
generatePasswordBtn.addEventListener('click', (e) => {
  generatePassword()
})