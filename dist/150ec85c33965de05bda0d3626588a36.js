// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({3:[function(require,module,exports) {
LInit(30, "mylegend", 400, 600, main);

var dataList = {};

function main() {
	LGlobal.aspectRatio = PORTRAIT;

	LGlobal.setDebug(false);

	var b = document.body;
	b.style.margin = "0px";
	b.style.padding = "0px";
	b.style.backgroundColor = "black";

	if (LGlobal.mobile) {
		LGlobal.stageScale = LStageScaleMode.SHOW_ALL;
	}
	LGlobal.screen(LGlobal.FULL_SCREEN);

	loadGame();
}

function loadGame() {
	var loadData = [[{ path: "./js/ytPreloader.js" }, { name: "preloader_bar", path: "./images/preloader_bar.jpg" }, { name: "preloader_bar_background", path: "./images/preloader_bar_background.jpg" }, { name: "preloader_background", path: "./images/preloader_background.jpg" }], [{ path: "./js/ytButton.js" }, { path: "./js/ytMenuLayer.js" }, { path: "./js/ytOptionLayer.js" }, { path: "./js/ytGameLayer.js" }, { path: "./js/ytBackground.js" }, { path: "./js/ytStreetView.js" }, { path: "./js/ytCar.js" }, { path: "./js/ytCarLayer.js" }, { path: "./js/ytExplosion.js" }, { path: "./js/ytPoint.js" }, { path: "./js/ytResultBox.js" }, { path: "./js/ytHelpLayer.js" }, { path: "./js/ytAboutLayer.js" }, { name: "button_sheet", path: "./images/button_sheet.jpg" }, { name: "menu_car_icons", path: "./images/menu_car_icons.png" }, { name: "explosion", path: "./images/explosion.png" }, { name: "cars_atlas", path: "./images/cars_atlas.png" }, { name: "button_pause_sheet", path: "./images/button_pause_sheet.png" }, { name: "default_menu_background", path: "./images/default_menu_background.jpg" }, { name: "misc_atlas", path: "./images/misc_atlas.png" }, { name: "numbers", path: "./images/numbers.png" }, { name: "street_canyon", path: "./images/street_canyon.jpg" }, { name: "street_city", path: "./images/street_city.jpg" }, { name: "street_desert", path: "./images/street_desert.jpg" }, { name: "street_grass", path: "./images/street_grass.jpg" }, { name: "street_snow", path: "./images/street_snow.jpg" }, { name: "street_water", path: "./images/street_water.jpg" }, { name: "help", path: "./images/help.jpg" }]];

	LLoadManage.load(loadData[0], null, function (r) {
		updateDataList(r);

		var preloader = new ytPreloader();
		addChild(preloader);

		LLoadManage.load(loadData[1], function (p) {
			preloader.setProgress(p);
		}, function (r) {
			updateDataList(r);

			preloader.remove();

			addMenuInterface();
		});
	});
}

function updateDataList(r) {
	for (var k in r) {
		var o = r[k];

		if (o instanceof Image) {
			dataList[k] = new LBitmapData(o);
		} else {
			dataList[k] = o;
		}
	}
}

function addMenuInterface() {
	var menuInterface = new ytMenuLayer();
	addChild(menuInterface);
}

function addOptionInterface() {
	var optionInterface = new ytOptionLayer();
	addChild(optionInterface);
}

function addGameInterface(car, place) {
	var gameInterface = new ytGameLayer(car, place);
	addChild(gameInterface);
}

function addHelpInterface() {
	var helpInterface = new ytHelpLayer();
	addChild(helpInterface);
}

function addAboutInterface() {
	var aboutInterface = new ytAboutLayer();
	addChild(aboutInterface);
}
},{}]},{},[3])
//# sourceMappingURL=/dist/150ec85c33965de05bda0d3626588a36.map