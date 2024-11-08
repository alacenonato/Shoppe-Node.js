// quais ações meu carrinho pode fazer

// casos de uso
// ->adiciona um item no carrinho ✅
async function addItem(userCart, item) {
    userCart.push(item)
}
// ->deletar um item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    }

}
// ->remover um item do carrinho 
async function removeItem(userCart, index) {
    // transforma o indice visual do usuario, para o indice do backend
    const deleteIndex = index - 1;

    // e maior do que zero e se é menor do que o tamanho do carrinho
    if(index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

// ->calcular o total da compra
async function calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL IS:")

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`🎁 Total: R$ ${result}`);
}

// mostra todos os items do carrinho
async function displayCart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R${item.price} | ${item.quantity} X | Subtotal = ${item.subtotal()}` );

    })
}


export { addItem, deleteItem, removeItem, calculateTotal, displayCart }