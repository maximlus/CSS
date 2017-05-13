function main() {
    console.log("in main function");
    var myform = document.getElementById("login");
    /*myform.addEventListener("submit",validateForm);*/
    
    var sizeForm = document.getElementById("size");
    sizeForm.addEventListener("change", priceAdjust);
}
/*
This is all order.js stuff
function validateForm(event) {
    var nameUser = document.getElementById("userName");
    var wordPass = document.getElementById("passWord");
    var formValid = true;
    var myForm = document.getElementById("login");
    
    if (myForm.userName.value == "") {
        formValid = false;
        nameUser.placeholder = "Required";
        //nameUser.style.placeholder.color = "#ff0000";
        event.preventDefault();
    } else {
        nameUser.placeholder = "Name";
    }
    if (myForm.passWord.value == "") {
        formValid = false;
        wordPass.placeholder = "Required";
        //wordPass.style.placeholder.color = "#ff0000";
        event.preventDefault();
    } else {
        wordPass.placeholder = "Password";
    }
  
}
*/

function priceAdjust(event){
    
    console.log("the form has changed");
        var form = document.getElementById("size");
		var x = document.getElementById("size").length;
		if(form == null)
		{
			alert('something went wrong');
		}
        for(var i=0; i <= x; i++){
            if(x[i].checked){
                console.log("you have selected" + form.extras[i].value);
				totalprice + (this).data('price');
            }
        }
	document.getElementById("total").innerHTML = totalprice;
}