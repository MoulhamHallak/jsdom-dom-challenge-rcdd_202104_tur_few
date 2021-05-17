// function _toConsumableArray(a){
//   if(Array.isArray(a)){
//     for(var b=0,c=Array(a.length);b<a.length;b++)
//     c[b]=a[b];return c
//   }
//   return Array.from(a)
// }
// var playing=!0,timer=function(){
//   return setInterval(function(){
//     var a=document.getElementById("counter")
//     b=parseInt(a.innerText);
//     a.innerText=b+1
//   },1e3)}
  
//   interval=timer()
//   minus=document.getElementById("minus")
//   plus=document.getElementById("plus")
//   heart=document.getElementById("heart")
//   pause=document.getElementById("pause")
//   commentForm=document.getElementsByTagName("form")[0];
//   minus.addEventListener("click",function(){
//     var a=document.getElementById("counter")
//     b=parseInt(a.innerText);
//     a.innerText=b-1;
//   })
  
//   plus.addEventListener("click",function(){
//     var a=document.getElementById("counter")
//     b=parseInt(a.innerText);
//     a.innerText=b+1
//   })
  
//   heart.addEventListener("click",function(){
//     var a=document.getElementById("counter")
//     b=parseInt(a.innerText)
//     c=document.querySelector(".likes")
//     d=void 0;
//     if([].concat(_toConsumableArray(c.children)).map(function(a){
//       return parseInt(a.dataset.num)}).includes(b)){
//       d=document.querySelector('[data-num="'+b+'"]');
//       var e=parseInt(d.children[0].innerText);
//       d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"
//       }
//       else(d=document.createElement("li")).setAttribute("data-num",b)
//       d.innerHTML=b+" has been liked <span>1</span> time"
//       c.appendChild(d)
//   })
      
//   pause.addEventListener("click",function(){
//     playing?(playing=!1,clearInterval(interval),this.innerText="resume"):(playing=!0,interval=timer(),this.innerText="pause"),[].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){"pause"!==a.id&&(a.disabled=!playing)
      
//     })
    
//   })
  
//   let comment = document.getElementById("commentForm");
//   comment.addEventListener("submit",function(a){
//     a.preventDefault();
//     var b=this.children[0],
//     c=b.value;
//     b.value="";
//     var d=document.querySelector(".comments");
//     e=document.createElement("p");
//     e.innerText=c,d.appendChild(e)
//     });

let i =-1;
let j = 0;
let interval = setInterval( increment, 1000);
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