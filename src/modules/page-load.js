// arquivo de carregamento de paginas baseado nos horarios disponiveis

import {schedulesDay} from "./schedules/load.js"// importa o modulo

// Carrega o DOM
document.addEventListener("DOMContentLoaded", function () {
    schedulesDay()
})