/// <reference path="typings/jquery.d.ts" />

import * as $ from "jquery";

let slideToggleAvailable: boolean = true;
let subpagesMenuVisible: boolean = false;
let activeSubmenu: string = "";

$(document).ready(() => {
    $(".header__main-menu__item")
        .toArray()
        .forEach(menuItem => {
            let menuContent: string = "#" + menuItem.id + "_content";
            if ( $(menuContent)[0] ) {
                $(menuItem).on('mouseover ' , () => {
                    if(activeSubmenu != menuContent && subpagesMenuVisible && slideToggleAvailable) {
                        $(activeSubmenu).hide();
                        $(menuContent).show();
                        activeSubmenu = menuContent;
                    }
                    else if(slideToggleAvailable && activeSubmenu != menuContent) {
                        slideToggleAvailable = false;
                        subpagesMenuVisible = !subpagesMenuVisible;
                        $(menuContent)
                            .slideToggle(200, () => {
                                slideToggleAvailable = true;
                                activeSubmenu = menuContent;
                            });
                    }
                });
            } else {
                $(menuItem).on('mouseover ' , () => {
                    if(slideToggleAvailable) {
                        slideToggleAvailable = false;
                        subpagesMenuVisible = !subpagesMenuVisible;
                        $(activeSubmenu)
                            .slideToggle(200, () => {
                                slideToggleAvailable = true;
                                activeSubmenu = menuContent;
                            });
                    }
                });
            }
        })
});


