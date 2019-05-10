document.addEventListener('DOMContentLoaded', function () {
    generateDivs();
    function generateDivs(){
        var elem = document.getElementById('tableCanvas');
        for(var i = 0; i < 18; i++) {
            var row = document.createElement('div');
            row.className = 'row';
            for(var j = 1; j <= 35; j++) {
                var cell = document.createElement('div');
                cell.className = 'column';
                row.appendChild(cell);
            }
            elem.appendChild(row);
        }
    }   


})