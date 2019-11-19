
const GETTING_ELEMENT_THROUGH_INTERACTION_SRC = 'src/js/arrays/getting-element-through-interaction.js'
const BI_DIMENSIONAL = 'src/js/arrays/arrays-bidimensional.js'
const TRI_DIMENSIONAL = 'src/js/arrays/arrays-tridimensional.js'
const INSERTING_ELEMENTS_IN_SPECIFIC_POSITION = 'src/js/arrays/inserting-elements-in-specific-position.js'
const INSERTING_ELEMENTS = 'src/js/arrays/inserting-elements.js'
const REMOVING_ELEMENTS = 'src/js/arrays/removing-elements.js'

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

const clearResult = (element) => {
    while(element.firstChild)
        element.removeChild(element.firstChild)
}

const showResult = (arr = []) => {
    let resultElement = document.getElementById('result')
    let ul = document.createElement('ul')
    resultElement.appendChild(ul)
    for(x = 0; x < arr.length; x++){
        let li = document.createElement('li')
        li.innerHTML = arr[x]

        ul.appendChild(li)
    }
}

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

btnGettingElementThroughInteraction1.addEventListener('click', () => {
    clearResult(document.getElementById('result'))

    loadJSFile(GETTING_ELEMENT_THROUGH_INTERACTION_SRC, 
        () => showResult(gettingElementThroughInteraction1()))
})

btnGettingElementThroughInteraction2.addEventListener('click', () => {
    clearResult(document.getElementById('result'))

    loadJSFile(GETTING_ELEMENT_THROUGH_INTERACTION_SRC, 
        () => showResult(gettingElementThroughInteraction2()))
})

btnOverwrite.addEventListener('click', () => {
    let array = [0,1,2,3,4,5,6,7,8,9]

    clearResult(document.getElementById('result'))
    showResult(array)

    loadJSFile(INSERTING_ELEMENTS,
        () => showResult(overwriteElement(array), false))
})

btnPush.addEventListener('click', () => {
    let array = [0,1,2,3,4,5,6,7,8,9]

    clearResult(document.getElementById('result'))
    showResult(array)

    loadJSFile(INSERTING_ELEMENTS,
        () => showResult(pushElement(array), false))
})

btnUnshift.addEventListener('click', () => {
    let array = [0,1,2,3,4,5,6,7,8,9]

    clearResult(document.getElementById('result'))
    showResult(array)

    loadJSFile(INSERTING_ELEMENTS,
        () => showResult(unshiftElement(array), false))
})

btnPop.addEventListener('click', () => {
    let array = [0,1,2,3,4,5,6,7,8,9]

    clearResult(document.getElementById('result'))
    showResult(array)

    loadJSFile(REMOVING_ELEMENTS,
        () => showResult(popElement(array), false))
})

btnShift.addEventListener('click', () => {
    let array = [0,1,2,3,4,5,6,7,8,9]

    clearResult(document.getElementById('result'))
    showResult(array)

    loadJSFile(REMOVING_ELEMENTS,
        () => showResult(shiftElement(array), false))
})

btnInsertingElementSpecificPosition.addEventListener('click', () => {
    let array = [0,1,2,3,4,5,6,7,8,9]

    clearResult(document.getElementById('result'))
    showResult(array)

    loadJSFile(INSERTING_ELEMENTS_IN_SPECIFIC_POSITION,
        () => showResult(insertElement(array), false))
})

btnBiDimensional.addEventListener('click', () => {
    clearResult(document.getElementById('result'))

    loadJSFile(BI_DIMENSIONAL, 
        () => showResult(biDimensional()))
})

btnTriDimensional.addEventListener('click', () => {
    clearResult(document.getElementById('result'))

    loadJSFile(TRI_DIMENSIONAL, 
        () => showResult(triDimensional()))
})