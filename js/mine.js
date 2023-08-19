
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
      formattedData += `${pair[0]}: ${pair[1]}\n\n\n`;
    }

    // Use the 'formattedData' string in your email body
    console.log(formattedData);
    sendE(formattedData);
    console.log("sucess");
}





function sendE(formattedData){
  Email.send({
    SecureToken : "60a46847-ba2e-48d4-9284-ec58dc3a24aa",
    To : ['rengawy1@gmail.com', 'abdo.mosaad01@hotmail.com'],
    From : "aebussiness01@gmail.com",
    Subject : "New Lead",
    Body : `${formattedData}`
  }).then(function(){
      window.location.href = "thankyou.html"
    }
  );
}












// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
  
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
  
//     // Construct the email message
//     var message = "Name: " + name + "\n";
//     message += "Email: " + email + "\n";
  
//     // Send the form data to the server
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "send_email.php", true);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4) {
//         alert("Message sent successfully!");
//         document.getElementById("myForm").reset(); // Reset the form
//       } else if (xhr.readyState === 4 && xhr.status !== 200) {
//         alert("An error occurred while sending the message.");
//       }
//     };
//     xhr.send("name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email));
//   });