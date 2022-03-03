'use strict'
let myLibrary=[];
const titleContainer=document.getElementById('titleContainer');
const authorContainer=document.getElementById('authorContainer');
const pagesContainer=document.getElementById('pagesContainer');
const readContainer=document.getElementById('readContainer');
const editContainer=document.getElementById('editContainer');


document.getElementById('submit').addEventListener('click',function(){
    let titleForm=document.getElementById('title').value;
    let authorForm=document.getElementById('author').value;
    let pagesForm=document.getElementById('pages').value;
    let readChecked=document.getElementById('read');
    let readForm;
    
        
    if (titleForm===''||authorForm===''||isNaN(pagesForm)===true||pagesForm===''){
alert('xd')
    }
    
    
    else{
    if (readChecked.checked){readForm='yes'}
    else{readForm='no'}
    addBookToLibrary(new Book(titleForm,authorForm,pagesForm,readForm));
    //buildLibrary();
        }
    }
)
let fatCat=new Book('fat cat','I.C. Weiner','123','no');
let gimGum=new Book('Gim Gum','Sugma','93','yes');
addBookToLibrary(fatCat);
addBookToLibrary(gimGum);

//const read=document.getElementById('Read Form');
function Book(title, author, pages, read){
    this.name=title;
        let libTitle=document.createElement('p');
        libTitle.textContent=title;
        titleContainer.appendChild(libTitle);
    this.author=author;
        let libAuthor=document.createElement('p');
        libAuthor.textContent=author;
        authorContainer.appendChild(libAuthor);
    this.numOfPages=pages;
        let libNumPages=document.createElement('p');
        libNumPages.textContent=pages;
        pagesContainer.appendChild(libNumPages);
    this.beenRead=read;
        let libRead=document.createElement('p');
        libRead.textContent='';
        readContainer.appendChild(libRead);
    let changeReadBtn=document.createElement('button');
    changeReadBtn.innerText=read;
        libRead.appendChild(changeReadBtn);
    changeReadBtn.addEventListener('click',function(){
            
            if(changeReadBtn.innerText==='no'){
                changeReadBtn.innerText='yes';
                this.beenRead='yes';
            }
            else if (changeReadBtn.innerText==='yes'){
                changeReadBtn.innerText='no';
                this.beenRead='no';
            }
        }
        );
    
        
    this.info=title+' by '+author+', '+pages+' pages, read?: '+this.beenRead;
    }




function addBookToLibrary(book){
myLibrary.push(book);
}



function buildLibrary(){
    for(let i=0; i<myLibrary.length; i++){
        let newTitle=document.createElement('p');
            newTitle.textContent=myLibrary[i].name;
            titleContainer.appendChild(newTitle);
        
        let newAuthor=document.createElement('p');
            newAuthor.textContent=myLibrary[i].author;
            authorContainer.appendChild(newAuthor);
        
        let newPages=document.createElement('p');
            newPages.textContent=myLibrary[i].numOfPages;
            pagesContainer.appendChild(newPages)
        
        let newRead=document.createElement(`p`);
            readContainer.appendChild(newRead);
            newRead.textContent=myLibrary[i].beenRead;

        let newChangeBtn=myLibrary[i].changeReadBtn;
            readContainer.appendChild(newChangeBtn)

        }
}
    
        
       // btn.addEventListener('click',function(){
       //     //probelm
       //     if (myLibrary[i].beenRead='yes'){
       //         myLibrary[i].beenRead='no'
       //     }
       //     else if (myLibrary[i].beenRead='no'){
       //         myLibrary[i].beenRead='yes'
       //     }
       // })
       // btn.textContent='change';
       // newRead.appendChild(btn);
        //document.getElementById('titleContainer').appendChild(document.createElement('div').textContent=myLibrary[i].name)
        
        

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  function closeForm() {
      document.getElementById("myForm").style.display = "none";
    } 

const addBookBtn=document.getElementById('newBookBtn');
addBookBtn.addEventListener('click',function(){
    openForm()
})
//buildLibrary()

let a=document.createElement('p')
body=document.getElementById('body')
a.textContent='ass'
body.appendChild(a);
let b=document.createElement('button')
b.textContent='tiddies';
b.onclick = () =>buildLibrary();
a.appendChild(b)