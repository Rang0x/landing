
let form = document.querySelectorAll("form");
$('form').on("submit", handelForm)

function handelForm(e){
    e.preventDefault();
    let myForm = e.target;
    let formData = new FormData(myForm);
    for(let key of formData.keys()){
        console.log(key, formData.get(key));
    }
    // Assuming 'formData' is your FormData object
    let formattedData = '';

    for (let pair of formData.entries()) {
      formattedData += `${pair[0]}: ${pair[1]} <br>`;
    }

    // Use the 'formattedData' string in your email body
    console.log(formattedData);
    sendE(formattedData);
    console.log("sucess");
}


function sendE(formattedData){
  Email.send({
  }).then(function(){
    window.location.href = "thankyou.html"
  }
  );
}

// =======================================
// =======================================
// =======================================

$(".navbar-nav a").click(function(){
  var sectionID = $(this).attr("href");
  $("html,body").animate({scrollTop: $(`${sectionID}`).offset().top}, 100)
});




// ========= JQUERY Photo FULL============
$(document).ready(function(){$("#msterPlan").click(function(){this.requestFullscreen()})});