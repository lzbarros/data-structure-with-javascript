
const GETTING_ELEMENT_THROUGH_INTERACTION_SRC = 'src/js/arrays/getting-element-through-interaction.js'
const BI_DIMENSIONAL = 'src/js/arrays/arrays-bidimensional.js'
const TRI_DIMENSIONAL = 'src/js/arrays/arrays-tridimensional.js'
const INSERTING_ELEMENTS_IN_SPECIFIC_POSITION = 'src/js/arrays/inserting-elements-in-specific-position.js'
const INSERTING_ELEMENTS = 'src/js/arrays/inserting-elements.js'
const REMOVING_ELEMENTS = 'src/js/arrays/removing-elements.js'
const STACK = 'src/js/stack/stack.js'
const STACK_DECIMAL_TO_BINARY = 'src/js/stack/decimal-to-binary.js'
const STACK_BASE_CONVERTER = 'src/js/stack/base-converter.js'
const QUEUE = 'src/js/queue/queue.js'

const getElementById = (elementId) => document.getElementById(elementId)

const btnGettingElementThroughInteraction1 = getElementById('btnGettingElementThroughInteraction1')
const btnGettingElementThroughInteraction2 = getElementById('btnGettingElementThroughInteraction2')

const btnBiDimensional = getElementById('btnBiDimensional')
const btnTriDimensional = getElementById('btnTriDimensional')

const btnInsertingElementSpecificPosition = getElementById('btnInsertingElementSpecificPosition')

const btnOverwrite = getElementById('btnOverwrite')
const btnPush = getElementById('btnPush')
const btnUnshift = getElementById('btnUnshift')

const btnPop = getElementById('btnPop')
const btnShift = getElementById('btnShift')

const btnSetStack = getElementById('btnSetStack')
const btnPeekStack = getElementById('btnPeekStack')
const btnSizeStack = getElementById('btnSizeStack')
const btnEmptyStack = getElementById('btnEmptyStack')
const btnShowStack = getElementById('btnShowStack')
const btnClearStack = getElementById('btnClearStack')

const btnDecimalToBinary = getElementById('btnDecimalToBinary')
const btnBaseConverter = getElementById('btnBaseConverter')

const btnPriorityEnqueue = getElementById('btnPriorityEnqueue')
const btnEnqueue = getElementById('btnEnqueue')
const btnDequeue = getElementById('btnDequeue')
const btnSizeQueue = getElementById('btnSizeQueue')
const btnEmptyQueue = getElementById('btnEmptyQueue')
const btnShowQueue = getElementById('btnShowQueue')
const btnClearQueue = getElementById('btnClearQueue')

const btnSetHotPotatoGamePlayers = getElementById("btnSetHotPotatoGamePlayers")
const btnShowHotPotatoGamePlayers = getElementById('btnShowHotPotatoGamePlayers')
const btnStartHotPotatoGame = getElementById('btnStartHotPotatoGame')
const btnClearHotPotatoGame = getElementById('btnClearHotPotatoGame')

const loadJSFile = (source = '', callback) => {
    let scriptArr = document.body.getElementsByTagName('script')
    let addJSFile = true
    
    for (x = 0; x < scriptArr.length; x++){
        if (scriptArr[x].getAttribute('src') === source){
            addJSFile = false
            break
        } 
    }
    
    if (addJSFile){
        let scriptElement = document.createElement('script')
        scriptElement.onload = () => callback()
        scriptElement.src = source
        document.body.appendChild(scriptElement)
    } else
    callback()
}

const setResultTitle = (titleText) => {
    let titleElement = getElementById('resultTitle')
    
    titleElement.innerHTML = titleText
}

const clearResult = (element) => {
    while(element.firstChild)
        element.removeChild(element.firstChild)
}

const showResult = (arr = []) => {
    let resultElement = getElementById('result')
    let ul = document.createElement('ul')
    resultElement.appendChild(ul)
    for(let x = 0; x < arr.length; x++){
        let li = document.createElement('li')
        li.innerHTML = arr[x]
        
        ul.appendChild(li)
    }
}

