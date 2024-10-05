let IceCream =  [
    {flavor:"Vanilla", price:120, quantity:10},
    {flavor:"Strawberry", price:170, quantity:8},
    {flavor:"Chocolate", price:100, quantity:15}
]
console.log(IceCream)
function add_item_inventory()
{
    let flavor = document.getElementById('flavor').value;
    let price = parseInt(document.getElementById('price').value);
    let quantity = parseInt(document.getElementById('quantity').value);

    IceCream.push({flavor, price, quantity});
    console.log(IceCream)
    alert("Item added successfully")

    document.getElementById('flavor').value = " ";
    document.getElementById('price').value = " ";
    document.getElementById('quantity').value = " ";
}

function restock_inventory ()
{
    let flavor_to_restock = document.getElementById('restock_Flavor').value;
    let quantity_to_restock = document.getElementById('restock_Quantity').value;
    let Flavor = IceCream.find(item => item.flavor === flavor_to_restock)
    Flavor.quantity = Number(quantity_to_restock)+Flavor.quantity
    alert(`The total quantity of ${flavor_to_restock} is `+Flavor.quantity)

}

function total_quantity()
{
    let TotalValue =0
    for (let i = 0; i < IceCream.length;i++)
    {
        TotalValue +=IceCream[i].price * IceCream[i].quantity
    }
    alert("Total value is " + TotalValue)
}

function display()
{
    let inventory = "Ice Cream Inventory:\n";
    for (let i = 0; i < IceCream.length; i++) {
        inventory += `Flavor: ${IceCream[i].flavor}, Price: ${IceCream[i].price}, Quantity: ${IceCream[i].quantity}\n`;
    }
    alert(inventory);
}

