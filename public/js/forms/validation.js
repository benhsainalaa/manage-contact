//document.getElementById("addCatClientForm").action = 'addClientCat()';
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('/forms/validation', ['jquery', 'Site'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('jquery'), require('Site'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jQuery, global.Site);
    global.formsValidation = mod.exports;
  }
})(this, function (_jquery, _Site) {
  'use strict';

  var _jquery2 = babelHelpers.interopRequireDefault(_jquery);

  (0, _jquery2.default)(document).ready(function ($$$1) {
    (0, _Site.run)();
  });


  // Example Validataion Full
  // ------------------------
  (function () {

    (0, _jquery2.default)('#addContactForm').formValidation({
      framework: "bootstrap4",
      button: {
        selector: '#validateButton1',
        disabled: 'disabled'
      },
      icon: null,
      fields: {
              
        first_name: {
            validators: {
              notEmpty: {
                message: 'Obligatoire'
              },
              
              regexp: {
                regexp: /^[a-zA-Z0-9]+$/
              }
            }
          },
        last_name: {
            validators: {
              notEmpty: {
                message: 'Obligatoire'
              },
              
              regexp: {
                regexp: /^[a-zA-Z0-9]+$/
              }
            }
          },
        
        email: {
          validators: {
            notEmpty: {
              message: 'Obligatoire'
            },
            emailAddress: {
              message: 'Email non valide'
            }
          }
        },
        birthday: {
          validators: {
            notEmpty: {
              message: 'The birthday is required'
            },
            date: {
              format: 'YYYY/MM/DD'
            }
          }
        }
        
      },
      err: {
        clazz: 'invalid-feedback'
      },
      control: {
        // The CSS class for valid control
        valid: 'is-valid',

        // The CSS class for invalid control
        invalid: 'is-invalid'
      },
      row: {
        invalid: 'has-danger'
      }
    });
  })();

  


});



