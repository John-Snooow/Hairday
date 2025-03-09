import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import {hoursLoad} from "../form/hours-load.js"

//seleciona o input de data
const selectedDate = document.getElementById("date")

export async function schedulesDay(){
    //Obtem a data do input
    const date = selectedDate.value

    //Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({date})

    // Renderiza os horarios disponiveis
    hoursLoad({date})
}