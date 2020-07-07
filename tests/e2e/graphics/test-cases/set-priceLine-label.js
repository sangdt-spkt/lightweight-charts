function generateData() {
	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 1000; ++i) {
		res.push({
			time: time.getTime() / 1000,
			value: i,
		});

		time.setUTCDate(time.getUTCDate() + 1);
	}
	return res;
}

function runTestCase(container) {
	const chart = LightweightCharts.createChart(container);

	const mainSeries = chart.addLineSeries();

	mainSeries.setData(generateData());

	chart.timeScale().setVisibleRange({
		from: (new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0))).getTime() / 1000,
		to: (new Date(Date.UTC(2018, 1, 1, 0, 0, 0, 0))).getTime() / 1000,
	});

	var priceLine = {
        price: 45,
        color: "#be1238",
        lineWidth: 2,
        lineStyle: 1,
		axisLabelVisible: true,
		paneLabel: "P/L: 500"
    };
    mainSeries.createPriceLine(priceLine);
}
