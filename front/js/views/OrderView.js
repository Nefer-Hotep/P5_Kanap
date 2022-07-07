// View : Créer la représentation visuel de la confirmation de commande
class OrderView {
    render(order) {
        // La balise est appellé et le numéro de commande affiché 
        const orderId = document.getElementById('orderId')
        orderId.textContent = order
    }
}