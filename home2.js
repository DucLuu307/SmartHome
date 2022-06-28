const firebaseConfig = {
    apiKey: "AIzaSyDyovdWHCdFI4mo2TrLTcDkT0vadGGYzew",
    authDomain: "thuc-hanh-chuyen-sau-ef096.firebaseapp.com",
    databaseURL: "https://thuc-hanh-chuyen-sau-ef096-default-rtdb.firebaseio.com",
    projectId: "thuc-hanh-chuyen-sau-ef096",
    storageBucket: "thuc-hanh-chuyen-sau-ef096.appspot.com",
    messagingSenderId: "1004545709498",
    appId: "1:1004545709498:web:a48a1baf88e71d4216f983",
    measurementId: "G-8XD24VNH63"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var tb1 = document.querySelectorAll('.devcie')


var tb2 = document.querySelectorAll('.devcie')
for( var i = 0;i<tb2.length;i++){
    var c = tb2[1].querySelector('input')
    c.onchange = function(e){
        if(e.target.checked){
            database.ref("home2").update({
                "thietbi1":1,
            })

            var tb1 = document.querySelectorAll('.devcie');
            var three = tb1[1];
            if(three.classList.contains('change')){
                three.classList.remove('change');
            }
            else{
                three.classList.add("change");
            }
            var dis3 = three.querySelector('.dis-not')
            dis3.style.display = "none";
            var load3 = three.querySelector('.load')
            load3.style.display = "block";
            var icon3 = three.querySelector('.icon');
            icon3.classList.add('back');
        }
        else{
            database.ref("home2").update({
                "thietbi1":0,
            })

            var tb1 = document.querySelectorAll('.devcie');
            var three = tb1[1];
            if(three.classList.contains('change')){
                three.classList.remove('change');
            }    
            var dis2 = three.querySelector('.dis-not')
            dis2.style.display = "block";
            var load2 = three.querySelector('.load')
            load2.style.display = "none";
            var icon3 = three.querySelector('.icon');
            icon3.classList.remove('back')
        }
    }
}

var tb3 = document.querySelectorAll('.devcie')
for( var i = 0;i<tb3.length;i++){
    var c = tb3[2].querySelector('input')
    c.onchange = function(e){
        if(e.target.checked){
            database.ref("home2").update({
                "thietbi2":1,
            })

            var tb1 = document.querySelectorAll('.devcie');
            var three = tb1[2];
            if(three.classList.contains('change')){
                three.classList.remove('change');
            }
            else{
                three.classList.add("change");
            }
            var dis3 = three.querySelector('.dis-not')
            dis3.style.display = "none";
            var load3 = three.querySelector('.load')
            load3.style.display = "block";
            var icon3 = three.querySelector('.icon');
            icon3.classList.add('back');
        }
        else{
            database.ref("home2").update({
                "thietbi2":0,
            })

            var tb1 = document.querySelectorAll('.devcie');
            var three = tb1[2];
            if(three.classList.contains('change')){
                three.classList.remove('change');
            }    
            var dis2 = three.querySelector('.dis-not')
            dis2.style.display = "block";
            var load2 = three.querySelector('.load')
            load2.style.display = "none";
            var icon3 = three.querySelector('.icon');
            icon3.classList.remove('back')
        }
    }
}
