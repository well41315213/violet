/**
 * Created by Administrator on 2016/9/29.
 */


app.service("http",function($http){
   var doRequest=function(url){
       return $http({
           method:"get",
           url:url
       })
   };

    return{
        getInfo:function(url){
            return doRequest(url)
        }
    }


});