<template>
    <div>
        <h2>{{ product.name }}</h2>
        <p>{{ formattedPrice }}</p>
        <p>{{ availabilityText }}</p>
        <button @click="closeDetails">Close Details</button>
    </div>
</template>
  
<script>
export default {
    name: 'ProductDetails',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    computed: {
        formattedPrice() {
            return `${ this.product.price } руб`;
        },
        availabilityText() {
            return this.product.available ? 'available' : 'out of stock';
        }
    },
    methods: {
        closeDetails() {
            this.$emit('closeDetails');
        }
    }
};
</script>