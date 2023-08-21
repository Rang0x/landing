
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




















// SecureToken : "60a46847-ba2e-48d4-9284-ec58dc3a24aa",
// To : ['ezzuldeenadel@gmail.com', 'abdo.mosaad01@hotmail.com'],
// From : "aebussiness01@gmail.com",
// Subject : "New Lead",
// Body : `${formattedData}`