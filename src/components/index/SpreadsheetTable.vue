<template>
    <div>
        <table-generator></table-generator>
        <table-grid></table-grid>
    </div>
</template>
<script>
import TableGrid from '../../components/index/table/TableGrid';
import TableGenerator from '../../components/index/table/TableGenerator';

export default {
    components: { TableGrid, TableGenerator }
}
</script>
