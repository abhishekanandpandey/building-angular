<template>
  <main-layout>
    <div class="view-container">
        <section>
          View Product Detail for {{ $route.params.id }}
        </section>

        <section>
          <div class="product-container">

            <div class="column image-viewer">
              <product-image-viewer></product-image-viewer>
            </div>

            <div class="column product-details">
              <span>Category</span><br/>
              <span>Product Name</span><br/>

              <span>Price</span><br/>

              <div>
                <span> Qty</span>
                <button> Add to Cart</button>
                <button>Add to wishlist</button>
              </div>

              <div>
                <span>Product description</span>
                <p>This is some description for the product which we will display.</p>
              </div>
            </div>

          </div>
        </section>

        <section>
          <h4>You may also like</h4>
          <br/>1
          <br/>23
          <br/>34
          <br/>45
          <br/>56
          <br/>67
        </section>
    </div>
  </main-layout>
</template>

<script>
 import MainLayout from '@/layout/MainLayout';
 import ProductImageViewer from '@/components/ui/ProductImageViewer';

    export default{
        name: "Product",
        components: {
          MainLayout,
          ProductImageViewer
        }
    }
</script>

<style lang="scss" scoped>
.product-container {
    width: 100%;
    margin: 0 auto;
    min-height: 300px;
    display: -webkit-flex; /* Safari */     
    display: flex; /* Standard syntax */
    flex-direction: row;
}

.product-container .column {
  padding: 10px;
  margin: 10px;
  background: #ffffff;
  -webkit-flex: 1; /* Safari */
  -ms-flex: 1; /* IE 10 */
  flex: 1; /* Standard syntax */

  border-radius: var(--radius-md);
}


@media only screen and (max-width: 720px) { 
    .product-container {
      flex-direction: column;
      min-height: 500px;
    }
}

</style>