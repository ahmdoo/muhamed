$("style").last().append(`

#users .uzr.ahm {
    background-color:#EBEBEB;
}
#users .uzr.ahm .u-topic {
  margin-left: 5px;
}



`);
var ahmed=setInterval(function(){
    if(myid!=null){
        clearInterval(ahmed);
        $("#users .uzr:contains('أَحمد')").addClass('ahm');
        $("#upro .fl.mini.u-co:contains('أَحمد')").addClass('amm');
        
		  $("#users .uzr.ahm span.uhash, #users .uzr.ahm img.co,#upro .fl.mini.u-co amm").hide(); 
        

    }
}, 10000);
