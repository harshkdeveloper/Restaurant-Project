<template>
    <img class="logo" alt="Vue logo" src="../assets/logo.jpg">
<h1>Login</h1>
    <div class="login">

       <label> Email<input type="email" v-model='email' /></label>
       <label>Password <input type="password" v-model='password' /></label>
       <button v-on:click="login">Login</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'LoginPage',
data()
{
    return{
    email:'',
    password:''
}
},
methods: {
   async login(){
let result=await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
// let email=check.data.find(!!this.email)
if(result.status===200&&result.data.length>0){
            alert('user LOGIN')
            localStorage.setItem('user-info',JSON.stringify(result.data[0]))
            this.$router.push({name:'HomePage'})
            console.log(result)
        }
// console.log(check)
    }
},mounted() {
    let user=localStorage.getItem('user-info')
    if(user){
        this.$router.push({name:'HomePage'})
    }
}

}
</script>
<style>

.login input{
    width: 300px;
    height: 30px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid darkblue;

}
.login button{
width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background-color: skyblue;
    color: white;
    cursor: pointer;
}
.logo{
    width:100px
}
</style>