// Example 2.3 line 6...function to create a table with cities and their populations
// initialize function called when the script loads
function initialize(){
    cities();
}

// define an array of objects for cities and population
function cities(){    
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    // create a table element
    var table = document.createElement("table");

    // create a header row
    var headerRow = document.createElement("tr");

    // add city column to header row
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    // add population column to header row
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    // add the header row
    table.appendChild(headerRow);

    // Example 2.3 line 41...loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityPop[i].city;
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityPop[i].population;
        tr.appendChild(pop);

        table.appendChild(tr);
    }

    // append the table to the document body
    document.body.appendChild(table);
}

// call the initialize function when the window has loaded
window.onload = initialize;