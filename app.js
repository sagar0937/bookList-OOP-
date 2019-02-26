//click on submit
const submitBtn = document.querySelector('.submitBtn');

//book constrcutor
function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//ui constrcutor
function UI(){}

UI.prototype.addBookList = function(book){
    const list = document.querySelector('#book-list');
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td><a href="#" class ="delete">X</a></td>`;
    list.appendChild(tr);
    clearFields();
}
// to clear fields
function clearFields(){
    document.querySelector('#title').value ='';
    document.querySelector('#author').value ='';
   document.querySelector('#isbn').value ='';
   
}

//load eventlisterner
loadEventListerner();

function loadEventListerner(){
    submitBtn.addEventListener('click',addValues);
}

function addValues(e){
    //qurey seleector
   const title = document.querySelector('#title').value;
   const author = document.querySelector('#author').value;
   const isbn = document.querySelector('#isbn').value;
   
   //istance of book constructor
   const book = new Book(title,author,isbn);
   //istance of UI constructor
   const ui = new UI();

   ui.addBookList(book);
  
    e.preventDefault();
}







