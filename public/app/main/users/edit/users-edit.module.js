(function ()
{
    'use strict';

    angular
        .module('app.users.edit',
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
        $stateProvider.state('app.users_edit', {
            url      : '/users-edit',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/users/edit/users-edit.html',
                    controller : 'UsersEditController as vm'
                }
            },
            resolve  : {
                DashboardData: function (msApi)
                {
                    return msApi.resolve('users.edit@get');
                }
            },
            bodyClass: 'users-edit'
        });

        // Api
        msApiProvider.register('users.edit', []);
    }

})();