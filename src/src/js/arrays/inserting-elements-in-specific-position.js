const insertElement = (numbers = [0,1,2,3,4,5,6,7,8,9], position = 3, deleteElement = 0, element = 2.5) => {
    numbers.splice(position, deleteElement, element)

    return numbers
}
