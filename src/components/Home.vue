<template>
    <Header/>
    <!-- <h1>Home</h1> -->
    <p>Hye warm welcome {{ name }} Have a great day</p>
    <table border="1">
        <th>
            Product
        </th>
        <th>
            Price
        </th>
        <th>
           Color
        </th>
        <th>
            Action
        </th>
        <tr v-for="item in product" :key=item.id>
            <td>{{ item.product }}</td>
            <td>{{ item.color }}</td>
            <td>{{ item.price }}</td>
            <td><router-link :to="`/update/`+item.id">Update</router-link>
                <button v-on:click="deleteproduct(item.id)">Delete</button>
            </td>
            
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
    methods:{
async deleteproduct(id){
let result=await axios.delete("http://localhost:3000/products/"+id)
 {
    if(result.status===200){
        alert('product deleted')
        this.loadData()
    }
 }


},
async loadData(){
    let user = localStorage.getItem('user-info');
  
  if(user){
      this.name=JSON.parse(user).name
  }
  if (!user) {
      
      this.$router.push({ name: 'LoginPage' });
  }

let result= await axios.get('http://localhost:3000/products')
  console.log(result)
  this.product=result.data
  console.log(this.product,'pppp')
}
    },
    async mounted() {
      this.loadData()
     },
    //  async mounted(){
         
    
    //  },
    components: { Header }
}
</script>
<style>
table{
   margin-left: auto;
   margin-right: auto;
}
td{
    height:40px;
    width:160px
}
a{
    text-decoration: none;
    color:black;
    border-radius: 25px;
}
</style>