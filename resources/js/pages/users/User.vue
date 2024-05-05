<script setup>
    import axios from 'axios';
    import {ref, onMounted} from 'vue';

    const users = ref([]);
    const getUsers=()=>{
        axios.get('/api/users').then((res)=>{
            console.log(res);
            users.value = res.data;
        })
    }
    onMounted(()=>{
        getUsers();
    });
</script>
<template>
    <div class="content-header">
              <div class="container-fluid">
                  <div class="row mb-2">
                      <div class="col-sm-6">
                          <h1 class="m-0">User</h1>
                      </div>
                      <div class="col-sm-6">
                          <ol class="breadcrumb float-sm-right">
                              <li class="breadcrumb-item"><a href="#">Home</a></li>
                              <li class="breadcrumb-item active">Starter Page</li>
                          </ol>
                      </div>
                  </div>
              </div>
          </div>


          <div class="content">
              <div class="container-fluid">
                  <div class="row">
                    <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <th scope="row">{{user.id}}</th>
                            <td>{{user.name}}</td>
                            <td>{{user.email}}</td>
                        </tr>
                        
                    </tbody>
                    </table>

                     

                  </div>

              </div>
          </div>
</template>