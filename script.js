document.addEventListener('DOMContentLoaded', function () {
    generateDivs();

    function generateDivs(){
        var element = document.getElementById('tableCanvas');
        for(var i = 0; i < 18; i++) {
            var row = document.createElement('div');
            row.className = 'row';
            for(var j = 1; j <= 35; j++) {
                var cell = document.createElement('div');
                cell.className = 'column';
                row.appendChild(cell);
            }
            element.appendChild(row);
        }
    }
    var paintBrush = 'white';
    var colorButtons = document.querySelectorAll('button');
   
    for (var j = 0; j < colorButtons.length; j++) {
        colorButtons[j].addEventListener('click', (e) => {
            console.log(e);
            paintBrush = e.target.id;
            console.log(paintBrush);
            document.getElementById("colorName").value = e.target.id
        })
    }

    var canvas = document.querySelectorAll('.column');

    for (var i = 0; i < canvas.length; i++) {
        canvas[i].addEventListener('click', (e) => {
            console.log(e.target.id);

            if (paintBrush === 'yellow') {
                e.target.id = 'yellow';
            }
            if (paintBrush === 'red') {
                e.target.id = 'red';
            }
            if (paintBrush === 'green') {
                e.target.id = 'green';
            }
            if (paintBrush === 'brown') {
                e.target.id = 'brown';
            }
            if (paintBrush === 'blue') {
                e.target.id = 'blue';
            }
            if (paintBrush === 'orange') {
                e.target.id = 'orange';
            }
            if (paintBrush === 'pink') {
                e.target.id = 'pink';
            }
            if (paintBrush === 'black') {
                e.target.id = 'black';
            }
            if (paintBrush === 'purple') {
                e.target.id = 'purple';
            }
            if (paintBrush === 'teal') {
                e.target.id = 'teal';
            }
        })
    }

})