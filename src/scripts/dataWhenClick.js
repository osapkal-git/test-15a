async function buttonLog(id, value, buttonPressed) {
    date = new Date();

    $.ajax({
        async: false,
        type: "POST",
        url: "saveData.php",
        data: { "name": id, "date": date },
        complete: function () {
            window.location.href = value;
        },
        error: function () {
            // POST fails when PHP/MySQL is not available (e.g. static python server); navigation still happens in complete.
        },
    });

    var url = "http://WIZnetD9E9F9.istb4.dhcp.asu.edu/" + buttonPressed;
    console.log(url);
    fetch(url, { method: "POST", mode: "no-cors" }).then(function (data) {
        console.log(data);
    });

    return true;
}