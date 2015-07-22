angular.module('app.controllers').controller('mainCtrl', function ($scope, $q, $http, $stateParams) {
  var vm = $scope.vm = {};
  vm.pay = function () {
    var data = '{"channel":"upacp_wap","amount":10000,"open_id":""}';
    vm.sendPostReq("/pingapp/pay", data).then(function (data) {
      console.log(JSON.stringify(data));
      pingpp.createPayment(data, function (result, error) {
        console.log(result);
        if (result == "success") {
          console.log("success");
          // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的 wap 支付结果都是在 extra 中对应的 URL 跳转。
        } else if (result == "fail") {
          console.log("fail");
          // charge 不正确或者微信公众账号支付失败时会在此处返回
        } else if (result == "cancel") {
          console.log("cancel");
          // 微信公众账号支付取消支付
        }
      });
    });
  };


  vm.sendPostReq = function (url, data) {
    var deferred = $q.defer();
    $http.post(url, data)
      .success(function (result) {
      deferred.resolve(result);
    }).error(function (data, status) {
      deferred.reject(data);
      console.log("error");
      return deferred.promise;
    });
    return deferred.promise;
  };
});