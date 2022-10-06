# Atividade

Crie uma fábrica de veículos utilizando o padrão Prototype com base no exemplo apresentado no Hipertexto 2.

Os requisitos do projeto devem ser:


- Implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone e represent;
- O construtor da classe Veículo deve receber modelo, marca, cor e numeroRodas como parâmetros;
- Crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos, por exemplo: carro que tem dois campos a mais, como numeroRodas e numeroPortas;
- Desenvolva uma classe Aplicação que deve criar um array com seis veículos com dois tipos de veículos diferentes (subclasses), utilizando o método clone dos objetos para preencher o array;
- Na classe Aplicação, implemente um método que retorne um array com o mesmo tamanho do array de veículos, onde cada elemento deve ser um clone dos elementos do array veículos;
- No final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de clones de veículos.