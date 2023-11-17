function updateClock() {
  //O QuerySelector, serve para puxarmos DOCs de outros lugares da pasta
  const hoursElement = document.querySelector(".hours");
  const minutesElement = document.querySelector(".minutes");
  const secondsElement = document.querySelector(".seconds");

  const now = new Date();
  /*Aqui eu peguei a VAR hours e transformei ela em STRING, depois pegamos o PADSTART que seria quanto numeros 0 teriam no inicio da contagem das hrs
  que seriam 2 Numeros 00*/
  const hours = now.getHours(). toString().padStart(2, "0");
  const minutes = now.getMinutes(). toString().padStart(2, "0");
  const seconds = now.getSeconds(). toString().padStart(2, "0");

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

setInterval(updateClock, 1000); /* SetINterval é muito bom para fazer eventos continuos.
nesse caso, ele vai ficar reniciando os numbers das horas a cada 1 segundo, infinitamente, até que saiam da pagina*/