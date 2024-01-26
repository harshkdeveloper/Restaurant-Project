<template>
    <div class='links'>
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Product</router-link> 

    <a href="" v-on:click="logout">Logout</a>
</div>
</template>
<script>
export default{
    name:'HeaderView',

methods: {
    logout()
    {
        localStorage.clear('usef-info')
        this.$router.push({name:'LoginPage'})
    }
}}
</script>
<style>
.links{
    background-color: lightgray;
    overflow: hidden;
}
.links a{
    text-decoration: none;
    float:left;
    padding:14px 16px;
    text-align: center;
    font-size: 15px;
    margin-right: 5px;
    color: black;
    font-weight: 400;
    border: 2px s
}
.links a:hover{
    background: #ddd;
    color:#333
}
</style>