const setStack = stack => {
    this.stack = stack
}

const getStack = () => {
    return this.stack
}

const setQueue = queue => {
    this.queue = queue
}

const getPotatoGameQueue = () => {
    return this.potatoGameQueue
}

const setPotatoGameQueue = potatoGameQueue => {
    this.potatoGameQueue = potatoGameQueue
}

const getQueue = () => {
    return this.queue
}

const IsStackEmpty = () => {
    if (getStack() && !getStack().isEmpty())
        return false
    else {
        alert('Stack is empty. Please set aleatory numbers')
        return true
    }
}

const IsQueueEmpty = () => {
    if (getQueue() && !getQueue().isEmpty())
        return false
    else {
        alert('Queue is empty. Please press Enqueue button!')
        return true
    }
}

const IsPotatoGameQueueEmpty = () => {
    if (getPotatoGameQueue() && !getPotatoGameQueue().isEmpty())
        return false
    else {
        alert('Hot Potato Game Queue is empty. Please press Set Players (Hot Potato Game)  button!')
        return true
    }
}

const hotPotatoGame = () => {
    let randomRounds = Math.floor(Math.random() * 100)

    showResult([`Number of rounds: ${randomRounds}`])
    
    while(getPotatoGameQueue().size() > 1){
        for (let x = 0; x < randomRounds; x++)
            getPotatoGameQueue().enqueue(getPotatoGameQueue().dequeue())
 
        showResult([`${getPotatoGameQueue().dequeue()} was eliminated!`])
    }

    return getPotatoGameQueue().dequeue()
}

btnGettingElementThroughInteraction1.addEventListener('click', () => {
    setResultTitle(btnGettingElementThroughInteraction1.textContent)
    
    clearResult(getElementById('result'))
    
    loadJSFile(GETTING_ELEMENT_THROUGH_INTERACTION_SRC, 
        () => showResult(gettingElementThroughInteraction1()))
    })
    
    btnGettingElementThroughInteraction2.addEventListener('click', () => {
        setResultTitle(btnGettingElementThroughInteraction2.textContent)
        
        clearResult(getElementById('result'))
        
        loadJSFile(GETTING_ELEMENT_THROUGH_INTERACTION_SRC, 
            () => showResult(gettingElementThroughInteraction2()))
        })
        
        btnOverwrite.addEventListener('click', () => {
    let array = [0,1,2,3,4,5,6,7,8,9]

    setResultTitle(btnOverwrite.textContent)

    clearResult(getElementById('result'))
    showResult(array)

    loadJSFile(INSERTING_ELEMENTS,
        () => showResult(overwriteElement(array), false))
})

btnPush.addEventListener('click', () => {
    let array = [0,1,2,3,4,5,6,7,8,9]

    setResultTitle(btnPush.textContent)

    clearResult(getElementById('result'))
    showResult(array)

    loadJSFile(INSERTING_ELEMENTS,
        () => showResult(pushElement(array), false))
})

btnUnshift.addEventListener('click', () => {
    let array = [0,1,2,3,4,5,6,7,8,9]

    setResultTitle(btnUnshift.textContent)

    clearResult(getElementById('result'))
    showResult(array)

    loadJSFile(INSERTING_ELEMENTS,
        () => showResult(unshiftElement(array), false))
})

btnPop.addEventListener('click', () => {
    let array = [0,1,2,3,4,5,6,7,8,9]

    setResultTitle(btnPop.textContent)

    clearResult(getElementById('result'))
    showResult(array)

    loadJSFile(REMOVING_ELEMENTS,
        () => showResult(popElement(array), false))
})

btnShift.addEventListener('click', () => {
    let array = [0,1,2,3,4,5,6,7,8,9]

    setResultTitle(btnShift.textContent)

    clearResult(getElementById('result'))
    showResult(array)

    loadJSFile(REMOVING_ELEMENTS,
        () => showResult(shiftElement(array), false))
})

