/**
 * Created by Administrator on 2016/10/3.
 */

app.config(["$routeProvider","Route",function(routeProvider,Route){
    routeProvider
        .when(Route.aawallet,{
            templateUrl:"views/aawallet.html",
            controller:"aawalletCtrl"
        })
        .when(Route.aasearch,{
            templateUrl:"views/aasearch.html",
            controller:"aasearchCtrl"
        })
        .when(Route.aasafety,{
            templateUrl:"views/aasafety.html",
            controller:"aasafetyCtrl"
        })

        .when(Route.ssrecharge,{
            templateUrl:"views/ssrecharge.html",
            controller:"ssrecharge"
        })
        .when(Route.sscash,{
            templateUrl:"views/sscash.html",
            controller:"sscash"
        })
        .when(Route.sscard,{
            templateUrl:"views/sscard.html",
            controller:"sscard"
        })
        .when(Route.ssbill,{
            templateUrl:"views/ssbill.html",
            controller:"ssbill"
        })
        .when(Route.ssqqcoin,{
            templateUrl:"views/ssqqcoin.html",
            controller:"ssqqcoin"
        })
          .when(Route.ssskycoin,{
            templateUrl:"views/ssskycoin.html",
            controller:"ssskycoin"
        })


        .otherwise({
            redirectTo:Route.aawallet
        })
}]);
