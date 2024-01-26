<template>
    <img class="logo" alt="Vue logo" src="../assets/logo.jpg">
<h1>Sign up</h1>
<div class="register">
   <label>Name <input type="text" v-model="name" placeholder='Enter name'/></label>
   
    <label>Email<input type="email" v-model="email" placeholder='Enter email'/></label>
   
    <label>Password<input type="password" v-model="password" placeholder='Enter password'/></label>
<button v-on:click="signUp">Sign Up</button>
<p><router-link to='login'>Login</router-link></p>
</div>
</template>
<script>
import axios from 'axios'
export default{
name:'SignUp',
data()
{
    return{
        name:'',
        email:'',
        password:''
    }
},
methods:{
    async signUp(){
        let result= await axios.post("http://localhost:3000/users",{
            email:this.email,
            name:this.name,
            password:this.password
        })
        console.log(result)
        if(result.status===201){
            alert('user added')
            localStorage.setItem('user-info',JSON.stringify(result))
            this.$router.push({name:'HomePage'})
        }
    }
},
mounted() {
    let user=localStorage.getItem('user-info')
    if(user){
        this.$router.push({name:'HomePage'})
    }
},
}
</script>
<style>
.logo{
    width:100px
}
.register input{
    width: 300px;
    height: 30px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid darkblue;

}
.register button{
width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background-color: skyblue;
    color: white;
    cursor: pointer;}
</style>