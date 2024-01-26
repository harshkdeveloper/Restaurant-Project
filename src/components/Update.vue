<template>
    <Header/>
    <h1>Update product</h1>
    <div class="register">
        <label>Product <input type="text" v-model="products.product" placeholder='Enter product' /></label>

        <label>Price<input type="text" v-model="products.price" placeholder='Enter price' /></label>

        <label>Color<input type="text" v-model="products.color" placeholder='Enter color' /></label>
       <button v-on:click="Update">Update</button>
        <!-- <p><router-link to='login'>Login</router-link></p> -->
    </div>
</template>
<script>
// import Header from './Header.vue'
import Header from './Header.vue'
import axios from 'axios'
console.log('hye')
export default{

    name: 'UpdateView',
    data() {
        return {
            products:{
            product: '',
            price: '',
            color: ''
            }}
    },
    methods: {
        async Update() {
            let result = await axios.put(`http://localhost:3000/products/${this.$route.params.id}`, {
                product: this.products.product,
                price: this.products.price,
                color: this.products.color
            });
            console.log(result);
            if (result.status === 200) {
                alert('Product successfully Updated');
                // localStorage.setItem('user-info',JSON.stringify(result))
                this.$router.push({ name: 'HomePage' });
            }
        }
    },
   async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
        let id=this.$route.params.id
        let result=await axios.get(`http://localhost:3000/products/${id}`)
        console.log(result)
        this.products=result.data
    },
    components: { Header }
}
</script>
<style></style>