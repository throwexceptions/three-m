<template>
    <Admin>
        <div>
            <div class="container-fluid p-0">
                <h1 class="h3 mb-3">Services & Cars</h1>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                Services & Cars Data Table
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-auto">
                                        <div class="col-12 mb-3">
                                            <button class="btn btn-primary" @click="showForm">Add User</button>
                                        </div>
                                        <div class="col-12 mb-3">
                                            <table id="services-table" class="table table-hover"
                                                   style="width: 100%"></table>
                                        </div>
                                    </div>
                                    <div class="col-auto mt-3">
                                        <div class="col-12 mb-3">
                                            <button class="btn btn-primary" @click="showFormCar">Add Car</button>
                                        </div>
                                        <div class="col-12 mb-3">
                                            <table id="cars-table" class="table table-hover"
                                                   style="width: 100%"></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Services Form Modal -->
            <div id="services-modal" class="modal fade" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Services Modal</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex flex-column">
                                <div class="mb-3">
                                    <label>Name</label>
                                    <input class="form-control" v-model="overview.name">
                                </div>
                                <div class="mb-3">
                                    <label>Price</label>
                                    <input type="number" class="form-control" v-model="overview.price">
                                </div>
                                <div class="d-flex flex-row mb-3 align-items-center">
                                    <div class="flex-grow-1">
                                        <label>Promo</label>
                                        <input type="number" class="form-control" v-model="overview.promo_price">
                                    </div>
                                    <div class="pt-4 ps-4">
                                        <div class="form-check form-switch">
                                            <input v-model="overview.is_promo" class="form-check-input" type="checkbox"
                                                   id="flexSwitchCheckDefault">
                                            <label class="form-check-label" for="flexSwitchCheckDefault">Is
                                                Promo</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label>Description</label>
                                    <textarea class="form-control" v-model="overview.desc"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label>Photo</label>
                                    <input class="form-control" v-model="overview.photo">
                                </div>
                                <div class="mb-3" v-if="overview.photo">
                                    <img :src="overview.photo" class="img-fluid">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger me-auto text-white" @click="destroy"
                                    data-bs-dismiss="modal">Delete
                            </button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" @click="save" data-bs-dismiss="modal">Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Cars Form Modal -->
            <div id="cars-modal" class="modal fade" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Cars Modal</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex flex-column">
                                <div class="mb-3">
                                    <label>Name</label>
                                    <input class="form-control" v-model="overview.name">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger me-auto text-white" @click="destroyCar"
                                    data-bs-dismiss="modal">Delete
                            </button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" @click="saveCar" data-bs-dismiss="modal">Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Admin>
</template>

<script>
import Admin from "./Layout/Admin";

export default {
    components: {Admin},
    props: {
        data: Object,
    },
    methods: {
        showForm() {
            this.services_modal.show();
            this.overview = {
                'name': '',
                'desc': '',
                'price': 0,
                'promo_price': 0,
                'is_promo': false,
                'photo': null
            };
        },
        save() {
            let $this = this;
            axios.post($this.data.services_store_link, $this.overview).then(function () {
                alertify.success('Success!');
                $this.dt.draw();
            });
        },
        destroy() {
            let $this = this;
            axios.post($this.data.services_destroy_link, $this.overview).then(function () {
                alertify.success('Success!');
                $this.dt.draw();
            });
        },
        showFormCar() {
            this.cars_modal.show();
            this.overview = {'name': '',};
        },
        saveCar() {
            let $this = this;
            axios.post($this.data.car_store_link, $this.overview).then(function () {
                alertify.success('Success!');
                $this.dt2.draw();
            });
        },
        destroyCar() {
            let $this = this;
            axios.post($this.data.car_destroy_link, $this.overview).then(function () {
                alertify.success('Success!');
                $this.dt2.draw();
            });
        },
    },
    data() {
        return {
            dt: null,
            dt2: null,
            services_modal: null,
            overview: {},
        }
    },
    mounted() {
        let $this = this;

        $this.services_modal = new bootstrap.Modal(document.getElementById('services-modal'), {
            keyboard: false
        });

        $this.dt = $('#services-table').DataTable({
            serverSide: true,
            ajax: {
                url: $this.data.services_table_link,
                type: 'POST'
            },
            "order": [[0, "desc"]],
            "columns": [
                {"data": "name", "title": "Service Name"},
                {"data": "price", "title": "Price"},
                {"data": "promo_price", "title": "Promo Price"},
                {"data": "is_promo", "title": "is Promo"},
            ],
            drawCallback: function (settings) {
                // $('.btn-edit').on('click', function () {
                //     $this.user_edit_modal.show();
                //     $this.overview = $this.dt.row($(this).parent().parent()).data();
                // });
                $('#services-table tbody tr').on('click', function () {
                    $this.services_modal.show();
                    $this.overview = $this.dt.row($(this)).data();
                });
            }
        });

        $this.cars_modal = new bootstrap.Modal(document.getElementById('cars-modal'), {
            keyboard: false
        });

        $this.dt2 = $('#cars-table').DataTable({
            serverSide: true,
            ajax: {
                url: $this.data.car_table_link,
                type: 'POST'
            },
            "order": [[0, "desc"]],
            "columns": [
                {"data": "name", "title": "Car"},
            ],
            drawCallback: function (settings) {
                // $('.btn-edit').on('click', function () {
                //     $this.user_edit_modal.show();
                //     $this.overview = $this.dt.row($(this).parent().parent()).data();
                // });
                $('#cars-table tbody tr').on('click', function () {
                    $this.cars_modal.show();
                    $this.overview = $this.dt2.row($(this)).data();
                });
            }
        });
    }
}
</script>
