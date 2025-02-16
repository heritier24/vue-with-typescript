<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-4">
        <div
          class="card card-transparent card-block card-stretch card-height border-none"
        >
          <div class="card-body p-0 mt-lg-2 mt-0">
            <h3 class="mb-3">Hi Tamba, Good Morning</h3>
            <p class="mb-0 mr-4">
              Your dashboard gives you views of key performance or business
              process.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div class="card card-block card-stretch card-height">
              <div class="card-body">
                <div class="d-flex align-items-center mb-4 card-total-sale">
                  <div class="icon iq-icon-box-2 bg-info-light">
                    <img
                      src="assets/images/product/1.png"
                      class="img-fluid"
                      alt="image"
                    />
                  </div>
                  <div>
                    <p class="mb-2">Total Sales</p>
                    <h4>31.50</h4>
                  </div>
                </div>
                <div class="iq-progress-bar mt-2">
                  <span
                    class="bg-info iq-progress progress-1"
                    data-percent="85"
                  >
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div class="card card-block card-stretch card-height">
              <div class="card-body">
                <div class="d-flex align-items-center mb-4 card-total-sale">
                  <div class="icon iq-icon-box-2 bg-danger-light">
                    <img
                      src="assets/images/product/2.png"
                      class="img-fluid"
                      alt="image"
                    />
                  </div>
                  <div>
                    <p class="mb-2">Total Cost</p>
                    <h4>Rwf 4598</h4>
                  </div>
                </div>
                <div class="iq-progress-bar mt-2">
                  <span
                    class="bg-danger iq-progress progress-1"
                    data-percent="70"
                  >
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div class="card card-block card-stretch card-height">
              <div class="card-body">
                <div class="d-flex align-items-center mb-4 card-total-sale">
                  <div class="icon iq-icon-box-2 bg-success-light">
                    <img
                      src="assets/images/product/3.png"
                      class="img-fluid"
                      alt="image"
                    />
                  </div>
                  <div>
                    <p class="mb-2">Product Sold</p>
                    <h4>4589 M</h4>
                  </div>
                </div>
                <div class="iq-progress-bar mt-2">
                  <span
                    class="bg-success iq-progress progress-1"
                    data-percent="75"
                  >
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card card-block card-stretch card-height">
          <div class="card-header d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Overview</h4>
            </div>
            <div class="card-header-toolbar d-flex align-items-center">
              <div class="dropdown">
                <span
                  class="dropdown-toggle dropdown-bg btn"
                  id="dropdownMenuButton001"
                  data-toggle="dropdown"
                >
                  This Month<i class="ri-arrow-down-s-line ml-1"></i>
                </span>
                <div
                  class="dropdown-menu dropdown-menu-right shadow-none"
                  aria-labelledby="dropdownMenuButton001"
                >
                  <a class="dropdown-item" href="#">Year</a>
                  <a class="dropdown-item" href="#">Month</a>
                  <a class="dropdown-item" href="#">Week</a>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div id="layout1-chart1"></div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card card-block card-stretch card-height">
          <div
            class="card-header d-flex align-items-center justify-content-between"
          >
            <div class="header-title">
              <h4 class="card-title">Revenue Vs Cost</h4>
            </div>
            <div class="card-header-toolbar d-flex align-items-center">
              <div class="dropdown">
                <span
                  class="dropdown-toggle dropdown-bg btn"
                  id="dropdownMenuButton002"
                  data-toggle="dropdown"
                >
                  This Month<i class="ri-arrow-down-s-line ml-1"></i>
                </span>
                <div
                  class="dropdown-menu dropdown-menu-right shadow-none"
                  aria-labelledby="dropdownMenuButton002"
                >
                  <a class="dropdown-item" href="#">Yearly</a>
                  <a class="dropdown-item" href="#">Monthly</a>
                  <a class="dropdown-item" href="#">Weekly</a>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div id="layout1-chart-2" style="min-height: 360px"></div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card card-block card-stretch card-height-helf">
          <div class="card-body">
            <div class="d-flex align-items-top justify-content-between">
              <div class="">
                <p class="mb-0">Income</p>
                <h5>Rwf 98,7800 K</h5>
              </div>
              <div class="card-header-toolbar d-flex align-items-center">
                <div class="dropdown">
                  <span
                    class="dropdown-toggle dropdown-bg btn"
                    id="dropdownMenuButton003"
                    data-toggle="dropdown"
                  >
                    This Month<i class="ri-arrow-down-s-line ml-1"></i>
                  </span>
                  <div
                    class="dropdown-menu dropdown-menu-right shadow-none"
                    aria-labelledby="dropdownMenuButton003"
                  >
                    <a class="dropdown-item" href="#">Year</a>
                    <a class="dropdown-item" href="#">Month</a>
                    <a class="dropdown-item" href="#">Week</a>
                  </div>
                </div>
              </div>
            </div>
            <div id="layout1-chart-3" class="layout-chart-1"></div>
          </div>
        </div>
        <div class="card card-block card-stretch card-height-helf">
          <div class="card-body">
            <div class="d-flex align-items-top justify-content-between">
              <div class="">
                <p class="mb-0">Expenses</p>
                <h5>Rwf 45,8956 K</h5>
              </div>
              <div class="card-header-toolbar d-flex align-items-center">
                <div class="dropdown">
                  <span
                    class="dropdown-toggle dropdown-bg btn"
                    id="dropdownMenuButton004"
                    data-toggle="dropdown"
                  >
                    This Month<i class="ri-arrow-down-s-line ml-1"></i>
                  </span>
                  <div
                    class="dropdown-menu dropdown-menu-right shadow-none"
                    aria-labelledby="dropdownMenuButton004"
                  >
                    <a class="dropdown-item" href="#">Year</a>
                    <a class="dropdown-item" href="#">Month</a>
                    <a class="dropdown-item" href="#">Week</a>
                  </div>
                </div>
              </div>
            </div>
            <div id="layout1-chart-4" class="layout-chart-2"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page end  -->
  </div>
</template>
