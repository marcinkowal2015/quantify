/// <reference path="typings/jquery.d.ts" />

import * as $ from "jquery";

// let slideToggleAvailable: boolean = true;
let
    subPagesMenuVisible: boolean = false,
    activeSubMenu: string = "",
    mouseOver:string = 'mouseover ',
    mouseLeave:string = 'mouseleave',
    headerBarHeight:number = $('.header').height(),
    $subPagesContainer = $('.subpages_container'),
    subPageContainerInitialPosition:number = headerBarHeight - $subPagesContainer.height() ;

$(document).ready(() => {
    $(".header__main-menu__item")
        .toArray()
        .forEach(menuItem => {
            let menuContent: string = "#" + menuItem.id + "_content";
            if ( $(menuContent)[0] ) {
                $(menuItem).on(mouseOver , () => {
                    if(activeSubMenu != menuContent ){
                        if(!subPagesMenuVisible){
                            subPagesMenuVisible = true;
                            activeSubMenu = menuContent;
                            $subPagesContainer
                                .stop()
                                .animate({top: headerBarHeight}, 200 )
                                .on(mouseLeave , () => {
                                    $subPagesContainer
                                        .stop()
                                        .animate({top: subPageContainerInitialPosition}, 200 , ()=> {$subPagesContainer.removeAttr('style')} )
                                        .off(mouseLeave);
                                    $(activeSubMenu)
                                        .stop()
                                        .animate({
                                            opacity: 0
                                        } , 200 , () => {
                                            $(activeSubMenu).removeAttr('style').removeClass('active');
                                        });
                                    activeSubMenu = '';
                                    subPagesMenuVisible = false;
                                });
                            $(activeSubMenu)
                                .stop()
                                .addClass('active')
                                .animate({
                                    opacity: 1
                                } , 200);

                        }
                        else{
                            $(activeSubMenu)
                                .animate({
                                    opacity: 0
                                }, 100 , () => {
                                    $(activeSubMenu)
                                        .removeAttr('style')
                                        .removeClass('active');
                                    $(menuContent)
                                        .addClass('active')
                                        .animate({
                                        opacity: 1
                                    } , 100);
                                    activeSubMenu = menuContent;
                                })
                        }
                    }
                });
            } else {
                $(menuItem).on(mouseOver , () => {
                    $subPagesContainer
                        .stop()
                        .animate({top: subPageContainerInitialPosition}, 200 , ()=> {$subPagesContainer.removeAttr('style')} );
                    $(activeSubMenu)
                        .animate({
                            opacity: 0
                        }, 100 , () => {
                            $(activeSubMenu)
                                .removeAttr('style')
                                .removeClass('active');
                        });
                    activeSubMenu = '';
                    subPagesMenuVisible = false;
                });
            }
        })
});


