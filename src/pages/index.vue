<template>
    <main>
        <navbar></navbar>
        <table-grid></table-grid>
        <table-generator></table-generator>
    </main>
</template>
<script>
import navbar from '../components/index/navbar';
import tableGrid from '../components/index/tableGrid';
import tableGenerator from '../components/index/tableGenerator';

export default {
    components: { navbar, tableGrid, tableGenerator }
}
</script>
