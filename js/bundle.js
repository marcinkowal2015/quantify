(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function () {
    var $carousel = $('.carousel-container'), $contentCarousel = $('.content-carousel'), $header = $('.header'), containerTargetHeight = window.innerHeight - $header.height();
    if ($carousel[0]) {
        $carousel
            .height(containerTargetHeight)
            .slick({
            arrow: true,
            dots: true,
            asNavFor: $contentCarousel
        });
        $(window)
            .on('resize', function () {
            containerTargetHeight = window.innerHeight - $header.height();
            $carousel.height(containerTargetHeight);
        });
    }
    if ($contentCarousel[0]) {
        $contentCarousel
            .slick({
            arrows: false,
            asNavFor: $carousel
        });
    }
});
},{}],2:[function(require,module,exports){
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

},{}]},{},[2,1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0cy9ob21lLnRzIiwidHMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0NBLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDZCxJQUFJLFNBQVMsR0FBTyxDQUFDLENBQUMscUJBQXFCLENBQUMsRUFDeEMsZ0JBQWdCLEdBQU8sQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEVBQzdDLE9BQU8sR0FBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQ3ZCLHFCQUFxQixHQUFVLE1BQU0sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDZCxTQUFTO2FBQ0osTUFBTSxDQUFDLHFCQUFxQixDQUFDO2FBQzdCLEtBQUssQ0FBQztZQUNILEtBQUssRUFBRyxJQUFJO1lBQ1osSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsZ0JBQWdCO1NBQzdCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDSixFQUFFLENBQUMsUUFBUSxFQUFHO1lBQ2YscUJBQXFCLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDOUQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELEVBQUUsQ0FBQSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUNwQixnQkFBZ0I7YUFDWCxLQUFLLENBQUM7WUFDSCxNQUFNLEVBQUUsS0FBSztZQUNiLFFBQVEsRUFBRSxTQUFTO1NBQ3RCLENBQUMsQ0FBQztJQUNYLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQzs7O0FDM0JILDRDQUE0Qzs7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QTtvQkFDVixDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFHO2dCQUN2QixrQkFBa0I7cUJBQ2IsSUFBSSxFQUFFO3FCQUNOLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSwrQkFBK0IsRUFBQyxFQUFFLEdBQUcsRUFBRyxjQUFNLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBRSxDQUFDO2dCQUMzRyxDQUFDLENBQUMsYUFBYSxDQUFDO3FCQUNYLE9BQU8sQ0FBQztvQkFDTCxPQUFPLEVBQUUsQ0FBQztpQkFDYixFQUFFLEdBQUcsRUFBRztvQkFDTCxDQUFDLENBQUMsYUFBYSxDQUFDO3lCQUNYLFVBQVUsQ0FBQyxPQUFPLENBQUM7eUJBQ25CLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsYUFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ1YsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICAgIGxldCAkY2Fyb3VzZWw6YW55ID0gJCgnLmNhcm91c2VsLWNvbnRhaW5lcicpLFxyXG4gICAgICAgICRjb250ZW50Q2Fyb3VzZWw6YW55ID0gJCgnLmNvbnRlbnQtY2Fyb3VzZWwnKSxcclxuICAgICAgICAkaGVhZGVyID0gICQoJy5oZWFkZXInKSxcclxuICAgICAgICBjb250YWluZXJUYXJnZXRIZWlnaHQ6bnVtYmVyID0gd2luZG93LmlubmVySGVpZ2h0IC0gJGhlYWRlci5oZWlnaHQoKTtcclxuICAgIGlmICgkY2Fyb3VzZWxbMF0pe1xyXG4gICAgICAgICRjYXJvdXNlbFxyXG4gICAgICAgICAgICAuaGVpZ2h0KGNvbnRhaW5lclRhcmdldEhlaWdodClcclxuICAgICAgICAgICAgLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGFycm93IDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogJGNvbnRlbnRDYXJvdXNlbFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAkKHdpbmRvdylcclxuICAgICAgICAgICAgLm9uKCdyZXNpemUnICwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250YWluZXJUYXJnZXRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAkaGVhZGVyLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAkY2Fyb3VzZWwuaGVpZ2h0KGNvbnRhaW5lclRhcmdldEhlaWdodCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYoJGNvbnRlbnRDYXJvdXNlbFswXSl7XHJcbiAgICAgICAgJGNvbnRlbnRDYXJvdXNlbFxyXG4gICAgICAgICAgICAuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiAkY2Fyb3VzZWxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwidHlwaW5ncy9qcXVlcnkuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbi8vIGxldCBzbGlkZVRvZ2dsZUF2YWlsYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbmxldFxyXG4gICAgc3ViUGFnZXNNZW51VmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgYWN0aXZlU3ViTWVudTogc3RyaW5nID0gXCJcIixcclxuICAgIG1vdXNlT3ZlcjpzdHJpbmcgPSAnbW91c2VvdmVyICcsXHJcbiAgICBtb3VzZUxlYXZlOnN0cmluZyA9ICdtb3VzZWxlYXZlJyxcclxuICAgIGhlYWRlckJhckhlaWdodDpudW1iZXIgPSAkKCcuaGVhZGVyJykuaGVpZ2h0KCksXHJcbiAgICAkc3ViUGFnZXNDb250YWluZXIgPSAkKCcuc3VicGFnZXNfY29udGFpbmVyJyksXHJcbiAgICBzdWJQYWdlQ29udGFpbmVySW5pdGlhbFBvc2l0aW9uOm51bWJlciA9IGhlYWRlckJhckhlaWdodCAtICRzdWJQYWdlc0NvbnRhaW5lci5oZWlnaHQoKSA7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgICAkKFwiLmhlYWRlcl9fbWFpbi1tZW51X19pdGVtXCIpXHJcbiAgICAgICAgLnRvQXJyYXkoKVxyXG4gICAgICAgIC5mb3JFYWNoKG1lbnVJdGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IG1lbnVDb250ZW50OiBzdHJpbmcgPSBcIiNcIiArIG1lbnVJdGVtLmlkICsgXCJfY29udGVudFwiO1xyXG4gICAgICAgICAgICBpZiAoICQobWVudUNvbnRlbnQpWzBdICkge1xyXG4gICAgICAgICAgICAgICAgJChtZW51SXRlbSkub24obW91c2VPdmVyICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFjdGl2ZVN1Yk1lbnUgIT0gbWVudUNvbnRlbnQgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXN1YlBhZ2VzTWVudVZpc2libGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViUGFnZXNNZW51VmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdWJNZW51ID0gbWVudUNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc3ViUGFnZXNDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RvcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe3RvcDogaGVhZGVyQmFySGVpZ2h0fSwgMjAwIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub24obW91c2VMZWF2ZSAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHN1YlBhZ2VzQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RvcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7dG9wOiBzdWJQYWdlQ29udGFpbmVySW5pdGlhbFBvc2l0aW9ufSwgMjAwICwgKCk9PiB7JHN1YlBhZ2VzQ29udGFpbmVyLnJlbW92ZUF0dHIoJ3N0eWxlJyl9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vZmYobW91c2VMZWF2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoYWN0aXZlU3ViTWVudSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdG9wKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICwgMjAwICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoYWN0aXZlU3ViTWVudSkucmVtb3ZlQXR0cignc3R5bGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3ViTWVudSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJQYWdlc01lbnVWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGFjdGl2ZVN1Yk1lbnUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0b3AoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICwgMjAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoYWN0aXZlU3ViTWVudSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoYWN0aXZlU3ViTWVudSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdzdHlsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKG1lbnVDb250ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3ViTWVudSA9IG1lbnVDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQobWVudUl0ZW0pLm9uKG1vdXNlT3ZlciAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkc3ViUGFnZXNDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0b3AoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7dG9wOiBzdWJQYWdlQ29udGFpbmVySW5pdGlhbFBvc2l0aW9ufSwgMjAwICwgKCk9PiB7JHN1YlBhZ2VzQ29udGFpbmVyLnJlbW92ZUF0dHIoJ3N0eWxlJyl9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChhY3RpdmVTdWJNZW51KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoYWN0aXZlU3ViTWVudSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignc3R5bGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN1Yk1lbnUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBzdWJQYWdlc01lbnVWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn0pO1xyXG5cclxuXHJcbiJdfQ==
