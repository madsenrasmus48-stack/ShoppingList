//Write your Javascript code here

function CreateNewLiElement(className, id, textNode)
{
    let newElement = document.createElement("li");
    newElement.setAttribute("id",id)
    newElement.setAttribute("class",className);
    newtextnode = document.createTextNode(textNode);
    newElement.appendChild(newtextnode);
    return newElement;
}



function AddLiElementToList(listId,newListElement)
{
    let startNode = document.getElementById(listId);
    startNode.appendChild(newListElement);
}

function ChangeClassAttribute(elementId,attributeValue)
{
    let element = document.getElementById(elementId);
    element.setAttribute("class",attributeValue);
    return element;
}


let appel = CreateNewLiElement("healthy",4,"appel");
let chipper = CreateNewLiElement("unhealthy",5,"chipper")
AddLiElementToList("listUnhealthy",chipper);
AddLiElementToList("listHealthy",appel);

ChangeClassAttribute(5,"healthy");


console.log("Shoppinglist")