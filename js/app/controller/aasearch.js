/**
 * Created by Administrator on 2016/10/3.
 */

//app.controller("aasearchCtrl",["$scope",function(scope){
//    $(".nav ul li").eq(1).addClass("on").siblings().removeClass("on");
//
//
//}]);

app.controller("aasearchCtrl",["$scope","http",function(scope,http){
    $(".nav ul li").eq(1).addClass("on").siblings().removeClass("on");
    //alert(11)

    //http.getInfo("http://localhost:8000/month444444444/two_week/tr/userInfo.php").success(function(data){
    //
    //    scope.user=data;
    //});

    http.getInfo("http://localhost:8000/month444444444/two_week/tr/userSearch.php").success(function (data) {
        scope.Selects = data;
    })
}]);
