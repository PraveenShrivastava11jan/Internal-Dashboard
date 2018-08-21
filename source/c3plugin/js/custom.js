var dataspliner = {};
setInterval(function () {
    var x_axis1 = [];
    var dtt11 = [];
    var dtt22 = ["data2",2,3,5];
    if(localStorage.getItem("x_axis1") != null && localStorage.getItem("dtt11") != null)
    {
        x_axis1 = JSON.parse(localStorage.getItem("x_axis1"));
        dtt11 = JSON.parse(localStorage.getItem("dtt11"));


       // console.log(x_axis1, dtt11);
    dataspliner = 
    {
        columns:[
            x_axis1,
            dtt11,
            dtt22
        ],
        duration :2200,
       
    }
    
        if(dataspliner.columns[0].length > 0)
        {
            chartrt11.flow(dataspliner); 
        }
    }

    
}, 3000)
