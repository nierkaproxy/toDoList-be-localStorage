const subject = document.getElementById('subject');
const priority = document.getElementById('priority');
const date = document.getElementById('date');
const statuss = document.getElementById('status');
const percent = document.getElementById('percent');

const submit = document.querySelector('button');


const today = new Date();
const dateNow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = dateNow+' '+time;
 
console.log(dateTime)

const func = (e) =>{
    e.preventDefault();
    console.log(subject.value, priority.value, date.value, statuss.value, percent.value);

    const list = document.querySelector('.list')

    

    const itemSubject = document.createElement('li')
    itemSubject.textContent = subject.value;
    list.appendChild(itemSubject);

    const itemPriority = document.createElement('li')
    itemPriority.textContent = priority.value;
    list.appendChild(itemPriority);

    const itemDate = document.createElement('li')
    itemDate.textContent = date.value;
    list.appendChild(itemDate);
    
    const itemStatus = document.createElement('li')
    itemStatus.textContent = statuss.value;
    list.appendChild(itemStatus);

    const itemPercent = document.createElement('li')
    itemPercent.textContent = percent.value;
    list.appendChild(itemPercent);

    const data = document.createElement('li')
    data.textContent = dateTime;
    list.appendChild(data);


    document.getElementById('forma').reset();

}


submit.addEventListener('click', func);