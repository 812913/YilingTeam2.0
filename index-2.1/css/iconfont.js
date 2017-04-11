;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-diannao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M960 64l-896 0c-26.528 0-48 21.472-48 48l0 640c0 26.496 21.472 48 48 48l304 0 0 80-64 64 0 16 416 0 0-16-64-64 0-80 304 0c26.496 0 48-21.504 48-48l0-640c0-26.528-21.504-48-48-48zM944 672l-864 0 0-544 864 0 0 544z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qianduankaifa" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M68.583005 52.543703l909.677255 0L903.8352 874.742605 518.191003 987.490481 151.372569 874.742605 68.583005 52.543703zM796.937564 300.988122l22.01234-124.715443-585.822332-0.98749 37.705763 374.170888 381.50083 0 0 97.79328-127.875412 42.886763-133.104507-44.886303-8.365528-52.881394-104.800881 0.98749 15.717983 131.724067 224.286206 74.818009 235.808634-70.845535 30.377868-301.325813L369.366466 427.726641l-10.487865-126.738519L796.937564 300.988122 796.937564 300.988122zM796.937564 300.988122"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-anzhuokaifa" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M879.404788 330.781682c-30.597879 0-55.42738 24.38948-55.42738 54.466496l0 212.936717c0 30.077016 24.829502 54.466496 55.42738 54.466496 30.595832 0 55.406914-24.38948 55.406914-54.466496L934.811702 385.248178C934.811702 355.171162 910.001643 330.781682 879.404788 330.781682zM211.036437 330.781682c-30.595832 0-55.406914 24.38948-55.406914 54.466496l0 212.936717c0 30.077016 24.810059 54.466496 55.406914 54.466496 30.617321 0 55.407937-24.38948 55.407937-54.466496L266.444375 385.248178C266.444375 355.171162 241.653759 330.781682 211.036437 330.781682zM299.80518 721.41245c0 23.108301 19.342534 41.850154 43.211151 41.850154l49.361221 0 0 118.443599c0 30.096459 24.810059 54.485939 55.406914 54.485939s55.42738-24.38948 55.42738-54.485939L503.211846 763.243161l86.22378 0 0 118.464065c0 30.096459 24.810059 54.485939 55.406914 54.485939 30.617321 0 55.42738-24.38948 55.42738-54.485939L700.269921 763.243161l49.360198 0c23.868617 0 43.211151-18.72241 43.211151-41.830711l0-388.989385L299.80518 332.423065 299.80518 721.41245zM662.08218 130.859373 707.637726 66.842361c2.703575-3.804652 2.022053-8.7902-1.50119-11.154038-3.546779-2.362814-8.591679-1.180895-11.294231 2.603291l-47.317679 66.500577c-31.17707-11.893888-65.819055-18.522865-102.304014-18.522865s-71.126944 6.628978-102.304014 18.522865l-47.317679-66.500577c-2.703575-3.784186-7.768941-4.966105-11.294231-2.603291-3.523243 2.363837-4.203742 7.349385-1.50119 11.154038l45.554522 64.017012c-72.4071 32.599466-123.18867 94.573959-129.654942 166.882821l493.034043 0C785.271874 225.433332 734.490304 163.459862 662.08218 130.859373zM441.21484 231.742015c-15.058974 0-27.27111-11.834536-27.27111-26.431999 0-14.57802 12.213159-26.393113 27.27111-26.393113 15.057951 0 27.273157 11.81407 27.273157 26.393113C468.487997 219.907479 456.272791 231.742015 441.21484 231.742015zM652.629901 231.742015c-15.057951 0-27.272133-11.834536-27.272133-26.431999 0-14.57802 12.215206-26.393113 27.272133-26.393113 15.077394 0 27.294646 11.81407 27.294646 26.393113C679.924547 219.907479 667.707294 231.742015 652.629901 231.742015z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fa-Induction" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M898.126686 512.852414 898.126686 118.565373c0-32.04074-24.242124-58.014298-54.147224-58.014298L178.653401 60.551074c-29.9051 0-54.147224 25.973558-54.147224 58.014298l0 394.287041-65.491597 0 0 122.796744 119.638821 0 7.251148 0 0 327.457983 67.538209 0 0-327.457983 229.220588 0 0 329.504596 67.538209 0 0-329.504596 212.847689 0 0 329.504596 67.538209 0 0-329.504596 13.390985 0 115.545596 0 0-122.796744L898.126686 512.852414z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sensor" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M989.007 621.767h-71.606v-357.955c0-100.093-65.972-182.277-160.332-182.277h-488.045c-92.78 0-161.972 79.248-161.972 172.030v368.203h-72.057c-17.174 0-31.109 13.68-31.109 30.854s13.934 30.854 31.109 30.854h166.366v227.938c0 17.174 13.68 31.109 30.854 31.109s30.854-13.934 30.854-31.109v-227.938h227.038v227.938c0 17.174 14.261 31.109 31.436 31.109s31.436-13.934 31.436-31.109v-227.938h228.202v227.938c0 17.174 14.261 31.109 31.436 31.109s31.436-13.934 31.436-31.109v-227.938h144.958c17.174 0 31.109-13.68 31.109-30.854s-13.934-30.854-31.109-30.854zM854.528 621.767h-683.441v-368.203c0-58.47 39.465-109.157 97.935-109.157h488.044c60.455 0 97.461 53.116 97.461 119.405v357.955z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-houduankaifa" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M313.901223 745.885841l-65.467037 65.494667 312.488037 0-65.470107-65.494667L313.901223 745.885841 313.901223 745.885841M744.493122 707.170075 64.86124 707.170075 64.86124 211.717959l679.628812 0L744.493122 707.170075 744.493122 707.170075 744.493122 707.170075M679.026084 641.675408 679.026084 277.218766 130.328277 277.218766l0.00307 364.456642L679.026084 641.675408 679.026084 641.675408 679.026084 641.675408M806.330492 809.210076 958.279183 809.210076 958.279183 211.717959 806.330492 211.717959 806.330492 809.210076 806.330492 809.210076M900.213719 642.042775c0 9.898441-8.019651 17.918092-17.915022 17.918092-9.886161 0-17.902742-8.019651-17.902742-17.918092 0-9.895371 8.016581-17.915022 17.902742-17.915022C892.194068 624.127753 900.213719 632.147404 900.213719 642.042775L900.213719 642.042775M898.582569 407.170466l0 165.784814-32.56058 0L866.021989 407.170466 898.582569 407.170466 898.582569 407.170466 898.582569 407.170466M898.582569 407.170466"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)