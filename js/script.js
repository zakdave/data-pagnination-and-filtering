/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
const resultsPerPage = 9; 


/*
Create the `showPage` function
   This function will create and insert/append the elements needed to display a "page" of nine students
   Begin by creating showPage function which accepts two arguments: a list parameter for student data and a page parameter for page number
*/
const showPage = (list, page) => {
   // create two variables which will represent the index for the first and last student on the page
   const firstStudentIndex = (page * resultsPerPage) - resultsPerPage;
   const lastStudentIndex = (page * resultsPerPage) - 1;

   // select the element with a class of `student-list` and assign it to a variable
   const studentList = document.querySelector('.student-list');
   // set the innerHTML property of the variable you just created to an empty string
   studentList.innerHTML = ``;
   // loop over the length of the `list` parameter
   for (let i = firstStudentIndex; i <= lastStudentIndex; i++) {
      // creates template literal to insert all student data for each iteration
      let iterationString = 
      `
      <li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
         </div>
      <div class="joined-details">
        <span class="date">${list[i].registered.date}</span>
      </div>
      </li>
    `;
    studentList.innerHTML += iterationString;
   }
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
const addPagination = (list) => {
   const numOfButtons = Math.ceil(list.length / resultsPerPage);
   const listItems = document.querySelector('.link-list');
   listItems.innerHTML = ``; // adds each iteration of variable html to the DOM
   for (let i = 0; i < numOfButtons;i++){
      // create conditional to make the first page active by default
      if (i === 0) {   
      let html = `
         <li>
            <button type="button" class="active">${i + 1}</button>
         </li>
         `;
         listItems.innerHTML += html;
      } else {
         let html = `
         <li>
            <button type="button">${i + 1}</button>
         </li>
         `;
         listItems.innerHTML += html;
      }
   }
   // add event listener to first remove active class if a button is clicked and 
   //then add active class to the button clicked
   document.addEventListener('click', (e) => {
      const button = e.target;
      if (button.tagName === 'BUTTON'){
         const currentActivePage = document.querySelector('.active');
         currentActivePage.classList.remove('active');
         button.className = 'active';
         showPage(list, button.textContent);
      }

   });
}


// Call functions
showPage(data, 2);
addPagination(data);