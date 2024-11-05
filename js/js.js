function criarTreino(event) {
    const grau = document.querySelector('.experiencia').value;
    const preferencia = document.querySelector('.preferencia').value;
    const tipoAquecimento = document.querySelector('.tipo-aquecimento').value;
    //gerador aquecimento
    let aquecimento = document.querySelector('.aquecimento');
    if (tipoAquecimento == "pescoco") {
        aquecimento.innerHTML = `
        <h2>AQUI ESTÁ! Seu aquecimento para pescoço</h2>
                <ol>
                    <li>
                        <span>1. Flexão de pescoço:</span>  Incline a cabeça para frente até encostar o queixo no peito e mantenha a posição por 5 segundos. Levante lentamente a cabeça, incline-a para trás e segure por mais 5 segundos. Repita esse movimento 5 vezes.
                    </li>
                    <li>
                        <span>2. Flexão lateral de pescoço:</span>  Incline a cabeça lateralmente o máximo que conseguir e mantenha a posição por 5 segundos. Repita o movimento para o lado oposto e segure por mais 5 segundos. Repita o movimento 5 vezes para cada lado.
                    </li>
                    <li>
                        <span>3. Alongamento com braços cruzados:</span>  Cruze o braço esquerdo sobre o peito e use a mão direita para mantê-lo na posição por 10 segundos. Repita o movimento com o braço direito, usando a mão esquerda, e segure por mais 10 segundos. Repita o movimento 5 vezes com cada braço.
                    </li>
                    <li>
                        <span>4. Movimentos circulares com o pescoço:</span>  Sentado em uma cadeira, relaxe os ombros, mantenha as costas retas e faça movimentos circulares com a cabeça. Repita o movimento 5 vezes para cada lado.
                    </li>
                </ol>`;
    }
    else if (tipoAquecimento == "ombros") {
        aquecimento.innerHTML = `
        <h2>AQUI ESTÁ! Seu aquecimento para ombros</h2>
                <ol>
                    <li>
                        <span>1. Flexão:</span>  Coloque-se de pé, perpendicularmente a uma parede, com os apoios à largura dos ombros e um pé posicionado ligeiramente mais à frente do outro. Os braços ao nível do ombro, em extensão, coloque a palma da mão na parede, com o polegar para cima e incline o tronco para a frente. Mantenha o alongamento por 20 segundos. Mantenha os cotovelos trancados e a coluna direita. Quanto mais à frente estiver o pé dianteiro em relação à posição do alinhamento da mão na parede, maior é o alongamento.
                    </li>
                    <li>
                        <span>2. Extensão, Adução e Retração:</span> Posicione-se de pé alinhando o vértice do canto da parede com o ombro direito. Os pés devem estar à largura dos ombros e os dedos da mão a apontar para a frente e polegar para baixo. Cruze o braço esquerdo para a direita do corpo alinhando a mão com o ombro direito. Deve rodar o tronco para dentro até sentir o alongamento na parte posterior do ombro esquerdo. Deve permanecer com o cotovelo trancado. Mantenha o alongamento por 20 segundos. Realize o mesmo processo para o ombro direito.
                    </li>
                    <li>
                        <span>3. Adução, Protração e Elevação:</span>  Na posição de pé, com os apoios à largura dos ombros, deve trazer o braço esquerdo pela frente do tronco, com a mão esquerda próxima do quadril direito. Com a mão direita segure o braço esquerdo na zona do cotovelo e procure puxar o cotovelo para baixo e para a direita do corpo. Não levante o ombro ou incline o tronco à frente. Se não for possível colocar a mão no quadril, tente aproximar o máximo que conseguir. Mantenha o alongamento por 20 segundos. Realize o mesmo processo para o braço oposto. 
                    </li>
                    <li>
                        <span>4. Adução e Extensão:</span>  Na posição de agachamento de frente para um pilar (pode utilizar uma ombreira da porta), alinhe o ombro direito com o canto. Segure o canto mais afastado com a mão direita, ao nível do ombro direito. Ao manter o braço esticado e os pés firmemente apoiados, procure manter o glúteo próximo do chão. Um maior agachamento constitui um alongamento maior, no entanto deve evitar uma posição em que sinta dores nas pernas ou nos joelhos. Não incline o tronco para a frente da cintura. Para obter um maior alongamento rode o tronco para dentro. Mantenha o alongamento por 20 segundos. Realize o mesmo procedimento para o braço oposto.
                    </li>                
                </ol>
        `;
    }
    else if (tipoAquecimento == "bracos") {
        aquecimento.innerHTML = `
        <h2>AQUI ESTÁ! Seu aquecimento para braços</h2>
                <ol>
                    <li>
                        <span>1. Alongamento para bíceps:</span> Em pé, com os pés separados em uma distância equivalente à largura dos ombros, dobre ligeiramente os joelhos e mantenha os dedos dos pés apontando para a frente. Erga os dois braços na altura dos ombros, mantendo os ombros no mesmo nível. Gire os pulsos até que as palmas das mãos estejam atrás do seu corpo, como na foto acima. Aí você deve sentir o alongamento. Porém, se não sentir, empurre os braços suavemente para trás, ligeiramente atrás de você, até sentir. Segure a posição por no mínimo 30 segundos, lembrando-se de respirar corretamente. 
                    </li>
                    <li>
                        <span>2. Alongamento para tríceps:</span> Fique em pé com os pés separados em uma distância equivalente à largura dos quadris, os dedos dos pés apontados para a frente e os joelhos ligeiramente dobrados. Leve o braço direito para cima, perto da orelha. Então, dobre o cotovelo, colocando a mão direita no ombro esquerdo e atrás das costas. Os dedos da mão direita devem apontar para baixo, tocando a parte de trás da escápula, como na imagem. Leve o braço esquerdo sobre a cabeça e segure levemente depois do cotovelo direito, como na imagem. Você pode aprofundar o alongamento ao puxar o braço direito com a mão esquerda. Porém, faça isso até o ponto de sentir o alongamento, não uma dor. Segure a posição por 30 segundos, inalando e exalando o ar. Após, troque a posição dos braços e repita o exercício.

                    </li>
                    <li>
                        <span>3. Alongamento para os pulsos e os antebraços:</span> Estenda um braço na frente do corpo com a palma da mão voltada para cima. O próximo passo é dobrar o pulso para baixo, deixando a mão direcionada para o chão. Com a outra mão, flexione suavemente o pulso até sentir um alongamento de nível leve a moderado no antebraço. Segure a posição durante pelo menos 15 a 30 segundos. Troque a posição das mãos e repita o alongamento.
                    </li>
                    <li>
                        <span>4. Alongamento para braços e ombros:</span> Fique em pé, com os joelhos ligeiramente dobrados e os pés separados em uma distância equivalente à largura dos ombros. O passo seguinte consiste em dobrar o cotovelo direito e colocar o braço sobre o peito como na foto. Coloque o braço esquerdo ligeiramente atrás do cotovelo para apoiar o outro braço durante o alongamento. Nesse momento, você certamente sentirá o alongamento no ombro e no braço direito. Segure a posição por 30 segundos. Troque a posição dos braços para alongar o outro lado.
                    </li>                
                </ol>
        `;
    }
    else if (tipoAquecimento == "maos") {
        aquecimento.innerHTML = `
        <h2>AQUI ESTÁ! Seu aquecimento para mãos</h2>
                <ol>
                    <li>
                        <span>1. Flexão e extensão do punho:</span> Sentado ou em pé, dobre o punho para baixo com uma mão e puxe o dorso da mão em direção a si. Mantenha a posição por 30 segundos e repita 3 vezes. Depois, vire a mão para cima e puxe a ponta dos dedos em direção a si. 
                    </li>
                    <li>
                        <span>2. Alongamento de dedo:</span> Massageie suavemente cada dedo da base até a ponta. Segure a ponta de cada dedo e leve-o em direção ao peito. Mantenha a posição por 10 segundos e repita com a outra mão.
                    </li>
                    <li>
                        <span>3. Alongamento do antebraço:</span> Apoie-se em uma mesa, balcão ou outra superfície. Coloque as mãos viradas para baixo e incline o tronco para trás. Puxe o peso do corpo para os calcanhares e segure a posição por 30 segundos.
                    </li>                
                </ol>
        `;
    }
    else if (tipoAquecimento == "pernas") {
        aquecimento.innerHTML = `
        <h2>AQUI ESTÁ! Seu aquecimento para pernas</h2>
                <ol>
                    <li>
                        <span>1. Polichinelos:</span> Um excelente exercício para elevar a frequência cardíaca e aquecer as pernas. Fique de pé com os pés juntos e braços ao lado do corpo. Dê um salto para abrir as pernas enquanto eleva os braços acima da cabeça, e volte para a posição inicial.
                    </li>
                    <li>
                        <span>2. Elevação de Joelhos (High Knees):</span> Ajuda a ativar os músculos das pernas e trabalha o core. Fique em pé e corra no lugar, levantando um joelho de cada vez o mais alto possível. Lembre-se de manter o ritmo e o controle do movimento.
                    </li>
                    <li>
                        <span>3. Aquecimento com Agachamento:</span> Para ativar os quadríceps, glúteos e panturrilhas. Realize agachamentos curtos, sem peso, concentrando-se na forma e no controle. Desça até a metade e volte para a posição inicial, mantendo os pés afastados na largura dos ombros.
                    </li>
                    <li>
                        <span>4. Passadas Alternadas (Lunges Dinâmicos):</span> Prepara bem os músculos da parte inferior e melhora a mobilidade. Dê um passo à frente com uma perna, abaixando o joelho traseiro em direção ao chão, e volte à posição inicial. Alterne entre as pernas a cada repetição.
                    </li>                
                </ol>
        `;
    }
    else if (tipoAquecimento == "pes") {
        aquecimento.innerHTML = `
        <h2>AQUI ESTÁ! Seu aquecimento</h2>
                <ol>
                    <li>
                        <span>1. Alongamento dos Dedos:</span> Sentado, coloque um dos pés apoiado na coxa oposta. Use as mãos para puxar suavemente cada dedo, alongando-os para trás e para frente. Faça durante 20 a 30 segundos para cada pé. Aumenta a flexibilidade dos dedos e reduz a rigidez.
                    </li>
                    <li>
                        <span>2. Flexão e Extensão dos Dedos:</span> Sentado ou em pé, estenda os dedos dos pés, abrindo-os o máximo possível, e depois feche-os apertando como se estivesse tentando "agarrar" o chão. Repita de 10 a 15 vezes. Melhora o controle dos músculos dos pés e a mobilidade dos dedos.
                    </li>
                    <li>
                        <span>3. Rolamento com Bola de Tênis:</span> Sente-se e coloque uma bola de tênis (ou outra bola pequena) sob o arco do pé. Role a bola para frente e para trás, massageando a planta do pé. Repita por 1 a 2 minutos em cada pé. Libera a tensão na planta do pé e ajuda na circulação.
                    </li>
                    <li>
                        <span>4. Elevação de Calcanhar:</span> Fique em pé com os pés paralelos e eleve os calcanhares, ficando na ponta dos pés. Depois, abaixe devagar. Repita de15 a 20 vezes. Fortalece a musculatura da panturrilha e o arco dos pés, aumentando a estabilidade e o equilíbrio.
                    </li>                
                </ol>
        `;
    }
    else {
        aquecimento.innerHTML = `<h2>(Não foi solicitado um aquecimento)</h2>`
    }
    //gerador treino
    let treino = document.querySelector('.treino');
    if (preferencia == "forca") {
        if (grau == "iniciante") {
            treino.innerHTML = `
            <h2>AQUI ESTÁ! Seu treino</h2>
                <ol>
                    <li>
                        <h3>1. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>2. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>4. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>                
                </ol>`;
        }
        else if (grau == "intermediario") {
            treino.innerHTML = `
            <h2>AQUI ESTÁ! Seu treino</h2>
                <ol>
                    <li>
                        <h3>1. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>2. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>4. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>                
                </ol>`;
        }
        else { 
            treino.innerHTML = `
            <h2>AQUI ESTÁ! Seu treino</h2>
                <ol>
                    <li>
                        <h3>1. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>2. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>4. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>                
                </ol>
            `;
        }
    }
    else if (preferencia == "resistencia") {
        if (grau == "iniciante") {
            treino.innerHTML = `
            <h2>AQUI ESTÁ! Seu treino</h2>
                <ol>
                    <li>
                        <h3>1. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>2. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>4. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>                
                </ol>`;
        }
        else if (grau == "intermediario") {
            treino.innerHTML = `
            <h2>AQUI ESTÁ! Seu treino</h2>
                <ol>
                    <li>
                        <h3>1. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>2. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>4. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>                
                </ol>`;
        }
        else { 
            treino.innerHTML = `
            <h2>AQUI ESTÁ! Seu treino</h2>
                <ol>
                    <li>
                        <h3>1. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>2. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>4. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>                
                </ol>`;
        }
    }
    else if (preferencia == "flexibilidade") {
        if (grau == "iniciante") {
            treino.innerHTML = `
            <h2>AQUI ESTÁ! Seu treino</h2>
                <ol>
                    <li>
                        <h3>1. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>2. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>4. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>                
                </ol>`;
        }
        else if (grau == "intermediario") {
            treino.innerHTML = `
            <h2>AQUI ESTÁ! Seu treino</h2>
                <ol>
                    <li>
                        <h3>1. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>2. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>4. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>                
                </ol>`;
        }
        else { 
            treino.innerHTML = `<h2>AQUI ESTÁ! Seu treino</h2>
                <ol>
                    <li>
                        <h3>1. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>2. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>
                    <li>
                        <h3>4. Exemplo</h3>
                        <p>Este exemplo bla kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    </li>                
                </ol>`;
        }
    }

    event.preventDefault()
}