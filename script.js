'use strict'

//library stuff
let myLibrary=[];
const libContainer=document.getElementById('libraryContainer')

function Book(title,author,numOfPages,read){
    this.title=title;
    this.author=author;
    this.numOfPages=numOfPages;
    this.read=read;
    this.bookId=title+author+numOfPages;
}


let fatCat=new Book('fat cat and the ever increasingly long title','I.C. Weiner','123','Unread');
let gimGum=new Book('Gim Gum','Sugma','93','Read');

myLibrary.unshift(gimGum);
myLibrary.unshift(fatCat);


// card stuff
function createCard(book){
    let card=document.createElement('div');
        card.className='card';
        card.id=book.title+book.author;
    
    let title=document.createElement('h2');
        title.className='info';
        title.textContent=book.title;

    

    let author=document.createElement('h4');
        author.className='info';
        author.textContent=book.author;

    let authorHeader=document.createElement('p');
        authorHeader.className='authorHeader';
        authorHeader.textContent='By'

    let pages=document.createElement('h5');
        pages.className='info';
        pages.textContent=book.numOfPages+' pages';

    
    
    let read=document.createElement('p');
        read.className='info';
        read.textContent=book.read;



    let deleteBtn=document.createElement('button');
    deleteBtn.className='deleteBtn'
    deleteBtn.textContent='X'
    deleteBtn.addEventListener('click', () => {
        if(confirm("Press OK to remove the book or Cancel to cancel")===true){
        let elem=document.getElementById(card.id);
        elem.parentElement.removeChild(elem);
        //pseudo code remove Book from myLibrary array
        }
    })

    libContainer.prepend(card);
    card.appendChild(title);
    card.appendChild(authorHeader);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(deleteBtn)


};
for(let i=myLibrary.length-1; i>=0; i--){
    console.log(i);
    createCard(myLibrary[i]);
}


//form stuff
let newTitle=document.getElementById('newTitle');
let newAuthor=document.getElementById('newAuthor');
let newPages=document.getElementById('newPages');
let newRead=document.getElementById('readStatus');

let resetBtn=document.getElementById('resetBtn');
//    function reset(){
//        newTitle.value=null
//    };
//    resetBtn.addEventListener('click',()=>{
//        reset()
//    });
//
let submitBtn=document.getElementById('submitBtn');
    submitBtn.addEventListener('click',()=>{
        let newBook=new Book(newTitle.value, newAuthor.value, newPages.value, newRead.value);
        console.log(newBook.bookId)
        //loop through for duplicate error and exit if duplicate exists
        for(let i=0; i<myLibrary.length; i++){
        if(
            newBook.bookId===myLibrary[i].bookId){
                alert('That book is already in your library.');
                return
            }
        }

        myLibrary.unshift(newBook);
        createCard(newBook);
        resetBtn.click();

})