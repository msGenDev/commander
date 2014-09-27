commander.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('command_sets_current', {
      url: '/command_sets/current',
      templateUrl: 'templates/redirect.html',
      controller: 'CommandSetCurrentController'
    })

    .state('command_sets_index', {
      url: '/command_sets/:index',
      templateUrl: 'templates/commands.html',
      controller: 'CommandSetController'
    })

    .state('connection', {
      url: '/connection',
      templateUrl: 'templates/connection.html',
      controller: 'ConnectionController'
    })

    .state('remotes', {
      url: '/remotes',
      templateUrl: 'templates/remotes.html',
      controller: 'RemotesController'
    })

    .state('remotes_config', {
      url: '/remotes_config',
      templateUrl: 'templates/remotes_config.html',
      controller: 'ConfigRemotesController'
    });

  $urlRouterProvider.otherwise('/command_sets/current');
});