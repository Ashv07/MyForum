// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("like");
var btn5 = document.getElementById("follow");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  if (modal1.style.display == "block") {
    modal1.style.display = "none";
  }
  else if(modal2.style.display == "block") {
    modal2.style.display = "none";
  }
};


// When the user clicks the button, open the modal
btn1.onclick = function () {
  modal1.style.display = "block";
};

btn2.onclick = function () {
  modal1.style.display = "block";
};

// For Sign-up button
btn3.onclick = function () {
    modal2.style.display = "block";
};

// For like button
btn4.onclick = function () {
  modal.style.display = "block";
};

// For follow button
btn5.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  else if(event.target == modal2)
  {
    modal2.style.display = "none"
  }
};

// window.onclick = function (event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
// };

// Adding comments anonymously.

showComments();


let addBtn = document.getElementById("c-btn");
addBtn.addEventListener("click", function (e) {

  let addTxt = document.getElementById("addTxt");
  let comments = localStorage.getItem("comments");
  if (comments == null) {
    commentsObj = [];
  } else {
    commentssObj = JSON.parse(comments);
  }
  commentsObj.push(addTxt.value);
  localStorage.setItem("comments", JSON.stringify(commentsObj));
  addTxt.value = "";
  showComments();
  
});

// Function to show elements from localStorage
function showComments() {
  let comments = localStorage.getItem("comments");
  if (comments == null) {
    commentsObj = [];
  } else {
    commentsObj = JSON.parse(comments);
  }
  let html1 = `<div class="comments">
  <p class="bold">By&nbsp;<a href="#"><i class="fa fa-user"></i></a><a href="#" class="user_id">User113</a></p>
  <p class="bold">My favourite movie is Avengers: Infinity War. It has a very gripping story with non-stop action.</p>
</div>
<div class="comments">
  <p class="bold">By&nbsp;<a href="#"><i class="fa fa-user"></i></a><a href="#" class="user_id">User23</a></p>
  <p class="bold">I love The Shawshank Redemption. Everyone gave a brilliant performance in that movie.</p>
</div>
<div class="comments">
  <p class="bold">By&nbsp;<a href="#"><i class="fa fa-user"></i></a><a href="#" class="user_id">User420</a></p>
  <p class="bold">I love watching Harry Potter series. I grew up watching those movies and now I'm thinking of reading the novels.</p>
</div>
<div class="comments">
  <p class="bold">By&nbsp;<a href="#"><i class="fa fa-user"></i></a><a href="#" class="user_id">User200</a></p>
  <p class="bold">The Dark Knight is one of the best movie ever made. Heath Ledger gave a legendary performance in that movie.</p>
</div>
<div class="comments">
  <p class="bold">By&nbsp;<a href="#"><i class="fa fa-user"></i></a><a href="#" class="user_id">User007</a></p>
  <p class="bold">I just love watching Bond movies.</p>
</div>`;
  let html2 = "";
  commentsObj.forEach(function (element, _index) {
    html2 += `
              
             <div class="comments">
                <p class="bold">By&nbsp;<a href="#"><i class="fa fa-user"></i></a><a href="#" class="user_id">Anonymous User</a></p>
                <p class="bold">${element}</p>
             </div>`;
  });
  let commentsElm = document.getElementById("com");
  if (commentsObj.length != 0) {
    commentsElm.innerHTML = html1 + html2;
  }
  //else {
  //   notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  // }
}
