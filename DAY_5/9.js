
let counter =1;
let likecounter=1;
function commenthere()
{
    let newElement= document.createElement('div');
    newElement.textContent='comment' + counter;
    newElement.style.background='tomato';
    newElement.style.margin = '4px';
  let commentParent=document.querySelector('#commentbox');
       commentParent.appendChild(newElement);
       counter++;
}

function likehere()
{
   likecounter++;
   
     document.querySelector('#likeid').textContent = 'like' + likecounter;

}