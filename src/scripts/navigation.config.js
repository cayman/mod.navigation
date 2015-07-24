_navigationMod.config(function (navigationModProvider) {
    console.log('navigationMod.config');
    navigationModProvider.setModName('navigation');
    navigationModProvider.setNavbarTemplate('mod/navigation/views/navbar.html');
});

