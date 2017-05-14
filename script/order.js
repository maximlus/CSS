var totalprice = 0.00;//This should be a global variable, better idea, it should be passed between functions.
function main() {
    console.log("in main function");
	var temp = document.getElementById("order")
	temp.addEventListener("click",validateForm);
    console.log("If you're looking at this, it means something has gone wrong. sad times.");
    var sizeForm = document.getElementById("section");
    sizeForm.addEventListener("change", priceAdjust);
}
function priceAdjust(event){// each form has it's own function, one main function calls each one and re-calculates the total. The frame work is here.
    totalprice = 0.00
    console.log("the form has changed");
    console.log(totalprice);
    priceSize();
    console.log(totalprice);
    priceTopping();
    console.log(totalprice);
    priceExtra();
    console.log(totalprice);
    document.getElementById("total").innerHTML = "&pound;" + totalprice.toFixed(2);
}
function priceSize (){

  var form = document.getElementById("size");
  var x = form.length;
  console.log("no problems here");
  console.log(totalprice);
  if(form == null)
  {
    alert('something went wrong');
  }
      for(var i=0; i < x; i++){
        console.log("Pass " + i);
          if(form[i].checked){
            console.log("you have selected" + form[i].name);
            //console.log(form[i].dataset.price);
            console.log(totalprice);
            totalprice = totalprice + parseFloat(form[i].dataset.price);//seems to be adding a leading 0. :S Could use parseInt, but have another idea. Turns out it is due to it being a string and I was ading it to a number.
            console.log(totalprice);
          }
      }
}
function priceTopping(){
  var form = document.getElementById("topping");
  console.log(form);
  var x = form.length;
  console.log("no problems here");
  console.log(totalprice);
  if(form == null)
  {
    alert('something went wrong');
  }
      for(var i=0; i < x; i++){
        console.log("Pass " + i);
          if(form[i].checked){
            console.log("you have selected" + form[i].name);
            //console.log(form[i].dataset.price);
            console.log(totalprice);
            totalprice = totalprice + parseFloat(form[i].dataset.price);//seems to be adding a leading 0. :S Could use parseInt, but have another idea. Turns out it is due to it being a string and I was ading it to a number.
            console.log(totalprice);
          }
      }
}
function priceExtra(){
  var form = document.getElementById("extras");
  var x = form.length;
  console.log("no problems here");
  console.log(totalprice);
  if(form == null)
  {
    alert('something went wrong');
  }
      for(var i=0; i < x; i++){
        console.log("Pass " + i);
          if(form[i].checked){
            console.log("you have selected" + form[i].name);
            //console.log(form[i].dataset.price);
            console.log(totalprice);
            totalprice = totalprice + parseFloat(form[i].dataset.price);//seems to be adding a leading 0. :S Could use parseInt, but have another idea. Turns out it is due to it being a string and I was ading it to a number.
            console.log(totalprice);
          }
      }
}
function validateForm(event) {
	var i;
	var sizeValid = false
	var topValid = false
  var addValid = false
  var postValid = false
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
  if(document.getElementById("address")==''){
    addValid = false;
  }else{
    addValid = true;
  }
  if(document.getElementById("postcode")==''){
    postValid = false;
  }else{
    postValid = true;
  }
	console.log("loop over")//used for debugging
	if(sizeValid == true && topValid == true && addValid == true && postValid == true){
		alert("Order placed")
	}else{
		if(sizeValid == false){
			alert("Please select a size.")
		}
		if(topValid == false){
			alert("Please select a topping.")
		}else{
      if(addValid == false){
        alert("You have not entered your address.");
      }else(
        if (postValid == false){
          alert("You have not enetered your postcode.");
        }else{
          alert("You have created an unknown error, make a wish.");
        }
      )
    }

	}

}
