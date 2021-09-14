/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const http = new XMLHttpRequest();
http.open("GET", urlReview);
http.send();

http.onreadystatechange = function () {
    var row, cell, table, reviews, review;

    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
        table = document.getElementById("reviewTbl");
        reviews = JSON.parse(http.responseText);

        Object.keys(reviews).forEach(function (name) {
            review = reviews[ name ];

            row = document.createElement("tr");
           
            cell = document.createElement("td");
            cell.textContent = review.name;
            row.appendChild(cell);

            cell = document.createElement("td");
            cell.textContent = review.restaurant;
            row.appendChild(cell);

            cell = document.createElement("td");
            cell.textContent = review.location;
            row.appendChild(cell);

            cell = document.createElement("td");
            cell.textContent = review.review;
            row.appendChild(cell);

            cell = document.createElement("td");
            cell.textContent = review.rating;
            row.appendChild(cell);
            
            table.appendChild(row);
        });
    }
};
