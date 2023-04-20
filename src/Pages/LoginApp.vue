<template>
    <div>
       <div class="register">
           <div class="register-wrapper">
               <h2>Login</h2>
                  <div class="form">
                   <Form  @submit="register">
                       <Field
                       rules="required"
                            :modelValue="form.first_name"
                          v-slot="{ errors }"
                           name="Email"
                    >
                     <input @change="(e)=>userChange(e)" type="text" v-model="form.first_name" placeholder="Enter your username">
                     <p class="login__input-error" v-if="errors && errors.length">
                        {{ errors[0] }}
                     </p>
                         </Field>
                       <Field
                       rules="required"
                            :modelValue="form.password"
                          v-slot="{ errors }"
                           name="Password"
                    >
                     <input @change="(e)=>passwordChange(e)" type="password" v-model="form.password" placeholder="Enter your password">
                     <p class="login__input-error" v-if="errors && errors.length">
                        {{ errors[0] }}
                     </p>
                         </Field>
                         <button   type="submit" class="submit">Submit</button>
                  </Form>
                  </div>
           </div>
       </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { Form , Field } from 'vee-validate';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import Notification from '@/plugins/Notification';
import http from '@/axios';
const router = useRouter()
const username = ref('')
const password = ref('')

const userChange =(e)=>{
   username.value = e.target.value
}
const passwordChange =(e)=>{
   password.value = e.target.value
}

const form = ref({
 first_name: '',
 password :'',
 number: null
})
const register =()=>{
   http.post('/login/' ,{
       username:username.value,
       password:password.value
   }).then((res) =>{
      if(res.status === 200){
         router.push('/mainPage')
      }
   }).catch((err) =>{
       if(err.status !== 200){
           Notification({ text: "Password yoki usernameni qayta tekshiring!!!" },{type: 'danger'})
       }
   })
}
</script>

<style  scoped>
 .register{
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 100px;
 }
 .register-wrapper{
   max-width: 500px;
   padding: 40px 20px;
   background-color: black;
   border-radius: 10px;
 }
 h2{
   color: rgb(63, 133, 213);
   text-align: center;
   font-size: 35px;
   margin-bottom: 20px;
 }
 .login__input-error{
   color: red;
   text-align: start;
   margin-top: 0px;
   margin-left: 5%;
 }
 .form{
   width: 420px;
   margin: 0 auto;
   text-align: center;
 }
 input{
    width: 90%;
    border: none;
    padding: 10px;
    border-radius: 7px;
    font-size: px;
    outline: none;
    margin-bottom: 20px;
 }
 .submit{
   color: white;
   padding: 10px 25px;
   background-color: blue;
   border: none;
   border-radius: 10px;
 }
</style>