class Stack {
    constructor(array = []){
        this.array = array
    }

    push(element = 0){
        return this.array.push(element)
    }

    pop(){
        return this.array.pop()
    }

    peek(){
        return this.array[this.size() - 1]
    }

    isEmpty(){
        return this.array.length === 0
    }

    clear(){
        this.array = []
    }

    size(){
        return this.array.length
    }

    getArray(){
        return this.array
    }
}