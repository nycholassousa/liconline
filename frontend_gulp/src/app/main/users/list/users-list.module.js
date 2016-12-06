(function ()
{
    'use strict';

    angular
        .module('app.users.list',
            [
                // 3rd Party Dependencies
                'nvd3'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, msApiProvider)
    {
        // State
        $stateProvider.state('app.users_list', {
            url      : '/users-list',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/users/list/users-list.html',
                    controller : 'UsersListController as vm'
                }
            },
            resolve  : {
                DashboardData: function (msApi)
                {
                    return msApi.resolve('users.list@get');
                }
            },
            bodyClass: 'users-list'
        });

        // Api
        msApiProvider.register('users.list', []);
    }

})();