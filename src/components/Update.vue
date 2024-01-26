<template>
    <Header/>
    <h1>Update your product</h1>
</template>
<script>
// import Header from './Header.vue'
import Header from './Header.vue'
console.log('hye')
export default{
    name: 'UpdateView',
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
    },
    components: { Header }
}
</script>