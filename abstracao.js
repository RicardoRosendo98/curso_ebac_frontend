// Classes criadas 
function Pessoa(nome, cargo, sector, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.sector = sector;
    this.salario = salario;

    this.posicao = function() {
        console.log(" Nome: " + this.nome + " Cargo: " + this.cargo )
    } 

    this.setor = function() {
        console.log( " Vaga: " + this.sector + " salario: " + this.salario)
    } 
}

function Funcionario(nome, cargo, sector, salario) {
    
    Pessoa.call(this, nome, cargo, sector, salario);
}


const funcionario1 = new Funcionario("Antonio", "Developer", "Back-end", 5000)
const funcionario2 = new Funcionario("Marcos", "Gerente", "Techlead", 1500030)
funcionario1.posicao();
funcionario2.posicao();
funcionario1.setor();
funcionario2.setor();


function Desenho(personagem, genero, maiores, tempoDuração) {
    this.personagem = personagem;
    this.genero = genero;
    this.maiores = maiores;
    this.tempoDuração = tempoDuração;
}

const carroDoJoao2 = new Desenho("Homer Simpsons", "Comedia", 14, "20min");
const filme = "As Branquelas"
const paraMaiorDeIdade = true
const genero = ["ação", "comedia"]


// Instancias 3 estão gerando valores verdadeiros 
console.log(carroDoJoao2 instanceof Desenho);
console.log(genero instanceof Array);
console.log(funcionario1 instanceof Funcionario);




