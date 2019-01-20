(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('/forms/advanced', ['jquery', 'Site'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('jquery'), require('Site'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jQuery, global.Site);
    global.formsAdvanced = mod.exports;
  }
})(this, function (_jquery, _Site) {
  'use strict';

  var _jquery2 = babelHelpers.interopRequireDefault(_jquery);

  (0, _jquery2.default)(document).ready(function ($$$1) {
    (0, _Site.run)();
  });

  // Example Reset Current
  // ---------------------
  (function () {
    // Reset Current
    (0, _jquery2.default)('#exampleTimeButton').on('click', function () {
      (0, _jquery2.default)('#inputTextCurrent').timepicker('setTime', new Date());
    });
  })();
  
  

  // Example inline datepicker
  // ---------------------
  (function () {
    // Reset Current
    (0, _jquery2.default)('#inlineDatepicker').datepicker();
    (0, _jquery2.default)("#inlineDatepicker").on("changeDate", function (event) {
      (0, _jquery2.default)("#inputHiddenInline").val((0, _jquery2.default)("#inlineDatepicker").datepicker('getFormattedDate'));
    });
  })();

  
  // Example AsSpinner
  // -----------------
  (function () {
    // Custom Format
    var options = _jquery2.default.extend({}, Plugin.getDefaults("asSpinner"), {
      format: function format(value) {
        return value + '%';
      }
    });

    (0, _jquery2.default)('#inputSpinnerCustomFormat').asSpinner(options);
  })();

  // Example Multi-Select
  // --------------------
  (function () {
    // for multi-select public methods example
    (0, _jquery2.default)('.multi-select-methods').multiSelect();
    (0, _jquery2.default)('#buttonSelectAll').click(function () {
      (0, _jquery2.default)('.multi-select-methods').multiSelect('select_all');
      return false;
    });
    (0, _jquery2.default)('#buttonDeselectAll').click(function () {
      (0, _jquery2.default)('.multi-select-methods').multiSelect('deselect_all');
      return false;
    });
    (0, _jquery2.default)('#buttonSelectSome').click(function () {
      (0, _jquery2.default)('.multi-select-methods').multiSelect('select', ['Idaho', 'Montana', 'Arkansas']);
      return false;
    });
    (0, _jquery2.default)('#buttonDeselectSome').click(function () {
      (0, _jquery2.default)('.multi-select-methods').multiSelect('select', ['Idaho', 'Montana', 'Arkansas']);
      return false;
    });
    (0, _jquery2.default)('#buttonRefresh').on('click', function () {
      (0, _jquery2.default)('.multi-select-methods').multiSelect('refresh');
      return false;
    });
    (0, _jquery2.default)('#buttonAdd').on('click', function () {
      (0, _jquery2.default)('.multi-select-methods').multiSelect('addOption', {
        value: 42,
        text: 'test 42',
        index: 0
      });
      return false;
    });
  })();

  

  // (function() {
  //   $("#irs_6").ionRangeSlider({
  //     values: ["zero","one","two","three","four","five","six","seven","eight","nine","ten"]
  //   })
  // })();
});