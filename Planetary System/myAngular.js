angular.module("planet-app", []).controller("myController", ($scope) => {
  $scope.planets = [
    { name: "Mercury", type: "Terrestrial", distance: 0.39, moons: 0 },
    { name: "Venus", type: "Terrestrial", distance: 0.72, moons: 0 },
    { name: "Earth", type: "Terrestrial", distance: 1.0, moons: 1 },
    { name: "Mars", type: "Terrestrial", distance: 1.52, moons: 2 },
    { name: "Jupiter", type: "Gas Giant", distance: 5.2, moons: 79 },
    { name: "Saturn", type: "Gas Giant", distance: 9.58, moons: 82 },
    { name: "Uranus", type: "Ice Giant", distance: 19.18, moons: 27 },
    { name: "Neptune", type: "Ice Giant", distance: 30.07, moons: 14 },
  ];
});
