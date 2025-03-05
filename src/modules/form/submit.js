import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday


form.onsubmit = (event) => {
    //previne o comportamento padrao de carregar a pagina
    event.preventDefault()

    try {
        //Recupera o nome do cliente
        const name = clientName.value.trim()

        if(!name){
            return alert("O campo nome deve ser preenchido")
        }

        //Recupera o horario selecionada
        const hourSelected = document.querySelector(".hour-selected")

        //Verifica se algum horario foi selecionado
        if(!hourSelected){
            return alert("Selecione um horário")
        }

        //Recupera somente a Hora
        const [hour] = hourSelected.innerHTML.split(":")

        //insere o horario na data selecionada
        const when = dayjs(selectedDate.value).add(hour, "hour")

        //gera o ID
        const id = new Date().getTime()
        console.log({
            id,
            name,
            when
        })

    }catch (error) {
        alert("Não foi possivel criar o agendamento")
        console.log(error)
    }
}