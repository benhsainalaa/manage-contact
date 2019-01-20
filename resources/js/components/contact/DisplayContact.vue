<template>
    <div>
        <h1>Contacts</h1>

        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'CreateContact' }" class="btn btn-primary">Create Contact</router-link>
          </div>
        </div><br />
        <table id="table-contact" class="table table-bordered table-hover table-striped" cellspacing="0" style="width:90%">
        <thead>
            <tr>
                <th>ID</th>
                <th>BIRTH DATE</th>
                <th>NAME</th>
                <th>CITY</th>
                <th>EMAIL</th>
                <th>PHONE NUMBER</th>
                <th>COMPANY</th>
                <th>ACTIONS</th>

                
            </tr>
        </thead>
        
        
                 <tr v-for="contact in contacts">
                    <td>{{ contact.id }}</td>
                    <td>{{ contact.birth_date }}</td>
                    <td>{{ contact.first_name }} {{ contact.last_name }}</td>
                    <td>{{ contact.city }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.phone }}</td>
                    <td>{{ contact.company_name }}</td>
                    <td><router-link :to="{name: 'EditContact', params: { id: contact.id }}"><i class="fa fa-edit" style="color:green"></i></router-link><router-link :to="{name: 'ShowContact', params: { id: contact.id }}"><i class="fa fa-eye" style="color:blue"></i></router-link><a  v-on:click="deleteContact(contact.id)" href="javascript:void(0);"><i class="fa fa-remove" style="color:red"></i></a></td>
                 </tr>
            
          
        
        <tfoot>
            <tr>
                <th>ID</th>
                <th>BIRTH DATE</th>
                <th>NAME</th>
                <th>CITY</th>
                <th>EMAIL</th>
                <th>PHONE NUMBER</th>
                <th>COMPANY</th>
                <th style="display:none;">ACTIONS</th>
            </tr>
        </tfoot>
    </table>
        
    </div>
</template>

<script>

    export default {
        data(){
            return{
                contacts: []
            }
        },

        created: function()
        {
            this.fetchContacts();
        },

        methods: {
            fetchContacts()
            {
              let uri = 'http://localhost:8000/api/contacts';
              this.axios.get(uri).then((response) => {
                  this.contacts = response.data;
              });
            },
            deleteContact(id)
            {
              let uri = `http://localhost:8000/api/contacts/delete/${id}`;
              
              this.axios.post(uri, this.contact).then((response) => {
              this.fetchContacts();          
                });

            }
        }
    }
</script>