<template>
    <div class="wrapper">
    <!-- <Form>
        <Field
        rules="required"
        :modelValue="form.first_name"
        v-slot="{ errors }"
        name="email"
        >
         <input type="text" v-model="form.first_name">
         <p class="login__input-error" v-if="errors && errors.length">
            {{ errors[0] }}
         </p>
        </Field>
    </Form>
    <button @click="handleClick">dsfd</button> -->
    <div class="enterlist">
        <div>
            <h1>Welcome to our company</h1>
             <div class="btn-wrapper"> 
                <button @click="registerClick" class="register">Register</button>
                <button @click="loginClick" class="login">Login</button>
             </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const route = useRouter()
 const registerClick =()=>{
    route.push('/register')
 }
 const loginClick =()=>{
    route.push('/login')
 }
//  import { Form , Field} from 'vee-validate';
//  import { onMounted, ref } from 'vue';
//  import Notification from '@/plugins/Notification';
//  const form = ref({
//   first_name: '',
//   number: null
// })
// const handleClick =()=>{
//     Notification({ text: "Product delete !!!" },{type: 'danger'})
// }
</script>

<style  scoped>
    .wrapper{
        background-color: black;
    }
   .enterlist{
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh;
 }
 h1{
    color: white;
    margin-bottom: 30px;
 }
 .btn-wrapper{
    text-align: center;
 }
 .register{
    padding: 10px 25px;
    background-color: blue;
    color: white;
    font-size: large;
    border-radius: 5px;
    border: none;
 }
 .login{
    padding: 10px 25px;
    background-color: red;
    margin: 20px;
    color: white;
    font-size: large;
    border-radius: 5px;
    border: none;
 }
</style>