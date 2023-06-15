function firstText() {
  var dots = document.getElementById("expand");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("first");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function secondText() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("see");
  var btnText = document.getElementById("second");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function showResults(){
	let one = parseInt(document.getElementById("question-1").value);
    let two = parseInt(document.getElementById("question-2").value);
    let three = parseInt(document.getElementById("question-3").value);
    let four = parseInt(document.getElementById("question-4").value);
    let five = parseInt(document.getElementById("question-5").value);
	let resultsDiv = document.getElementById("results");
	resultsDiv.classList.remove("hidden");
    
    result = one + two + three + four + five;
  
    resultDiv.innerHTML = result;
  
  if(result == 0){
    result2 = "Incorrect";
  }
  else if(result == 1){
    result2 = "Correct";
  }

}
