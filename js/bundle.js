(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var slideToggleAvailable = true;
var subpagesMenuVisible = false;
var activeSubmenu = "";
$(document).ready(function () {
    $(".header__main-menu__item")
        .toArray()
        .forEach(function (menuItem) {
        $("#" + menuItem.id).click(function () {
            var menuContent = "#" + menuItem.id + "_content";
            if (activeSubmenu != menuContent && subpagesMenuVisible && slideToggleAvailable) {
                $(activeSubmenu).hide();
                $(menuContent).show();
                activeSubmenu = menuContent;
            }
            else if (slideToggleAvailable) {
                slideToggleAvailable = false;
                subpagesMenuVisible = !subpagesMenuVisible;
                $(menuContent)
                    .slideToggle(1000, function () {
                    slideToggleAvailable = true;
                    activeSubmenu = menuContent;
                });
            }
        });
    });
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0cy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLDRDQUE0Qzs7QUFFNUMsSUFBWSxDQUFDLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFFNUIsSUFBSSxvQkFBb0IsR0FBWSxJQUFJLENBQUM7QUFDekMsSUFBSSxtQkFBbUIsR0FBWSxLQUFLLENBQUM7QUFDekMsSUFBSSxhQUFhLEdBQVcsRUFBRSxDQUFDO0FBRS9CLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDZCxDQUFDLENBQUMsMEJBQTBCLENBQUM7U0FDeEIsT0FBTyxFQUFFO1NBQ1QsT0FBTyxDQUFDLFVBQUEsUUFBUTtRQUNiLENBQUMsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN2QixJQUFJLFdBQVcsR0FBVyxHQUFHLEdBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUM7WUFDekQsRUFBRSxDQUFBLENBQUMsYUFBYSxJQUFJLFdBQVcsSUFBSSxtQkFBbUIsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzdFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QixhQUFhLEdBQUcsV0FBVyxDQUFDO1lBQ2hDLENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixvQkFBb0IsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLG1CQUFtQixHQUFHLENBQUMsbUJBQW1CLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxXQUFXLENBQUM7cUJBQ1QsV0FBVyxDQUFDLElBQUksRUFBRTtvQkFDZixvQkFBb0IsR0FBRyxJQUFJLENBQUM7b0JBQzVCLGFBQWEsR0FBRyxXQUFXLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDVixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwidHlwaW5ncy9qcXVlcnkuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmxldCBzbGlkZVRvZ2dsZUF2YWlsYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbmxldCBzdWJwYWdlc01lbnVWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbmxldCBhY3RpdmVTdWJtZW51OiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICAgJChcIi5oZWFkZXJfX21haW4tbWVudV9faXRlbVwiKVxyXG4gICAgICAgIC50b0FycmF5KClcclxuICAgICAgICAuZm9yRWFjaChtZW51SXRlbSA9PiB7XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBtZW51SXRlbS5pZCkuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lbnVDb250ZW50OiBzdHJpbmcgPSBcIiNcIiArIG1lbnVJdGVtLmlkICsgXCJfY29udGVudFwiO1xyXG4gICAgICAgICAgICAgICAgaWYoYWN0aXZlU3VibWVudSAhPSBtZW51Q29udGVudCAmJiBzdWJwYWdlc01lbnVWaXNpYmxlICYmIHNsaWRlVG9nZ2xlQXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChhY3RpdmVTdWJtZW51KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChtZW51Q29udGVudCkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN1Ym1lbnUgPSBtZW51Q29udGVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoc2xpZGVUb2dnbGVBdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRvZ2dsZUF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YnBhZ2VzTWVudVZpc2libGUgPSAhc3VicGFnZXNNZW51VmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAkKG1lbnVDb250ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVUb2dnbGUoMTAwMCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVUb2dnbGVBdmFpbGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3VibWVudSA9IG1lbnVDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG59KTtcclxuXHJcblxyXG4iXX0=

