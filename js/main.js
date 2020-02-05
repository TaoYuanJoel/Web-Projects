const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems =document.querySelectorAll('.tab-content-item');
const readingbtn=document.querySelectorAll('#reading-btn');
const tab02=document.querySelector('#tabs-2');
const tab01=document.querySelector('#tabs-1');
const programbtn=document.querySelectorAll('#program-btn');
const tab1content=document.querySelector('#tab-1-content')
const tab4content=document.querySelector('#tab-4-content')
const icon1=document.querySelector('#tab-1')
const icon4=document.querySelector('#tab-4')


// Select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab content item for Dom
    const tabContentItem=document.querySelector(`#${this.id}-content`)
    //Add show
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item=>item.classList.remove('tab-border'));
}
function removeShow(){
    tabContentItems.forEach(item=>item.classList.remove('show'));
}

function selectPage02(){
    removeBorder();
    removeShow();
    icon4.classList.add('tab-border');
    tab4content.classList.add('show');
    tab01.classList.remove('show-all');
    tab02.classList.add('show-all');
}

function selectPage01(){
    removeBorder();
    removeShow();
    icon1.classList.add('tab-border');
    tab1content.classList.add('show');
    tab01.classList.add('show-all');
    tab02.classList.remove('show-all');

}

// Listen for Tab Click
tabItems.forEach(item=>item.addEventListener('click',selectItem));
readingbtn.forEach(item=>item.addEventListener('click',selectPage02));
programbtn.forEach(item=>item.addEventListener('click',selectPage01));

