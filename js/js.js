function criarTreino(event) {
    const grau = document.querySelector('.experiencia').value;
    const preferencia = document.querySelector('.preferencia').value;
    const tipoAquecimento = document.querySelector('.tipo-aquecimento').value;
    //gerador aquecimento
    let aquecimento = document.querySelector('.aquecimento');
    if (tipoAquecimento == "pescoco") {
        aquecimento.innerHTML = ``;
    }
    else if (tipoAquecimento == "ombros") {
        aquecimento.innerHTML = `<p>aquecimento ombros</p>`;
    }
    else if (tipoAquecimento == "bracos") {
        aquecimento.innerHTML = `<p>aquecimento braços</p>`;
    }
    else if (tipoAquecimento == "maos") {
        aquecimento.innerHTML = `<p>aquecimento mãos</p>`;
    }
    else if (tipoAquecimento == "pernas") {
        aquecimento.innerHTML = `<p>aquecimento pernas</p>`;
    }
    else if (tipoAquecimento == "pes") {
        aquecimento.innerHTML = `<p>aquecimento pés</p>`;
    }
    //gerador treino
    let treino = document.querySelector('.treino');
    if (preferencia == "forca") {
        if (grau == "iniciante") {
            treino.innerHTML = `<p>força, iniciante</p>`;
        }
        else if (grau == "intermediario") {
            treino.innerHTML = `<p>força, intermediario</p>`;
        }
        else { 
            treino.innerHTML = `<p>força, avançado</p>`;
        }
    }
    else if (preferencia == "resistencia") {
        if (grau == "iniciante") {
            treino.innerHTML = `<p>resistência, iniciante</p>`;
        }
        else if (grau == "intermediario") {
            treino.innerHTML = `<p>resistência, intermediario</p>`;
        }
        else { 
            treino.innerHTML = `<p>resistência, avançado</p>`;
        }
    }
    else if (preferencia == "flexibilidade") {
        if (grau == "iniciante") {
            treino.innerHTML = `<p>flexibilidade, iniciante</p>`;
        }
        else if (grau == "intermediario") {
            treino.innerHTML = `<p>flexibilidade, intermediario</p>`;
        }
        else { 
            treino.innerHTML = `<p>flexibilidade, avançado</p>`;
        }
    }

    event.preventDefault()
}