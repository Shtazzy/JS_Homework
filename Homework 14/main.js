// Task 1

button.onclick = function() {
    var table = document.getElementById('table');
    var row = table.insertRow(0);
    for (var i = 0; i < 3; i++) {
        var td = document.createElement('TD');
        td.onclick = function(event) {
            if (event.target.matches('input')) {
                return;
            }
            var td = event.target;
            var text = td.innerHTML;
            td.innerHTML = '<input type="text">';
            td.childNodes[0].value = text;
            td.childNodes[0].focus();
            td.childNodes[0].onblur = function(event) {
                var input = event.target;
                input.parentElement.innerHTML = input.value;
            }
        };
        row.appendChild(td);
    }
};

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        if (event.target.matches('input')) {
            event.target.blur();
        }
    }
});