'use strict';

angular.module('doujinReleaseTracker')
  .constant('Config', angular.deepExtend({
    viewsDir: 'views/',
    componentsDir: 'components/',
    statesDir: 'states/',
    environment: 'production', //development or production
    event: 'comiket', // comiket, m3, vocamas
    URL: {
      protocol: window.location.protocol.split(':')[0], //Use the same protocol, host and port as the UI is hosted from bu default
      host: window.location.hostname,
      port: String(window.location.port || 80),
      path: '/'
    },
    API: {
      protocol: 'https', //Use the same protocol, host and port as the UI is hosted from bu default
      host: 'intense-fire-9416.firebaseio.com/',
      port: String(window.location.port || 80)
    }
  }, angular._localConfig || {}))
  .config(function (componentFactoryProvider) {
    componentFactoryProvider.setViewPath(function (componentSnakeName, componentName) {
      return 'components/' + componentSnakeName + '/' + componentSnakeName + '.html';
    });
  })
  .value('cgBusyTemplateName', 'views/angular-busy/default-spinner.html')
  .factory('BaseUrl', function (Config) {
    return (Config.URL.protocol + '://' + Config.URL.host + ':' + Config.URL.port + '/');
  })
  .factory('APIBaseUrl', function (Config) {
    return (Config.API.protocol + '://' + Config.API.host + Config.event + '/');
  });
