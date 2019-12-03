<template>
    <div><h1>{{port}}</h1></div>
</template>
<script>
//import { getPort } from '@/api/test'
//import axios from 'axios'
export default {
    name: 'draw',
    data(){
        return{
            port:'',
        } 
    },
    methods:{
        getTest(){
            let url = 'eurekaClient/client/port';
            let self = this;
            this.$api.get('eurekaClient/client/port',null,function(res){debugger;
                self.port = res;
            })
            // .then(function (response) {debugger;
            //     self.port = response;
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });

            // getPort().then(res => {debugger;
            //     this.port = res
            // }).catch(err => {
            //     console.log(err)
            // })
        }
    },
    mounted(){
        this.getTest();
    }
}
</script>