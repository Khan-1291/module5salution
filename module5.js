function initRandomCategoryShortName() {
    var categories = ['L', 'D', 'S', 'A', 'B']; // List of category short names
    var randomIndex = Math.floor(Math.random() * categories.length); // Generate a random index
    randomCategoryShortName = categories[randomIndex]; // Assign a random category short name
}
function loadMenuItems(categoryShortName) {
    $ajaxUtils.sendGetRequest(menuItemsUrl, function(response) {
        var menuItems = response.menu_items;
        var categoryMenuItems = menuItems.filter(function(item) {
            return item.short_name === categoryShortName;
        });
        // Display the category menu items on the page
    });
}
function onClickSpecials() {
    initRandomCategoryShortName(); // Generate random category short name
    loadMenuItems(randomCategoryShortName); // Load menu items for the random category
}
document.querySelector('#specials').addEventListener('click', onClickSpecials);
document.querySelector('.navbar-brand').addEventListener('click', function() {
    document.querySelector('#menu-items').innerHTML = '';
});
