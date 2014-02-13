$(document).ready(function(){
$.getJSON("http://abs-crm.com/delivery_system/order_list.php?status=3&phone=9164066910",function(data){
$.each(data.result,function(){
$("ul").append("<li>"+this['remain_time']+"</li><li>"+this['remain_time']+"</li><br/>");
});
});
});