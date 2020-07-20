var list = document.getElementById("list");



function addTodo(){
    var todoItem = document.getElementById('todo-item');
    
    
    //////Create li working
    var li = document.createElement('li');
    var liText = document.createTextNode(todoItem.value);
    li.appendChild(liText);
    list.appendChild(li);
 
    /////Add Edit Button
    var edBTN = document.createElement('button');
    var edText = document.createTextNode('Edit');
    edBTN.setAttribute('class','btn');
    edBTN.setAttribute('onclick','editItem(this);')
    edBTN.appendChild(edText);

    li.appendChild(edBTN);


    ////////Create del button
    var delBTN = document.createElement('button');
    var delText = document.createTextNode('Delete');
    delBTN.setAttribute('class','btn');
    delBTN.setAttribute('onclick','deleteItem(this);')
    delBTN.appendChild(delText);

    li.appendChild(delBTN);


    ///////To Reset Input to null
    todoItem.value = ""; 
    console.log(li);
    
}


function deleteItem(e){

    /////////To Delete Add Note
    e.parentNode.remove();
}

function delAll(){

    /////////To Delete All Notes
    list.innerHTML = ""
    
}

function editItem(e){
    /////Add Edit Text
    var edit = e.parentNode.firstChild.nodeValue;
    var addEd = prompt("Enter Edit Value",edit);

    ///////////To Replace the Value with new one
    e.parentNode.firstChild.nodeValue = addEd;
    console.log(e.parentNode.firstChild);
}







