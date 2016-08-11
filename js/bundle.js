(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/// <reference path="typings/jquery.d.ts" />
"use strict";
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var slideToggleAvailable = true;
var subpagesMenuVisible = false;
var activeSubmenu = "";
$(document).ready(function () {
    $(".header__main-menu__item")
        .toArray()
        .forEach(function (menuItem) {
        var menuContent = "#" + menuItem.id + "_content";
        if ($(menuContent)[0]) {
            $(menuItem).on('mouseover ', function () {
                if (activeSubmenu != menuContent && subpagesMenuVisible && slideToggleAvailable) {
                    $(activeSubmenu).hide();
                    $(menuContent).show();
                    activeSubmenu = menuContent;
                }
                else if (slideToggleAvailable && activeSubmenu != menuContent) {
                    slideToggleAvailable = false;
                    subpagesMenuVisible = !subpagesMenuVisible;
                    $(menuContent)
                        .slideToggle(200, function () {
                        slideToggleAvailable = true;
                        activeSubmenu = menuContent;
                    });
                }
            });
        }
        else {
            $(menuItem).on('mouseover ', function () {
                if (slideToggleAvailable) {
                    slideToggleAvailable = false;
                    subpagesMenuVisible = !subpagesMenuVisible;
                    $(activeSubmenu)
                        .slideToggle(200, function () {
                        slideToggleAvailable = true;
                        activeSubmenu = menuContent;
                    });
                }
            });
        }
    });
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0cy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLDRDQUE0Qzs7QUFFNUMsSUFBWSxDQUFDLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFFNUIsSUFBSSxvQkFBb0IsR0FBWSxJQUFJLENBQUM7QUFDekMsSUFBSSxtQkFBbUIsR0FBWSxLQUFLLENBQUM7QUFDekMsSUFBSSxhQUFhLEdBQVcsRUFBRSxDQUFDO0FBRS9CLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDZCxDQUFDLENBQUMsMEJBQTBCLENBQUM7U0FDeEIsT0FBTyxFQUFFO1NBQ1QsT0FBTyxDQUFDLFVBQUEsUUFBUTtRQUNiLElBQUksV0FBVyxHQUFXLEdBQUcsR0FBRyxRQUFRLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQztRQUN6RCxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFHO2dCQUMxQixFQUFFLENBQUEsQ0FBQyxhQUFhLElBQUksV0FBVyxJQUFJLG1CQUFtQixJQUFJLG9CQUFvQixDQUFDLENBQUMsQ0FBQztvQkFDN0UsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN4QixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3RCLGFBQWEsR0FBRyxXQUFXLENBQUM7Z0JBQ2hDLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLG9CQUFvQixJQUFJLGFBQWEsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxvQkFBb0IsR0FBRyxLQUFLLENBQUM7b0JBQzdCLG1CQUFtQixHQUFHLENBQUMsbUJBQW1CLENBQUM7b0JBQzNDLENBQUMsQ0FBQyxXQUFXLENBQUM7eUJBQ1QsV0FBVyxDQUFDLEdBQUcsRUFBRTt3QkFDZCxvQkFBb0IsR0FBRyxJQUFJLENBQUM7d0JBQzVCLGFBQWEsR0FBRyxXQUFXLENBQUM7b0JBQ2hDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFHO2dCQUMxQixFQUFFLENBQUEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLG9CQUFvQixHQUFHLEtBQUssQ0FBQztvQkFDN0IsbUJBQW1CLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDM0MsQ0FBQyxDQUFDLGFBQWEsQ0FBQzt5QkFDWCxXQUFXLENBQUMsR0FBRyxFQUFFO3dCQUNkLG9CQUFvQixHQUFHLElBQUksQ0FBQzt3QkFDNUIsYUFBYSxHQUFHLFdBQVcsQ0FBQztvQkFDaEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ1YsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvanF1ZXJ5LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5sZXQgc2xpZGVUb2dnbGVBdmFpbGFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5sZXQgc3VicGFnZXNNZW51VmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5sZXQgYWN0aXZlU3VibWVudTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICAgICQoXCIuaGVhZGVyX19tYWluLW1lbnVfX2l0ZW1cIilcclxuICAgICAgICAudG9BcnJheSgpXHJcbiAgICAgICAgLmZvckVhY2gobWVudUl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWVudUNvbnRlbnQ6IHN0cmluZyA9IFwiI1wiICsgbWVudUl0ZW0uaWQgKyBcIl9jb250ZW50XCI7XHJcbiAgICAgICAgICAgIGlmICggJChtZW51Q29udGVudClbMF0gKSB7XHJcbiAgICAgICAgICAgICAgICAkKG1lbnVJdGVtKS5vbignbW91c2VvdmVyICcgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYWN0aXZlU3VibWVudSAhPSBtZW51Q29udGVudCAmJiBzdWJwYWdlc01lbnVWaXNpYmxlICYmIHNsaWRlVG9nZ2xlQXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYWN0aXZlU3VibWVudSkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKG1lbnVDb250ZW50KS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN1Ym1lbnUgPSBtZW51Q29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihzbGlkZVRvZ2dsZUF2YWlsYWJsZSAmJiBhY3RpdmVTdWJtZW51ICE9IG1lbnVDb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlVG9nZ2xlQXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnBhZ2VzTWVudVZpc2libGUgPSAhc3VicGFnZXNNZW51VmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChtZW51Q29udGVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZVRvZ2dsZSgyMDAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVRvZ2dsZUF2YWlsYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3VibWVudSA9IG1lbnVDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKG1lbnVJdGVtKS5vbignbW91c2VvdmVyICcgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc2xpZGVUb2dnbGVBdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVUb2dnbGVBdmFpbGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VicGFnZXNNZW51VmlzaWJsZSA9ICFzdWJwYWdlc01lbnVWaXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGFjdGl2ZVN1Ym1lbnUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVUb2dnbGUoMjAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVUb2dnbGVBdmFpbGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN1Ym1lbnUgPSBtZW51Q29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufSk7XHJcblxyXG5cclxuIl19
