/// <reference path="../GeneratedArtifacts/viewModel.js" />

var mapDiv;
var current = 0;
var step = 15;

myapp.Browse_nwCustomers.Customer_render = function (element, contentItem) {
    mapDiv = $('<div />').appendTo($(element));
    $(mapDiv).lightswitchBingMapsControl();

    var visualCollection = contentItem.value;
    if (visualCollection.isLoaded) {
        showItems(current, step, contentItem.screen);
    } else {
        visualCollection.addChangeListener("isLoaded", function () {
            showItems(current, step, contentItem.screen);
        });
        visualCollection.load();
    }
};

function showItems(start, end, screen) {
    $(mapDiv).lightswitchBingMapsControl("resetMap");

    $.each(screen.Customers.data, function (i, customer) {
        if (i >= start && i <= end) {
            $(mapDiv).lightswitchBingMapsControl("addPinAsync", customer.Address,
                customer.City, customer.Country, i + 1, function () {
                    screen.Customers.selectedItem = customer;
                    screen.showPopup("Customers_selectedItem");

                });
        }
    });
};
/* previous code will initialize Bing Maps control and add pins for first 15 items of list. List of 15 items will be placed by a map with 15 pins. Clicking a pin opens a details popup */
myapp.Browse_nwCustomers.NextItems_execute = function (screen) {
    // Write code here.
    current = current + step;
    if (current + step > screen.Customers.count) {

        if (screen.Customers.canLoadMore) {
            screen.Customers.loadMore().then(function (result) {
                showItems(current, current + step, screen);
            });
        }
    } else {
        showItems(current, current + step, screen);
    }
};

myapp.Browse_nwCustomers.PreviousItems_execute = function (screen) {
    current = current - step;
    showItems(current, current + step, screen);
};

myapp.Browse_nwCustomers.created = function (screen) {
    // Write code here.

};