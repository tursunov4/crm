<template>
    <div>
        <appModal v-model="addsup">
          <div class="text-center">
            <h2>Add Clients</h2>
            <form id="formm" @submit="(e)=>submitForm(e)">
             <input @change="(e)=>changeUsername(e)" type="text" placeholder="enter your username">
             <input @change="(e)=>changeAddress(e)" type="address" placeholder="enter your address">
             <input @change="(e)=>changeNumber(e)" type="number" placeholder="enter your phone number">
             <input @change="(e)=>changeImage(e)" type="file" placeholder="choose your img"/>
            </form>
            <button class="btn submit-btn" form="formm">Submit</button>
          </div>
        </appModal>
      <h2>Clients</h2>
       <div class="col-md-6 text-center mx-auto m-5">
        <button @click="addsup=true" class="btn btn-info ">Add Clients</button>
       </div>
      <table class="table ">
        <thead>
                <th v-for="(item,index) in headers" :key="index">{{ item.title }}</th>
        </thead>
        <tbody>
            <tr v-for="(item , index) in suppliers">
                <td>{{ index +1}}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.phone_number }}</td>
                <td><img :src="item.image" alt="image" width="20" height="20"></td>
                <td><button @click="()=>deletClick(item.id)"  class="btn btn-danger">delet</button></td>
            </tr>
        </tbody>
      </table>
    </div>
</template>

<script setup>
import http from '@/axios';
import { ref } from 'vue';
import appModal from '@/components/ui/app-modal.vue';
const addsup = ref(false)
const headers = ref([
    {title :'T/R' , value:'Tr'},
  {title: 'Name', value:'name'},
  {title:'Address' , value:'address'},
  {title:'Number' , value:'phone_number'},
  {title:'Image' },
  {title :'Action'}
])
const username = ref('')
const firstname = ref('')
const lastname = ref('')
const email = ref('')
const address = ref('')
const number = ref('')
const image = ref({})
const suppliers = ref([])
const changeUsername =(e)=>{
    username.value=e.target.value
}

const changeAddress =(e)=>{
    address.value=e.target.value
}
const changeNumber =(e)=>{
    number.value=e.target.value
}
const changeImage =(e)=>{
    image.value=e.target.files[0]
}
const submitForm =(e)=>{
    e.preventDefault()
    const form = new FormData()
    form.append('name' , username.value)
        form.append('address' , address.value)
        form.append('phone_number' , number.value)
        form.append('image' , image.value)
        http.post('/clients/' , form).then((res) =>{
            if(res.status === 201){
                window.location.reload()
            }
        })
        addsup.value = false
        console.log(form)
}

const getSuppliers = ()=>{
    http.get('/clients/').then((res)=>{
        console.log(res.data);
        suppliers.value = res.data
    })
}
const  deletClick =(id)=>{
    http.delete(`/clients/${id}`).then((res)=>{
        if(res.status === 204){
            window.location.reload()
        }
    })
}
getSuppliers()
</script>

<style  scoped>

  h2{
    text-align: center;
    margin: 20px 0 60px 0;
    font-size: 40px;
    font-weight: 700;
    font-family: sans-serif;
  }
  input{
    width: 80%;

    padding: 5px;
    border-radius: 7px;
 
    outline: none;
    margin-bottom: 10px;
 }
 .submit-btn{
    background-color: blue;
    color: white;
    padding: 10px 25px;
 }
</style>