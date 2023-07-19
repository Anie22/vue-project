<template>
  <header>
    <div class="logo">
        <h1>VueProject</h1>
    </div>
    <div class="link">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/signup">Sign Up</router-link></li>
            <li><router-link to="/login">Transaction</router-link></li>
            <li><router-link to="/practise">Practise</router-link></li>
            <li><router-link to="/fashion">Fashion</router-link></li>
            <li><router-link to="/music">Music</router-link></li>
        </ul>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
    background: #ff9510;
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
}

.logo{
    margin-left: 20px;
}

header ul{
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin-right: 15px;
    margin-top: 12px;
}

ul li a{
    color: #fff;
    text-decoration: none;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;
}
</style>