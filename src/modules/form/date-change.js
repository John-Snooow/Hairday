import {schedulesDay} from "../schedules/load"

//Selecionar o input de data
const selectedDate = document.getElementById("date")

//recarrega a lista de horarios quando o input da data mudar
selectedDate.onchange = () => schedulesDay()