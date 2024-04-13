document.getElementById("buyNowForm").addEventListener("submit", function(event){
    event.preventDefault(); 
    
    var address = document.getElementById("fullName").value;;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    
    
    alert("Full Name: " + fullName + "\nEmail: " + email + "\nAddress: " + address);
  });