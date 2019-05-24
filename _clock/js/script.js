function displyTime(){
  let now = new Date();
  let div = document.getElementById("clock");
  div.innerHTML = now.toLocaleTimeString();

  setTimeout(displyTime, 1000);
}


window.onload = displyTime;