_navigationMod.provider('navigationMod', function () {
    console.log('navigationMod.provider');
    var _name = 'navigation';
    this.setModName = function (modName) {
        _name = modName;
    };
    // templates
    var _navbarTemplate = null;
    var _breadcrumbsTemplate = null;
    this.setNavbarTemplate = function (template) {
        _navbarTemplate = template;
    };
    this.setBreadcrumbsTemplate = function (template) {
        _breadcrumbsTemplate = template;
    };
    this.$get = function ($log, $rootScope,$window, coreMod) {
        $log.log('navigationMod.provider.$get');

        var _config = coreMod.configMod(_name);

        return {
            getMenu: function () {
                return _config.menu;
            },
            trim: function(str,simbols) {
                if(!simbols){
                    simbols = '-.,;:()';
                }
                return str ? str.replace(new RegExp('\\s*['+simbols.trim()+']\\s*$'),'').
                    replace(new RegExp('^\\s*['+simbols.trim()+']\\s*'),''): str;
            },
            trimParams: function (params,simbols){
                if(params){
                    for (var key in params){
                        if(params[key]){
                            params[key] = this.trim(params[key],simbols);
                        }
                    }
                }
            },
            queryParams: function (params)
            {
                var ret = [];
                for (var key in params){
                    if(params[key]){
                        ret.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
                    }
                }
                return '?'+ret.join('&');
            },
            href: function(path, params){
                return path + this.queryParams(params);
            },
            go: function(path, params){
                $window.location.href = this.href(path, params);
            },
            back: function (){
                $window.history.back();
            },
            getBreadcrumbs: function () {
                return _config.breadcrumbs;
            },
            getNavbarTemplate: function () {
                return _navbarTemplate;
            },
            getBreadcrumbsTemplate: function () {
                return _breadcrumbsTemplate;
            },
            getAnimateTime: function () {
                return _config.animateTime || 400;
            }
        };
    };
    this.$get.$inject = ['$log', '$rootScope','$window','coreMod'];
});
