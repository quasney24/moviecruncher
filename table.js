$(document).ready(function() {
    $('#current_movies').DataTable();
} );

        for (j=0; j<1; j++){
            d3.json(queryURL2, function(error, response){
        
        //console.log(queryURL2, response);
                var rev_info = response.revenue;
                rev_list.push(rev_info);
                var title = response.title;
                var poster_img = response.poster_path;
                var release_date = response.release_date;
                d3.select("#test_table").append("tr").html("<td>"+title+"</td><td>"+release_date+"</td><td></td>");
                d3.select("#card1").append("div").attr("class", "col-lg-3").append("img").attr("src", "http://image.tmdb.org/t/p/w185/"+poster_img).attr("align","middle")

            });
        };