

function added(event){  
    event.preventDefault();
    let formData = {}; 
    for (let i = 0; i < event.target.length; i++) {
        let element = event.target[i];
        if ((element.tagName === 'INPUT' && element.type !== 'submit' && (element.type !== 'radio' || element.checked)) ||
            element.tagName === 'SELECT' ||
            element.tagName === 'TEXTAREA'
        ){
            formData[element.id] = element.value; 
        }
    }
    //Calling function to add it on table


    
    //reseting the field using for loop
    createTable(formData) ;
    for (let i = 0; i < event.target.length; i++) {
        let element = event.target[i];
        if (
            (element.tagName === 'INPUT' && element.type !== 'submit' && element.type !== 'radio') ||
            element.tagName === 'SELECT' ||
            element.tagName === 'TEXTAREA'
        ) {
            element.value = ' ';
        } else if (element.tagName === 'INPUT' && element.type === 'radio') {
            element.checked = false; 
        }
    }

}
function createTable(datas){
    let entries = document.getElementById("entries");
    let tr = document.createElement("tr");
//mapping the datas to add into table
    for (let key in datas) {
        if (datas.hasOwnProperty(key)) {
            let td = document.createElement("td");
            td.innerText = datas[key];
            tr.appendChild(td);
        }
    }

    entries.appendChild(tr);

}