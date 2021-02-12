var arrLeft = document.getElementById("arrow-left");
	var arrRight = document.getElementById("arrow-right");
	var dotElement = document.getElementById("allDots");
	var dotChildelem = dotElement.children;
	var currentNumber = 0;
	var imageSet = new Array ("images/images1.jpg","images/images2.jpg","images/images3.jpg");
	var imageLength = imageSet.length-1;
	var counter ;
	var counter1;

document.image_slide.src = imageSet[0];
dotChildelem.item(0).classList.add("active");

		/*right arrow*/
		function nextImage(){

			currentNumber++;
			if(currentNumber > (imageSet.length-1)){
			document.image_slide.src = imageSet[0];
			removeClass();
			currentNumber = 0;
			dotChildelem.item(currentNumber).classList.add("active");
			
			}

			else{
			document.image_slide.src = imageSet[currentNumber];
			removeClass();
			dotChildelem.item(currentNumber).classList.add("active");

			
			}
 
			}
			/*end of right arrow*/

			/*left arrow*/
		function previousImage(){
			currentNumber--;

			if(currentNumber < 0){
			document.image_slide.src = imageSet[imageLength];
			currentNumber = imageLength;
			removeClass();
			dotChildelem.item(currentNumber).classList.add("active");
			}

			else{
			document.image_slide.src = imageSet[currentNumber];
			removeClass();
			dotChildelem.item(currentNumber).classList.add("active");
			}

		    }
		    /*end of left arrow*/

            /*remove classes*/
		    function removeClass(){

		    	for(n = 0;n < imageSet.length; n++){
				dotChildelem.item(n).classList.remove("active");
						}
		    }

		    function goTo(selElem){
		    	var selectItem = selElem;
		   		document.image_slide.src = imageSet[selectItem];
		    	removeClass();
				dotChildelem.item(selectItem).classList.add("active");
		    }
	

	  /*for body items*/
    for(counter = 0;counter < 9; counter++){
    	var itemElement = document.getElementById("itemsList");
    	var cloneElement = itemElement.cloneNode(true);
		document.getElementById("items-left").appendChild(cloneElement);
    }
	/*for widget items*/
    for(counter1 = 0;counter1 < 2; counter1++){
    	var itemElement1 = document.getElementById("listwidget");
    	var cloneElement1 = itemElement1.cloneNode(true);
		document.getElementById("item-widget").appendChild(cloneElement1);
    }