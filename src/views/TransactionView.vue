<template>
  <section>
    <div class="container">
      <h4 class="text-center my-5">Transactions</h4>
      <section class="transactions-section">
        <OrderCard v-for="(order, index) in orders" :key="index" :order="order" />
      </section>
      <section>
        <h5>completed</h5>
        <OrderCard v-for="order in processingOrders" :key="order.id" :order="order" 
        @shout-out="shout"/>
      </section>
      <h5>{{count}}</h5>
    </div>
  </section>
</template>

<script>
import OrderCard from '@/components/OrderCard.vue';
export default {
  data() {
    return {
      orders: [
        {
          id: 1,
          name: 'Mkpafrang Jhon',
          recipt_number: '1000-KH',
          des: 'He is an eloquent person',
          stage: 'processing'
        },
        {
          id: 2,
          name: 'Anna Montana',
          recipt_number: '1002-NB',
          des: 'Beliver in christ',
          stage: 'shipped'
        },
        {
          id: 3,
          name: 'Musa Yaradua',
          recipt_number: '1020-VC',
          des: 'He was a president one time',
          stage: 'completed'
        },
        {
          id: 4,
          name: 'Jane Doe',
          recipt_number: '1000-GH',
          des: 'An imagination',
          stage: 'processing'
        },
        {
          id: 5,
          name: 'Obong Dave',
          recipt_number: '1000-PO',
          des: 'He loves to move it',
          stage: 'completed'
        },
        {
          id: 6,
          name: 'Simi Dayo',
          recipt_number: '1800-MH',
          des: 'She will duduke for you',
          stage: 'Shipped'
        },
      ],
      count: 1
    };
  },
  components: { 
    OrderCard 
  },
  methods: {
    shout() {
      this.count ++;
      console.log('hello')
    }
  },
  computed: {
    processingOrders() {
      return this.orders.filter((order) => order.stage === 'processing')
    }
  }
}
</script>

<style>
.order-card{
  padding: 15px;
  border: 2px solid chocolate;
  border-radius: 3px;
}  
.order-name{
  width: 60%;
}
.order-name img{
  width: 100%;
}
.order-name .image-box{
  width: 50%;
}
</style>