//Novo agendamento

import { apiConfig } from "./api-config.js";
export async function scheduleNew({ id, name, when }) {
  try {
    //faz a requisicao para  enviar os dados do agendamento
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        when,
      }),
    });
    //Exibe uma mensagem de agendamendo realizado
    alert("Agendamento realizado com sucesso");
  } catch (error) {
    console.log(error);
    alert("Erro ao criar agendamento, tente novamente mais tarde");
  }
}
