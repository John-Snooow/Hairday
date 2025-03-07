import dayjs from "dayjs";
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay({date}) {
    try {
        //Faz a requisicao para a API
        const response = await fetch(`${apiConfig.baseUrl}/schedulea`);

        //Conver para json
        const data = await response.json();

        //Filtra os agendamentos pelo dia selecionado
        const dailySchedule = data.filter((schedule) => 
            dayjs(date).isSame(schedule.when, "day")
        );

        return dailySchedule
    }catch (error) {
        console.log(error);
        alert("Não foi possivel buscar os agendamentos do dia selecionado, tente novamente mais tarde");
    }
}