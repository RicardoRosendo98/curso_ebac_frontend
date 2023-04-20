function aprovados(alunos, notasAlunos) {
    const aprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        if (notasAlunos[i] >= 6) {
            aprovados.push(alunos[i]);
        }
    }

    return aprovados;
}

const alunos = ['Renato', 'Natalia', 'Matheus', 'Julia', 'Miguel'];
const notasAlunos = [2.5, 5.8, 6.3, 10, 6];

const aprovadosList = aprovados(alunos, notasAlunos);

console.log('Alunos aprovados:');
aprovadosList.forEach(nome => console.log(nome));
