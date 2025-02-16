<template>
  <div class="container-fluid add-form-list">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Add Product</h4>
            </div>
          </div>
          <div class="card-body">
            <form>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Product Type *</label>
                    <select v-model="productType" class="form-control">
                      <option>Standard</option>
                      <option>Combo</option>
                      <option>Digital</option>
                      <option>Service</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label>Name *</label>
                    <input
                      v-model="name"
                      type="text"
                      class="form-control"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label>Code *</label>
                    <input
                      v-model="code"
                      type="text"
                      class="form-control"
                      placeholder="Enter Code"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label>Barcode Symbology *</label>
                    <select v-model="barcodeSymbology" class="form-control">
                      <option>CREM01</option>
                      <option>UM01</option>
                      <option>SEM01</option>
                      <option>COF01</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label>Category *</label>
                    <select v-model="category" class="form-control">
                      <option>Beauty</option>
                      <option>Grocery</option>
                      <option>Food</option>
                      <option>Furniture</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label>Cost *</label>
                    <input
                      v-model="cost"
                      type="text"
                      class="form-control"
                      placeholder="Enter Cost"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label>Price *</label>
                    <input
                      v-model="price"
                      type="text"
                      class="form-control"
                      placeholder="Enter Price"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group">
                    <label>Quantity *</label>
                    <input
                      v-model="quantity"
                      type="text"
                      class="form-control"
                      placeholder="Enter Quantity"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group">
                    <label>Image</label>
                    <input
                      type="file"
                      class="form-control"
                      @change="handleFileUpload"
                    />
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group">
                    <label>Description / Product Details</label>
                    <textarea
                      v-model="description"
                      class="form-control"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
              </div>

              <button type="button"  @click="saveToLocalStorage" class="btn btn-primary mr-2">
                Add Product
              </button>
              <button
                type="button"
                class="btn btn-success"
                @click="saveToLocalStorage"
              >
                Submit to API
              </button>
              <button type="reset" class="btn btn-danger">Reset</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Page end  -->
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Vue } from 'vue-class-component'

const productType = ref<string>('')
const name = ref<string>('')
const code = ref<string>('')
const barcodeSymbology = ref<string>('')
const category = ref<string>('')
const cost = ref<string>('')
const price = ref<string>('')
const quantity = ref<string>('')
const image = ref<File | null>(null)
const description = ref<string>('')

const productList = ref<Array<Record<string, any>>>([])

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    image.value = target.files[0]
  }
}

const saveToLocalStorage = () => {
  const productData = {
    productType: productType.value,
    name: name.value,
    code: code.value,
    barcodeSymbology: barcodeSymbology.value,
    category: category.value,
    price: price.value,
    quantity: quantity.value,
    image: image.value ? image.value.name : '',
    description: description.value
  }

  localStorage.setItem('productData', JSON.stringify(productData))

  productList.value = [productData]
  alert('Product data saved to localStorage!')
}
</script>
