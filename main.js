        var headers = ["Pass Type", "Dec 2017", "Dec 2018", "Dec 2019", "Dec 2020", "Dec 2021", "Jun 2022"];
		var row1 = ["Employment Pass", 187700, 185800, 193700, 177100, 161700, 168800];
		var row2 = ["S Pass", 184400, 195500, 200000, 174000, 161800, 169200];
		var row3 = ["Work Permit (Total)", 965200, 972600, 999000, 848200, 849700, 943400];
		var row4 = ["Work Permit (Migrant Domestic Workers)", 246800, 253800, 261800, 247400, 246300, 256300];
		var row5 = ["Work Permit (Construction, Marine Shipyard and Process)", 360700, 355700, 370100, 311000, 318400, 369400];
		var row6 = ["Other Work Passes", 30700, 32100, 34700, 32200, 27200, 24400];
		var row7 = ["Total Foreign Workforce", 1368000, 1386000, 1427400, 1231500, 1200400, 1305800];
		var data = [row1, row2, row3, row4, row5, row6, row7];

		var table = document.getElementById("myTable");

        
		// Create the header row
		var headerRow = document.createElement("tr");
		for (var i = 0; i < 7; i++) {
			var headerCell = document.createElement("th");
			headerCell.innerHTML = headers[i];
			headerRow.appendChild(headerCell);
		}
		table.appendChild(headerRow);

		// Create the data rows
		for (var i = 0; i < 7; i++) {
			var dataRow = document.createElement("tr");
			for (var j = 0; j < data[i].length; j++) {
				var dataCell = document.createElement("td");
				dataCell.innerHTML = data[i][j];
				if (i == 0) {
					dataCell.setAttribute("colspan", "1");
				} else {
					dataCell.classList.add("indent");
				}
				dataRow.appendChild(dataCell);
			}
			table.appendChild(dataRow);
        }
        
let element = document.getElementById("subButton");
element.addEventListener("click", wfFunction);

function wfFunction () {
    let alertString = '';
    for (let i = 1; i < headers.length; i++ ) {
    	const proportion = Math.round((row3[i] / row7[i])*100)
    	alertString += headers[i] + ': ' + proportion + '%' + '\n';
    }
    alert(alertString);
}

function TWC2() {
	document.getElementById("showTWC2").style.display = "block";
	document.getElementById("showHOME").style.display = "none";
  }
  
  function HOME() {
	document.getElementById("showTWC2").style.display = "none";
	document.getElementById("showHOME").style.display = "block";
  }