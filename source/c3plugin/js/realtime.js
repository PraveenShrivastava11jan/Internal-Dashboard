var data = {
    columns: [
      ['data1', 30, 80, 25, 1, 10, 77, 55, 32, 30, 30, 41]
    ],
    types: {
        data1: 'area-spline'
    },
    duration: 2000
};
var chart1 = c3.generate({ bindto: '#chart1', data: data });
var chart2 = c3.generate({ bindto: '#chart2', data: data });
setInterval(function () {
    data.columns[0].push(Math.round(Math.random() * 100));
    data.columns[0].splice(1, 1);
    chart1.flow(data);
    chart2.load(data);
}, 2500);

var x_axis = ['x', '2012-12-29', '2012-12-30', '2012-12-31', '2013-01-10', '2013-01-20', '2013-01-30'];
var dtt1 = ['data1', 230, 300, 330, 430, 500, 550];
var dtt2 = ['data2', 190, 230, 200, 300, 340, 380];
var dtt3 = ['data3', 290, 130, 180, 390, 430, 450];
var chartrt = c3.generate({
    bindto: '#chart_realtime1',
    data: {
        x: 'x',
        columns: [
            x_axis,
            dtt1,
            dtt2,
            dtt3,
			
        ],
        //type: 'bar',
		colors: {
            'data1': function(d) { return d.value < 0 ? '#C00' : '#0C0' }
        }
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%m/%d',
            },
			 lines: [{value: 0}]
        }
    },
    //types: {
    //    data1: 'bar'
    //},
   
});
var ddd = {
    columns: [
        ['x', '2013-02-10', '2013-02-20', '2013-03-30'],
        ['data1', 340, 400, 480],
        ['data2', 250, 280, 310],
        ['data3', 310, 330, 400]
    ],
    duration: 5000,
    //type:'bar'
}
setTimeout(function () { 
    chartrt.flow(ddd);
}, 2000);
var chartSpline = c3.generate({
    bindto: '#chart_spline',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'area-spline'
    },
	 onmouseover: function () {
        alert("mouse hover");
    }
});
var dataSpline = {
    columns: [
            dtt1,
            dtt2,
    ],
    duration : 22000,
}
setTimeout(function () {
    chartSpline.flow(dataSpline);
}, 1000)
 var colors = ['red','green','blue','yellow','black','red'];

var chartLineGraph = c3.generate({
	bindto: '#chartLine',
	 data: {
		 columns: [
		    ['data1',50, 20, 10, 30, 200, 100],
            
        ],
		type: 'line',
        color:function(color,d){
                return colors[d.index];    
        }
    }
});





