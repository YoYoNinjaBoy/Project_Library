'use strict'
let myLibrary=[];
const libContainer=document.getElementById('libraryContainer')

function Book(title,author,numOfPages,read){
    this.title=title;
    this.author=author;
    this.numOfPages=numOfPages;
    this.read=read;
    this.bookId=title+author
}


let fatCat=new Book('fat cat and the ever increasingly long title','I.C. Weiner','123','Unread');
let gimGum=new Book('Gim Gum','Sugma','93','Read');

myLibrary.push(fatCat);
myLibrary.push(gimGum);



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
        }
    })

    libContainer.appendChild(card);
    card.appendChild(title);
    card.appendChild(authorHeader);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(deleteBtn)


};
createCard(gimGum);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);
createCard(fatCat);