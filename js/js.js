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
            <h2><span>AQUI ESTÁ! Seu treino</span></h2>
            <p>
                Frequência: 3 vezes por semana
            </p>
            <p>
                Objetivo: Melhorar condicionamento geral e capacidade aeróbica com circuito de exercícios.
            </p>
                <ol>
                    <li>
                        <h3>1. Agachamento livre: 3x8-10</h3>
                        <p>O agachamento livre é um exercício que fortalece pernas, glúteos e core, além de melhorar a mobilidade e estabilidade. Para executá-lo, posicione a barra sobre a parte superior das costas, mantenha o abdômen contraído e desça os quadris para trás, como se fosse sentar, até que as coxas fiquem paralelas ao chão. Ao subir, empurre o chão com os calcanhares, mantendo a postura ereta. Controle o movimento, inspire ao descer e expire ao subir.</p>
                    </li>
                    <li>
                        <h3>2. Supino com halteres: 3x8-10 </h3>
                        <p>O supino com halteres é um exercício excelente para fortalecer o peitoral, ombros e tríceps. Deitado em um banco plano, segure um halter em cada mão com os braços estendidos acima do peito e as palmas voltadas para frente. Inspire enquanto abaixa os halteres lentamente até que fiquem próximos do peito, mantendo os cotovelos ligeiramente abertos. Em seguida, empurre os halteres para cima, expirando e contraindo o peitoral até que os braços estejam estendidos novamente. Execute o movimento de forma controlada para ativar bem os músculos e evitar lesões.</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Levantamento terra com barra: 3x6-8</h3>
                        <p>O levantamento terra com barra é um exercício poderoso para fortalecer a região lombar, glúteos, pernas e core. Para executá-lo, posicione a barra no chão à sua frente, mantendo os pés na largura dos ombros. Agache para segurar a barra com as mãos ligeiramente afastadas dos joelhos, mantendo as costas retas, o peito erguido e o abdômen contraído. Empurre o chão com os calcanhares para levantar a barra, estendendo o quadril e os joelhos até ficar em pé, com os ombros alinhados. Ao descer, faça o movimento controlado, dobrando os quadris e os joelhos até que a barra retorne ao chão.</p>
                    </li>
                    <li>
                        <h3>4. Remada com barra: 3x8-10</h3>
                        <p>A remada com barra é um exercício eficaz para fortalecer as costas, especialmente o latíssimo dorsal, trapézio e os músculos dos ombros e bíceps. Para realizá-lo, segure a barra com as mãos na largura dos ombros, inclinado o tronco ligeiramente à frente com os joelhos flexionados e as costas retas. Mantendo o abdômen contraído, puxe a barra em direção ao abdômen, levando os cotovelos para trás e sentindo a contração nas costas. Em seguida, desça a barra de forma controlada até que os braços fiquem estendidos. Mantenha a postura e o controle para evitar sobrecarga na lombar.</p>
                    </li>                
                </ol>`;
        }
        else if (grau == "intermediario") {
            treino.innerHTML = `
            <h2><span>AQUI ESTÁ! Seu treino</span></h2>
            <p>
                Frequência: 4 vezes por semana
            </p>
            <p>
                Objetivo: Progredir na carga, focando em força e melhoria dos padrões de movimento.
            </p>
                <ol>
                    <li>
                        <h3>1. Agachamento livre: 4x5-6</h3>
                        <p>O agachamento livre é um exercício que fortalece pernas, glúteos e core, além de melhorar a mobilidade e estabilidade. Para executá-lo, posicione a barra sobre a parte superior das costas, mantenha o abdômen contraído e desça os quadris para trás, como se fosse sentar, até que as coxas fiquem paralelas ao chão. Ao subir, empurre o chão com os calcanhares, mantendo a postura ereta. Controle o movimento, inspire ao descer e expire ao subir.</p>
                    </li>
                    <li>
                        <h3>2. Supino reto com barra: 4x5-6</h3>
                        <p>O supino reto com barra é um exercício clássico para fortalecer o peitoral, tríceps e ombros. Deite-se em um banco reto e posicione os olhos sob a barra. Segure-a com as mãos um pouco mais afastadas que a largura dos ombros, mantendo os pés firmes no chão e as escápulas retraídas. Inspire enquanto abaixa a barra lentamente até o peito, mantendo os cotovelos levemente abertos. Em seguida, empurre a barra para cima, estendendo os braços e expirando, até que ela esteja na posição inicial. Controle o movimento para garantir a ativação muscular e prevenir lesões.</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Levantamento terra: 4x4-5</h3>
                        <p>O levantamento terra é um exercício poderoso para fortalecer a lombar, glúteos, pernas e core. Comece com os pés na largura dos ombros, a barra no chão à frente. Agache-se, segure a barra com as mãos ligeiramente fora da largura dos joelhos e mantenha as costas retas, peito aberto e core firme. Inspire, e ao levantar a barra, empurre o chão com os calcanhares, estendendo quadris e joelhos até ficar em pé. No topo, contraia os glúteos e evite inclinar as costas. Retorne a barra ao chão controladamente, mantendo a postura.</p>
                    </li>
                    <li>
                        <h3>4. Desenvolvimento com barra: 4x6</h3>
                        <p>O desenvolvimento com barra é um ótimo exercício para fortalecer os ombros e os tríceps. Comece sentado ou em pé, segurando a barra com as mãos afastadas na largura dos ombros, à altura do peito. Com o core contraído e as costas retas, inspire e empurre a barra para cima até estender completamente os braços, mantendo os cotovelos levemente flexionados no topo. Ao descer, controle o movimento, trazendo a barra de volta à altura do peito. Mantenha a postura ereta durante todo o exercício para evitar sobrecarregar a lombar e garantir uma execução segura.</p>
                    </li>
                    <li>
                        <h3>5. Remada com barra: 4x6</h3>
                        <p>A remada com barra é um exercício eficaz para fortalecer as costas, especialmente o latíssimo dorsal, trapézio e os músculos dos ombros e bíceps. Para realizá-lo, segure a barra com as mãos na largura dos ombros, inclinado o tronco ligeiramente à frente com os joelhos flexionados e as costas retas. Mantendo o abdômen contraído, puxe a barra em direção ao abdômen, levando os cotovelos para trás e sentindo a contração nas costas. Em seguida, desça a barra de forma controlada até que os braços fiquem estendidos. Mantenha a postura e o controle para evitar sobrecarga na lombar.</p>
                    </li>                 
                </ol>`;
        }
        else { 
            treino.innerHTML = `
            <h2><span>AQUI ESTÁ! Seu treino</span></h2>
            <p>
                Frequência: 5 vezes por semana
            </p>
            <p>
                Objetivo: Otimização da força máxima em exercícios compostos.
            </p>
                <ol>
                    <li>
                        <h3>1. Levantamento terra: 5x3-4</h3>
                        <p>O levantamento terra é um exercício poderoso para fortalecer a lombar, glúteos, pernas e core. Comece com os pés na largura dos ombros, a barra no chão à frente. Agache-se, segure a barra com as mãos ligeiramente fora da largura dos joelhos e mantenha as costas retas, peito aberto e core firme. Inspire, e ao levantar a barra, empurre o chão com os calcanhares, estendendo quadris e joelhos até ficar em pé. No topo, contraia os glúteos e evite inclinar as costas. Retorne a barra ao chão controladamente, mantendo a postura.</p>
                    </li>
                    <li>
                        <h3>2. Agachamento frontal: 4x4</h3>
                        <p>O agachamento frontal é um exercício que enfatiza o quadríceps, core e parte superior das costas. Para executá-lo, posicione a barra na frente dos ombros, cruzando os braços para segurá-la ou usando uma pegada em que os cotovelos fiquem voltados para frente, mantendo a barra firme na posição. Com os pés na largura dos ombros e o core ativado, desça os quadris para trás e para baixo, mantendo o tronco ereto e o peso nos calcanhares. Desça até as coxas ficarem paralelas ao chão e, em seguida, empurre o chão com os calcanhares para retornar à posição inicial. Controlar o movimento é essencial para garantir a técnica e evitar lesões.</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Supino inclinado com barra: 5x3-5</h3>
                        <p>O supino inclinado com barra é um exercício focado na parte superior do peitoral, além de trabalhar ombros e tríceps. Deite-se em um banco inclinado (cerca de 30 a 45 graus) com os pés firmes no chão. Segure a barra com as mãos um pouco mais afastadas que a largura dos ombros, mantendo os ombros retraídos e o core firme. Inspire enquanto abaixa a barra lentamente até o nível da parte superior do peito, controlando o movimento. Em seguida, empurre a barra para cima, estendendo os braços e expirando, até retornar à posição inicial. Esse movimento controlado e a postura estável ajudam a prevenir lesões e a melhorar a eficácia do exercício.</p>
                    </li>
                    <li>
                        <h3>4. Remada T: 5x4</h3>
                        <p>A remada T é um exercício eficaz para fortalecer as costas, especialmente os músculos da parte superior, como o trapézio, romboides e lats. Para realizá-la, posicione-se em frente a uma barra com um peso fixo ou uma barra T. Segure as alças com as duas mãos, mantendo os pés afastados na largura dos ombros e os joelhos ligeiramente flexionados. Com o tronco inclinado para frente a partir dos quadris, mantenha as costas retas e o core contraído. Puxe as alças em direção ao peito, ativando as escápulas, e mantenha os cotovelos próximos ao corpo. Em seguida, controle a descida das alças de volta à posição inicial. Mantenha sempre a postura correta para evitar sobrecarregar a lombar.</p>
                    </li>
                    <li>
                        <h3>5. Desenvolvimento com barra: 5x5</h3>
                        <p>O desenvolvimento com barra é um exercício excelente para fortalecer os ombros, tríceps e parte superior das costas. Para realizá-lo, posicione-se em pé, com os pés na largura dos ombros e a barra na frente do seu corpo, segurando-a com as mãos ligeiramente mais afastadas que a largura dos ombros. Com o core ativado e a postura ereta, inspire e empurre a barra para cima, estendendo os braços até que fiquem completamente retos. No topo, evite arquear a lombar e mantenha os cotovelos ligeiramente flexionados. Abaixe a barra controladamente até a posição inicial, sempre mantendo a postura estável durante todo o movimento.</p>
                    </li>   
                </ol>
            `;
        }
    }
    else if (preferencia == "resistencia") {
        if (grau == "iniciante") {
            treino.innerHTML = `
            <h2><span>AQUI ESTÁ! Seu treino</span></h2>
            <p>
                Frequência: 3 vezes por semana
            </p>
            <p>
                Objetivo: Melhorar condicionamento geral e capacidade aeróbica com circuito de exercícios.
            </p>
                <ol>
                    <li>
                        <h3>1. Circuito (30 segundos por exercício, com 1 minuto de descanso entre rodadas):</h3>
                        <p>Um circuito de treinamento combina diferentes exercícios em sequência para melhorar a força, resistência e condicionamento físico. Escolha de 4 a 8 exercícios que trabalhem diferentes grupos musculares e execute cada um por 30 segundos a 1 minuto, com breves intervalos de descanso entre eles. Após completar todos os exercícios, descanse por 1 a 2 minutos e repita o circuito de 2 a 4 vezes. Essa abordagem variada torna o treino dinâmico e eficaz.</p>
                    </li>
                    <li>
                        <h3>2. Agachamento livre: 4x14-20</h3>
                        <p>O agachamento livre é um exercício que fortalece pernas, glúteos e core, além de melhorar a mobilidade e estabilidade. Para executá-lo, posicione a barra sobre a parte superior das costas, mantenha o abdômen contraído e desça os quadris para trás, como se fosse sentar, até que as coxas fiquem paralelas ao chão. Ao subir, empurre o chão com os calcanhares, mantendo a postura ereta. Controle o movimento, inspire ao descer e expire ao subir.</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Flexão de braço: 4x14-20</h3>
                        <p>A flexão de braço é um exercício simples, mas eficaz, para fortalecer o peitoral, ombros e tríceps. Comece deitado de barriga para baixo, com as mãos posicionadas um pouco mais largas que a largura dos ombros, e os pés apoiados no chão, com o corpo reto. Inspire enquanto abaixa o corpo, flexionando os cotovelos e mantendo-os próximos ao corpo ou ligeiramente abertos, até que o peito quase toque o chão. Em seguida, empurre o chão com as mãos, estendendo os cotovelos e levantando o corpo de volta à posição inicial, expirando no movimento de subida. Mantenha o core contraído e o corpo reto durante todo o exercício para evitar sobrecarga na lombar.</p>
                    </li>
                    <li>
                        <h3>4. Remada no cabo: 5x14-20</h3>
                        <p>A remada no cabo é um exercício que trabalha as costas, especialmente os músculos do latíssimo do dorso e os romboides. Para executá-la, sente-se em frente a uma máquina de cabo, com os pés apoiados na plataforma e as pernas ligeiramente flexionadas. Segure o cabo com as duas mãos, mantendo os braços estendidos à frente e a coluna reta. Puxe o cabo em direção ao tronco, mantendo os cotovelos próximos ao corpo, e contraia as costas ao final do movimento. Em seguida, estenda os braços de forma controlada, voltando à posição inicial. Mantenha a postura estável durante todo o exercício para evitar sobrecarregar a lombar e garantir a eficácia do movimento.</p>
                    </li>
                    <li>
                        <h3>5. Elevação lateral com halteres: 4x14-20</h3>
                        <p>A elevação lateral com halteres é um exercício focado no fortalecimento dos ombros, especialmente no deltoide lateral. Para realizá-lo, fique em pé com os pés na largura dos ombros, segurando um halter em cada mão, com os braços ao lado do corpo. Mantenha o core contraído e as costas retas. Inspire e levante os halteres lateralmente até que os braços fiquem paralelos ao chão, mantendo uma leve flexão nos cotovelos e evitando que os ombros se elevem. Expire enquanto controla o movimento de volta à posição inicial, sem deixar os halteres caírem rapidamente. Execute de forma controlada para maximizar a ativação muscular e evitar lesões.</p>
                    </li>
                    <li>
                        <h3>5. Prancha abdominal: 3x20-30 segundos</h3>
                        <p>A prancha abdominal é um exercício isométrico que fortalece o core, trabalhando músculos do abdômen, costas e ombros. Para executá-la, deite-se de barriga para baixo e apoie os antebraços no chão, com os cotovelos alinhados com os ombros. Levante o corpo, mantendo uma linha reta dos calcanhares à cabeça, sem deixar o quadril cair ou subir demais. Contraia o abdômen e mantenha a postura firme, respirando normalmente, sem permitir que o corpo balance. Tente manter a posição pelo maior tempo possível, sempre focando em manter a estabilidade e evitar a sobrecarga na região lombar.</p>
                    </li>               
                </ol>`;
        }
        else if (grau == "intermediario") {
            treino.innerHTML = `
            <h2><span>AQUI ESTÁ! Seu treino</span></h2>
            <p>
                Frequência:  3-4 vezes por semana
            </p>
            <p>
                Objetivo: Desenvolver resistência muscular e cardiovascular com intensidade moderada-alta.
            </p>
                <ol>
                    <li>
                        <h3>1. Circuito de alta intensidade (40 segundos por exercício, com 20 segundos de descanso entre):</h3>
                        <p>O circuito de alta intensidade (HIIT) é um treino que alterna entre períodos de esforço máximo e descanso curto, visando otimizar o condicionamento físico, queima de gordura e ganho de resistência cardiovascular. Ele envolve a execução rápida de vários exercícios, como agachamentos, flexões, saltos e sprints, com intensidade elevada, seguidos por breves intervalos de descanso ou atividade leve. Um exemplo de circuito pode ser: 30 segundos de agachamentos com salto, 30 segundos de descanso, 30 segundos de burpees, e assim por diante, repetindo o ciclo por 20 a 30 minutos. O HIIT é eficaz por aumentar o metabolismo e melhorar a capacidade cardiovascular em um curto período de tempo.</p>
                    </li>
                    <li>
                        <h3>2. Agachamento com salto: 3x20</h3>
                        <p>O agachamento com salto 3x20 é um exercício pliométrico que combina o agachamento tradicional com a explosão de um salto, ajudando a melhorar a força, potência e resistência muscular, especialmente nas pernas e glúteos. Para executá-lo, comece em pé, com os pés na largura dos ombros. Agache-se, flexionando os joelhos e quadris até que suas coxas fiquem paralelas ao chão, mantendo o core firme e as costas retas. Ao subir, exploda para cima com um salto, estendendo os quadris e os joelhos, e ao aterrissar, absorva o impacto flexionando os joelhos novamente e indo diretamente para o próximo agachamento. Realize 3 séries de 20 repetições, sempre controlando o movimento e evitando sobrecarregar os joelhos ao cair.</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Flexão diamante: 4x14-20</h3>
                        <p>A flexão diamante é uma variação das flexões tradicionais, que foca mais no tríceps e na parte interna do peitoral. Para executá-la, comece na posição de flexão normal, mas posicione as mãos de forma que os polegares e os indicadores se toquem, formando um "diamante" no chão. Mantenha os pés juntos e o corpo reto, com o core contraído e as costas alinhadas. Ao descer, dobre os cotovelos, mantendo-os próximos ao corpo, até que o peito quase toque o chão. Depois, empurre o corpo para cima, estendendo os braços, até retornar à posição inicial. O controle do movimento e a ativação do core são fundamentais para um bom desempenho e para evitar lesões.</p>
                    </li>
                    <li>
                        <h3>4. Burpees: 4x14-26</h3>
                        <p>O burpee é um exercício de alta intensidade que trabalha todo o corpo, envolvendo força, resistência e coordenação. Para realizá-lo, comece em pé com os pés na largura dos ombros. Agache-se e coloque as mãos no chão, saltando para a posição de prancha (como uma flexão). Faça uma flexão de peito (opcional, se necessário para aumentar a intensidade), depois empurre o chão e salte de volta para a posição de agachamento. Por fim, dê um salto explosivo para cima, estendendo o corpo completamente. Ao retornar ao solo, inicie o próximo movimento de forma contínua. O burpee é eficaz para aumentar a resistência cardiovascular e muscular.</p>
                    </li>
                    <li>
                        <h3>5. Pullover com halteres: 2x30</h3>
                        <p>O pullover com halteres é um excelente exercício para trabalhar o peitoral, tríceps e músculos das costas. Para realizá-lo, deite-se em um banco reto ou perpendicular, com os pés firmes no chão. Segure um haltere com as duas mãos, posicionando-o acima do peito com os braços estendidos. Inspire e, com os cotovelos levemente flexionados, abaixe o haltere lentamente para trás, sentindo um alongamento no peitoral e nas costas. Quando o haltere estiver quase no nível da cabeça, pare e, então, puxe o haltere de volta à posição inicial, expirando. Mantenha sempre o controle do movimento, evitando a sobrecarga nos ombros e nas costas.</p>
                    </li>
                    <li>
                        <h3>6. Prancha lateral: 3x30 segundos</h3>
                        <p>A prancha lateral é um exercício excelente para fortalecer os músculos do core, especialmente os oblíquos. Para executá-la, deite-se de lado com as pernas esticadas e os pés empilhados. Apoie o antebraço no chão, alinhando o cotovelo diretamente abaixo do ombro, e levante o quadril, formando uma linha reta do ombro aos pés. Mantenha o tronco firme, contraindo o abdômen e os glúteos, e evite deixar o quadril cair. Segure a posição pelo tempo desejado, focando na estabilidade e no controle da respiração. Para aumentar a dificuldade, é possível levantar a perna superior ou adicionar movimentos com o quadril.</p>
                    </li>                
                </ol>`;
        }
        else { 
            treino.innerHTML = `
            <h2><span>AQUI ESTÁ! Seu treino</span></h2>
            <p>
                Frequência: 5 vezes por semana
            </p>
            <p>
                Objetivo: Treino aeróbico e anaeróbico com resistência muscular alta.
            </p>
                <ol>
                    <li>
                        <h3>1. Circuito intenso (45 segundos por exercício, com 15 segundos de descanso entre séries):</h3>
                        <p>O circuito intenso é uma modalidade de treino que combina diferentes exercícios em sequência, com pouco ou nenhum intervalo entre eles, visando aumentar a resistência cardiovascular, força e queima de calorias. Em um circuito, você realiza uma série de exercícios variados (como agachamentos, flexões, saltos e abdominais) por um tempo determinado ou número de repetições. Após concluir todos os exercícios do circuito, você descansa por um curto período e repete o ciclo várias vezes. A intensidade alta do treino, com foco na velocidade e no volume, acelera o metabolismo e melhora a performance física de forma rápida e eficaz.</p>
                    </li>
                    <li>
                        <h3>2. Agachamento com salto: 3x20</h3>
                        <p>O agachamento com salto 3x20 é um exercício pliométrico que combina o agachamento tradicional com a explosão de um salto, ajudando a melhorar a força, potência e resistência muscular, especialmente nas pernas e glúteos. Para executá-lo, comece em pé, com os pés na largura dos ombros. Agache-se, flexionando os joelhos e quadris até que suas coxas fiquem paralelas ao chão, mantendo o core firme e as costas retas. Ao subir, exploda para cima com um salto, estendendo os quadris e os joelhos, e ao aterrissar, absorva o impacto flexionando os joelhos novamente e indo diretamente para o próximo agachamento. Realize 3 séries de 20 repetições, sempre controlando o movimento e evitando sobrecarregar os joelhos ao cair.</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Mountain climbers: 2x20-30</h3>
                        <p>O Mountain Climbers é um exercício dinâmico que trabalha o core, ombros, pernas e melhora o condicionamento cardiovascular. Para realizá-lo, comece na posição de prancha, com as mãos alinhadas aos ombros e os pés estendidos atrás de você. Mantenha o corpo reto e o core contraído. Traga um dos joelhos em direção ao peito, enquanto mantém a outra perna esticada. Em seguida, rapidamente troque as pernas, como se estivesse "escalando" uma montanha. Mantenha o ritmo constante, controlando a respiração e evitando que os quadris subam ou desçam excessivamente.</p>
                    </li>
                    <li>
                        <h3>4. Burpees com flexão: 3x12-16</h3>
                        <p>O burpee com flexão é um exercício de corpo inteiro que combina cardio, força e resistência. Para executá-lo, comece em pé com os pés na largura dos ombros. Agache-se e coloque as mãos no chão, posicionando-se em uma posição de prancha. Faça uma flexão, descendo o peito até o chão e, em seguida, empurre o corpo de volta para cima. Depois da flexão, traga os pés rapidamente em direção às mãos e salte para cima, estendendo os braços acima da cabeça. Ao cair, suavemente, volte para a posição inicial e repita o movimento. Esse exercício trabalha o peito, ombros, core, pernas e aumenta a frequência cardíaca, sendo excelente para o condicionamento físico geral.</p>
                    </li>
                    <li>
                        <h3>5. Levantamento turco com haltere: 3x20</h3>
                        <p>O levantamento turco com haltere é um exercício completo que trabalha o core, ombros, pernas e estabilidade geral. Para realizá-lo, comece deitado no chão com uma perna dobrada e a outra estendida. Segure um haltere com a mão do lado do braço estendido, mantendo-o acima do ombro. Com a mão livre, apoie-se no chão para estabilizar o corpo. Levante o tronco enquanto empurra a perna dobrada para cima, mantendo o haltere erguido. Use os braços, as pernas e o core para levantar o corpo de forma controlada, passando para uma posição de agachamento e, em seguida, de pé. Para retornar, realize o movimento de forma inversa, abaixando o tronco, apoiando-se no chão e voltando à posição inicial. A chave é a estabilidade e a coordenação entre os membros, controlando sempre o movimento.</p>
                    </li>
                    <li>
                        <h3>6. Prancha com peso: 3x45 segundos</h3>
                        <p>A prancha com peso é uma variação do exercício tradicional de prancha, que aumenta a intensidade e fortalece ainda mais o core, além de ativar os ombros e glúteos. Para realizá-la, comece na posição de prancha com os cotovelos e antebraços apoiados no chão, alinhados com os ombros, e as pernas estendidas, mantendo o corpo reto da cabeça aos calcanhares. Coloque um peso (como um disco ou haltere) nas costas, geralmente na parte superior das costas ou ao redor da cintura. Mantenha o core contraído, a coluna neutra e os glúteos ativos para estabilizar o corpo. Segure a posição o maior tempo possível, respirando de forma controlada. Evite deixar os quadris subirem ou caírem, mantendo a postura alinhada durante todo o exercício.</p>
                    </li>                
                </ol>`;
        }
    }
    else if (preferencia == "hipertrofia") {
        if (grau == "iniciante") {
            treino.innerHTML = `
            <h2><span>AQUI ESTÁ! Seu treino</span></h2>
            <p>
                Frequência: 3 vezes por semana
            </p>
            <p>
                Objetivo: Desenvolver resistência muscular e aumentar volume gradualmente.
            </p>
                <ol>
                    <li>
                        <h3>1. Supino reto com barra: 3x10-12</h3>
                        <p>O supino reto com barra é um exercício clássico para fortalecer o peitoral, tríceps e ombros. Deite-se em um banco reto e posicione os olhos sob a barra. Segure-a com as mãos um pouco mais afastadas que a largura dos ombros, mantendo os pés firmes no chão e as escápulas retraídas. Inspire enquanto abaixa a barra lentamente até o peito, mantendo os cotovelos levemente abertos. Em seguida, empurre a barra para cima, estendendo os braços e expirando, até que ela esteja na posição inicial. Controle o movimento para garantir a ativação muscular e prevenir lesões.</p>
                    </li>
                    <li>
                        <h3>2. Agachamento com halteres: 3x10-12</h3>
                        <p>O agachamento com halteres é um exercício eficiente para trabalhar quadríceps, glúteos e core. Para realizá-lo, segure um halter em cada mão, mantendo-os ao lado do corpo ou sobre os ombros, com os cotovelos apontando para baixo. Fique com os pés na largura dos ombros e os joelhos levemente voltados para fora. Ao inspirar, empurre os quadris para trás e desça até os joelhos formarem um ângulo de 90 graus ou um pouco mais, mantendo as costas retas e o peito aberto. Ao subir, empurre o chão com os calcanhares, estendendo os quadris e joelhos até voltar à posição inicial. Controlar o movimento e manter a postura adequada são essenciais para evitar lesões e garantir a eficácia do exercício.</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Pulldown no pulley: 3x10-12</h3>
                        <p>O pulldown no pulley é um exercício que trabalha principalmente as costas, especialmente os músculos latíssimos do dorso, além de ajudar a fortalecer os bíceps. Para realizá-lo, sente-se em frente ao pulley com as pernas bem posicionadas e os pés no apoio. Segure a barra com as mãos afastadas um pouco mais que a largura dos ombros, com as palmas voltadas para frente (pegada pronada). Puxe a barra para baixo, trazendo-a em direção à parte superior do peito, mantendo os cotovelos sempre apontando para baixo e para os lados, enquanto você inspira. Ao subir a barra de volta, faça o movimento de forma controlada, evitando que ela suba rapidamente. Mantenha o core firme e o tronco ligeiramente inclinado para trás durante a execução para garantir um bom alongamento e ativação muscular.</p>
                    </li>
                    <li>
                        <h3>4. Cadeira extensora: 3x10-12</h3>
                        <p>A cadeira extensora é um exercício isolado que trabalha principalmente os músculos do quadríceps. Para realizá-lo, sente-se na cadeira com as costas apoiadas e os pés posicionados sob os rolos da máquina, com os joelhos alinhados com o eixo da máquina. Ajuste a carga conforme sua capacidade. Segure as alças laterais para estabilizar o corpo e, ao inspirar, estenda as pernas até que fiquem quase retas, contraindo os quadríceps. Mantenha os joelhos alinhados e evite trancar completamente as articulações. Após a extensão, desça as pernas de forma controlada até a posição inicial, expirando ao retornar. A execução controlada é fundamental para trabalhar bem os músculos e evitar lesões.</p>
                    </li>
                    <li>
                        <h3>5. Flexão de braço: 3x10-15</h3>
                        <p>A flexão de braço é um exercício simples, mas eficaz, para fortalecer o peitoral, ombros e tríceps. Comece deitado de barriga para baixo, com as mãos posicionadas um pouco mais largas que a largura dos ombros, e os pés apoiados no chão, com o corpo reto. Inspire enquanto abaixa o corpo, flexionando os cotovelos e mantendo-os próximos ao corpo ou ligeiramente abertos, até que o peito quase toque o chão. Em seguida, empurre o chão com as mãos, estendendo os cotovelos e levantando o corpo de volta à posição inicial, expirando no movimento de subida. Mantenha o core contraído e o corpo reto durante todo o exercício para evitar sobrecarga na lombar.</p>
                    </li>                
                </ol>`;
        }
        else if (grau == "intermediario") {
            treino.innerHTML = `
            <h2><span>AQUI ESTÁ! Seu treino</span></h2>
            <p>
                Frequência: 4 vezes por semana
            </p>
            <p>
                Objetivo: Foco em grupos musculares específicos para aumento de massa muscular.
            </p>
                <ol>
                    <li>
                        <h3>1. Supino inclinado com halteres: 4x8-10</h3>
                        <p>O supino inclinado com halteres é um excelente exercício para trabalhar a parte superior do peitoral, ombros e tríceps. Comece deitando-se em um banco inclinado (entre 30 a 45 graus), com os pés firmes no chão. Segure um halter em cada mão, com as palmas voltadas para frente, e leve-os até a altura do peito, com os cotovelos ligeiramente abertos. Inspire enquanto abaixa os halteres lentamente até que seus cotovelos fiquem próximos de 90 graus. Em seguida, empurre os halteres para cima, estendendo os braços e expirando, até que eles retornem à posição inicial, com os cotovelos ligeiramente flexionados no topo. Mantenha sempre o controle durante o movimento para evitar lesões e melhorar a ativação muscular.</p>
                    </li>
                    <li>
                        <h3>2. Agachamento búlgaro: 3x10</h3>
                        <p>O agachamento búlgaro é um exercício unilateral que trabalha principalmente os quadríceps, glúteos e isquiotibiais. Para realizá-lo, coloque um pé em cima de um banco ou plataforma, com a perna de trás esticada e o pé elevado. Com o pé da frente, posicione-se a uma distância confortável para garantir que o joelho da perna da frente não ultrapasse a linha dos dedos dos pés durante o movimento. Mantenha o tronco ereto e o core ativado. Abaixe o corpo, flexionando o joelho da perna da frente até que a coxa fique paralela ao chão, e depois empurre o calcanhar para voltar à posição inicial. Esse exercício é eficaz para melhorar o equilíbrio e a força das pernas de maneira isolada.</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Desenvolvimento de ombros: 4x8-10</h3>
                        <p>O desenvolvimento de ombros, também conhecido como "overhead press", é um exercício que fortalece principalmente os ombros (deltóides) e os tríceps. Para realizá-lo, comece em pé com os pés na largura dos ombros e a barra na altura do peito, com as mãos segurando a barra ligeiramente mais afastadas que a largura dos ombros. Mantenha o core contraído, a coluna reta e o peito aberto. Inspire e empurre a barra para cima até estender completamente os braços, sem bloquear os cotovelos. Em seguida, controle a descida da barra de volta à posição inicial, até a altura do peito. Mantenha o tronco firme durante todo o movimento para evitar lesões na lombar e garantir a execução correta.</p>
                    </li>
                    <li>
                        <h3>4. Leg press: 4x10-12</h3>
                        <p>O leg press é um exercício eficaz para trabalhar as pernas, focando nos quadríceps, glúteos e isquiotibiais. Para executá-lo, sente-se na máquina com os pés na plataforma, alinhados com os ombros e as costas contra o encosto. Coloque as mãos nas alças para estabilidade e comece com os joelhos dobrados a 90 graus. Empurre a plataforma para cima, estendendo as pernas, mas sem travar os joelhos no topo. Inspire ao descer a plataforma, controlando o movimento até que os joelhos estejam a cerca de 90 graus novamente. Mantenha a postura correta durante todo o exercício, evitando curvar as costas ou forçar os joelhos para dentro.</p>
                    </li>
                    <li>
                        <h3>5. Bíceps curl: 3x12</h3>
                        <p>O bíceps curl é um exercício eficaz para fortalecer os músculos do bíceps. Para realizá-lo, segure um par de halteres com as palmas das mãos voltadas para frente e os braços estendidos ao longo do corpo, com os cotovelos próximos ao tronco. Inspire e, mantendo os cotovelos fixos, flexione os braços, levantando os halteres em direção aos ombros. Evite balançar o corpo ou mover os cotovelos. No topo do movimento, faça uma leve contração no bíceps e, em seguida, desça os halteres de forma controlada até a posição inicial, expirando. O controle durante o movimento é essencial para maximizar a ativação muscular e evitar lesões.</p>
                    </li>                
                </ol>`;
        }
        else { 
            treino.innerHTML = `
            <h2><span>AQUI ESTÁ! Seu treino</span></h2>
            <p>
                Frequência: 5-6 vezes por semana
            </p>
            <p>
                Objetivo: Treinos volumosos com divisão por grupos musculares para maximizar a hipertrofia.
            </p>
                <ol>
                    <li>
                        <h3>1. Supino inclinado: 5x8-10</h3>
                        <p>O supino inclinado com halteres é um exercício que foca na parte superior do peitoral, além de trabalhar ombros e tríceps. Para realizá-lo, ajuste um banco em um ângulo de 30 a 45 graus e deite-se com os pés firmes no chão. Segure um halter em cada mão, com os braços estendidos acima do peito e as palmas voltadas uma para a outra ou para frente, dependendo da sua preferência. Inspire enquanto abaixa os halteres lentamente em direção ao peito, mantendo os cotovelos em um ângulo de aproximadamente 45 graus. Quando os halteres estiverem perto do peito, empurre-os de volta à posição inicial, expirando ao longo do movimento. Mantenha sempre o core contraído e a postura estável para evitar lesões e maximizar a eficácia do exercício.</p>
                    </li>
                    <li>
                        <h3>2. Agachamento livre: 5x8-10</h3>
                        <p>O agachamento livre é um exercício que fortalece pernas, glúteos e core, além de melhorar a mobilidade e estabilidade. Para executá-lo, posicione a barra sobre a parte superior das costas, mantenha o abdômen contraído e desça os quadris para trás, como se fosse sentar, até que as coxas fiquem paralelas ao chão. Ao subir, empurre o chão com os calcanhares, mantendo a postura ereta. Controle o movimento, inspire ao descer e expire ao subir.</p>
                    </li>
                </ol>
                <ol>
                    <li>
                        <h3>3. Remada unilateral: 4x10</h3>
                        <p>A remada unilateral é um exercício eficaz para fortalecer as costas, bíceps e ombros. Para executá-la, posicione-se em um banco com um joelho e uma mão apoiados, mantendo a outra perna estendida no chão. Segure um halter com a mão livre, com o braço estendido em direção ao chão. Com o core contraído e as costas retas, inspire e puxe o halter em direção ao seu tronco, mantendo o cotovelo próximo ao corpo. No topo do movimento, contraia as costas e os ombros, e em seguida, abaixe o halter de volta à posição inicial, expirando. Mantenha a postura estável durante todo o exercício para garantir a segurança e a eficácia do movimento.</p>
                    </li>
                    <li>
                        <h3>4. Elevação lateral + Desenvolvimento de ombro: 4x12 cada</h3>
                        <p>A combinação de elevação lateral e desenvolvimento de ombro fortalece os músculos dos ombros. Para a elevação lateral, segure um par de halteres ao lado do corpo e levante-os lateralmente até a altura dos ombros, com os braços ligeiramente flexionados, e depois retorne à posição inicial. Em seguida, no desenvolvimento de ombro, leve os halteres à altura dos ombros e empurre-os para cima até estender completamente os braços. Mantenha a postura ereta e evite arquear as costas durante os movimentos para garantir a segurança e eficácia do exercício.</p>
                    </li>
                    <li>
                        <h3>5. Panturrilha no leg press: 5x15-20</h3>
                        <p>O exercício de panturrilha no leg press é eficaz para fortalecer os músculos da panturrilha (gastrocnêmio e sóleo). Para realizá-lo, sente-se na máquina de leg press com os pés posicionados na plataforma, na largura dos ombros e com a parte da frente dos pés na borda da plataforma, enquanto os calcanhares ficam pendurados. Comece com as pernas estendidas, mas não completamente travadas. Inspire e, em seguida, levante os calcanhares, usando a força das panturrilhas para empurrar a plataforma para cima, elevando os calcanhares o máximo possível. Mantenha a posição por um segundo no topo e, em seguida, desça lentamente os calcanhares até a posição inicial, controlando o movimento. Esse exercício pode ser feito com diferentes variações de carga e número de repetições para estimular o crescimento muscular e a força.</p>
                    </li>            
                </ol>`;
        }
    }
    event.preventDefault()
}