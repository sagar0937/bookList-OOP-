
//ES-6 
//Book class
class Book{
    constructor(title,author,isbn){
        this.title  = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    addBookList(book) {
    const list = document.querySelector('#book-list');
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td><a href="#" class ="delete">X</a></td>`;
    list.appendChild(tr);
    //clearFields();
    }
    showMessage(msg, className) {
        let div = document.createElement('div');
    div.innerText = msg;
    div.className = className;
    //to get parent
    let container = document.querySelector('.container');
    let bookform = document.querySelector('#book-form');
    container.insertBefore(div, bookform);

    //to disappeat the message 
    setTimeout(function () {
        document.querySelector(`.${className}`).remove();
    }, 3000)
    }
    //delete list   
    deleteBook(target) {
        if(target.className == 'delete'){
            target.parentElement.parentElement.remove();
           
        }
      
    }
   //clear input feilds
    clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

//click on submit
const submitBtn = document.querySelector('.submitBtn');
const list = document.querySelector('#book-list');

//load eventLister function call
loadEventListerner();

function loadEventListerner() {
    submitBtn.addEventListener('click', addValues);
}

function addValues(e) {
    //qurey seleector
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    if (title !== '' && author !== '' && isbn !== '') {
        ;
        //istance of book constructor
        const book = new Book(title, author, isbn);
        //istance of UI constructor
        const ui = new UI();
        console.log(book)
        //addd book to ui
     
        ui.addBookList(book);
        ui.clearFields();
        ui.showMessage(`book entry added succesfully`, 'success');
    } else {
        ui.showMessage(`please add book`, 'error')
    }

    e.preventDefault();
}
// to delete item
document.querySelector('#book-list').addEventListener('click',function(e){
    //create insatnce
 debugger;
    const ui1 = new UI();
    ui1.deleteBook(e.target);
    ui1.showMessage(`book removed successfully`,'success')
    e.preventDefault();
})