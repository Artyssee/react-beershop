webpackHotUpdate("styles",{

/***/ "./partials/navigation/navigation.scss":
/*!*********************************************!*\
  !*** ./partials/navigation/navigation.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"mainNavigation":"partials-navigation-___mainNavigation___1309d","mainNavigationList":"partials-navigation-___mainNavigationList___2bIqU","mainNavigationListLink":"partials-navigation-___mainNavigationListLink___3PuDH"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1551783848751");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.6c7f3e717f49ac073a85.hot-update.js.map