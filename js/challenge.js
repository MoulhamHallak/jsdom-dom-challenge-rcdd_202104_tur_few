let i =-1;
let j = 0;
let interval = setInterval(increment, 1000);
function increment(){
    i++;
    document.querySelector('h1#counter').textContent = i;
    j = 0;
}
increment();

document.getElementById("minus").addEventListener("click", function(){
  i--;
  document.querySelector('h1#counter').textContent = i;
});

document.getElementById("plus").addEventListener("click", function(){
  i++;
  document.querySelector('h1#counter').textContent = i;
});

document.getElementById("heart").addEventListener("click", function(){
  j++;
  let li = document.createElement("li");
  let node = document.createTextNode(i + " has been liked " + j + " time(s).")
  let likes = document.querySelector('.likes')
  let lastLike = document.querySelector('.likes').lastChild
  li.appendChild(node);
  if(j>1){
   lastLike.replaceWith(li)
  } else {
    likes.appendChild(li);
  }
});

document.getElementById("pause").addEventListener("click", function(){
  if(document.querySelector('#pause').innerText == "pause") {
    clearInterval(interval)
    document.querySelector('#pause').innerText = "resume"
    document.getElementById("minus").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("heart").disabled = true;
    document.getElementById("submit").disabled = true;
  } else {
    interval = setInterval( increment, 1000);
    document.querySelector('#pause').innerText = "pause"
    document.getElementById("minus").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("heart").disabled = false;
    document.getElementById("submit").disabled = false;
  }
});

document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault();
  let comment = document.querySelector('input#comment-input').value
  let commentsList = document.querySelector('.comments')
  let p = document.createElement("p");
  let node = document.createTextNode(comment)
  p.appendChild(node);
  commentsList.appendChild(p);
  document.querySelector('input#comment-input').value = ''
});