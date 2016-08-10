/// <reference path="typings/jquery.d.ts" />

import * as $ from "jquery";

let slideToggleAvailable: boolean = true;
let subpagesMenuVisible: boolean = false;
let activeSubmenu: string = "";

$(document).ready(() => {
    $(".header__main-menu__item")
        .toArray()
        .forEach(menuItem => {
            $("#" + menuItem.id).click(() => {
                let menuContent: string = "#" + menuItem.id + "_content";
                if(activeSubmenu != menuContent && subpagesMenuVisible && slideToggleAvailable) {
                    $(activeSubmenu).hide();
                    $(menuContent).show();
                    activeSubmenu = menuContent;
                }
                else if(slideToggleAvailable) {
                    slideToggleAvailable = false;
                    subpagesMenuVisible = !subpagesMenuVisible;
                    $(menuContent)
                        .slideToggle(1000, () => {
                            slideToggleAvailable = true;
                            activeSubmenu = menuContent;
                        });
                }
            })
        })
});


