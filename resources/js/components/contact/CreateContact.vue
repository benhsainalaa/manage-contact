<template>
  <div>
    <h1>Create contact</h1>
       <form id="addContactForm"  v-on:submit.prevent="addContact" class="Form-Full" autocomplete="off">
        

           
            
                
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
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="icon wb-envelope" aria-hidden="true"></i>
                        </span>
                        <input type="email" class="form-control" name="email" v-model="contact.email" placeholder="email@email.com"
                          required=""/>
                      </div>
                    </div>
                  </div>   
                  
                  
                  
                  <div class="form-group row">,
        
                    <label class="col-xl-12 col-md-3 form-control-label">First Name
                      <span class="required">*</span>
                    </label>
                    <div class=" col-xl-12 col-md-9">
                      <input type="text" class="form-control" v-model="contact.first_name" name="first_name" id="first_name" placeholder="" required=""
                        >
                    </div>
                  </div>                 
                  
                 
        
        
                  <div class="form-group row">
                    <label class="col-xl-12 col-md-3 form-control-label">Last Name
                      <span class="required">*</span>
                    </label>
                    <div class=" col-xl-12 col-md-9">
                      <input type="text" class="form-control" name="last_name" id="last_name" v-model="contact.last_name" placeholder="" required=""
                        >
                    </div>
                  </div>

                  <div class="form-group row">
                  <label class="col-xl-3 col-md-3 form-control-label">Birth Date
                     
                    </label>
                  <div class=" col-xl-9 col-md-9">
                  <div class="input-group">
                      <span class="input-group-addon">
                        <i class="icon wb-calendar" aria-hidden="true"></i>
                      </span>
                      <datepicker :format="customFormatter" type="date" v-model="contact.birth_date" name="uniquename"></datepicker>

                  </div>
                  </div>
                  </div>
                 <div class="form-group row">
                    <label class="col-xl-12 col-md-3 form-control-label">Function
                      
                    </label>
                    <div class=" col-xl-12 col-md-9">
                      <input type="text" class="form-control" v-model="contact.function" name="function" placeholder=""
                        >
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-xl-12 col-md-3 form-control-label">City
                      
                    </label>
                    <div class=" col-xl-12 col-md-9">
                      <input type="text" class="form-control" v-model="contact.city" name="city" placeholder=""
                        >
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-xl-12 col-md-3 form-control-label">Phone</label>
                    <div class="col-xl-12 col-md-9">
                      <input type="text" class="form-control" id="inputPhone2" data-plugin="formatter"
                        data-pattern="[[99]]-[[99]]-[[99]]-[[99]]-[[99]]"  v-model="contact.phone" name="phone" required=""/>
                      <p class="text-help">00-00-00-00-0</p>
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
                    <div class=" col-xl-12 col-md-9">
                      <input type="text" class="form-control" v-model="contact.company_name" name="company_name" placeholder=""
                        >
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-xl-12 col-md-3 form-control-label">Address
                      
                    </label>
                    <div class=" col-xl-12 col-md-9">
                      <input type="text" class="form-control" v-model="contact.company_address" name="company_address" placeholder=""
                        >
                    </div>
                  </div>  
                  
                </div>
                </div>
                  
                
               
                
                </div>
                
                
      
              
             
            
            
            
          </div>
        </div>
        <div class="form-group col-xl-6 text-right padding-top-m" style="display:inline-block;">
                  <button type="submit" class="btn btn-primary" id="validateButton1">Add</button>
                </div>
        </form>
    
  </div>
</template>
<script>
  import Vuelidate from 'vuelidate';
  import { required, minLength, helpers, alpha, email } from 'vuelidate/lib/validators';
  import Datepicker from 'vuejs-datepicker';
  export default {

    data(){

        return{
          contact:{}
          
        }
    },

    

    components: {
    Datepicker
    },
    methods: {
        customFormatter(date) {
        
        var d = new Date(date).toJSON().slice(0, 10);
        return d;
       
              },
  

        addContact() {
        
        this.contact.birth_date = this.customFormatter(this.contact.birth_date);
        let uri = 'http://localhost:8000/api/contacts/create';
        this.axios.post(uri, this.contact).then((response) => {
          this.$router.push({name: 'DisplayContact'})
        
        })
    }
  }
}

</script>