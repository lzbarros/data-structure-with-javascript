class Queue {
    constructor(queue = []){
        this.queue = queue
    }

    enqueue(element){
        return this.queue.push(element)
    }

    priorityEnqueue(element, priority){
        let isAdded = false
        for (x = 0; x < this.queue.length; x++){
            if ((priority -1) < x){
                this.queue.splice(x, 0, element)
                isAdded = true
                break
            }
        }

        if (!isAdded)
            this.enqueue(element)

        return this.enqueue
    }

    dequeue(){
        return this.queue.shift()
    }

    front(){
        return this.queue[0]
    }

    size(){
        return this.queue.length
    }

    isEmpty(){
        return this.queue.length === 0
    }

    clear() {
        return this.queue = []
    }

    getQueue(){
        return this.queue
    }
}