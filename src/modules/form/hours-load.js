import dayjs from "dayjs"

import {openingHours} from "../../utils/opening-hous.js"// importa o modulo
export function hoursLoad({date}) {
    const opening = openingHours.map((hour) => {
        // Recupera somente a Hora
        const [scheduleHour] = hour.split(":")

        //Adiciona a hora na data e verifica se esta no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        
        return {
            hour,
            available: isHourPast,
        }
    })
}