const inputs = document.querySelectorAll("input")
const send = document.querySelector("button")

let otp = [];

const generateOTP = () => {

    for(let i = 0; i < 4; i++){
        let number = Math.round(Math.random() * 9)
        otp.push(number)
    }

    window.alert(`OTP gerado! ${otp.join(' ')}`)
}

generateOTP()

const validadeChar = (char) => {
    return char.match(/[0-9]/i)
}

inputs.forEach((input, index) => {
    input.addEventListener("keyup", (e) => {

        const nextInput = input.nextElementSibling
        const prevInput = input.previousElementSibling

        if(validadeChar(e.key)){

            if(input.value.length > 1){
                input.value = e.key
            }

            input.classList.add("placed")

            if(nextInput){
                nextInput.focus()
            }
        }

        else if(e.key == "Backspace"){
            if(input.value.length == 0 && prevInput){
                prevInput.focus()
            }
            input.classList.remove("placed")
        }

    })
})

send.addEventListener("click", (e) => {
    let placedChars = []
    
    inputs.forEach((input, index) => {        
        placedChars.push(Number(input.value))
    })
    
    let validated = true;

    for(let i = 0; i < 4; i++){
        if(placedChars[i] != otp[i]){
            validated = false
        }
    }
    
    if(validated){
        window.confirm("PARABÉNS!")
    }else{
        window.alert("VOCÊ ERROU!")
    }
})