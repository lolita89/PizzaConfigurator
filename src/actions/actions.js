export const PUT_TO_BASKET = 'PUT_TO_BASKET'
export const CLEAR_ORDER = 'CLEAR_ORDER'
export const PAY = 'PAY'
export const REMOVE_ORDER = 'REMOVE_ORDER'
export const SELECT_SIZE = 'SELECT_SIZE'
export const SELECT_SAUCE = 'SELECT_SAUCE'
export const SELECT_TOPPING = 'SELECT_TOPPING'


export const putBasket = (pizza) => {

    return {
     type:  PUT_TO_BASKET,
     payload: pizza
}
}

export const clearOrder = () => {

    return {
     type:  CLEAR_ORDER
}
}

export const pay = ({ basket }) => {

    return {
     type:  PAY,
     payload: basket
}
}

export default (index) => {
    return {
     type:  REMOVE_ORDER,
     payload: index
}
}

export const selectSize = (pizza = {}) => {

    return {
     type: SELECT_SIZE,
     payload: pizza
}
}

export const selectSauce = ({ pizza, sauce }) => {

    return {
     type:  SELECT_SAUCE,
     payload: { pizza, sauce }
}
}

export const selectTopping = ({ pizza, sauce, topping }) => {

    return {
     type:  SELECT_TOPPING,
     payload: { pizza, sauce, topping }
}
}
