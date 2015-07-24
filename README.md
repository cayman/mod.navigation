#mod.navigation - Компонента навигации
## Описание
Отображение основного навигационного меню на портале.
Компонента реализована как директива Angular. Реализован как атрибут navigation.
<div class="clear" navigation="{{ app.name }}">
</div>
###Параметр (значение атрибута)
В качестве параметра передается название текущего приложение
###Настройки компоненты
**config.yml**
    mod:
        navigation:
            version: 0.1.6 # версия
            search: true # отображение строки поиска
            menu: ... # древовидное меню
**Структура элементов меню**
    mod.navigation.menu.items:
         - { id: rootnav_index, href: index.html, name: Taskurotta }
###Сборка
При сборки портала, файла конфигурации перезаписывает значения полей конфигурационным файлом
приложения а затем общим конфигурационным файлом портала (при наличии схожих полей).

## Использование
- Используется шаблоном портала template,
 в шаблоне template/src/_includes/header.hbs
Внутри самих приложений не используется

## Зависимости
- [Компонета mod.core](mode_core/mod/core)


#Функции

##Функция navigationMod.trimParams(params, simbols)
Удаление начальных и конечных символов simbols у полей объекта  params
Если не передавать второй аргумент, то по умолчанию simbols = '-.,;:()'

##Функция navigationMod.queryParams(params)
Получение параметров в виде строки вида ?key1=value&key2=value2 ...
из параметра заданы как объект (ключ, значение)

##Функция navigationMod.href(path, params)
Получение ссылки с параметрами, парметры заданы как объект (ключ, значение)
использует функцию navigationMod.queryParams

##Функция navigationMod.go(path, params)
Переход по ссылке с параметрами, парметры заданы как объект (ключ, значение),
использует функцию navigationMod.href

##Функция navigationMod.back()
Переход по истории назад