// arquivo de carregamento de paginas baseado nos horarios disponiveis

import { schedulesDay } from "./schedules/load"

// Carrega o DOM
document.addEventListener("DOMContentLoaded", function () {
    schedulesDay()
    //busca na api os agendamentos para carregar do lado direito da tela!
    //os horarios disponiveis(horario futuro! + nao agendado) do lado esquerdo (form)
})