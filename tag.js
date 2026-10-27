const title = document.getElementById('title');
const taskList = document.getAnimations('task-list');
const btn = document.querySelector('.w-full button');
const Description = document.getElementById('description');
const statusq = document.getElementById('status')



  
    btn.addEventListener('click', function (e) {
        e.preventDefault()

          let objt ={
        title:'',
        Description:'',
        status:''
        
    }      
          objt = ` <div>
          <h3 class="font-semibold">${title.value}</h3>
          <p class="text-sm text-slate-600 mt-1">${Description.value}</p>
          <span class="inline-block text-xs bg-slate-200 rounded-full px-2 py-1 mt-2">${statusq.value}</span>
        </div>`
    let tab = [];
    tab.push(objt);
    console.log(tab)


        forEach(function () {
            //tab.push(title.value);
            //console.log(tab);


           // objt.push(tab);



        })


    })

