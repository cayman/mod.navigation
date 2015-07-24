_navigationMod.directive('navigationBar', function (navigationMod,$log,$document,$timeout) {
    $log.info('navigation-bar.directive');
    return {
        restrict: 'A',
        templateUrl: navigationMod.getNavbarTemplate(),
        scope: false,
        link: function (scope, element, attrs) {
            scope.menu = navigationMod.getMenu();

            function closeMenu(event) {

                event.stopPropagation();

                scope.$apply(function(){
                    for (var i = 0; i < scope.menu.items.length; i++) {
                        scope.menu.items[i].isActive = false;
                    }
                });

            }

            element.parent().bind('click', closeMenu );
            element.parent().parent().bind('click', closeMenu );

            scope.toggleMenu = function (selectedItem) {
                if(!selectedItem.isActive){
                    $timeout(function(){
                        selectedItem.isActive = true;
                    },50);
                }
            };
        }
    };
});

_navigationMod.directive('navigationBreadcrumbs', function (navigationMod,$log) {
    $log.info('navigation-breadcrumbs.directive');
    return {
        restrict: 'A',
        templateUrl: navigationMod.getBreadcrumbsTemplate(),
        scope: false,
        link: function (scope, element, attrs) {
            scope.breadcrumbs = navigationMod.getBreadcrumbs();
        }
    };
});

_navigationMod.directive('navigationBack', function($log,$window,navigationMod){
    $log.info('navigation-back.directive');
    return {
        restrict: 'A',

        link: function(scope, element, attrs) {
            element.bind('click', function () {
                navigationMod.back(scope);
            });
        }
    };
});
