/**
 * Created by MAKS- on 2015/8/26.
 */
angular.module('F1FeederApp.controllers',[])
    .controller(
    'driversController',function($scope,ergastAPIservice){
      $scope.nameFilter=null;
      $scope.driversList=[];
      ergastAPIservice.getDrivers().success(function(response){
         $scope.driversList=response.MRData.StandingsTable.StandingsLists[0].DriverStandings;

      });
    })
    .controller('driverController',function($scope,$routeParams,ergastAPIservice){
    $scope.id=$routeParams.id;
    $scope.races=[];
    $scope.driver=null;

    ergastAPIservice.getDriverDetails($scope.id).success(function(response){
        $scope.driver=response.MRData.StandingsTable.StandingLists[0].DriverStandings[0];
    });
    ergastAPIservice.getDriverRaces($scope.id).success(function(response){
        $scope.races=response.MRData.RaceTable.Races;
    });
});