//Write your Javascript code here

function CreateNewLiElement(className, id, textNode){
    let newElement = document.createElement("li");
    newElement.setAttribute("id",id)
    newElement.setAttribute("class",className);
    newtextnode = document.createTextNode(textNode);
    newElement.appendChild(newtextnode);
    return newElement;
}

function AddLiElementToList(listId,newListElement){
let startNode = document.getElementById(listId);
startNode.appendChild(newListElement);
}



let appel = CreateNewLiElement("healthy",4,"appel");
let chipper = CreateNewLiElement("unhealthy",4,"chipper")
AddLiElementToList("listUnhealthy",chipper);
AddLiElementToList("listHealthy",appel);



console.log("Shoppinglist")