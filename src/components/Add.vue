<template>
    <Header/>
    <h1>Add product</h1>
    <div class="register">
        <label>Product <input type="text" v-model="product" placeholder='Enter product' /></label>

        <label>Price<input type="text" v-model="price" placeholder='Enter price' /></label>

        <label>Color<input type="text" v-model="color" placeholder='Enter color' /></label>
        <button v-on:click="Add">Add Product</button>
        <!-- <p><router-link to='login'>Login</router-link></p> -->
    </div>
</template>
<script>
// import Header from './Header.vue'
import Header from './Header.vue'
import axios from 'axios'
export default {
    name: 'AddView',
    data() {
        return {
            product: '',
            price: '',
            color: ''
        };
    },
    methods: {
        async Add() {
            let result = await axios.post("http://localhost:3000/products", {
                product: this.product,
                price: this.price,
                color: this.color
            });
            console.log(result);
            if (result.status === 201) {
                alert('Product successfully add');
                // localStorage.setItem('user-info',JSON.stringify(result))
                this.$router.push({ name: 'HomePage' });
            }
        }
    },
    // mounted() {
    //     let user = localStorage.getItem('user-info');
    //     if (user) {
    //         this.$router.push({ name: 'HomePage' });
    //     }
    // },
    components: { Header }
}
</script>
<style>
.logo {
    width: 100px
}

.register input {
    width: 300px;
    height: 30px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid darkblue;

}

.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background-color: skyblue;
    color: white;
    cursor: pointer;
}
</style>