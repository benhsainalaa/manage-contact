

<template>
  <div>
    <h1>Contact Details</h1>
       <form id="addContactForm"  v-on:submit.prevent="updateContact" class="Form-Full" autocomplete="off">
        

           
            
                
              <div class="row row-lg">
                <div class="col-xl-5 form-horizontal">
                  <div class="panel">
          <div class="panel-heading">
            
          </div>
          <div class="panel-body">
             <div class="form-group row">
                    <label class="col-xl-12 col-md-3 form-control-label">Email Address
                      
                    </label>
                    <div class="col-xl-12 col-md-9">
                      <label class="col-xl-12 col-md-3 form-control-label">
                      {{ contact.email }}
                    </label>
                    </div>
            </div>    
            <div class="form-group row">
                    <label class="col-xl-12 col-md-3 form-control-label">First Name
                      
                    </label>
                    <div class="col-xl-12 col-md-9">
                      <label class="col-xl-12 col-md-3 form-control-label">
                      {{ contact.first_name }}
                    </label>
                    </div>
            </div>
            <div class="form-group row">
                    <label class="col-xl-12 col-md-3 form-control-label">Last Name
                      
                    </label>
                    <div class="col-xl-12 col-md-9">
                      <label class="col-xl-12 col-md-3 form-control-label">
                      {{ contact.last_name }}
                    </label>
                    </div>
            </div>    
            <div class="form-group row">
                    <label class="col-xl-12 col-md-3 form-control-label">Birth Date
                      
                    </label>
                    <div class="col-xl-12 col-md-9">
                      <label class="col-xl-12 col-md-3 form-control-label">
                      {{ contact.birth_date }}
                    </label>
                    </div>
            </div>
            <div class="form-group row">
                    <label class="col-xl-12 col-md-3 form-control-label">Function
                      
                    </label>
                    <div class="col-xl-12 col-md-9">
                      <label class="col-xl-12 col-md-3 form-control-label">
                      {{ contact.function }}
                    </label>
                    </div>
            </div>
            <div class="form-group row">
                    <label class="col-xl-12 col-md-3 form-control-label">City
                      
                    </label>
                    <div class="col-xl-12 col-md-9">
                      <label class="col-xl-12 col-md-3 form-control-label">
                      {{ contact.city }}
                    </label>
                    </div>
            </div>
            <div class="form-group row">
                    <label class="col-xl-12 col-md-3 form-control-label">Phone
                      
                    </label>
                    <div class="col-xl-12 col-md-9">
                      <label class="col-xl-12 col-md-3 form-control-label">
                      {{ contact.phone }}
                    </label>
                    </div>
            </div>     
        
      
                  
                  
                  
                           
                          
                        
                      
                      
                 

                

                  

                  
                </div>
                </div>
                </div>
                      
                <div class="col-xl-7 form-horizontal">
                <div class="panel">
                <div class="panel-heading">
                Company 
                </div>
                <div class="panel-body">
                  <div class="col-xl-12 form-horizontal">
                  
                <div class="form-group row">
                    <label class="col-xl-12 col-md-3 form-control-label">Name 
                      
                    </label>
                    <div class="col-xl-12 col-md-9">
                      <label class="col-xl-12 col-md-3 form-control-label">
                      {{ contact.company_name }}
                    </label>
                    </div>
                </div>
                  <div class="form-group row">
                    <label class="col-xl-12 col-md-3 form-control-label">Address
                      
                    </label>
                    <div class="col-xl-12 col-md-9">
                      <label class="col-xl-12 col-md-3 form-control-label">
                      {{ contact.company_address }}
                    </label>
                    </div>
                </div>
                </div>
                  
                
               
                
                </div>
                
                
      
              
             
            
            
            
          </div>
        </div>
        </div>
        </form>
    
  </div>
</template>

<script>

    export default{
        data(){
            return{
                contact:{}
            }
        },

        created: function(){
            this.getContact();
        },

        methods: {
            getContact()
            {
              
              let uri = `http://localhost:8000/api/contacts/show/${this.$route.params.id}`;
                this.axios.get(uri).then((response) => {
                    this.contact = response.data;
                });
            },

            
        }
    }
</script>