// Setup requirejs to have the right base URL
global.requirejs = require("requirejs");

requirejs.config({
    nodeRequire: require,
    baseUrl: __dirname,
    //packages: ['states', 'components'],
    // shim: {
    //     'jsRoutes': {
    //         deps: [],
    //         // it's not a RequireJS module, so we have to tell it what var is returned
    //         exports: 'jsRoutes'
    //     },
    //     // Hopefully this all will not be necessary but can be fetched from WebJars in the future
    //     'angular': {
    //         deps: ['jquery'],
    //         exports: 'angular'
    //     },
    //     'angular-route': ['angular'],
    //     'angular-cookies': ['angular'],
    //     'bootstrap': ['jquery']
    // },
    paths: {
        // 'requirejs': ['./lib/requirejs/require'],
        // 'jquery': ['./lib/jquery/jquery'],
        'angular': ['lib/angularjs/angular'],
        'angular-mocks': ['lib/angular-mocks/angular-mocks']
        // ,
        // 'angular-route': ['./lib/angularjs/angular-route'],
        // 'angular-cookies': ['./lib/angularjs/angular-cookies'],
        // 'bootstrap': ['./lib/bootstrap/js/bootstrap'],
        // 'jsRoutes': ['/jsroutes']
    }
});

// A few modules that all tests will use

// var jsdom = require('jsdom').jsdom;
//
// global.document = jsdom('<html><head><script></script></head><body></body></html>');
// global.window = global.document.parentWindow;
// global.navigator = window.navigator = {};
//global.Squire = requirejs("lib/squirejs/Squire");
global.assert = require("assert");
