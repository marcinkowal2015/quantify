(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/// <reference path="typings/jquery.d.ts" />
"use strict";
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
// let slideToggleAvailable: boolean = true;
var subPagesMenuVisible = false, activeSubMenu = "", mouseOver = 'mouseover ', mouseLeave = 'mouseleave', $subPagesContainer = $('.subpages_container');
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
                            .animate({ top: '105px' }, 200)
                            .on(mouseLeave, function () {
                            $subPagesContainer
                                .stop()
                                .animate({ top: '-95px' }, 200, function () { $subPagesContainer.removeAttr('style'); })
                                .off(mouseLeave);
                            $(activeSubMenu)
                                .stop()
                                .animate({
                                opacity: 0
                            }, 200, function () {
                                $(activeSubMenu).removeAttr('style');
                            });
                            activeSubMenu = '';
                            subPagesMenuVisible = false;
                        });
                        $(activeSubMenu)
                            .stop()
                            .animate({
                            opacity: 1
                        }, 200);
                    }
                    else {
                        $(activeSubMenu)
                            .animate({
                            opacity: 0
                        }, 100, function () {
                            $(activeSubMenu).removeAttr('style');
                            $(menuContent).animate({
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
                    .animate({ top: '-95px' }, 200, function () { $subPagesContainer.removeAttr('style'); });
                $(activeSubMenu)
                    .animate({
                    opacity: 0
                }, 100, function () {
                    $(activeSubMenu).removeAttr('style');
                });
                activeSubMenu = '';
                subPagesMenuVisible = false;
            });
        }
    });
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0cy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLDRDQUE0Qzs7QUFFNUMsSUFBWSxDQUFDLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFFNUIsNENBQTRDO0FBQzVDLElBQ0ksbUJBQW1CLEdBQVksS0FBSyxFQUNwQyxhQUFhLEdBQVcsRUFBRSxFQUMxQixTQUFTLEdBQVUsWUFBWSxFQUMvQixVQUFVLEdBQVUsWUFBWSxFQUNoQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUVsRCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2QsQ0FBQyxDQUFDLDBCQUEwQixDQUFDO1NBQ3hCLE9BQU8sRUFBRTtTQUNULE9BQU8sQ0FBQyxVQUFBLFFBQVE7UUFDYixJQUFJLFdBQVcsR0FBVyxHQUFHLEdBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDekQsRUFBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRztnQkFDdkIsRUFBRSxDQUFBLENBQUMsYUFBYSxJQUFJLFdBQVksQ0FBQyxDQUFBLENBQUM7b0JBQzlCLEVBQUUsQ0FBQSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQSxDQUFDO3dCQUNyQixtQkFBbUIsR0FBRyxJQUFJLENBQUM7d0JBQzNCLGFBQWEsR0FBRyxXQUFXLENBQUM7d0JBQzVCLGtCQUFrQjs2QkFDYixJQUFJLEVBQUU7NkJBQ04sT0FBTyxDQUFDLEVBQUMsR0FBRyxFQUFFLE9BQU8sRUFBQyxFQUFFLEdBQUcsQ0FBRTs2QkFDN0IsRUFBRSxDQUFDLFVBQVUsRUFBRzs0QkFDYixrQkFBa0I7aUNBQ2IsSUFBSSxFQUFFO2lDQUNOLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUMsRUFBRSxHQUFHLEVBQUcsY0FBTSxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUU7aUNBQzdFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDckIsQ0FBQyxDQUFDLGFBQWEsQ0FBQztpQ0FDWCxJQUFJLEVBQUU7aUNBQ04sT0FBTyxDQUFDO2dDQUNMLE9BQU8sRUFBRSxDQUFDOzZCQUNiLEVBQUcsR0FBRyxFQUFHO2dDQUNOLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ3pDLENBQUMsQ0FBQyxDQUFDOzRCQUNQLGFBQWEsR0FBRyxFQUFFLENBQUM7NEJBQ25CLG1CQUFtQixHQUFHLEtBQUssQ0FBQzt3QkFDaEMsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDLGFBQWEsQ0FBQzs2QkFDWCxJQUFJLEVBQUU7NkJBQ04sT0FBTyxDQUFDOzRCQUNMLE9BQU8sRUFBRSxDQUFDO3lCQUNiLEVBQUcsR0FBRyxDQUFDLENBQUM7b0JBRWpCLENBQUM7b0JBQ0QsSUFBSSxDQUFBLENBQUM7d0JBQ0QsQ0FBQyxDQUFDLGFBQWEsQ0FBQzs2QkFDWCxPQUFPLENBQUM7NEJBQ0wsT0FBTyxFQUFFLENBQUM7eUJBQ2IsRUFBRSxHQUFHLEVBQUc7NEJBQ0wsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDckMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQ0FDbkIsT0FBTyxFQUFFLENBQUM7NkJBQ2IsRUFBRyxHQUFHLENBQUMsQ0FBQzs0QkFDVCxhQUFhLEdBQUcsV0FBVyxDQUFDO3dCQUNoQyxDQUFDLENBQUMsQ0FBQTtvQkFDVixDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFHO2dCQUN2QixrQkFBa0I7cUJBQ2IsSUFBSSxFQUFFO3FCQUNOLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUMsRUFBRSxHQUFHLEVBQUcsY0FBTSxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQztnQkFDbkYsQ0FBQyxDQUFDLGFBQWEsQ0FBQztxQkFDWCxPQUFPLENBQUM7b0JBQ0wsT0FBTyxFQUFFLENBQUM7aUJBQ2IsRUFBRSxHQUFHLEVBQUc7b0JBQ0wsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsYUFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ1YsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvanF1ZXJ5LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4vLyBsZXQgc2xpZGVUb2dnbGVBdmFpbGFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5sZXRcclxuICAgIHN1YlBhZ2VzTWVudVZpc2libGU6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgIGFjdGl2ZVN1Yk1lbnU6IHN0cmluZyA9IFwiXCIsXHJcbiAgICBtb3VzZU92ZXI6c3RyaW5nID0gJ21vdXNlb3ZlciAnLFxyXG4gICAgbW91c2VMZWF2ZTpzdHJpbmcgPSAnbW91c2VsZWF2ZScsXHJcbiAgICAkc3ViUGFnZXNDb250YWluZXIgPSAkKCcuc3VicGFnZXNfY29udGFpbmVyJyk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgICAkKFwiLmhlYWRlcl9fbWFpbi1tZW51X19pdGVtXCIpXHJcbiAgICAgICAgLnRvQXJyYXkoKVxyXG4gICAgICAgIC5mb3JFYWNoKG1lbnVJdGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IG1lbnVDb250ZW50OiBzdHJpbmcgPSBcIiNcIiArIG1lbnVJdGVtLmlkICsgXCJfY29udGVudFwiO1xyXG4gICAgICAgICAgICBpZiAoICQobWVudUNvbnRlbnQpWzBdICkge1xyXG4gICAgICAgICAgICAgICAgJChtZW51SXRlbSkub24obW91c2VPdmVyICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFjdGl2ZVN1Yk1lbnUgIT0gbWVudUNvbnRlbnQgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXN1YlBhZ2VzTWVudVZpc2libGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViUGFnZXNNZW51VmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdWJNZW51ID0gbWVudUNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc3ViUGFnZXNDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RvcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe3RvcDogJzEwNXB4J30sIDIwMCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9uKG1vdXNlTGVhdmUgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzdWJQYWdlc0NvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0b3AoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe3RvcDogJy05NXB4J30sIDIwMCAsICgpPT4geyRzdWJQYWdlc0NvbnRhaW5lci5yZW1vdmVBdHRyKCdzdHlsZScpfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub2ZmKG1vdXNlTGVhdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGFjdGl2ZVN1Yk1lbnUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RvcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsIDIwMCAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGFjdGl2ZVN1Yk1lbnUpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3ViTWVudSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJQYWdlc01lbnVWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGFjdGl2ZVN1Yk1lbnUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0b3AoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLCAyMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChhY3RpdmVTdWJNZW51KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChhY3RpdmVTdWJNZW51KS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKG1lbnVDb250ZW50KS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN1Yk1lbnUgPSBtZW51Q29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKG1lbnVJdGVtKS5vbihtb3VzZU92ZXIgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHN1YlBhZ2VzQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdG9wKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe3RvcDogJy05NXB4J30sIDIwMCAsICgpPT4geyRzdWJQYWdlc0NvbnRhaW5lci5yZW1vdmVBdHRyKCdzdHlsZScpfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoYWN0aXZlU3ViTWVudSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGFjdGl2ZVN1Yk1lbnUpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN1Yk1lbnUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBzdWJQYWdlc01lbnVWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn0pO1xyXG5cclxuXHJcbiJdfQ==
