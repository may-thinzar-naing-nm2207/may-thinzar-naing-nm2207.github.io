// table of number of foreign workers 
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

function wfFunction() {
	let alertString = '';
	for (let i = 1; i < headers.length; i++) {
		const proportion = Math.round((row3[i] / row7[i]) * 100)
		alertString += headers[i] + ': ' + proportion + '%' + '\n';
	}
	alert(alertString);
}

//employment rates line
const chart = new Chart("myChart", {
	type: 'line',
	data: {
		labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
		datasets: [{
			label: 'Professionals, Managers, Executives & Technicians (PMETs)',
			data: [52.4, 53.1, 53.5, 54.4, 55.2, 56.2, 57.0, 58.4, 59.9, 62.1, 63.6],
			borderColor: 'rgb(255, 99, 132)',
			fill: false,
			pointRadius: 5,
			pointHoverRadius: 10,
			pointHitRadius: 30,
			pointBorderWidth: 2,
			pointBackgroundColor: 'white',
			pointHoverBackgroundColor: 'white',
			pointBorderColor: 'rgb(255, 99, 132)',
			pointHoverBorderColor: 'rgb(255, 99, 132)',
			dataLabels: {
				display: true,
				color: 'white'
			}
		}, {
			label: 'Clerical, Sales & Service Workers (CSSWs)',
			data: [25.4, 25.1, 24.2, 24.2, 23.4, 22.8, 22.9, 22.2, 21.1, 20.2, 19.3],
			borderColor: 'rgb(54, 162, 235)',
			fill: false,
			pointRadius: 5,
			pointHoverRadius: 10,
			pointHitRadius: 30,
			pointBorderWidth: 2,
			pointBackgroundColor: 'white',
			pointHoverBackgroundColor: 'white',
			pointBorderColor: 'rgb(54, 162, 235)',
			pointHoverBorderColor: 'rgb(54, 162, 235)',
			dataLabels: {
				display: true,
				color: 'white'
			}
		}, {
			label: 'Production & Transport Operators, Cleaners & Labourers (PTOCLs)',
			data: [22.2, 21.8, 22.1, 21.4, 21.4, 21.0, 20.2, 19.4, 19.1, 17.6, 17.2],
			borderColor: 'rgb(255, 206, 86)',
			fill: false,
			pointRadius: 5,
			pointHoverRadius: 10,
			pointHitRadius: 30,
			pointBorderWidth: 2,
			pointBackgroundColor: 'white',
			pointHoverBackgroundColor: 'white',
			pointBorderColor: 'rgb(255, 206, 86)',
			pointHoverBorderColor: 'rgb(255, 206, 86)',
			dataLabels: {
				display: true,
				color: 'white'
			}
		}]
	},
	options: {
		legend: {
			labels: {
				fontColor: 'white'
			}
		},
		plugins: {
			legend: {
				labels: {
					color: 'white',
				}
			},
		title: {
			display: true,
			text: 'Employment rates by Occupational Group',
			}
		}
	}
}
)

//attitudes bar chart 
const attitudes = ["Migrant workers should not have any rights at work if in irregular status", 
					"If they are exploited they have themselves to blame", 
					"Should not receive the same pay and benefits as nationals", 
					"Should not be able to join a union"];
const percentage = [75, 60, 40, 36];

const dataObj = {
	labels: attitudes,
	datasets: [
		{
			label: "Support for following statements (%)",
			data: percentage,
			borderWidth: 1,
			backgroundColor: "hsla(20,100%,80%,0.8",
			borderColor: "hsla(0,100%,50%,1)",

		}
	]
};
new Chart("sm-bar-chart", { 
	type: "bar",
	data: dataObj,
	options: { 
		responsive: true,
		maintainAspectRatio: false,
		indexAxis: 'y',
		legend: {
			display: false
		},
		plugins: {
		title: {
			display: true,
			text: 'Attitudes on equal treatment of migrant workers',
				},
			},
		indexAxis: 'y',
		barThickness: 20, 
		maxBarThickness: 30
		}
	}
);

//entitlements bar chart
const entitlements = ["One-day off", 
					"Paid leave", 
					"Mobile phone", 
					"Sick leave",
					"Leave house",
					"Keep passport",
					"Overtime pay",
					"Maternity leave",
					"None"];
const percentageE = [59, 51, 47, 41, 32, 27, 24, 13, 8];

const dataObj2 = {
	labels: entitlements,
	datasets: [
		{
			label: "Support for following statements (%)",
			data: percentageE,
			borderWidth: 1,
			backgroundColor: "hsla(20,100%,80%,0.8",
			borderColor: "hsla(0,100%,50%,1)",
		}
	]
};
new Chart("sm-bar-chart2", { 
	type: "bar",
	data: dataObj2,
	options: { 
		responsive: true,
		maintainAspectRatio: false,
		indexAxis: 'y',
		legend: {
			display: false
		},
		plugins: {
		title: {
			display: true,
			text: 'Work entitlements provided to Migrant Domestic Workers (MDWs)',
				},
			},
		indexAxis: 'y',
		barThickness: 20, 
		maxBarThickness: 30
		}
	}
);

