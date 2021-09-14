/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var deleteReview = function () {
    const http = new XMLHttpRequest();

    var review = {
        "name": document.getElementById("deleteInput").value
    };

    http.open("POST", urlReview);
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.send(JSON.stringify(review));

    http.onreadystatechange = function () {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            alert(http.responseText);
            window.location.reload();
        }
    };

};