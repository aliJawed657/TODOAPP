function addtodo(){
    var list = document.getElementById('list')
var todo = document.getElementById('todo')
console.log(todo.value)
var li = document.createElement('li')
var text = document.createTextNode(todo.value)
li.appendChild(text)
var btn = document.createElement('button')
var txt = document.createTextNode('delete')
btn.appendChild(txt)
btn.setAttribute('onclick', 'deltodo()')
var editbtn = document.createElement('button')
var edit = document.createTextNode('edit');
editbtn.setAttribute('onclick','editTodo()')
editbtn.appendChild(edit)
li.appendChild(btn)
li.appendChild(editbtn)
list.appendChild(li)
todo.value = ""
}

function deltodo() {
   event.target.parentNode.remove()

}
function editTodo(e) {
    var oldValue = event.target.parentNode.firstChild.nodeValue;
    var editValue = prompt('updated Value', oldValue);
    event.target.parentNode.firstChild.nodeValue = editValue;
   
     }

function dltbtn() {
    var list = document.getElementById('list');
    list.innerHTML = ""

}