//KAP line chart
const dataKAP = {
	labels: ["Regularly", "Sometimes", "Never"],
	datasets: [
	  {
		label: "2010",
		data: [42, 32, 16],
		borderColor: "green",
		fill: false
	  },
	  {
		label: "2019",
		data: [39, 23, -6],
		borderColor: "red",
		fill: false
	  }
	]
  };
  
  const options = {
	responsive: true,
	maintainAspectRatio: false,
	scales: {
	  y: {
		ticks: {
		  beginAtZero: true
		}
	  }
	},
	plugins: {
	  title: {
		display: true,
		text: "KAP Index, by frequency of interaction with migrant workers"
	  }
	},
  };
  
  new Chart("my-chart", {
	type: "line",
	data: dataKAP,
	options: options
  });


//twc2 stacked bar chart
const dataTWC = {
	labels: ['Injury at work', 'Salary claim', 'Investigation', 'Recruitment scam', 'Premature termination', 'Work pass revoked by MOM'],
	datasets: [
		{
			label: '2020 - Cases handled',
			backgroundColor: '#993399',
			data: [273, 165, 41, 3, 13, 6],
			stack: 'Stack 0',
		},
		{
			label: '2020 - Cases not handled',
			backgroundColor: '#b37992',
			data: [50, 214, 10, 4, 6, 5],
			stack: 'Stack 0',
		},
		{
			label: '2021 - Cases handled',
			backgroundColor: '#4974a5',
			data: [108, 112, 15, 8, 7, 5],
			stack: 'Stack 1',
		},
		{
			label: '2021 - Cases not handled',
			backgroundColor: '#91abc9',
			data: [149, 61, 16, 2, 14, 1],
			stack: 'Stack 1',
		},
	]
}

// twc2 button 
const twcButton = document.getElementById("twcButton");
const chartTWC = document.getElementById("chartTWC");

twcButton.addEventListener("click", function () {
	chartTWC.style.display = "block";

// calling the chart 
new Chart("chartTWC", {
	type: "bar",
	data: dataTWC,
	options: {
		plugins: {
			title: {
				display: true, 
				text: 'Reported cases by TWC2 in 2020 and 2021'
			},
		},
		responsive: true,
		interaction: {
			intersect: false,
		},
		scales: {
			xAxes: [{
				stacked: false,
			}],
			yAxes: [{
				stacked: true,
			}]
		}
	}
})
})


//home stacked bar chart
const dataHO = {
	labels: ['Salary', 'Certification of identity docuements', 'Verbal abuse', 'Overwork', 'Rest day', 'Restriction on communication', 'Inadequate/Poor quality food', 'Excessive recruitment fees',
			'Not allowed to transfer', 'No itemized breakdown of fees', 'Illegal deployment', 'Physical abuse', 'Not allowed to repatriate', 'Intimidation/threats'],
	datasets: [
		{
			label: 'Quarter 1',
			backgroundColor: '#9ec4c4',
			data: [121, 109, 124, 85, 82, 63, 50, 0, 74, 0, 0, 0, 0, 0],
			stack: 'Stack 0',
		},
		{
			label: 'Quarter 2',
			backgroundColor: '#6da7a7',
			data: [87, 106, 104, 94, 64, 65, 48, 85, 61, 82, 0, 0, 0, 0],
			stack: 'Stack 0',
		},
		{
			label: 'Quarter 3',
			backgroundColor: '#108484',
			data: [176, 122, 109, 96, 104, 77, 75, 82, 0, 60, 41,34, 22, 0],
			stack: 'Stack 0',
		},
		{
			label: 'Quarter 4',
			backgroundColor: '#0D6D6D',
			data: [51, 41, 30, 33, 26, 26, 25, 31, 31, 16, 19, 12, 13, 21],
			stack: 'Stack 0',
		},
	]
}

//ho button
const hoButton = document.getElementById("hoButton");
const chartHO = document.getElementById("chartHO");

hoButton.addEventListener("click", function () {
	chartHO.style.display = "block";

new Chart("chartHO", {
	type: "bar",
	data: dataHO,
	options: {
		plugins: {
			title: {
				display: true, 
				text: 'Quarterly reported cases by HOME in 2021'
			},
		},
		responsive: true,
		interaction: {
			intersect: false,
		},
		scales: {
			xAxes: [{
				stacked: true,
			}],
			yAxes: [{
				stacked: true,
			}]
		}
	}
})
})