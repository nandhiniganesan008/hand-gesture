```javascript
// Welcome Message
window.onload = function() {
    alert("☕ Welcome to Cozy Coffee Shop!");
};


// Book Table Function
function bookTable() {

    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;
    let people = document.querySelector("input[type='number']").value;

    if (name == "" || email == "" || people == "") {
        alert("Please fill all the details!");
    }
    else {
        alert("Thank you " + name + 
              "! Your table for " + people + 
              " people has been booked successfully. ☕");
    }
}
```
