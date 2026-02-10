AOS.init();

const momentoDoEvento = new Date("Mar 10, 2026 19:00");
const timestampDoEvento = momentoDoEvento.getTime();

setInterval(function() {
    const momentoAtual = new Date();
    const timestampAtual = momentoAtual.getTime();

    const tempoAteOEvento = timestampDoEvento - timestampAtual;

    minutosEmMS = 1000 * 60
    horasEmMS = minutosEmMS * 60
    diaEmMS = horasEmMS * 24;
    
    diasAteOEvento = Math.floor(tempoAteOEvento / diaEmMS);
    horasAteOEvento = Math.floor(tempoAteOEvento % diaEmMS / horasEmMS);
    minutosAteOEvento = Math.floor(tempoAteOEvento % horasEmMS / minutosEmMS);
    segundosAteOEvento = Math.floor(tempoAteOEvento % minutosEmMS / 1000)

    const contador = document.getElementById("contador");
    
    contador.innerHTML = tempoAteOEvento > 0 
    ? `Começa em ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s` : "encerrou";
}, 1000)