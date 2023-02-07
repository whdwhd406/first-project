
function linksetColor(color){
   var alist = document.querySelectorAll('a');
var i = 0;
while(i < alist.length){
 alist[i].style.color = color;
 i = i + 1;
 }


}

    function bodysetColor(color){
      document.querySelector('body').style.color = color;

    }
    function nightdayhandler(self){
    var target = document.querySelector('body')
if (self.value ==='night'){
target.style.backgroundColor='black';
bodysetColor('white');
self.value ='day';
linksetColor('powderblue');


}else{
target.style.backgroundColor='white';
bodysetColor('black');
self.value ='night';

linksetColor('blue');

}
    }