<template>
    <Header/>
    <h1>Update product</h1>
    <div class="register">
        <label>Product <input type="text" v-model="product" placeholder='Enter product' /></label>

        <label>Price<input type="text" v-model="price" placeholder='Enter price' /></label>

        <label>Color<input type="text" v-model="color" placeholder='Enter color' /></label>
        <button v-on:click="Add">Update Product</button>
        <!-- <p><router-link to='login'>Login</router-link></p> -->
    </div>
</template>
<script>
// import Header from './Header.vue'
import Header from './Header.vue'
console.log('hye')
export default{

    name: 'UpdateView',
    data() {
        return {
            product: '',
            price: '',
            color: ''
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
    },
    components: { Header }
}
</script>