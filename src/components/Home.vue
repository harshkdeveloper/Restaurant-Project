<template>
    <Header/>
    <!-- <h1>Home</h1> -->
    <p>Hye warm welcome {{ name }} Have a great day</p>
    <table>
        <tr v-for="item in product" :key=item.id>
            <td>{{ item.product }}</td>
            <td>{{ item.color }}</td>
            <td>{{ item.price }}</td>
        </tr>
    </table>
</template>
<script>
import axios from 'axios'
// import Header from './Header.vue'
import Header from './Header.vue'
console.log('hye')
export default{
    name: 'HomePage',
    data(){
        return{
            name:'',
            product:[]
        }
    },
     async mounted() {
        let user = localStorage.getItem('user-info');
        this.name=JSON.parse(user).name
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
        let result= await axios.get('http://localhost:3000/products')
        console.log(result)
        this.product=result.data
        console.log(this.product,'pppp')

    },
    components: { Header }
}
</script>