//function addingEventListener() {
//}


function addingEventListener() {
    const input = document.getElementById('button');
  
    function clickAlert() {
      alert('I was clicked!');
    }
  
    input.addEventListener('click', clickAlert);
  }
  
  addingEventListener(); // Call the function to attach the event listener
  