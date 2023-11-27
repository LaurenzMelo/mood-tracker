<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card main-card">
                    <div class="card-body">
                        <div class="row p-2">
                            <div class="col-md-11">
                                <h5 class="m-0"> Good day, {{ user.name }} </h5>
                                <h5 class="m-0"> Today is {{ date_today }} </h5>
                                <h5 class="mt-4"> Here are some of your reminders: </h5>
                            </div>
                            <div class="col-md-1">
                                123
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="my-card">
                                    <h5> Reminder #1 </h5>
                                    <div> 123 </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="my-card">
                                    <h5> Reminder #2 </h5>
                                    <div> 123 </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-md-6">
                                <div class="my-card">
                                    <h5> Reminder #3 </h5>
                                    <div> 123 </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="my-card">
                                    <h5> Reminder #4 </h5>
                                    <div> 123 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['auth'],
    data() {
        return {
            date_today: moment().format('MMM. DD YYYY'),
            user: ''
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        getUser() {
            axios.get('/dashboard/getUser').then(response => {
                console.log(response)
                this.user = response.data
            })
        },
    }
}
</script>