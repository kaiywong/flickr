

var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5ef3d8d6b7da46c63db9fd2da8dd0d64&tags=";
var atrribs = "&safe_search=1&per_page=50";
var src;
var currentImage = -1;
var currentPage = 0;
var imageArray = [];

$(document).ready(function(){
	
    // $("a.myButton").click(function(){
    $('#searchTxt').keydown(function(event){ 
        var keyCode = (event.keyCode ? event.keyCode : event.which);   
        if (keyCode == 13) {
    	   $("#images").empty();
            var srctxt=	document.getElementById("searchTxt").value;
    	
            $.getJSON(url+srctxt+atrribs + "&format=json&jsoncallback=?", function(data){
	           imageArray = [];
                $.each(data.photos.photo, function(i,item){
                    src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret;
                    src_m = src+"_m.jpg";
                    src = src+".jpg";

            		var temp = ($("<a/>").attr({
  			           class:'mySrc',href:'#','data-src':src,'data-pic':i
		              }).append($("<img/>").attr("src", src_m)
		                  ));

    	           imageArray.push(temp);
		
                });

            if(imageArray.length >0){
    	       loadPictures(0);

    	       var pages = getPageNumbers(imageArray.length);
                $('#pages').empty();
    	       for( var i=0; i<pages; i++){


    		      $("<a/>").attr({
      			   html: i, class:'mySrc',href:'#','data-page':i
    		      }).html(i).appendTo('#pages');
    	       }

               currentImage =0;
               $("#bigPic img").remove();
                $("<img/>").attr("src", $(imageArray[currentImage]).attr("data-src")).appendTo("#bigPic");
    
           }
        });
        }
    });

 
    $('#images').on('click', 'a', function(){
    	$("#bigPic img").remove();
    	$("<img/>").attr("src", $(this).attr("data-src")).appendTo("#bigPic");
        currentImage = $(this).attr("data-pic");
    });


     $('#pages').on('click', 'a', function(){
    	$("#images").empty();
    	var thisPage = parseInt($(this).attr("data-page"));
    	//console.log(thisPage);
     	loadPictures(thisPage);
    });

     $('.arrow-right').click( function(){
        console.log("hello");
        if(nextImage()){
            $("#bigPic img").remove();
        $("<img/>").attr("src", $(imageArray[currentImage]).attr("data-src")).appendTo("#bigPic");
        }
    });

     $('.arrow-left').click( function(){
        console.log("hello");
        if(prevImage()){
            $("#bigPic img").remove();
        $("<img/>").attr("src", $(imageArray[currentImage]).attr("data-src")).appendTo("#bigPic");
        }
    });

});

function loadPictures(index){
	index *=15;
	for(var i =index; i<index+15;i++){
		if(imageArray[i]){
			imageArray[i].appendTo("#images");
		}
	}

}

function getPageNumbers(numImages){
	return numImages/15;
}

function nextImage(){
    if(currentImage<imageArray.length){
        currentImage++;
        return true;
    }
    return false;
}

function prevImage(){
    if(currentImage>0){
        currentImage--;
        return true;
    }
    return false;
}