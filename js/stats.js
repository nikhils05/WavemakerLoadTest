var stats = {
	type: "GROUP",
contents: {
		
				"wavemaker-page-01b4087800921e457cf3facc60102943": {
		type: "REQUEST",
		name: "WaveMaker Page",
path: "WaveMaker Page",
pathFormatted: "wavemaker-page-01b4087800921e457cf3facc60102943",
stats: {
	numberOfRequests : {
		total: "1000",
		ok: "1000",
		ko: "0"
	},
	minResponseTime : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	maxResponseTime : {
		total: "40",
		ok: "40",
		ko: "-"
	},
	meanResponseTime : {
		total: "8",
		ok: "8",
		ko: "-"
	},
	standardDeviation : {
		total: "6",
		ok: "6",
		ko: "-"
	},
	percentiles1 : {
		total: "20",
		ok: "20",
		ko: "-"
	},
	percentiles2 : {
		total: "30",
		ok: "30",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 1000,
		percentage: 100
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 0,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "50",
		ok: "50",
		ko: "-"
	}
}


	}
		,		
				"my-projects-5b9a38f99ce7e80beb7e55816b006404": {
		type: "REQUEST",
		name: "My projects",
path: "My projects",
pathFormatted: "my-projects-5b9a38f99ce7e80beb7e55816b006404",
stats: {
	numberOfRequests : {
		total: "1000",
		ok: "1000",
		ko: "0"
	},
	minResponseTime : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	maxResponseTime : {
		total: "60",
		ok: "60",
		ko: "-"
	},
	meanResponseTime : {
		total: "4",
		ok: "4",
		ko: "-"
	},
	standardDeviation : {
		total: "5",
		ok: "5",
		ko: "-"
	},
	percentiles1 : {
		total: "10",
		ok: "10",
		ko: "-"
	},
	percentiles2 : {
		total: "20",
		ok: "20",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 1000,
		percentage: 100
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 0,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "50",
		ok: "50",
		ko: "-"
	}
}


	}
		,		
				"particular-project-0486cd65b50ae5c0b384bed0a1ab3a60": {
		type: "REQUEST",
		name: "particular project",
path: "particular project",
pathFormatted: "particular-project-0486cd65b50ae5c0b384bed0a1ab3a60",
stats: {
	numberOfRequests : {
		total: "1000",
		ok: "1000",
		ko: "0"
	},
	minResponseTime : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	maxResponseTime : {
		total: "80",
		ok: "80",
		ko: "-"
	},
	meanResponseTime : {
		total: "2",
		ok: "2",
		ko: "-"
	},
	standardDeviation : {
		total: "5",
		ok: "5",
		ko: "-"
	},
	percentiles1 : {
		total: "10",
		ok: "10",
		ko: "-"
	},
	percentiles2 : {
		total: "20",
		ok: "20",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 1000,
		percentage: 100
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 0,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "50",
		ok: "50",
		ko: "-"
	}
}


	}
		},
name: "Global Information",
path: "",
pathFormatted: "missing-name",
stats: {
	numberOfRequests : {
		total: "3000",
		ok: "3000",
		ko: "0"
	},
	minResponseTime : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	maxResponseTime : {
		total: "80",
		ok: "80",
		ko: "-"
	},
	meanResponseTime : {
		total: "4",
		ok: "4",
		ko: "-"
	},
	standardDeviation : {
		total: "7",
		ok: "7",
		ko: "-"
	},
	percentiles1 : {
		total: "10",
		ok: "10",
		ko: "-"
	},
	percentiles2 : {
		total: "20",
		ok: "20",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 3000,
		percentage: 100
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 0,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "149",
		ok: "149",
		ko: "-"
	}
}



}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
