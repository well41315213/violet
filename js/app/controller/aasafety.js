/**
 * Created by Administrator on 2016/10/3.
 */

app.controller("aasafetyCtrl",["$scope",function(scope){
    $(".nav ul li").eq(2).addClass("on").siblings().removeClass("on");
}]);