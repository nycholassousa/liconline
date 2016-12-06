(function ()
{
    'use strict';

    angular
        .module('app.users.insert', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.users_insert', {
            url      : '/users/insert',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/users/insert/users-insert.html',
                    controller : 'UsersInsertController as vm'
                }
            },
            bodyClass: 'users-insert'
        });
    }

})();