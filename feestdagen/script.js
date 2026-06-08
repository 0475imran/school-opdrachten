const holidaysList = document.querySelector("#holidays")

fetch("https://date.nager.at/api/v3/PublicHolidays/2026/NL")

.then(function(response){

    return response.json()

})

.then(function(data){

    data.forEach(function(day){

        holidaysList.innerHTML +=
        "<li>" + day.date + " - " + day.localName + "</li>"

    })

})