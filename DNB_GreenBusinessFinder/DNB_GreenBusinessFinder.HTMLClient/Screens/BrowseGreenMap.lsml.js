/// <reference path="../GeneratedArtifacts/viewModel.js" />

var mapDiv;
var current = 0;
var step = 15;

myapp.BrowseGreenMap.Green_render = function (element, contentItem) {
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
    
    $.each(screen.Greens.data, function (i, greenpin) {
        if (i >= start && i <= end) {
            $(mapDiv).lightswitchBingMapsControl("addPinAsync", greenpin.Address,
             greenpin.City, greenpin.Country, i + 1, function () {
                 screen.Greens.selectedItem = greenpin;
                 screen.showPopup("GreenB_selected");
             });

        }
    });
};
