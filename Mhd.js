

$("style").last().append(`
#users .uzr.stl1 .fitimg.u-pic {
  border-radius: 100px !important;
  margin-top: 9px !important;
  height: 52px !important;
  margin-left: 13px!important;
  z-index: 0 !important;
}
#users .uzr.stl1 .d-flex.dots {
  margin-top: 7px !important;
  margin-left: 5px;
}
#users .uzr.stl1 .u-msg {
  text-align: center;
  -webkit-background-clip: text;
  padding: 1px !important;
  font-size: 89% !important;
  -webkit-text-fill-color: #0000;
  background-image: url(https://i.top4top.io/p_26369q1yt0.jpg);
  color: transparent !important;
  background-size: 90% 100%;
}
#users .uzr.stl1 .ustat {
  width: 54px !important;
  border-radius: 0px 50px 50px 50px !important;
  height: 52px !important;
  margin-top: 5px !important;
  min-height: 0% !important;
  margin-left: 10px;
  z-index: 0 !important;
  display: none;
}
#users .uzr.stl1 span.uhash {
  margin-right: 324px;
  margin-top: 24px;
  margin-left: 0px;
}
#users .uzr.stl1 img.co {
  transform: rotate(90deg);
  margin-top: -60px !important;
  margin-right: 282px;
}
#users .uzr.stl1 {
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  border-radius: 20px;
  background-size: cover;
  border: 1px solid #fff;
  background-color:#F0F0F0;
      background-size: cover;
}
#users .uzr.stl1 .c-flex.fr {
  margin-left: -4px!important;
  float: left;
  background-color: #EDEDED;
}

#users .uzr.stl1 .u-topic {
  margin-left: 15px
}


#users .uzr.stl1 .My_vedio1 {
  float: right;
  width: 20px;
  margin-top: 0px;
  margin-right: 5px;
  cursor: pointer;
}
`);
var me_user1=setInterval(function(){
    if(myid!=null){
        clearInterval(me_user1);
        $("#users .uzr:contains('Admin')").addClass('stl1');
        $("#users .uzr.stl1 .c-flex.fr").append('<img class="My_star1" src="">');
	
	
    
        $("#users .uzr.stl1 span.uhash, #users .uzr.stl1 img.co").hide(); 


        $("#upro").before('<div id="movon1" onclick="$(this).hide().html(``);" class="moveon1" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">'); 
        
        
        
        $("div#users .uzr:contains('Admin') .My_vedio1").click(function(){
        $("#movon1").show();
        
        $('#movon1').addClass('stl1');
        $("#movon1").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
        
        
        $("#movon1").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');
          
		  
        

       $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 10000);
