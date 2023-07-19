<template>
  <section class="justify-content-center align-items-center vh-100">
    <div class="sec-2">
      <h1 class="text-center pg-hg">Kindly fill in your details to Sign Up</h1>
      <p class="text-center pg-gp">fill in your details below</p>
    </div>
    <div class=" p-3 form-container">
      <form @submit.prevent="handleSubmit" class="pg-cl">
        <div class="form-group">
          <label for="name">Name</label><br />
          <input type="name" v-model="name" />
          <p class="warning-text" v-if="error.name">{{ error.name }}</p>
          <p class="warning-text" v-if="error.general">{{ error.general }}</p>
        </div>
        <div class="form-group">
          <label for="email">Email</label><br />
          <input type="email" v-model="email" />
          <p class="warning-text" v-if="error.email">{{ error.email }}</p>
          <p class="warning-text" v-if="error.general">{{ error.general }}</p>
        </div>
        <div class="form-group">
          <label for="password">Password</label><br />
          <input type="password" v-model="password" />
          <p class="warning-text" v-if="error.password">{{ error.password }}</p>
          <p class="warning-text" v-if="error.general">{{ error.general }}</p>
        </div>
        <div class="form-group">
          <label for="confirmpassword">Confirm Password</label><br />
          <input type="password" v-model="confirmPassword" />
          <p class="warning-text" v-if="error.confirmPassword">{{ error.confirmPassword}}</p>
          <p class="warning-text" v-if="error.general">{{ error.general }}</p>
        </div>
        <div class="box">
          <button class="w-100 btn btn-primary auto">Create account</button>
        </div>
      </form>
    </div>
  </section>
 <!-- <section class="sec-1">
    
    <div class="d-flex justify-content-left form-container">
      <form class="pg-cl" action="">
        <div class="form-holder">
          <div class="box">
            <label>Name</label><br>
            <input type="name" id="name" v-model="name.name" placeholder="Enter your name" />
            <strong><p id="demo"></p></strong>
          </div>
          <div class="box">
            <label>Email</label><br>
            <input type="email" id="email" v-model="email.email" placeholder="Enter your email" />
            <strong><p id="demo1"></p></strong>
          </div>
          <div class="box">
            <label>Password</label><br>
            <input type="password" id="password" v-model="password.password" placeholder="password" />
            <strong><p id="demo2"></p></strong>
          </div>
          <div class="box">
            <label>Comfirm Password</label><br>
            <input type="password" id="password2" v-model="confirm" placeholder="confirm password" />
            <strong><p id="demo3"></p></strong>
          </div>
          <div class="box">
            <button type="button" class="w-100 btn btn-primary auto" @click="validations">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  </section> -->
</template>

<script>
export default {
  data(){
    return{
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: {},
    };
  },
  methods: {
    handleSubmit() {
      console.log({
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      });
      if (
        !this.name &&
        !this.email &&
        !this.password &&
        !this.confirmPassword
      ){
        this.error = {};
        this.error.general = "*Input required";
      } else if (!this.name) {
        this.error = {};
        this.error.name = "*Name required";
      }else if (!this.email) {
        this.error = {};
        this.error.email = "*Email required";
      }else if (!this.password) {
        this.error = {};
        this.error.password = "*Password required";
      }else if (!this.confirmPassword !== this.password) {
        this.error = {};
        this.error.confirmPassword = "*Password does not match";
      }else {
        this.error ={};
        alert("Thanks for sigin up")
      }
    },
  },
 
}
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0 auto;
  box-sizing: border-box;
}  

.sec{
  background-color: #9829ff;
  color: #fff;
  height: auto;
}
.form-container{
  width: 30%;
  margin-top: 20px;
  background-color:  #ff9510;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
}
.pg-hg{
  text-transform: capitalize;
  font-size: 22px;
  padding: 12px 0px 0px 0px;
}
.pg-gp{
  text-transform: capitalize;
  line-height: 22px;
}
.box {
  margin-bottom: 10px;
  color: #fff;
  font-size: 20px;
}

input[type="name"],
input[type="email"],
input[type="password"]
{
  width: 350px;
}

input[placeholder]{
  font-size: 15px;
}

input[type="name"],
input[type="email"],
input[type="password"]
{
  padding: 8px 12px;
  border-radius: 4px;
  outline: none;
}

#demo, #demo1, #demo2, #demo3{
  text-transform: capitalize;
  font-size: 15px;
  color: #ff0000;
}
.auto{
  margin-top: 10px;
  border-radius: 8px;
  padding: 8px 12px;
}
.warning-text{
  font-size: 14px;
  color:#ff0000;
  font-family: sans-serif;
}
</style>