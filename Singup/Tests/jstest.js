
let todos = [
        {
            title:'Supermarket',
            dueDate:'09/09/2022',
            id:'id1'
        },
        {
            title:'Mykonos',
            dueDate:'09/09/2022',
            id:'id2'
        },
        {
            title:'Wash Car',
            dueDate:'09/09/2022',
            id:'id3'
        }
    ];

render();

    function addTodo() {
        const textbox= document.getElementById('todo-title');
        const title = textbox.value;
        const datePicker = document.getElementById('date-picker');
        const dueDate = datePicker.value;
        const id = '' + new Date().getTime();
        todos.push({
                title: title,
                dueDate: dueDate,
                id: id
        });
        
        render();
    }

function deleteTodo(event){
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;
    todos = todos.filter(function (todo) {
        if (todo.id === idToDelete) {
            return false;
        } 
        else {
            return true;
        }

    });
    render();
}

//reset our list

    function render () {

        document.getElementById('todo-list').innerHTML = '';

        todos.forEach(function (todo){
            const element = document.createElement('div');
            element.innerText = todo.title +'  ====   '+ todo.dueDate;

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = 'Delete';
            deleteButton.onclick = deleteTodo;
            deleteButton.id = todo.id;
            element.appendChild(deleteButton);


            const todoList = document.getElementById('todo-list');
            todoList.appendChild(element);
            

    });
}

console.log(todos);
