const TODOarraY =[];

const arrayvalues=JSON.parse(localStorage.getItem('Localtodo'));
// [{
//     name:'makedinner',
//     date:'2022-12-22'
//  },{
//  name:'wahs disshes',
// date:'2023-2-12'}];
rendertodolist();

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
        tosavelocal();
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
   console.log(Name,Date);

   arrayvalues.push({name:Name,
    date:Date})
   //  console.log(arrayvalues)
   inputelement.value='';
   inputdate.value='';

   rendertodolist();
   tosavelocal();
}

function tosavelocal(){
   localStorage.setItem('Localtodo',JSON.stringify(arrayvalues))
}
