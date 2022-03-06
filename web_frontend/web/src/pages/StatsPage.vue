<template>
    <search-box v-model="searchValue" :legendValue="'User'" @keyup.enter="fetchPlayerStats()"/>
</template>

<script>
import SearchBox from '../components/commandtable/SearchBox.vue'
import {getUserStats} from '../js-functions/gql/stats'

export default {
    components:{
        SearchBox
    },
    data(){
        return{
            searchValue:""
        }
    },
    methods:{
        fetchPlayerStats(){
            return getUserStats(this.searchValue)
        }
    }
}
</script>

<style>

</style>