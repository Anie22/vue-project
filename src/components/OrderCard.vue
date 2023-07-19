<template>
    <div class="order-card mb-3 transactions-section">
        <div class="badge bg-success text-white mb-2">
        {{order.stage}}
        </div>
        <div class="d-flex align-items-center justify-content-between">
        <div class="order-name d-flex align-items-center">
            <div class="image-box mr-3">
            <img src="../assets/images/Excersise.jpg" class="img-fluid" alt="">
            </div>
            <div class="product-info">
            <h2>{{order.name}}</h2>
            <p>{{order.des}}</p>
            </div>
        </div>
        <div>
            <p>Receipt No.: {{order.recipt_number}}</p>
            <button class="btn btn-success" @click="check">Details</button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['shout-out', 'change-noun'],
    props: {
        order: Object
    },
    methods: {
        check() {
            this.$emit('shout-out')
        }
    }
}
</script>

<style>

</style>