const allBtn = document.querySelectorAll('.btn-primary');
const taskCount =document.getElementById('taskCount');
const assignCount =document.getElementById('assigned-count');
const date = document.getElementById("date");
const showActivity = document.getElementById("show-activity");
const clearHistoryBtn = document.getElementById("clear-History");

let totalTask = 23;
let assign =6;
let count =0;


taskCount.textContent = totalTask;
assignCount.textContent = `0${assign}`;

const clear = ()=> showActivity.innerHTML = "";
clear();



const currentDate = new Date();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
date.textContent = `${months[currentDate.getMonth()]} ${currentDate.getDate()} ${currentDate.getFullYear()}`;

const btnDisabled = (btn) => btn.classList.add('disabled');

allBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      alert("Board updated Successfully");
  
      totalTask++;
      assign--;
      count++;
      taskCount.textContent = totalTask;
      assignCount.textContent = `0${assign}`;
  
      btnDisabled(btn);
  
      if (count === allBtn.length)
        alert("congrates!!! You have completed all the current task");

      const heading = e.target.closest(".card").querySelector("h2");
     
      const currentTime = new Date().toLocaleTimeString();
    const html = `
            <p class="bg-lightClr text-sm p-3 rounded-md text-black opacity-70 mb-4">
                You have Complete The Task <span class="font-semibold">${heading.textContent
                }</span> at ${currentTime}
            </p>
    `;  
   
    showActivity.insertAdjacentHTML("afterbegin", html);
    
    });
});
clearHistoryBtn.addEventListener("click", clear);

