<template>
    <div>
        <h2>{{ product.name }}</h2>
        <p>{{ formattedPrice }}</p>
        <p>{{ availabilityText }}</p>
    </div>
</template>
  
<script>
export default {
    name: 'Product',
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
    }
};
</script>
  