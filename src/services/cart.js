// quais ações meu carrinho pode fazer

// casos de uso
// ->adiciona um item no carrinho ✅
async function addItem(userCart, item) {
    userCart.push(item)
}
// ->deletar um item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) =>item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    }

}
// ->remover um item do carrinho 
async function removeItem(userCart, index) {

}

// ->calcular o total da compra
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}

export { addItem, deleteItem, removeItem, calculateTotal }