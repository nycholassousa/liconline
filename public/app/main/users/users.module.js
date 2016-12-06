(function ()
{
    'use strict';

    angular
        .module('app.users',
            [
                'app.users.insert',
                'app.users.edit',
                'app.users.list'
            ]
        )
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        // Navigation
        msNavigationServiceProvider.saveItem('apps', {
            title : '',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('apps.users', {
            title : 'Usuários',
            icon  : 'icon-tile-four',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('apps.users.insert', {
            title: 'Inserir Usuário',
            state: 'app.users_insert'
        });

        msNavigationServiceProvider.saveItem('apps.users.edit', {
            title: 'Editar Usuário',
            state: 'app.users_edit'
        });

        msNavigationServiceProvider.saveItem('apps.users.list', {
            title: 'Listar Usuários',
            state: 'app.users_list'
        });

    }

})();