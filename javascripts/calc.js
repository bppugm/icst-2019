/*!
  * Calculator for UASC fees
  * Developed by Yoga (https://github.com/febriyanyoga) on 2018
  */

function show(){
    $('#print-area-non').show();
    $('#print-area').show();
  }
  function hide(){
    $('#print-area-non').hide();
    $('#print-area').hide();
  }
  $('#print-area-non').hide();
  $('#print-area').hide();
  $('#count').click(function(){
     var presenter = parseInt($('input[name="presenter"]:checked').val());//presenter
     var from = $('#1 :selected').val();//presenter no
     var from2 = $('#12 :selected').val(); //presenter yes
     var student = parseInt($('input[name="student"]:checked').val());
     var ieee = parseInt($('input[name="ieee"]:checked').val());
     var numofpaper = $('#text').val();
     if(numofpaper == 1){
       $("#n").text('one');
       $("#nP").text('one');
     }else if(numofpaper == 2){
       $("#n").text('two');
       $("#nP").text('two');
     }else if(numofpaper == 3){
       $("#n").text('three');
       $("#nP").text('three');
     }else if(numofpaper == 4){
       $("#n").text('four');
       $("#nP").text('four');
     }else if(numofpaper == 5){
       $("#n").text('five');
       $("#nP").text('five');
     }else if(numofpaper == 6){
       $("#n").text('six');
       $("#nP").text('six');
     }else if(numofpaper == 7){
       $("#n").text('seven');
       $("#nP").text('seven');
     }else if(numofpaper == 8){
       $("#n").text('eight');
       $("#nP").text('eight');
     }else if(numofpaper == 9){
       $("#n").text('nine');
       $("#nP").text('nine');
     }else if(numofpaper == 10){
       $("#n").text('ten');
       $("#nP").text('ten');
     }else{
       $("#n").text(numofpaper);
       $("#nP").text(numofpaper);
     }
 
     var f1 = 3000000;
     var f2 = 3500000;
     var f3 = f1;
     var f4 = f2;
     var f5 = 250;
     var f6 = f5;
     var f7 = 300;
     var f8 = f7;
     var f9 = 1500000;
     var f10 = 150;
 
     var a1 = 1500000;
     var a2 = 2000000;
     var a3 = a1;
     var a4 = a2;
     var a5 = 100;
     var a6 = a5;
     var a7 = 150;
     var a8 = a7;
 
     var e1 = 1000000;
     var e2 = e1;
     var e3 = e1;
     var e4 = e1;
     var e5 = 50;
     var e6 = e5;
     var e7 = e5;
     var e8 = e5;
     var e9 = 500000;
     var e10 = e5;    
 
     if(presenter == 1){
       $("#varTypeOfPresenter").text(": Presenter");
       $("#varTypeOfPresenterP").text(": Presenter");
     }else{
       $("#varTypeOfPresenter2").text(": Non-presenter");
       $("#varTypeOfPresenter2P").text(": Non-presenter");
     }
 
     var from2 = $('#12 :selected').text(); //presenter yes
     $("#varCountry").text(": "+from2);
     $("#varCountryP").text(": "+from2);
 
 
     var from = $('#1 :selected').text(); //presenter no
     $("#varCountry2").text(": "+from);
     $("#varCountry2P").text(": "+from);
 
     if(student == 1){
       $("#varStatus").text(": Student");
       $("#varStatusP").text(": Student");
     }else{
       $("#varStatus").text(": Non-student");
       $("#varStatusP").text(": Non-student");
     }
 
     if(ieee == 1){
       $("#VarIeee").text(": Member");
       $("#VarIeeeP").text(": Member");
     }else{
       $("#VarIeee").text(": Non-member");
       $("#VarIeeeP").text(": Non-member");
     }
 
 
     if(presenter != 1 && presenter != 2){
       $('#costearly').val('');
       $('#costreg').val(''); 
       alert("You have not selected the 'type of participation'. Please complete the form to continue.");
       return false;
     }else if(presenter == 1){
       if(student !=1 && student !=2){
         $('#costearly').val('');
         $('#costreg').val(''); 
         alert("You haven't selected the 'status'. Please complete the form to continue.");
         return false;
       }else if(ieee !=1 && ieee !=2){
         $('#costearly').val('');
         $('#costreg').val(''); 
         alert("You haven't selected the 'IEEE membership'. Please complete the form to continue.");
         return false;
       }else if ( numofpaper == '') {
         $('#costearly').val('');
         $('#costreg').val(''); 
         alert("You have not entered the 'Numbers of Papers'. Please complete the form to continue.");
         return false;
       }
     }
 
     if(presenter == 2){//no
       if(from == 'Indonesia'){ //yes
        $("#b2").text(f9).formatCurrency();
        $("#f2").text(f9).formatCurrency();
        $("#g2").text(e9).formatCurrency();
        $("#h2").text(f9-e9).formatCurrency();
        // Print
        $("#b2P").text(f9).formatCurrency();
        $("#f2P").text(f9).formatCurrency();
        $("#g2P").text(e9).formatCurrency();
        $("#h2P").text(f9-e9).formatCurrency();
       }else{ //no
         if(from != 'Indonesia'){
           var h2 = f10-e10;
           $("#b2").text('USD' + f10);
           $("#f2").text('USD' + f10);
           $("#g2").text('USD' + e10);
           $("#h2").text('USD' + h2);
           // Print
           $("#b2P").text('USD' + f10);
           $("#f2P").text('USD' + f10);
           $("#g2P").text('USD' + e10);
           $("#h2P").text('USD' + h2);
         }
       } 
     }else{
 
     if (presenter == 1 && numofpaper != ''){ //yes
       if(from2 == 'Indonesia' && numofpaper != ''){
         if(student == 1 && numofpaper != ''){ //yes
           if(ieee == 1 && numofpaper != ''){
             $("#a").text(f1).formatCurrency();
             $("#b").text(f1).formatCurrency();
             $("#c").text((numofpaper-1));
             $("#d").text(a1).formatCurrency();
             $("#e").text(((numofpaper-1)*a1)).formatCurrency();
             $("#f").text(f1+((numofpaper-1)*a1)).formatCurrency();
             $("#g").text(e1).formatCurrency();
             $("#h").text((f1+((numofpaper-1)*a1))-e1).formatCurrency();
             // print
             $("#aP").text(f1).formatCurrency();
             $("#bP").text(f1).formatCurrency();
             $("#cP").text((numofpaper-1));
             $("#dP").text(a1).formatCurrency();
             $("#eP").text(((numofpaper-1)*a1)).formatCurrency();
             $("#fP").text(f1+((numofpaper-1)*a1)).formatCurrency();
             $("#gP").text(e1).formatCurrency();
             $("#hP").text((f1+((numofpaper-1)*a1))-e1).formatCurrency();
           }else if (ieee == 2 && numofpaper != ''){
             $("#a").text(f2).formatCurrency();
             $("#b").text(f2).formatCurrency();
             $("#c").text((numofpaper-1));
             $("#d").text(a2).formatCurrency();
             $("#e").text(((numofpaper-1)*a2)).formatCurrency();
             $("#f").text(f2+((numofpaper-1)*a2)).formatCurrency();
             $("#g").text(e2).formatCurrency();
             $("#h").text((f2+((numofpaper-1)*a2))-e2).formatCurrency();
             // Print
             $("#aP").text(f2).formatCurrency();
             $("#bP").text(f2).formatCurrency();
             $("#cP").text((numofpaper-1));
             $("#dP").text(a2).formatCurrency();
             $("#eP").text(((numofpaper-1)*a2)).formatCurrency();
             $("#fP").text(f2+((numofpaper-1)*a2)).formatCurrency();
             $("#gP").text(e2).formatCurrency();
             $("#hP").text((f2+((numofpaper-1)*a2))-e2).formatCurrency();
           }
         }else if (student == 2 && numofpaper != ''){ //no
           if(ieee == 1 && numofpaper != ''){
             $("#a").text(f3).formatCurrency();
             $("#b").text(f3).formatCurrency();
             $("#c").text((numofpaper-1));
             $("#d").text(a3).formatCurrency();
             $("#e").text(((numofpaper-1)*a3)).formatCurrency();
             $("#f").text(f3+((numofpaper-1)*a3)).formatCurrency();
             $("#g").text(e3).formatCurrency();
             $("#h").text((f3+((numofpaper-1)*a3))-e3).formatCurrency(); 
             // Print
             $("#aP").text(f3).formatCurrency();
             $("#bP").text(f3).formatCurrency();
             $("#cP").text((numofpaper-1));
             $("#dP").text(a3).formatCurrency();
             $("#eP").text(((numofpaper-1)*a3)).formatCurrency();
             $("#fP").text(f3+((numofpaper-1)*a3)).formatCurrency();
             $("#gP").text(e3).formatCurrency();
             $("#hP").text((f3+((numofpaper-1)*a3))-e3).formatCurrency(); 
           }else if (ieee == 2 && numofpaper != ''){
             $("#a").text(f4).formatCurrency();
             $("#b").text(f4).formatCurrency();
             $("#c").text((numofpaper-1));
             $("#d").text(a4).formatCurrency();
             $("#e").text(((numofpaper-1)*a4)).formatCurrency();
             $("#f").text(f4+((numofpaper-1)*a4)).formatCurrency();
             $("#g").text(e4).formatCurrency();
             $("#h").text((f4+((numofpaper-1)*a4))-e4).formatCurrency();
             // Print
             $("#aP").text(f4).formatCurrency();
             $("#bP").text(f4).formatCurrency();
             $("#cP").text((numofpaper-1));
             $("#dP").text(a4).formatCurrency();
             $("#eP").text(((numofpaper-1)*a4)).formatCurrency();
             $("#fP").text(f4+((numofpaper-1)*a4)).formatCurrency();
             $("#gP").text(e4).formatCurrency();
             $("#hP").text((f4+((numofpaper-1)*a4))-e4).formatCurrency();
           }
         }
    }else if (from2 != 'Indonesia' && numofpaper != ''){ //no
     if(student == 1 && numofpaper != ''){ //yes
       if(ieee == 1 && numofpaper != ''){
         var e = (numofpaper-1)*a5;
         var f = f5+((numofpaper-1)*a5);
         var h = (f5+((numofpaper-1)*a5))-e5;
 
         $("#a").text('USD'+f5);
         $("#b").text('USD'+f5);
         $("#c").text((numofpaper-1));
         $("#d").text('USD'+a5);
         $("#e").text('USD'+ e);
         $("#f").text('USD'+ f);
         $("#g").text('USD'+e5);
         $("#h").text('USD'+ h);
         // Print
         $("#aP").text('USD'+f5);
         $("#bP").text('USD'+f5);
         $("#cP").text((numofpaper-1));
         $("#dP").text('USD'+a5);
         $("#eP").text('USD'+ e);
         $("#fP").text('USD'+ f);
         $("#gP").text('USD'+e5);
         $("#hP").text('USD'+ h);
       }else if (ieee == 2 && numofpaper != ''){
         var e = (numofpaper-1)*a6;
         var f = f6+((numofpaper-1)*a6);
         var h = (f6+((numofpaper-1)*a6))-e6;
 
         $("#a").text('USD'+f6);
         $("#b").text('USD'+f6);
         $("#c").text((numofpaper-1));
         $("#d").text('USD'+a6);
         $("#e").text('USD'+ e);
         $("#f").text('USD'+ f);
         $("#g").text('USD'+e6);
         $("#h").text('USD'+ h);
         // Print
         $("#aP").text('USD'+f6);
         $("#bP").text('USD'+f6);
         $("#cP").text((numofpaper-1));
         $("#dP").text('USD'+a6);
         $("#eP").text('USD'+ e);
         $("#fP").text('USD'+ f);
         $("#gP").text('USD'+e6);
         $("#hP").text('USD'+ h);
       }
         }else if (student == 2 && numofpaper != ''){ //no
           if(ieee == 1 && numofpaper != ''){
             var e = (numofpaper-1)*a7;
             var f = f7+((numofpaper-1)*a7);
             var h = (f7+((numofpaper-1)*a7))-e7;
 
             $("#a").text('USD'+f7);
             $("#b").text('USD'+f7);
             $("#c").text((numofpaper-1));
             $("#d").text('USD'+a7);
             $("#e").text('USD'+ e);
             $("#f").text('USD'+ f);
             $("#g").text('USD'+ e7);
             $("#h").text('USD'+ h);
             // Print
             $("#aP").text('USD'+f7);
             $("#bP").text('USD'+f7);
             $("#cP").text((numofpaper-1));
             $("#dP").text('USD'+a7);
             $("#eP").text('USD'+ e);
             $("#fP").text('USD'+ f);
             $("#gP").text('USD'+ e7);
             $("#hP").text('USD'+ h);
           }else if (ieee == 2 && numofpaper != ''){
            var e = (numofpaper-1)*a8;
            var f = f8+((numofpaper-1)*a8);
            var h = (f8+((numofpaper-1)*a8))-e8;
 
            $("#a").text('USD'+f8);
            $("#b").text('USD'+f8);
            $("#c").text((numofpaper-1));
            $("#d").text('USD'+a8);
            $("#e").text('USD'+ e);
            $("#f").text('USD'+ f);
            $("#g").text('USD'+e8);
            $("#h").text('USD'+ h);
            // Print
            $("#aP").text('USD'+f8);
            $("#bP").text('USD'+f8);
            $("#cP").text((numofpaper-1));
            $("#dP").text('USD'+a8);
            $("#eP").text('USD'+ e);
            $("#fP").text('USD'+ f);
            $("#gP").text('USD'+e8);
            $("#hP").text('USD'+ h);
          }
        }
      }
    }
  }
 
 });
 
 $(function(){
   $("#1,#11,#111").hide();
   $("input:radio#presenterno").click(function(){
     $("#2,#21,#3,#31,#numofpaper, #12,#121,#122").hide();
     $("#1,#11,#111").show();
     // alert("iki alert cuk");
     $("#count").attr('data-target', '#myModal2');
   });
   $("input:radio#presenteryes").click(function(){
    $("#1,#11,#111").hide();
    $('#costreg').val('');
    $('#costearly').val('');
    $("#2,#21,#3,#31,#12,#121,#122,#btncount, #numofpaper").show();
    $("#count").removeAttr('data-target', '#myModal2');
    $("#count").attr('data-target', '#myModal');
  })
 });