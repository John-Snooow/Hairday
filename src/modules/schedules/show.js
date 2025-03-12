import dayjs from "dayjs";

//seleciona as sessoes manha, tarde e noite
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

//recebe os agendamentos
export async function scheduleShow({ dailySchedules }) {
    try {
        //limpa as listas
        periodMorning.innerHTML = "";
        periodAfternoon.innerHTML = "";
        periodNight.innerHTML = "";

        //Renderiza os agendamentos por periodo 
        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li");
            const time = document.createElement("strong");
            const name = document.createElement("span");

            //Adiciona o ID do agendamento 
            item.setAttribute("data-id", schedule.id);

            time.textContent = dayjs(schedule.when).format("HH:mm").toString();
            name.textContent = schedule.name;

            //Cria ìcone de cancelamento do agendamento
            const cancelIcon = document.createElement("img");
            cancelIcon.classList.add("cancel-icon");
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
            cancelIcon.setAttribute("alt", "Cancelar");

            //Adiciona o tempo, nome e ìcone ao item
            item.append(time, name, cancelIcon);

            //Obtém somente a hora
            const hour = dayjs(schedule.when).hour();

            //Renderiza os agendamento na sessão (manha, tarde e noite)
            if (hour <= 12) {
                periodMorning.appendChild(item);
            } else if (hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(item);
            } else {
                periodNight.appendChild(item);
            }
        });
    } catch (error) {
        console.log(error);
        alert("Não foi possivel exibir os agendamentos!");
    }
}