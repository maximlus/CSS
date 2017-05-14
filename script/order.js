function main() {
    console.log("in main function");
	var temp = document.getElementById("order")
	temp.addEventListener("click",validateForm);
    console.log("If you're looking at this, it means something has gone wrong. sad times.");
    /*var sizeForm = document.getElementById("size");
    sizeForm.addEventListener("change", priceAdjust);*/
}
/*
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
}*/
function validateForm(event) {
	var i;
	var sizeValid = false
	var topValid = false
	var pSize = document.forms["size"];
	var pTop = document.forms["topping"];
	console.log("starting size check");//used for debugging
	for(i = 0; i < pSize.length; i++){
		console.log("pass " + i + " of Size");//used for debugging
		if (pSize[i].checked){
			sizeValid = true;
			console.log("sizeValid is " + sizeValid);//used for debugging
		}
	}
	console.log("starting topping");//used for debugging
	for(i = 0; i < pTop.length; i++){
		console.log("pass " + i + " of topping");//used for debugging
		if (pTop[i].checked){
			topValid = true;
			console.log("toppingValid is " + sizeValid);//used for debugging
		}
	}
	console.log("loop over")//used for debugging
	if(sizeValid == true && topValid == true){
		alert("Order placed")
	}else{
		if(sizeValid == false){
			alert("Please select a size.")
		}
		if(topValid == false){
			alert("Please select a topping.")
		}
		
	}
  
}