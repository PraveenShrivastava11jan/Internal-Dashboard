function updatedata(){
    var url = "http://localhost:3000/orderpaymentpending";
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(ROW_DATA));
}
function updatedata_1(){
    var url = "http://localhost:3000/orderpaymentaccepted";
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(ROW_DATA));
}
function updatedata_2(){
    var url = "http://localhost:3000/orderpaymentrejected";
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(ROW_DATA));
}
 var  ROW_DATA = [];
   function updatedata1(){
        var url = "http://localhost:3000/orderpaymentpending";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
                           var table =  $('#example1').DataTable();
                             mydt = JSON.parse(this.responseText);
                            // data = ROW_DATA;
                             table.clear().draw();
                             var i;
                               for (i = 0; i < mydt.length; i++) {
                                   table.row.add(mydt[i]).draw(); 
                               }
                             
         }
        };
        xhttp.open("GET", url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
   }
   function updatedata2(){
    var url = "http://localhost:3000/orderpaymentaccepted";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
                       var table =  $('#example2').DataTable();
                         mydt = JSON.parse(this.responseText);
                        // data = ROW_DATA;
                         table.clear().draw();
                         var i;
                           for (i = 0; i < mydt.length; i++) {
                               table.row.add(mydt[i]).draw(); 
                           }
                         
     }
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
function updatedata3(){
    var url = "http://localhost:3000/orderpaymentrejected";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
                       var table =  $('#example3').DataTable();
                         mydt = JSON.parse(this.responseText);
                        // data = ROW_DATA;
                         table.clear().draw();
                         var i;
                           for (i = 0; i < mydt.length; i++) {
                               table.row.add(mydt[i]).draw(); 
                           }
                         
     }
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
   function addingElemnetTOPendingTbl()
   {
    var name = $('#name').val();
    var ordid = $('#orderid').val();
    var pr = $('#product').val();
    var dt = new Date(); 
   // console.log("Current Time : " + dt.toISOString());
    var arEl = {"Name": name , "Orderid": ordid, "Product": pr, "Date": dt.toISOString()};
    var table =  $('#example1').DataTable();
    table.row.add(arEl).draw();
    var url = "http://localhost:3000/orderpaymentpending";
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(arEl));
    
   }


   function sortingArr()
   {
    var url = "http://localhost:3000/orderpaymentpending";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
                        mydt = JSON.parse(this.responseText);
                        var i;
                        var dtarry = [];
                        for (i = 0; i < mydt.length; i++) {
                               console.log(mydt[i].Date); 
                               var input = mydt[i].Date;
                               var fields = input.split('T');
                               dtarry.push(fields[0]);
                               console.log(fields[0]);


                           }
                           count(dtarry)
     }
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
   }




function count(ar_elt) {
    array_elements = ar_elt;

    array_elements.sort();

    var current = null;
    var cnt = 0;
    x_axis1 = ['x'];
    dtt11 = ['Order Payment Pending'];
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                console.log(current + ' comes --> ' + cnt + ' times');
                x_axis1.push(current);
                dtt11.push(cnt);                
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        console.log(current + ' comes --> ' + cnt + ' times');
        x_axis1.push(current);
        dtt11.push(cnt);
        }

        console.log("X-axis in a date :" +x_axis1);
        console.log("Data :" + dtt11);
        localStorage.clear();
        localStorage.setItem("x_axis1", JSON.stringify(x_axis1));
        localStorage.setItem("dtt11", JSON.stringify(dtt11));
       

}



var x_axis1 = ['x'];
var dtt11 = ['Order Payment Pending'];
var chartrt11 = c3.generate({
    bindto: '#chart_realtime1',
    data: {
        x: 'x',
        columns: [
            x_axis1,
            dtt11
        ],
       
        //type: 'bar',
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%d/%m/%y',
            }
        },
        y: {
            
            tick: { format: d3.format("d") },
            padding: {top: 0, bottom: 40}
        }
    },
    //types: {
    //    data1: 'bar'
    //},
    onmouseover: function () {
        console.log('test');
    },
    color: {
        pattern: ['#1F77B4', '#FFBF00', '#f44336', ]
    }
});


