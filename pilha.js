function pilha() {
    var itens = []
    this.push = function (element) {
        //indicar o item da pilha
        itens.push(element)
    }
    this.pop = function () {
        //remover o item do topo da pilha 
        return itens.pop()
    }
    this.peek = function () {
        //devolver o elemento que esta no topo da pilha
        return itens[itens.length = 1]
    }
    this.isEmpty = function () {
        //informar se a pilha esta vazia ou não 
        return itens.length === 0
    }
    this.clear = function () {
        //limpar pilha
        itens = []
    }
    this.size = function () {
        //informar o tamanho da pilha 
        return itens.length
    }
    this.print = function () {
        //imprime a pilha no console
        console.log(itens.toLocaleString())
    }
}
var valor = new pilha()
valor.push(2)
valor.push(4)
valor.push(6)
valor.push(8)
valor.push(10)

//valor.clear()
console.log(valor.isEmpty())
//valor.pop()
valor.peek()

valor.print()
console.log(valor.size())