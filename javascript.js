// const c1=document.querySelector("#cell");
// let c="test ";
// let s="";
// for(let i=0;i<16;i++)
// {console.log(i);
//     for(let j=0;j<16;j++)
//     {     s=s+c;
//     c1.textContent=s;}

// }
// const b1=document.querySelector("#btn");
// c1.appendChild(b1);

let  choice=prompt("enter square grid size");


   



const gridContainer = document.getElementById('grid-container');

const rows = choice;
const columns =choice;
// gridContainer.style.width= `${choice*35}px`;
let c="black";


for (let i = 0; i < rows; i++) 
  {
  for (let j = 0; j < columns; j++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.width=`${400/choice}px`;
    gridItem.style.height=`${400/choice}px`;

    // gridItem.textContent = `Cell ${i + 1}-${j + 1}`;
    gridItem.addEventListener("mouseover",()=>{
      console.log("change color");
      gridItem.style.backgroundColor=`${c}`;
    })
     const reset=document.querySelector("#reset");
   reset.addEventListener("click",()=>{
    gridItem.style.backgroundColor="white";
   })

    
    gridContainer.appendChild(gridItem);
  }
  
}

const gsiz=document.querySelector("#gridsize");
gsiz.addEventListener("click",()=>{
  //  choice=prompt("enter square grid size");
  window.location.reload(); 
})

const colrchng=document.querySelector("#colorchng");
colrchng.addEventListener("click",()=>{
   c=prompt("enter color");
  console.log("changed color:"+c);
})