btnInsertingElementSpecificPosition.addEventListener('click', () => {
    let array = [0,1,2,3,4,5,6,7,8,9]

    setResultTitle(btnInsertingElementSpecificPosition.textContent)

    clearResult(getElementById('result'))
    showResult(array)

    loadJSFile(INSERTING_ELEMENTS_IN_SPECIFIC_POSITION,
        () => showResult(insertElement(array), false))
})

btnBiDimensional.addEventListener('click', () => {
    setResultTitle(btnBiDimensional.textContent)

    clearResult(getElementById('result'))

    loadJSFile(BI_DIMENSIONAL, 
        () => showResult(biDimensional()))
})

btnTriDimensional.addEventListener('click', () => {
    setResultTitle(btnTriDimensional.textContent)

    clearResult(getElementById('result'))

    loadJSFile(TRI_DIMENSIONAL, 
        () => showResult(triDimensional()))
})

btnSetStack.addEventListener('click', () => {
    setResultTitle(btnSetStack.textContent)

    clearResult(getElementById('result'))
    
    loadJSFile(STACK, () => { 
        if (!getStack()) {
            let stack = new Stack([Math.floor(Math.random() * 100)])
            setStack(stack)
        } else 
            getStack().push(Math.floor(Math.random() * 100))
        
        showResult(stack.getStack()) 
    })
})

btnPopStack.addEventListener('click', () => {
    setResultTitle(btnPopStack.textContent)

    clearResult(getElementById('result'))

    if (!IsStackEmpty()){
        getStack().getStack().pop()
        showResult(getStack().getStack())
    }
})

btnPeekStack.addEventListener('click', () => {
    setResultTitle(btnPeekStack.textContent)

    clearResult(getElementById('result'))

    if (!IsStackEmpty())
        showResult([getStack().peek()])
})

btnSizeStack.addEventListener('click', () => {
    setResultTitle(btnSizeStack.textContent)
    
    clearResult(getElementById('result'))
    
    if (!IsStackEmpty())
    showResult([getStack().size()])
})

btnEmptyStack.addEventListener('click', () => {
    setResultTitle(btnEmptyStack.textContent)
    
    clearResult(getElementById('result'))
    
    if (!IsStackEmpty())
    showResult(['No'])
    else 
    showResult(['Yes'])
})

btnShowStack.addEventListener('click', () => {
    setResultTitle(btnShowStack.textContent)
    
    clearResult(getElementById('result'))
    
    if (!IsStackEmpty())
    showResult(getStack().getStack())
})

btnClearStack.addEventListener('click', () => {
    setResultTitle(btnClearStack.textContent)

    clearResult(getElementById('result'))

    if (!IsStackEmpty())
        getStack().clear()
})

btnDecimalToBinary.addEventListener('click', () => {
    setResultTitle(btnDecimalToBinary.textContent)

    clearResult(getElementById('result'))

    let decimalNumber = window.prompt('Enter decimal number: ', 0)

    if (decimalNumber > 0)
        loadJSFile(STACK_DECIMAL_TO_BINARY, () =>
            showResult([decimalToBinary(decimalNumber)])
        )
})

btnBaseConverter.addEventListener('click', () => {
    setResultTitle(btnBaseConverter.textContent)

    clearResult(getElementById('result'))

    let decimalNumber = window.prompt('Enter decimal number: ', 0)
    let baseNumber = window.prompt('Enter base number: ', 0)

    if(decimalNumber > 0 && baseNumber)
        loadJSFile(STACK_BASE_CONVERTER, () => 
            showResult([baseConverter(decimalNumber, baseNumber)])
        )
})

btnPriorityEnqueue.addEventListener('click', () => {
    setResultTitle(btnPriorityEnqueue.textContent)

    clearResult(getElementById('result'))

    let inputUsers = window.prompt("Enter names separate by ',' (comma) ", 'James')
    let priority = window.prompt("Enter priority", 0)
    let users = []

    if (inputUsers !== '')
        users = inputUsers.split(',')

    if (users.length > 0)    
        loadJSFile(QUEUE, () => {
            let queue = {}
            if (!getQueue()){
                queue = new Queue([])
                setQueue(queue)
            } else
                queue = getQueue()

            for(let x = users.length -1; x >= 0; x--)
                queue.priorityEnqueue(users[x], priority)
         
            showResult(queue.getQueue())
        })
})

