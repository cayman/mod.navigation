/**
 * Created by Zakirov.RR on 05.08.13.
 */

describe('Navigation menu tests ',function(){
    var compile;
    var rootScope;
    var config = {
        menu: {
            active: 0,
            items: [
                {id: 'rootnav_index', href: 'index.html', name: 'Taskurotta' },
                {id: 'rootnav_get_started', href: 'get_started.html', name: 'Введение' },
                {id: 'rootnav_road_map', href: 'road_map.html', name: 'План'},
                {id: 'rootnav_doc', href: '#', name: 'Документация (TODO)',
                    items: [
                        {id: '1', href: '#', name: 'Основная концепция' },
                        {id: '2', href: '#', name: 'Сценарии использования'},
                        {id: '3', delim: true, href: '#', name: 'Пакеты' },
                        {id: '4', href: '#', name: 'Аннотации' },
                        {id: '5', href: '#', name: 'Исключения' },
                        {id: '6', href: '#', name: 'Мониторинг' },
                        {id: '7', delim: true, href: '#', name: 'Unit тесты' },
                        {id: '8', href: '#', name: 'Регрессионное тестирование' },
                        {id: '9', href: '#', name: 'A/B тестирование' }
                    ]}
            ]
        }
    };
    beforeEach(module('navigationMod'));
    beforeEach(module(function(navigationModProvider){
            navigationModProvider.setMenuTemplate('mod/navigation/views/menu.html');
            navigationModProvider.setConfig(config);
        }
    ));
    beforeEach(inject(function ($compile, $rootScope) {
        compile = $compile;
        rootScope = $rootScope;
    }));

    it('The menu config mast be defined', function () {
        var element = compile('<nav id="mainMenu" navigation-menu></nav>')(rootScope);
        rootScope.$digest();
        var menu = element.find('ul li a');
        expect(menu.length).toBe(4);
        expect(menu.html()).toBe(config.menu.items[0].name);
        expect(menu.eq(3).html()).toBe(config.menu.items[3].name);
        var menu0 = element.find('ul li span');
        expect(menu0.length).toBe(4);
        expect(menu0.html()).toBe(config.menu.items[0].name);
    });
//
//        it('The menu has the required item index.html ',function(){
//            var element = compile('<nav id="mainMenu" navigation-menu></nav>')(rootScope);
//            expect(element.html('ul li')).toBe(4);
//        });
//
//    it('The menu has the required item index.html ',function(){
//        var element = compile('<div class="navbar-inner" navigation="index"></div>')(rootScope);
//        expect(element.html()).toContain('href="index.html"');
////       expect(element.html('.navbar-nav li');).toBe(4);
//    });

});