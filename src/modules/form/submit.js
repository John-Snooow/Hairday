import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

//Data atual para formatar o input
const inputDate = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputDate
selectedDate.min = inputDate


form.onsubmit = (event) => {
    //previne o comportamento padrao de carregar a pagina
    event.preventDefault()

    console.log("eviado")
}