btnEnqueue.addEventListener('click', () => {
    setResultTitle(btnEnqueue.textContent)

    clearResult(getElementById('result'))

    let inputUsers = window.prompt("Enter names separated by ',' (comma) ", 'James')
    let users = []

    if (inputUsers !== '')
        users = inputUsers.split(',')

    if (users.length > 0)    
        loadJSFile(QUEUE, () => {
            let queue = {}
            if (!getQueue()){
                queue = new Queue([])
                setQueue(queue)
            } else
                queue = getQueue()

            for(let x = 0; x < users.length; x++)
                queue.enqueue(users[x])

            showResult(queue.getQueue())
        })
})

btnDequeue.addEventListener("click", () => {
    setResultTitle(btnDequeue.textContent)

    clearResult(getElementById('result'))

    if (!IsQueueEmpty()){
        let element = getQueue().dequeue()
        alert(`Element '${element}' has been removed!` )
        showResult(getQueue().getQueue())
    }
})

btnSizeQueue.addEventListener('click', () => {
    setResultTitle(btnSizeQueue.textContent)

    clearResult(getElementById('result'))

    if (!IsQueueEmpty())
        showResult([getQueue().size()])
})

btnEmptyQueue.addEventListener('click', () => {
    setResultTitle(btnEmptyQueue.textContent)

    clearResult(getElementById('result'))

    if (!IsQueueEmpty())
        showResult(['No'])
    else 
        showResult(['Yes'])
})

btnShowQueue.addEventListener('click', () => {
    setResultTitle(btnShowQueue.textContent)

    clearResult(getElementById('result'))

    if (!IsQueueEmpty())
        showResult(getQueue().getQueue())
})

btnClearQueue.addEventListener('click', () => {
    setResultTitle(btnClearQueue.textContent)

    clearResult(getElementById('result'))

    if (!IsQueueEmpty()){
        getQueue().clear()
        alert('Queue has been cleared!')
    }
})

btnSetHotPotatoGamePlayers.addEventListener('click', () => {
    setResultTitle(btnSetHotPotatoGamePlayers.textContent)

    clearResult(getElementById('result'))

    let inputUsers = window.prompt("Enter player names separated by ',' (comma) ", 'James')
    let users = []

    if (inputUsers !== '')
        users = inputUsers.split(',')

    if (users.length > 0)    
        loadJSFile(QUEUE, () => {
            let potatoGameQueue = {}
            if (!getQueue()){
                potatoGameQueue = new Queue([])
                setPotatoGameQueue(potatoGameQueue)
            } else
                potatoGameQueue = getPotatoGameQueue()

            for(let x = 0; x < users.length; x++)
                potatoGameQueue.enqueue(users[x])

            showResult(potatoGameQueue.getQueue())
        })
})

btnShowHotPotatoGamePlayers.addEventListener('click', () => {
    setResultTitle(btnShowHotPotatoGamePlayers.textContent)

    clearResult(getElementById('result'))

    if (!IsPotatoGameQueueEmpty())
        showResult(getPotatoGameQueue().getQueue())
})

btnStartHotPotatoGame.addEventListener('click', () => {
    setResultTitle(btnStartHotPotatoGame.textContent)

    clearResult(getElementById('result')) 

    let winner = hotPotatoGame();

    showResult([`The winner is ${winner}`], false)
})

btnClearHotPotatoGame.addEventListener('click', () => {
    setResultTitle(btnClearHotPotatoGame.textContent)

    clearResult(getElementById('result'))

    if (!IsPotatoGameQueueEmpty()){
        getPotatoGameQueue().clear()
        alert('Hot Potato Game has been cleared!')
    }
})