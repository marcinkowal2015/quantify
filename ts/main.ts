/// <reference path="typings/jquery.d.ts" />

import * as $ from "jquery";

$(document).ready(() => {
    $(".header__main-menu__item")
        .toArray()
        .forEach(menuItem => {
            $("#" + menuItem.id).click(() => {
                $("#" + menuItem.id + "_content").slideToggle(1000);
            })
        })
});


