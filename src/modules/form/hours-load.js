import dayjs from "dayjs"

import {openingHours} from "../../utils/opening-hous.js"// importa o modulo

const hours = document.getElementById("hours")
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

    opening.forEach(({hour, available}) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour
        hours.append(li)
    })
}