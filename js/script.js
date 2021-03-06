
function showPage (list, page){ 
  //two variables for the first and last student on the page
  const startIndex = (page * 9) - 9;
  const endIndex = (page * 9);
  //select element `.student-list` and store it in variable
  const studList = document.querySelector('.student-list');
  //set the innerHTML property of the variable to ''
  studList.innerHTML = '';
    //loop over the length of the `list` parameter
    for (let i = 0; i < list.length; i += 1){
      //conditional to display the proper students
      if ( i >= startIndex && i < endIndex){
        //create variable with elements in template strings to display student information
        let studItem = 
        `
          <li class="student-item cf">
          <div class="student-details">
          <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
          <h3>${list[i].name.last}</h3>
          <span class="email">${list[i].land}</span>
          </div>
          <div class="joined-details">
          <span class="date">${list[i].name.first}</span>
          <span class="date">${list[i].registered.date}</span>
          
          </div>
          </li>
        `;
    //insert elements
    studList.insertAdjacentHTML('beforeend', studItem);
    };
  }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  //variable to calculate the number of pages needed
  let numberOfPages = Math.ceil(list.length / 9);
  //select the element `.link-list` and store it in variable
  let liLi = document.querySelector('.link-list')
  //set the innerHTML property of the variable to ''
  liLi.innerHTML = '';
  //loop over the number of pages needed
    for (i = 1; i <= numberOfPages; i++){
      //variable with elements in template strings to display buttons
      let btns = `<li><button type="button">${i}</button></li>`
    //insert elements
    liLi.insertAdjacentHTML('beforeend', btns)
    //first pagination button gets class of "active"
    liLi.querySelector('button').className = 'active';
    //create an event listener on the `link-list` element
    liLi.addEventListener('click', (event) =>{
      //if click target is a button:
      if (event.target.tagName == 'BUTTON'){
        //remove "active" class from the previous button
        liLi.querySelector('.active').className = ''
        //add active class to the clicked button
        event.target.className = 'active'
        //call the showPage function passing the `list` parameter and page to display as arguments
        showPage (list, event.target.textContent)
      }
    })
  };
}


//Call functions to show the students and page buttons
showPage(data, 1);
addPagination(data);
addSearchField();