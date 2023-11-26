<template>
    <div>
        <h1>Catalog</h1>
        <ProductList :products="products" @show-details="setSelectedProduct" />
        <ProductDetails v-if="selectedProduct" :product="selectedProduct" @closeDetails="closeDetails" />
    </div>
</template>

<script>
import ProductList from './ProductList.vue';
import ProductDetails from './ProductDetails.vue';

export default {
    name: 'Homework',
    components: {
        ProductList,
        ProductDetails
    },
    data() {
        return {
            products: [
                {
                    name: "Пельмеши",
                    price: 90,
                    available: true
                }, {
                    name: "Галоши",
                    price: 210,
                    available: false
                },
                {
                    name: "Гуляш",
                    price: 160,
                    available: true
                }
            ],
            selectedProduct: null
        };
    },
    methods: {
        setSelectedProduct(product) {
            this.selectedProduct = product;
        },
        closeDetails() {
            this.selectedProduct = null;
        }
    }
};
</script>

<style scoped>

</style>
