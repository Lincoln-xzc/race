/**
 * Created by MAKS- on 2015/8/26.
 */
angular.module('F1FeederApp.filters',[]).filter('searchFilter',function($scope){
       return function(driver){
        var re=new RegExp($scope.filterName,'i');
        return !$scope.filterName || re.test(driver.Driver.givenName)|| re.test(driver.Driver.familyName);
    };
 });