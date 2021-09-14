/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var createReview = function(){
    const http = new XMLHttpRequest();
    const review = {
        "name":document.getElementById("nameTxt").value,
        "restaurant":document.getElementById("restTxt").value,
        "location":document.getElementById("locationTxt").value,
        "review":document.getElementById("reviewTxt").value,
        "rating":document.getElementById("rating").value
        
    };
    
    http.open("Post", urlIndex);
    http.setRequestHeader( "Content-Type", "application/json;charset=UTF-8" );
    http.send(JSON.stringify(review));
    
    http.onreadystatechange = function(){
        if(http.readyState === XMLHttpRequest.DONE && http.status === 200){
            alert(http.responseText);
        }
    };
};
