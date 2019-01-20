(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('/forms/wizard', ['jquery', 'Site'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('jquery'), require('Site'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jQuery, global.Site);
    global.formsWizard = mod.exports;
  }
})(this, function (_jquery, _Site) {
  'use strict';

  var _jquery2 = babelHelpers.interopRequireDefault(_jquery);

  (0, _jquery2.default)(document).ready(function ($$$1) {
    (0, _Site.run)();
  });

  // Example Wizard Form
  // -------------------
  (function () {
    // set up formvalidation
    (0, _jquery2.default)('#saveFactureForm').formValidation({
      framework: 'bootstrap',
      fields: {
    	  numFacture: {
          validators: {
            notEmpty: {
              message: 'Obligatoire'
            },
           
            regexp: {
                regexp: /^[a-zA-Z0-9]+$/
              }
          }
        },
        
          
        
        password: {
          validators: {
            notEmpty: {
              message: 'Obligatoire'
            },
            different: {
              field: 'username',
              message: 'The password cannot be the same as username'
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

    (0, _jquery2.default)("#saveClientForm").formValidation({
      framework: 'bootstrap',
      fields: {
    	  client: {
              validators: {
                notEmpty: {
                  message: 'Obligatoire'
                },
               
                
              }
            },
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
    (0, _jquery2.default)("#saveProduitForm").formValidation({
        framework: 'bootstrap',
        fields: {
      	  client: {
                validators: {
                  notEmpty: {
                    message: 'Obligatoire'
                  },
                 
                  
                }
              },
              produit: {
                  validators: {
                    notEmpty: {
                      message: 'Obligatoire'
                    }
                  }
              },
              prixuni : {
                  validators: {
                      notEmpty: {
                        message: 'Obligatoire'
                      },
                      
                      
                      
                      
                   
                    
                  }
                },
                unites : {
                    validators: {
                        notEmpty: {
                          message: 'Obligatoire'
                        },
                        
                        
                        
                        
                     
                      
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
    
    window.saveFacture  = function () {
    	
    	
	  	
	  	var formData = {
            'numFacture': $('input[name=numFacture]').val(),
            'dateFacturation': $('input[name=dateFacturation]').val(),
      		'bl'              : $('input[name=bl]').val(),
      		'modepaiement'              : $('select[name=modepaiement]').val(),
      		'autremodePaiement'              : $('input[name=autremodePaiement]').val(),
      		'reference'              : $('input[name=reference]').val(),
      		'datePaiement'              : $('input[name=datePaiement]').val(),
      		
          
      };
      
      
      //document.getElementById("nomCategorie").value="";
      
      
     $.ajax({
          type        : 'POST', 
          url         : 'SauvegardeDetailFacture', 
          data        : formData,
          
                      
      })
      
          
          .fail(function(data) { 
          	//$("[data-dismiss=modal]").trigger({ type: "click" });   
          	
              //console.log(data); 

              
          });

     
      event.preventDefault();
      $("[data-wizard=next]").trigger({ type: "click" });
      
      return false;

		
    	
    }
window.saveClient  = function () {
    	
    	
	  	
	  	var formData = {
            'client': $('select[name=client]').val(),
            'adresse': $('input[name=adresse]').val(),
      		'ville'              : $('input[name=ville]').val(),
      		'ice'              : $('input[name=ice]').val(),
      		
      		
          
      };
      
      
      //document.getElementById("nomCategorie").value="";
      
      
     $.ajax({
          type        : 'POST', 
          url         : 'SauvegardeClienFacture', 
          data        : formData,
          
                      
      })
      
          
          .fail(function(data) { 
          	//$("[data-dismiss=modal]").trigger({ type: "click" });   
          	
              //console.log(data); 

              
          });

     
      event.preventDefault();
      $("[data-wizard=next]").trigger({ type: "click" });
      return false;

		
    	
    }
	
	
	   window.stepsNext  = function () {
			
			
		  	
			 event.preventDefault();
		      $("[data-wizard=next]").trigger({ type: "click" });
		      return false;
		
		  		
		  		
		      
	   }
		  	
	   window.saveProduit  = function () {
		
		
	  	
	  	var formData = {
	        'categorie': $('select[name=categorie]').val(),
	        'produit': $('input[select=produit]').val(),
	  		'prixuni'              : $('input[name=prixuni]').val(),
	  		'unites'              : $('input[name=unites]').val(),
	  		'quantite'              : $('input[name=quatite]').val(),

	  		
	  		
	      
	  };
	  
	  
	  //document.getElementById("nomCategorie").value="";
	  
	  
	 $.ajax({
	      type        : 'POST', 
	      url         : 'AjouterProduitFacture', 
	      data        : formData,
	      
	                  
	  })
	  
	      
	  .fail(function(data) { 
	      	//$("[data-dismiss=modal]").trigger({ type: "click" });   
	      	
	          //console.log(data); 
	    	  //event.preventDefault();
	    	  //$("validateProduit").removeAttr("disabled"); 
	    	  //alert('non');
		  
		        
	      })
	  .done(function(data) {
	    	  
	    	  var table = $('#tableProduit').dataTable();
	    		if (result == "[]") {
	    			
	    			 
	    			table
	    			    .clear()
	    			    .draw();
	    	    }
	    	        else
	    	    {
	    	        	$("#tableProduit").DataTable().destroy();
	    	        	$('#tableProduit').dataTable( {
	    	        	
	    	        		"language": {
	    	   		        	"url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
	    	   		        },
	    	   		    
	    	   	        "serverSide": true,
	    	   	        "ajax": {
	    	   	            "url": "TableAccueilServlet",
	    	   	            "type": "POST",
	    	   	            "dataSrc": function ( result ) {
	    	   	                //Make your callback here.
	    	   	               
	    	   	                return result;
	    	   	            }   
	    	   	        },
	    	   	               
	    	   	        
	    	   	        
	    	   	        "columns": [
	    	   	            { "data": "description" },
	    	   	            { "data": "prixunite" },
	    	   	            { "data": "unite" },
	    	   	            { "data": "nombre" },
	    	   	            { "data": "prixht" }
	    	   	        ]
	    	   	    } );
	    	        table.draw();
	    	        
	    	    }   
	 
	    		  
	    		   	  
	      });
	 event.preventDefault();
	 return false;
	
	 
		
		
	}
    

    // init the wizard
    var defaults = Plugin.getDefaults("wizard");
    var options = _jquery2.default.extend(true, {}, defaults, {
      buttonsAppendTo: '.panel-body'
    });

    var wizard = (0, _jquery2.default)("#genererFactureWizardForm").wizard(options).data('wizard');

    // setup validator
    // http://formvalidation.io/api/#is-valid
    wizard.get("#saveFacture").setValidator(function () {
      var fv = (0, _jquery2.default)("#saveFactureForm").data('formValidation');
      fv.validate();

      if (!fv.isValid()) {
        return false;
      }

      return true;
    });

    wizard.get("#saveClient").setValidator(function () {
      var fv = (0, _jquery2.default)("#saveClientForm").data('formValidation');
      fv.validate();

      if (!fv.isValid()) {
        return false;
      }

      return true;
    });
    wizard.get("#saveProduit").setValidator(function () {
        var fv = (0, _jquery2.default)("#saveProduitForm").data('formValidation');
        fv.validate();
        
        if (!fv.isValid()) {
          return false;
        }
        //$("[data-wizard=next]").trigger({ type: "click" });
        return true;
      });
    wizard.get("#genererFacture").setValidator(function () {
        var fv = (0, _jquery2.default)("#genererFactureForm").data('formValidation');
        fv.validate();
        
        if (!fv.isValid()) {
          return false;
        }

        return true;
      });
  })();

  // Example Wizard Form Container
  // -----------------------------
  // http://formvalidation.io/api/#is-valid-container
  (function () {
    var defaults = Plugin.getDefaults("wizard");

    var options = _jquery2.default.extend(true, {}, defaults, {
      onInit: function onInit() {
        (0, _jquery2.default)('#exampleFormContainer').formValidation({
          framework: 'bootstrap',
          fields: {
            username: {
              validators: {
                notEmpty: {
                  message: 'The username is required'
                }
              }
            },
            password: {
              validators: {
                notEmpty: {
                  message: 'The password is required'
                }
              }
            },
            number: {
              validators: {
                notEmpty: {
                  message: 'The credit card number is not valid'
                }
              }
            },
            cvv: {
              validators: {
                notEmpty: {
                  message: 'The CVV number is required'
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
      },
      validator: function validator() {
        var fv = (0, _jquery2.default)('#exampleFormContainer').data('formValidation');

        var $this = (0, _jquery2.default)(this);

        // Validate the container
        fv.validateContainer($this);

        var isValidStep = fv.isValidContainer($this);
        if (isValidStep === false || isValidStep === null) {
          return false;
        }

        return true;
      },
      onFinish: function onFinish() {
        // $('#exampleFormContainer').submit();
      },
      buttonsAppendTo: '.panel-body'
    });

    (0, _jquery2.default)("#exampleWizardFormContainer").wizard(options);
  })();

  // Example Wizard Pager
  // --------------------------
  (function () {
    var defaults = Plugin.getDefaults("wizard");

    var options = _jquery2.default.extend(true, {}, defaults, {
      step: '.wizard-pane',
      templates: {
        buttons: function buttons() {
          var options = this.options;
          var html = '<div class="btn-group btn-group-sm">' + '<a class="btn btn-default btn-outline" href="#' + this.id + '" data-wizard="back" role="button">' + options.buttonLabels.back + '</a>' + '<a class="btn btn-success btn-outline float-right" href="#' + this.id + '" data-wizard="finish" role="button">' + options.buttonLabels.finish + '</a>' + '<a class="btn btn-default btn-outline float-right" href="#' + this.id + '" data-wizard="next" role="button">' + options.buttonLabels.next + '</a>' + '</div>';
          return html;
        }
      },
      buttonLabels: {
        next: '<i class="icon wb-chevron-right" aria-hidden="true"></i>',
        back: '<i class="icon wb-chevron-left" aria-hidden="true"></i>',
        finish: '<i class="icon wb-check" aria-hidden="true"></i>'
      },

      buttonsAppendTo: '.panel-actions'
    });

    (0, _jquery2.default)("#exampleWizardPager").wizard(options);
  })();

  // Example Wizard Progressbar
  // --------------------------
  (function () {
    var defaults = Plugin.getDefaults("wizard");

    var options = _jquery2.default.extend(true, {}, defaults, {
      step: '.wizard-pane',
      onInit: function onInit() {
        this.$progressbar = this.$element.find('.progress-bar').addClass('progress-bar-striped');
      },
      onBeforeShow: function onBeforeShow(step) {
        step.$element.tab('show');
      },
      onFinish: function onFinish() {
        this.$progressbar.removeClass('progress-bar-striped').addClass('progress-bar-success');
      },
      onAfterChange: function onAfterChange(prev, step) {
        var total = this.length();
        var current = step.index + 1;
        var percent = current / total * 100;

        this.$progressbar.css({
          width: percent + '%'
        }).find('.sr-only').text(current + '/' + total);
      },
      buttonsAppendTo: '.panel-body'
    });

    (0, _jquery2.default)("#exampleWizardProgressbar").wizard(options);
  })();

  // Example Wizard Tabs
  // -------------------
  (function () {
    var defaults = Plugin.getDefaults("wizard");
    var options = _jquery2.default.extend(true, {}, defaults, {
      step: '> .nav > li > a',
      onBeforeShow: function onBeforeShow(step) {
        step.$element.tab('show');
      },
      classes: {
        step: {
          //done: 'color-done',
          error: 'color-error'
        }
      },
      onFinish: function onFinish() {
        alert('finish');
      },
      buttonsAppendTo: '.tab-content'
    });

    (0, _jquery2.default)("#exampleWizardTabs").wizard(options);
  })();

  // Example Wizard Accordion
  // ------------------------
  (function () {
    var defaults = Plugin.getDefaults("wizard");
    var options = _jquery2.default.extend(true, {}, defaults, {
      step: '.panel-title[data-toggle="collapse"]',
      classes: {
        step: {
          //done: 'color-done',
          error: 'color-error'
        }
      },
      templates: {
        buttons: function buttons() {
          return '<div class="panel-footer">' + defaults.templates.buttons.call(this) + '</div>';
        }
      },
      onBeforeShow: function onBeforeShow(step) {
        step.$pane.collapse('show');
      },

      onBeforeHide: function onBeforeHide(step) {
        step.$pane.collapse('hide');
      },

      onFinish: function onFinish() {
        alert('finish');
      },

      buttonsAppendTo: '.panel-collapse'
    });

    (0, _jquery2.default)("#exampleWizardAccordion").wizard(options);
  })();
});