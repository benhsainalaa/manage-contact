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
    (0, _jquery2.default)('#inscForm').formValidation({
      framework: "bootstrap4",
      button: {
        selector: '#validateButton1',
        disabled: 'disabled'
      },
      icon: null,
      fields: {
        username: {
          validators: {
            notEmpty: {
              message: 'Obligatoire'
            },
            stringLength: {
              min: 6,
              max: 30
            },
            regexp: {
              regexp: /^[a-zA-Z0-9]+$/
            }
          }
        },
        
        login: {
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
        password: {
          validators: {
            notEmpty: {
              message: 'The password is required'
            },
            stringLength: {
              min: 8
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
        },
        github: {
          validators: {
            url: {
              message: 'The url is not valid'
            }
          }
        },
        skills: {
          validators: {
            notEmpty: {
              message: 'The skills is required'
            },
            stringLength: {
              max: 300
            }
          }
        },
        porto_is: {
          validators: {
            notEmpty: {
              message: 'Please specify at least one'
            }
          }
        },
        'for[]': {
          validators: {
            notEmpty: {
              message: 'Please specify at least one'
            }
          }
        },
        company: {
          validators: {
            notEmpty: {
              message: 'Please company'
            }
          }
        },
        browsers: {
          validators: {
            notEmpty: {
              message: 'Please specify at least one browser you use daily for development'
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

//Example Validataion Full
  // ------------------------
  (function () {
    (0, _jquery2.default)('#mdfProfilForm').formValidation({
      framework: "bootstrap4",
      button: {
        selector: '#validateButton1',
        disabled: 'disabled'
      },
      icon: null,
      fields: {
        username: {
          validators: {
            notEmpty: {
              message: 'Obligatoire'
            },
            stringLength: {
              min: 6,
              max: 30
            },
            regexp: {
              regexp: /^[a-zA-Z0-9]+$/
            }
          }
        },
        
        login: {
            validators: {
              notEmpty: {
                message: 'Obligatoire'
              },
              /*stringLength: {
                min: 6,
                max: 30
              },*/
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
        password: {
          validators: {
            notEmpty: {
              message: 'The password is required'
            },
            stringLength: {
              min: 8
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
        },
        github: {
          validators: {
            url: {
              message: 'The url is not valid'
            }
          }
        },
        skills: {
          validators: {
            notEmpty: {
              message: 'The skills is required'
            },
            stringLength: {
              max: 300
            }
          }
        },
        porto_is: {
          validators: {
            notEmpty: {
              message: 'Please specify at least one'
            }
          }
        },
        'for[]': {
          validators: {
            notEmpty: {
              message: 'Please specify at least one'
            }
          }
        },
        company: {
          validators: {
            notEmpty: {
              message: 'Please company'
            }
          }
        },
        browsers: {
          validators: {
            notEmpty: {
              message: 'Please specify at least one browser you use daily for development'
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
  
//Example Validataion Full
  // ------------------------
  (function () {
    (0, _jquery2.default)('#mdpForm').formValidation({
      framework: "bootstrap4",
      button: {
        selector: '#validateButton1',
        disabled: 'disabled'
      },
      icon: null,
      fields: {
        username: {
          validators: {
            notEmpty: {
              message: 'Obligatoire'
            },
            stringLength: {
              min: 6,
              max: 30
            },
            regexp: {
              regexp: /^[a-zA-Z0-9]+$/
            }
          }
        },
        
        login: {
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
        password: {
          validators: {
            notEmpty: {
              message: 'The password is required'
            },
            stringLength: {
              min: 8
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
        },
        github: {
          validators: {
            url: {
              message: 'The url is not valid'
            }
          }
        },
        skills: {
          validators: {
            notEmpty: {
              message: 'The skills is required'
            },
            stringLength: {
              max: 300
            }
          }
        },
        porto_is: {
          validators: {
            notEmpty: {
              message: 'Please specify at least one'
            }
          }
        },
        'for[]': {
          validators: {
            notEmpty: {
              message: 'Please specify at least one'
            }
          }
        },
        company: {
          validators: {
            notEmpty: {
              message: 'Please company'
            }
          }
        },
        browsers: {
          validators: {
            notEmpty: {
              message: 'Please specify at least one browser you use daily for development'
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
  
  
  

  // Example Validataion Constraints
  // -------------------------------
  (function () {
    (0, _jquery2.default)('#exampleConstraintsForm, #exampleConstraintsFormTypes').formValidation({
      framework: "bootstrap4",
      icon: null,
      fields: {
        type_email: {
          validators: {
            emailAddress: {
              message: 'Email non valide'
            }
          }
        },
        type_url: {
          validators: {
            url: {
              message: 'The url is not valid'
            }
          }
        },
        type_digits: {
          validators: {
            digits: {
              message: 'The value is not digits'
            }
          }
        },
        type_numberic: {
          validators: {
            integer: {
              message: 'The value is not an number'
            }
          }
        },
        type_phone: {
          validators: {
            phone: {
              message: 'The value is not an phone(US)'
            }
          }
        },
        type_credit_card: {
          validators: {
            creditCard: {
              message: 'The credit card number is not valid'
            }
          }
        },
        type_date: {
          validators: {
            date: {
              format: 'YYYY/MM/DD'
            }
          }
        },
        type_color: {
          validators: {
            color: {
              type: ['hex', 'hsl', 'hsla', 'keyword', 'rgb', 'rgba'], // The default value for type
              message: 'The value is not valid color'
            }
          }
        },
        type_ip: {
          validators: {
            ip: {
              ipv4: true,
              ipv6: true,
              message: 'The value is not valid ip(v4 or v6)'
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

  // Example Validataion Standard Mode
  // ---------------------------------
  (function () {
    (0, _jquery2.default)('#exampleStandardForm').formValidation({
      framework: "bootstrap4",
      button: {
        selector: '#validateButton2',
        disabled: 'disabled'
      },
      icon: null,
      fields: {
        standard_fullName: {
          validators: {
            notEmpty: {
              message: 'The full name is required and cannot be empty'
            }
          }
        },
        standard_email: {
          validators: {
            notEmpty: {
              message: 'The email address is required and cannot be empty'
            },
            emailAddress: {
              message: 'Email non valide'
            }
          }
        },
        standard_content: {
          validators: {
            notEmpty: {
              message: 'The content is required and cannot be empty'
            },
            stringLength: {
              max: 500,
              message: 'The content must be less than 500 characters long'
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

  // Example Validataion Summary Mode
  // -------------------------------
  (function () {
    (0, _jquery2.default)('.summary-errors').hide();

    (0, _jquery2.default)('#exampleSummaryForm').formValidation({
      framework: "bootstrap4",
      button: {
        selector: '#validateButton3',
        disabled: 'disabled'
      },
      icon: null,
      fields: {
        summary_fullName: {
          validators: {
            notEmpty: {
              message: 'The full name is required and cannot be empty'
            }
          }
        },
        summary_email: {
          validators: {
            notEmpty: {
              message: 'The email address is required and cannot be empty'
            },
            emailAddress: {
              message: 'Email non valide'
            }
          }
        },
        summary_content: {
          validators: {
            notEmpty: {
              message: 'The content is required and cannot be empty'
            },
            stringLength: {
              max: 500,
              message: 'The content must be less than 500 characters long'
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
    }).on('success.form.fv', function (e) {
      // Reset the message element when the form is valid
      (0, _jquery2.default)('.summary-errors').html('');
    }).on('err.field.fv', function (e, data) {
      // data.fv     --> The FormValidation instance
      // data.field  --> The field name
      // data.element --> The field element
      (0, _jquery2.default)('.summary-errors').show();

      // Get the messages of field
      var messages = data.fv.getMessages(data.element);

      // Remove the field messages if they're already available
      (0, _jquery2.default)('.summary-errors').find('li[data-field="' + data.field + '"]').remove();

      // Loop over the messages
      for (var i in messages) {
        // Create new 'li' element to show the message
        (0, _jquery2.default)('<li/>').attr('data-field', data.field).wrapInner((0, _jquery2.default)('<a/>').attr('href', 'javascript: void(0);')
        // .addClass('alert alert-danger alert-dismissible')
        .html(messages[i]).on('click', function (e) {
          // Focus on the invalid field
          data.element.focus();
        })).appendTo('.summary-errors > ul');
      }

      // Hide the default message
      // $field.data('fv.messages') returns the default element containing the messages
      data.element.data('fv.messages').find('.invalid-feedback[data-fv-for="' + data.field + '"]').hide();
    }).on('success.field.fv', function (e, data) {
      // Remove the field messages
      (0, _jquery2.default)('.summary-errors > ul').find('li[data-field="' + data.field + '"]').remove();
      if ((0, _jquery2.default)('#exampleSummaryForm').data('formValidation').isValid()) {
        (0, _jquery2.default)('.summary-errors').hide();
      }
    });
  })();
//Example Validataion Full
//------------------------
  window.addCatClient  = function () {
		
		(function () { 
		//document.getElementById("addCatClientForm").submit();
		 (0, _jquery2.default)('#addCatClientForm').formValidation({
			 
		   framework: "bootstrap4",
		   button: {
		     selector: '#validateCat',
		     disabled: 'disabled'
		   },
		   icon: null,
		   fields: {
		     nomCategorie: {
		       validators: {
		         notEmpty: {
		           message: 'Obligatoire'
		         },
		        
		         regexp: {
		           regexp: /^[a-zA-Z0-9]+$/
		         }
		       }
		     },
		     
		     login: {
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
		     password: {
		       validators: {
		         notEmpty: {
		           message: 'The password is required'
		         },
		         stringLength: {
		           min: 8
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
		     },
		     github: {
		       validators: {
		         url: {
		           message: 'The url is not valid'
		         }
		       }
		     },
		     skills: {
		       validators: {
		         notEmpty: {
		           message: 'The skills is required'
		         },
		         stringLength: {
		           max: 300
		         }
		       }
		     },
		     porto_is: {
		       validators: {
		         notEmpty: {
		           message: 'Please specify at least one'
		         }
		       }
		     },
		     'for[]': {
		       validators: {
		         notEmpty: {
		           message: 'Please specify at least one'
		         }
		       }
		     },
		     company: {
		       validators: {
		         notEmpty: {
		           message: 'Please company'
		         }
		       }
		     },
		     browsers: {
		       validators: {
		         notEmpty: {
		           message: 'Please specify at least one browser you use daily for development'
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
		//var form = document.getElementById('addCatClientForm');
		$('#addCatClientForm').submit(function(event) { alert($('#addCatClientForm').data('formValidation').isValid()+"valid");
			if($('#addCatClientForm').data('formValidation').isValid()) {
			var data = [
		      	  {
		      		    "id": 1,
		      		    "name": "tet1",
		      		    
		      		    },
		      		    {
		          		    "id": 2,
		          		    "name": "test2",
		          		    
		          		}
		      		  ];
		  	var selectedOption = '';
		  	alert(data+"data");
		  	$('#catClient').empty();
		  	alert($('#catClient')+"dataempty");
            $('#catClient').append($('<option>').text("aucune categorie"));
            $.each(data, function(i, obj){
                 $('#catClient').append($('<option>').text(obj.name).attr('value', obj.id));
            });
            //$('#catClient').val(selectedOption);
		  	//alert(select+"selectcatclient");    
	        var formData = {
	            'idCategorie'              : $('input[name=nomCategorie]').val()
	        };
	        $("[data-dismiss=modal]").trigger({ type: "click" });
	        document.getElementById("nomCategorie").value="";
	        
	        
	        $.ajax({
	            type        : 'POST', 
	            url         : 'Servlet', 
	            data        : formData,
	            
	                        
	        })
	        
	            
	            .fail(function(data) { 
                    
	                
	            });

	      
	        event.preventDefault();
			}
			});
		
		

		}
  
  window.addClient  = function () {
		
		(function () { 
		//document.getElementById("addCatClientForm").submit();
		 (0, _jquery2.default)('#ajoutClientForm').formValidation({
			 
		   framework: "bootstrap4",
		   button: {
		     selector: '#ajoutClient',
		     disabled: 'disabled'
		   },
		   icon: null,
		   fields: {
		     addNom: {
		       validators: {
		         notEmpty: {
		           message: 'Obligatoire'
		         },
		        
		         regexp: {
		           regexp: /^[a-zA-Z0-9]+$/
		         }
		       }
		     },
		     
		     addAdresse: {
		         validators: {
		           notEmpty: {
		             message: 'Obligatoire'
		           },
		           
		           regexp: {
		             regexp: /^[a-zA-Z0-9]+$/
		           }
		         }
		       },
		       
		       addVille: {
			         validators: {
			           notEmpty: {
			             message: 'Obligatoire'
			           },
			           
			           regexp: {
			             regexp: /^[a-zA-Z0-9]+$/
			           }
			         }
			       },
			       'if': {
				         validators: {
				           notEmpty: {
				             message: 'Obligatoire'
				           },
				           
				           regexp: {
				             regexp: /^[a-zA-Z0-9]+$/
				           }
				         }
				       },
				       addIce: {
					         validators: {
					           notEmpty: {
					             message: 'Obligatoire'
					           },
					           
					           regexp: {
					             regexp: /^[a-zA-Z0-9]+$/
					           }
					         }
					       },
					       
		     
		     addEmail: {
		       validators: {
		         notEmpty: {
		           message: 'Obligatoire'
		         },
		         emailAddress: {
		           message: 'Email non valide'
		         }
		       }
		     },
		     password: {
		       validators: {
		         notEmpty: {
		           message: 'The password is required'
		         },
		         stringLength: {
		           min: 8
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
		     },
		     github: {
		       validators: {
		         url: {
		           message: 'The url is not valid'
		         }
		       }
		     },
		     skills: {
		       validators: {
		         notEmpty: {
		           message: 'The skills is required'
		         },
		         stringLength: {
		           max: 300
		         }
		       }
		     },
		     porto_is: {
		       validators: {
		         notEmpty: {
		           message: 'Please specify at least one'
		         }
		       }
		     },
		     'for[]': {
		       validators: {
		         notEmpty: {
		           message: 'Please specify at least one'
		         }
		       }
		     },
		     company: {
		       validators: {
		         notEmpty: {
		           message: 'Please company'
		         }
		       }
		     },
		     browsers: {
		       validators: {
		         notEmpty: {
		           message: 'Please specify at least one browser you use daily for development'
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
		
		$('#ajoutClientForm').submit(function(event) { 
		if($('#ajoutClientForm').data('formValidation').isValid()) {
		var data = [
	      	  {
	      		    "id": 1,
	      		    "name": "Leanne Graham",
	      		    
	      		    },
	      		    {
	          		    "id": 2,
	          		    "name": "2Leanne Graham",
	          		    
	          		}
	      		  ];
	  	var selectedOption = '';
	  	
	  	$('#catClient').empty();
	  	
        $('#catClient').append($('<option>').text("aucune categorie"));
        $.each(data, function(i, obj){
             $('#catClient').append($('<option>').text(obj.name).attr('value', obj.id));
        });
        //$('#catClient').val(selectedOption);
	  	//alert(select+"selectcatclient");    
        var formData = {
                'nom': $('input[name=addNom]').val(),
                'ville': $('input[name=addVille]').val(),
        		'adresse'              : $('input[name=addAdresse]').val(),
        		'categorie'              : $('select[name=addCategorieClient]').val(),
        		'email'              : $('input[name=addEmail]').val(),
        		'if'              : $('input[name=addIf]').val(),
        		'ice'              : $('input[name=addIce]').val(),
        		'telephone'              : $('input[name=addTelephone]').val(),
        		'fax'              : $('input[name=addFax]').val(),
            
        };
        $("[data-dismiss=modal]").trigger({ type: "click" });
        
        //document.getElementById("nomCategorie").value="";
        
        
       $.ajax({
            type        : 'POST', 
            url         : 'Servlet', 
            data        : formData,
            
                        
        })
        
            
            .fails(function(data) { 
            	//$("[data-dismiss=modal]").trigger({ type: "click" });   
            	
                //console.log(data); 

                
            });

       
        event.preventDefault();
		}
		});
		
		
  }

	


});


