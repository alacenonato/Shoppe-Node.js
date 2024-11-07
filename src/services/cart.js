// quais ações meu carrinho pode fazer

// casos de uso
// ->adiciona um item no carrinho ✅
async function addItem(userCart, item) {
    userCart.push(item)
}
// ->deletar um item do carrinho
async function deleteItem(userCart, name) {

}
// ->remover um item do carrinho 
async function removeItem(userCart, index) {

}

// ->calcular o total da compra
async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0)
}

export { addItem, deleteItem, removeItem, calculateTotal }