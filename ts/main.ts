/// <reference path="typings/jquery.d.ts" />

import * as $ from "jquery";

// let slideToggleAvailable: boolean = true;
let
    subPagesMenuVisible: boolean = false,
    activeSubMenu: string = "",
    mouseOver:string = 'mouseover ',
    mouseLeave:string = 'mouseleave',
    // headerBarHeight:number = $('.header').height(),
    $burgerMenu:JQuery = $('.header__burger-menu'),
    // $headerNavigation:JQuery = $('.header__navigation'),
    $headerMainMenuItem:JQuery = $('.header__main-menu__item'),
    $subPagesContainer:JQuery = $('.subpages_container'),
    $mobileMenu:JQuery = $('.mobile-menu'),
    $mobileMenuItems:JQuery = $('.mobile-menu__item');

$(document).ready(() => {
    $headerMainMenuItem
        .toArray()
        .forEach(menuItem => {
            let menuContent:string = "#" + menuItem.id + "_content";
            if ($(menuContent)[0]) {
                $(menuItem).on(mouseOver, () => {
                    if (activeSubMenu != menuContent) {
                        if (!subPagesMenuVisible) {
                            subPagesMenuVisible = true;
                            activeSubMenu = menuContent;
                            $subPagesContainer
                                .stop()
                                .animate({height: $(activeSubMenu).height()}, 200, activateSubMenu)
                                .off(mouseLeave)
                                .on(mouseLeave, deactivateOnMouseLeave);
                        }
                        else {
                            $subPagesContainer.stop();
                            $(activeSubMenu)
                                .stop()
                                .animate({
                                    opacity: 0
                                }, 100, () => {
                                    $(activeSubMenu)
                                        .removeAttr('style')
                                        .removeClass('active');
                                    activeSubMenu = menuContent;
                                    $subPagesContainer
                                        .stop()
                                        .animate({height: $(activeSubMenu).height()}, 200, activateSubMenu)
                                        .off(mouseLeave)
                                        .on(mouseLeave, deactivateOnMouseLeave);
                                })
                        }
                    }
                });
            } else {
                $(menuItem).on(mouseOver, () => {
                    $(activeSubMenu)
                        .animate({
                            opacity: 0
                        }, 100, () => {
                            $(activeSubMenu)
                                .removeAttr('style')
                                .removeClass('active');
                            activeSubMenu = '';
                            subPagesMenuVisible = false;
                            $subPagesContainer
                                .stop()
                                .animate({height: 0}, 200, ()=> {
                                    $subPagesContainer.removeAttr('style')
                                });
                        });
                });
            }
        });

    if ($burgerMenu[0]) {

        $burgerMenu
            .on('click', () => {
                if ($mobileMenu.hasClass('closed')) {
                    $mobileMenu.removeClass('closed');
                } else {
                    $mobileMenu.addClass('closed');
                    $subPagesContainer.removeAttr('style');
                    changeMenuItemOpacity();
                    $(activeSubMenu).removeClass('active').removeAttr('style');
                    activeSubMenu = '';
                }
            });

        $mobileMenuItems
            .toArray()
            .forEach(menuItem => {
                let menuContent:string = "#" + menuItem.id + "_content";
                if ($(menuContent)[0]) {
                    $(menuItem).on('click', () => {
                        changeMenuItemOpacity($(menuItem));
                        if (activeSubMenu != menuContent) {
                            if (!subPagesMenuVisible) {
                                subPagesMenuVisible = true;
                                activeSubMenu = menuContent;
                                $(activeSubMenu)
                                    .addClass('active')
                                    .css({opacity:1});
                                $subPagesContainer
                                    .css({height: $(activeSubMenu).height()})
                            }
                            else {
                                $(activeSubMenu)
                                    .css({opacity: 0})
                                    .removeAttr('style')
                                    .removeClass('active');
                                activeSubMenu = menuContent;
                                $(activeSubMenu)
                                    .addClass('active')
                                    .css({opacity: 1});

                                $subPagesContainer
                                    .css({height: $(activeSubMenu).height()});
                            }
                        }
                    });
                }
                else {
                    $(menuItem).on('click', () => {
                        changeMenuItemOpacity();
                        $(activeSubMenu)
                            .css({
                                opacity: 0
                            })
                            .removeAttr('style')
                            .removeClass('active');

                        activeSubMenu = '';
                        subPagesMenuVisible = false;
                        $subPagesContainer
                            .css({height: 0})
                            .removeAttr('style')
                    });
                }
            });
    }
});

function activateSubMenu(){
    $(activeSubMenu)
        .stop()
        .addClass('active')
        .animate({
            opacity: 1
        } , 100);
}
function deactivateSubMenu(){
    $(activeSubMenu)
        .stop()
        .animate({
            opacity: 0
        } , 100 , () => {
            $(activeSubMenu).removeAttr('style').removeClass('active');
            activeSubMenu = '';
            subPagesMenuVisible = false;
        });
}
function deactivateOnMouseLeave(){
    $subPagesContainer
        .stop()
        .animate({height: 0}, 200 , ()=> {$subPagesContainer.removeAttr('style')} )
        .off(mouseLeave);
    deactivateSubMenu();
}
function changeMenuItemOpacity(anchor:JQuery = undefined ){

    $mobileMenuItems.removeAttr('style');

    if(anchor){
        anchor.css({
            opacity:1
        })
    }

}

