(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/// <reference path="typings/jquery.d.ts" />
"use strict";
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
// let slideToggleAvailable: boolean = true;
var subPagesMenuVisible = false, activeSubMenu = "", mouseOver = 'mouseover ', mouseLeave = 'mouseleave', headerBarHeight = $('.header').height(), $subPagesContainer = $('.subpages_container'), subPageContainerInitialPosition = headerBarHeight - $subPagesContainer.height();
$(document).ready(function () {
    $(".header__main-menu__item")
        .toArray()
        .forEach(function (menuItem) {
        var menuContent = "#" + menuItem.id + "_content";
        if ($(menuContent)[0]) {
            $(menuItem).on(mouseOver, function () {
                if (activeSubMenu != menuContent) {
                    if (!subPagesMenuVisible) {
                        subPagesMenuVisible = true;
                        activeSubMenu = menuContent;
                        $subPagesContainer
                            .stop()
                            .animate({ top: headerBarHeight }, 200)
                            .on(mouseLeave, function () {
                            $subPagesContainer
                                .stop()
                                .animate({ top: subPageContainerInitialPosition }, 200, function () { $subPagesContainer.removeAttr('style'); })
                                .off(mouseLeave);
                            $(activeSubMenu)
                                .stop()
                                .animate({
                                opacity: 0
                            }, 200, function () {
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
                        }, 200);
                    }
                    else {
                        $(activeSubMenu)
                            .animate({
                            opacity: 0
                        }, 100, function () {
                            $(activeSubMenu)
                                .removeAttr('style')
                                .removeClass('active');
                            $(menuContent)
                                .addClass('active')
                                .animate({
                                opacity: 1
                            }, 100);
                            activeSubMenu = menuContent;
                        });
                    }
                }
            });
        }
        else {
            $(menuItem).on(mouseOver, function () {
                $subPagesContainer
                    .stop()
                    .animate({ top: subPageContainerInitialPosition }, 200, function () { $subPagesContainer.removeAttr('style'); });
                $(activeSubMenu)
                    .animate({
                    opacity: 0
                }, 100, function () {
                    $(activeSubMenu)
                        .removeAttr('style')
                        .removeClass('active');
                });
                activeSubMenu = '';
                subPagesMenuVisible = false;
            });
        }
    });
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0cy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLDRDQUE0Qzs7QUFFNUMsSUFBWSxDQUFDLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFFNUIsNENBQTRDO0FBQzVDLElBQ0ksbUJBQW1CLEdBQVksS0FBSyxFQUNwQyxhQUFhLEdBQVcsRUFBRSxFQUMxQixTQUFTLEdBQVUsWUFBWSxFQUMvQixVQUFVLEdBQVUsWUFBWSxFQUNoQyxlQUFlLEdBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUM5QyxrQkFBa0IsR0FBRyxDQUFDLENBQUMscUJBQXFCLENBQUMsRUFDN0MsK0JBQStCLEdBQVUsZUFBZSxHQUFHLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxDQUFFO0FBRTVGLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDZCxDQUFDLENBQUMsMEJBQTBCLENBQUM7U0FDeEIsT0FBTyxFQUFFO1NBQ1QsT0FBTyxDQUFDLFVBQUEsUUFBUTtRQUNiLElBQUksV0FBVyxHQUFXLEdBQUcsR0FBRyxRQUFRLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQztRQUN6RCxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFHO2dCQUN2QixFQUFFLENBQUEsQ0FBQyxhQUFhLElBQUksV0FBWSxDQUFDLENBQUEsQ0FBQztvQkFDOUIsRUFBRSxDQUFBLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUM7d0JBQ3JCLG1CQUFtQixHQUFHLElBQUksQ0FBQzt3QkFDM0IsYUFBYSxHQUFHLFdBQVcsQ0FBQzt3QkFDNUIsa0JBQWtCOzZCQUNiLElBQUksRUFBRTs2QkFDTixPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUUsZUFBZSxFQUFDLEVBQUUsR0FBRyxDQUFFOzZCQUNyQyxFQUFFLENBQUMsVUFBVSxFQUFHOzRCQUNiLGtCQUFrQjtpQ0FDYixJQUFJLEVBQUU7aUNBQ04sT0FBTyxDQUFDLEVBQUMsR0FBRyxFQUFFLCtCQUErQixFQUFDLEVBQUUsR0FBRyxFQUFHLGNBQU0sa0JBQWtCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFFO2lDQUNyRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7NEJBQ3JCLENBQUMsQ0FBQyxhQUFhLENBQUM7aUNBQ1gsSUFBSSxFQUFFO2lDQUNOLE9BQU8sQ0FBQztnQ0FDTCxPQUFPLEVBQUUsQ0FBQzs2QkFDYixFQUFHLEdBQUcsRUFBRztnQ0FDTixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDL0QsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsYUFBYSxHQUFHLEVBQUUsQ0FBQzs0QkFDbkIsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO3dCQUNoQyxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUMsYUFBYSxDQUFDOzZCQUNYLElBQUksRUFBRTs2QkFDTixRQUFRLENBQUMsUUFBUSxDQUFDOzZCQUNsQixPQUFPLENBQUM7NEJBQ0wsT0FBTyxFQUFFLENBQUM7eUJBQ2IsRUFBRyxHQUFHLENBQUMsQ0FBQztvQkFFakIsQ0FBQztvQkFDRCxJQUFJLENBQUEsQ0FBQzt3QkFDRCxDQUFDLENBQUMsYUFBYSxDQUFDOzZCQUNYLE9BQU8sQ0FBQzs0QkFDTCxPQUFPLEVBQUUsQ0FBQzt5QkFDYixFQUFFLEdBQUcsRUFBRzs0QkFDTCxDQUFDLENBQUMsYUFBYSxDQUFDO2lDQUNYLFVBQVUsQ0FBQyxPQUFPLENBQUM7aUNBQ25CLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDM0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQztpQ0FDVCxRQUFRLENBQUMsUUFBUSxDQUFDO2lDQUNsQixPQUFPLENBQUM7Z0NBQ1QsT0FBTyxFQUFFLENBQUM7NkJBQ2IsRUFBRyxHQUFHLENBQUMsQ0FBQzs0QkFDVCxhQUFhLEdBQUcsV0FBVyxDQUFDO3dCQUNoQyxDQUFDLENBQUMsQ0FBQTtvQkFDVixDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFHO2dCQUN2QixrQkFBa0I7cUJBQ2IsSUFBSSxFQUFFO3FCQUNOLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSwrQkFBK0IsRUFBQyxFQUFFLEdBQUcsRUFBRyxjQUFNLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBRSxDQUFDO2dCQUMzRyxDQUFDLENBQUMsYUFBYSxDQUFDO3FCQUNYLE9BQU8sQ0FBQztvQkFDTCxPQUFPLEVBQUUsQ0FBQztpQkFDYixFQUFFLEdBQUcsRUFBRztvQkFDTCxDQUFDLENBQUMsYUFBYSxDQUFDO3lCQUNYLFVBQVUsQ0FBQyxPQUFPLENBQUM7eUJBQ25CLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsYUFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ1YsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvanF1ZXJ5LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4vLyBsZXQgc2xpZGVUb2dnbGVBdmFpbGFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5sZXRcclxuICAgIHN1YlBhZ2VzTWVudVZpc2libGU6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgIGFjdGl2ZVN1Yk1lbnU6IHN0cmluZyA9IFwiXCIsXHJcbiAgICBtb3VzZU92ZXI6c3RyaW5nID0gJ21vdXNlb3ZlciAnLFxyXG4gICAgbW91c2VMZWF2ZTpzdHJpbmcgPSAnbW91c2VsZWF2ZScsXHJcbiAgICBoZWFkZXJCYXJIZWlnaHQ6bnVtYmVyID0gJCgnLmhlYWRlcicpLmhlaWdodCgpLFxyXG4gICAgJHN1YlBhZ2VzQ29udGFpbmVyID0gJCgnLnN1YnBhZ2VzX2NvbnRhaW5lcicpLFxyXG4gICAgc3ViUGFnZUNvbnRhaW5lckluaXRpYWxQb3NpdGlvbjpudW1iZXIgPSBoZWFkZXJCYXJIZWlnaHQgLSAkc3ViUGFnZXNDb250YWluZXIuaGVpZ2h0KCkgO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICAgJChcIi5oZWFkZXJfX21haW4tbWVudV9faXRlbVwiKVxyXG4gICAgICAgIC50b0FycmF5KClcclxuICAgICAgICAuZm9yRWFjaChtZW51SXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtZW51Q29udGVudDogc3RyaW5nID0gXCIjXCIgKyBtZW51SXRlbS5pZCArIFwiX2NvbnRlbnRcIjtcclxuICAgICAgICAgICAgaWYgKCAkKG1lbnVDb250ZW50KVswXSApIHtcclxuICAgICAgICAgICAgICAgICQobWVudUl0ZW0pLm9uKG1vdXNlT3ZlciAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihhY3RpdmVTdWJNZW51ICE9IG1lbnVDb250ZW50ICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFzdWJQYWdlc01lbnVWaXNpYmxlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YlBhZ2VzTWVudVZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3ViTWVudSA9IG1lbnVDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHN1YlBhZ2VzQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0b3AoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHt0b3A6IGhlYWRlckJhckhlaWdodH0sIDIwMCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9uKG1vdXNlTGVhdmUgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzdWJQYWdlc0NvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0b3AoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe3RvcDogc3ViUGFnZUNvbnRhaW5lckluaXRpYWxQb3NpdGlvbn0sIDIwMCAsICgpPT4geyRzdWJQYWdlc0NvbnRhaW5lci5yZW1vdmVBdHRyKCdzdHlsZScpfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub2ZmKG1vdXNlTGVhdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGFjdGl2ZVN1Yk1lbnUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RvcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsIDIwMCAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGFjdGl2ZVN1Yk1lbnUpLnJlbW92ZUF0dHIoJ3N0eWxlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN1Yk1lbnUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViUGFnZXNNZW51VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChhY3RpdmVTdWJNZW51KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdG9wKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsIDIwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGFjdGl2ZVN1Yk1lbnUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGFjdGl2ZVN1Yk1lbnUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignc3R5bGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChtZW51Q29udGVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN1Yk1lbnUgPSBtZW51Q29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKG1lbnVJdGVtKS5vbihtb3VzZU92ZXIgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHN1YlBhZ2VzQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdG9wKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe3RvcDogc3ViUGFnZUNvbnRhaW5lckluaXRpYWxQb3NpdGlvbn0sIDIwMCAsICgpPT4geyRzdWJQYWdlc0NvbnRhaW5lci5yZW1vdmVBdHRyKCdzdHlsZScpfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoYWN0aXZlU3ViTWVudSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGFjdGl2ZVN1Yk1lbnUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3N0eWxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdWJNZW51ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViUGFnZXNNZW51VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59KTtcclxuXHJcblxyXG4iXX0=
