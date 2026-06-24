const TODOarraY =[];

const arrayvalues=[{
    name:'makedinner',
    date:'2022-12-22'
 },{
 name:'wahs disshes',
date:'2023-2-12'}];

function rendertodolist()
{
let todolistHTML='';

for(let i=0;i<arrayvalues.length;i++)
    {
        const todoObject=arrayvalues[i];
        const {name,date}=todoObject;
        // const date=todoObject.date;
        const html=`
        <div>${name}</div>
        <div>${date}</div>
        <button onclick="arrayvalues.splice(${i},1);
        rendertodolist();"
        class="JS-Delete"
        >Delete</button>`;
        todolistHTML+=html;
    } 
    console.log(todolistHTML);

       document.querySelector('.JS-Value').innerHTML=todolistHTML

}

function Addtodo()
{
   const inputelement= document.querySelector('.JS-Input2');
      const inputdate= document.querySelector('.JS-Date')

   const Name=inputelement.value;
   const Date=inputdate.value;
   console.log()
   arrayvalues.push({name:Name,
    date:Date})
    console.log(arrayvalues)
   inputelement.value='';
   inputdate.value='';

   rendertodolist();
}
