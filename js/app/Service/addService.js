/**
 * Created by iwen on 2016/9/29.
 */


app.filter("add",function () {
    return function (add) {
        if (add){
            return "+";
        }else{
            return "-";
        }
    }
});

app.filter("stutas",function () {
    return function (str) {
        if (str == "success"){
            return "成功";
        }else if(str == "error"){
            return "失败";
        }else{
            return "交易中";
        }
    }
});