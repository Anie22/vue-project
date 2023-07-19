 <template>
  <div class="count">
    <h1>This is an about page</h1>
    <h1> count is: {{ count }} </h1>
    <button @click="increseCount" class="btn btn-primary">count</button> 
    <section class="px-5">
      <h4 class="mt-5">My Todo List</h4>
      <ul>
        <li v-for="todo in filtertodos" :key="todo.id">
          <input type="checkbox" v-model="todo.done">
          <span class="ml-2" :class="{done : todo.done}">{{ todo.text }}</span>
          <button class="btn btn-danger" @click="removeTodo(todo.id)" >X</button>
        </li>
      </ul>
      <input type="text" v-model="newTodo" />
      <button class="btn btn-success" @click="addTodo">Add Todo</button>
      <div>
        <button class="btn btn-success" @click="hidecompleted = !hidecompleted">{{buttonText}}</button>
      </div>  
    </section>
    <section class=" my-9">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-4 mb-4" v-for="(webStudent, index) in webStudents" 
          :key="index">
            <div class="card">
              <div class="image-sec">
                <img 
                  :src="require(`@/assets/images/${webStudent.image}.jpg`)"
                  class="img-fluid h-50"
                  alt=""
                />
              </div>
              <div class="card-body p-4" v-bind="{increaseCount}">
                <h4>{{webStudent.name}}</h4>
                <p>{{webStudent.type}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <p>Author has published <span>{{publishedBookMessage}}</span> books</p>
    <h1 ref="changer">Abeg oo</h1>
  </div>
</template>

<script>
let id = 0;
export default {
  components: {},
  data() {
    return {
      count: 0,
      todos: [
        { id: id++, text: 'Learn HTML', done: true },
        { id: id++, text: 'Learn JavaScript', done: true  },
        { id: id++, text: 'Learn Vue', done: false}
      ],
      newTodo: "",
      webStudents: [
        {name: 'first cake', type: 'desert', image: 'cake'},
        {name: 'second cake', type: 'desert', image: '5'},
        {name: 'airplane', type: 'vehicle', image: 'Airplane 2'},
        {name: 'deep sea', type: 'water', image: 'Deep sea'},
        {name: 'excersise', type: 'jogging', image: 'Excersise'},
        {name: 'night city', type: 'city', image: 'Night city'}
      ],
      author: {
        name: "John Book",
        books: [
          "vue 2 - Advance Guide",
          "vue 3 - Basic Guide",
          "vue 4 - The Mystery"
        ]
      },
      hidecompleted: false,
    };
  },
  computed: {
    publishedBookMessage() {
      return this.author.books.length > 0 ? this.author.books.length : 'No'
    },
    filtertodos() {
      return this.hidecompleted ? this.todos.filter((todo) => todo.done === false) : this.todos
    },
    buttonText() {
      return this.hidecompleted ? 'show all' : 'Hide Completed'
    }
  },
  methods: {
    increseCount() {
      this.count++;
      if (this.count === 1) {
        document.querySelector(".count").classList.add("purple");
        document.querySelector(".count").classList.remove("green");
      }else{
        document.querySelector(".count").classList.remove("green");
      }
    },
    // decrement() {
    //   this.count--;
    // },
    addTodo() {
      if (this.newTodo !== "") {
        this.todos.push({id: id++, text: this.newTodo, done:false});
        this.newTodo = "";
      }
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    }
  },
  mounted() {
    // this.$refs.changer.textContent = 'Some text'
    
  }
}
</script>

<style scoped>
  .orange{
    background: #ff4500;
    color: #fff;
  }
  .red{
    background: #ff0000;
    color: #fff;
  }
  .yellow{
    background: #fbff12;
    color: #fff;
  }
  .purple{
    background: #800080;
    color: #fff;
  }
  .green{
    background: #1efd00;
    color: #fff;
  }
  .done{
    color: red;
  }
  .pg-cl{
    background: #ff0000;
  }
</style>
