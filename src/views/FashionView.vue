<template>
  <section class="products-section">
    <div class="container">
        <div class="row">
            <div class="col-md-3 mb-3" v-for="product in products" :key="product.id">
                <div class="card h-100">
                    <div class="card-body">
                        <img :src="product.image" class="img-fluid" alt="" />
                        <h5>{{product.title.substring(0, 35)}}</h5>
                        <h5>${{product.price}}</h5>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-3 mb-3" v-for="(post, index) in post" :key="index">
                        <div class="card">
                            <h5>{{post.title}}</h5>
                            <h5>{{post.body}}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="my-5">
            <form action="" @submit.prevent="addPost">
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Enter your title" v-model="post.title">
                </div>
                <div class="mb-3">
                    <textarea class="form-control" v-model="post.body"></textarea>
                </div>
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
        </section>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
 data() {
    return{
        products: [],
        posts: [],
        post: {title: '', body: ''}
    };
 },
 methods: {
    addPost() {
        if (this.post.title !== '' && this.post.body !=='') {
            axios.post('https//jsonplaceholder.typicode.com/posts', this.post)
            .then((res) => {
                const {data} = res;
                this.posts.push(data)
            })
        }else {
            alert('Abeg put values')
        }
    }
 },
 created() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
        const {data} = res;
        this.products = data;
    }).catch(e => {
        console.log(e)
    })
 }
}
</script>

<style scoped>
.product-section img{
    height: 300px;
    object-fit: scale-down;
}
</style>