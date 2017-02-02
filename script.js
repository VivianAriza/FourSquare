$(document).ready(function() {
            $("#go").click(function() {
                var inputVal = $("#search").val();
                var location = $("#location").val();
                var part1 = "https://api.foursquare.com/v2/venues/search?client_id=QVP411NNXQZSPK424MIF0VRMELDBVGU5YPP14GGGZ3Z1SVTM&client_secret=TZADRH0GKBGL4RLTCAVWX00GNLJ35PBMRDAIPLKRFUFWYXEP&v=20130815"
                var part2 = "&near=" + location;
                var part3 = "&query=" + search;
                var apiUrl = part1 + part2 + part3;
                alert(apiUrl)
            });
});