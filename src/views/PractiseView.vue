<template>
  <div>
    <div v-for="post in posts" :key="post.id">
        <p>{{post.id}}</p>
        <p>{{post.title}}</p>
        <p>{{post.body}}</p>
    </div>
    <section>
        <p>Todo id id: {{todoId}}</p>
        <button class="btn btn-outline-primary" @click="todoId++">Get Id</button>
        <p v-if="!todoData"> Loading...</p>
        <pre v-else>{{ todoData }}</pre>
    </section>
  </div>
</template>

<script>
export default {
data() {
    return{
        posts: [],
        todoId: 1,
        todoData: null
    }
},
methods: {
    async getPosts() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
    },
    async getSinglePost() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.todoId}`)
        this.todoData = await res.json();
    }
},

mounted() {
    console.log()
    this.getPosts();
    this.getSinglePost();
},

watch: {
    todoId(){
        this.getSinglePost();
    }
}
}
</script>

<style>

</style>