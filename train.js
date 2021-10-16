function buy(){
    var name = document.getElementById("nm").value;
    var phone = document.getElementById("num").value;
    var Loc = document.getElementById("loc").value;
    var dest =  document.getElementById("dest").value;
    var type = document.getElementById("triptype").value;
    var date = document.getElementById("date").value;


 var traveller = {name:name, phone:phone, location:Loc, destination:dest,date:date,TripType:type};
    localStorage.setItem("traveller",JSON.stringify(traveller));
    phone.value="";
    name.value="";
}




function check(){

    var person = JSON.parse(localStorage.getItem("traveller"))

    var myWindow = window.open("", "MsgWindow", "width=800,height=800 ");
    myWindow.style = backgroundColor='white';
    myWindow.document.write("<p>"+'Traveler Name: '+person.name+"</p>");
    myWindow.document.write("<p>"+'Traveler phone number: '+person.phone+"</p>");
    myWindow.document.write("<p>"+'Location: '+person.location+"</p>");
    myWindow.document.write("<p>"+'Destination: '+person.destination+"</p>");
    myWindow.document.write("<p>"+'Trip Type: '+person.TripType+"</p>");
    myWindow.document.write("<p>"+'Travel Date: '+person.date+"</p>");
    if(person.TripType =="Single Trip"){
        myWindow.document.write("Ticket price : 100 LE. ")
    }
    else if(person.TripType =="Round Trip"){
        myWindow.document.write("Ticket price : 200 LE. ")
    }
    myWindow.document.write(' <br> <br>  <input type="button" value="Print"  />')
}