// Construtor para o objeto Item
class Item {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }
}

// Função para adicionar um novo item ao estoque
function addItem() {
  var itemName = document.getElementById("item-name").value;
  var itemQuantity = parseInt(document.getElementById("item-quantity").value);

  // Criar uma instância do objeto Item
  var newItem = new Item(itemName, itemQuantity);

  // Adicionar o item à lista de estoque
  var stockList = document.getElementById("stock-items");
  var listItem = document.createElement("li");
  listItem.textContent = newItem.name + " - Quantidade: " + newItem.quantity;
  stockList.appendChild(listItem);

  // Limpar os campos do formulário
  document.getElementById("item-name").value = "";
  document.getElementById("item-quantity").value = "";
}

// Evento de clique no botão "Adicionar ao Estoque"
document.getElementById("add-button").addEventListener("click", addItem);
