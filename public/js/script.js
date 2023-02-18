const transport = new Map([["walking", 3.1],["boosted", 18],["evolve",24],["segway",12],["hover",9], ["onewheel", 19], ["moto",22],["segway-s",10],["razor",18],["geo",15]]);
const range = new Map([["walking", 30],["boosted", 7],["evolve",31],["segway",22],["hover",6], ["onewheel", 18], ["moto",10],["segway-s",13],["razor",15],["geo",8]]);
function calculate(){

    //set opacity back to normal
    range.forEach(function(value, key){
        document.getElementById(key).style.opacity = 1;
        document.getElementById("label-"+key).style.opacity = 1;
    })
    
    var chosenTransport = document.getElementsByName("transport-type");
    var distance = document.getElementById("distance-inp").value;
    // check which transportations wont allow distance
    range.forEach(function(value, key){
        console.log(key);
        if (value<distance){
            document.getElementById(key).style.opacity = 0.3;
            document.getElementById("label-"+key).style.opacity = 0.3;
            console.log("pass");
        }
    })
    
    var checked = document.querySelector('input[name="transport-type"]:checked').value;
    
    // also show time for the other elements
    var allTransports = document.getElementsByName("transport-type");
    for (i=0;i<allTransports.length;i++){
        console.log(allTransports[i].id)
        var currTransport = allTransports[i].id;
        // for each of these transports, display the time needed 
        console.log(range.get(currTransport)>=distance);        
        if (range.get(currTransport)>=distance) document.getElementById(currTransport+"-res").innerHTML = ((distance/transport.get(currTransport))*60).toString();
    }
    if (range.get(checked)>=distance) document.getElementById("result").innerHTML = "Time: " + ((distance/transport.get(checked))*60).toString();
    else document.getElementById("result").innerHTML = "Distance exceeds range";
    console.log(allTransports);

    
    
}