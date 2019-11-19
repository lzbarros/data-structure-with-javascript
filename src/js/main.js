
const GETTING_ELEMENT_THROUGH_INTERACTION_SRC = 'src/js/arrays/getting-element-through-interaction.js'
const BI_DIMENSIONAL = 'src/js/arrays/arrays-bidimensional.js'
const TRI_DIMENSIONAL = 'src/js/arrays/arrays-tridimensional.js'
const INSERTING_ELEMENTS_IN_SPECIFIC_POSITION = 'src/js/arrays/inserting-elements-in-specific-position.js'
const INSERTING_ELEMENTS = 'src/js/arrays/inserting-elements.js'
const REMOVING_ELEMENTS = 'src/js/arrays/removing-elements.js'
const STACK = 'src/js/stack/stack.js'

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
const btnClearStack = getElementById('btnClearStack')
const btnSizeStack = getElementById('btnSizeStack')
const btnEmptyStack = getElementById('btnEmptyStack')
const btnShowStack = getElementById('btnShowStack')

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
    for(x = 0; x < arr.length; x++){
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

const IsStackEmpty = () => {
    if (getStack() && !getStack().isEmpty())
        return false
    else {
        alert('Stack is empty. Please, set aleatory numbers')
        return true
    }
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
        
        showResult(stack.getArray()) 
    })
})

btnPopStack.addEventListener('click', () => {
    setResultTitle(btnPopStack.textContent)

    clearResult(getElementById('result'))

    if (!IsStackEmpty()){
        getStack().getArray().pop()
        showResult(getStack().getArray())
    }
})

btnPeekStack.addEventListener('click', () => {
    setResultTitle(btnPeekStack.textContent)

    clearResult(getElementById('result'))

    if (!IsStackEmpty())
        showResult([getStack().peek()])
})

btnClearStack.addEventListener('click', () => {
    setResultTitle(btnClearStack.textContent)

    clearResult(getElementById('result'))

    if (!IsStackEmpty())
        getStack().clear()
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
        showResult(getStack().getArray())
})