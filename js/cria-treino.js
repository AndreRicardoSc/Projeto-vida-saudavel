function pegarInfo() {
    const restricao = document.roteiroPerguntas.elements["restricao"].value;
    const objetivo = document.roteiroPerguntas.elements["objetivo"].value;
    alert(`Você é ${restricao} e vai ${objetivo}`);
}