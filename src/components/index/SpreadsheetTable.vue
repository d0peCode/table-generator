<template>
    <div>
        <table-tool></table-tool>
        <table-generator></table-generator>
        <table-grid></table-grid>
    </div>
</template>
<script>
import TableTool from '../../components/index/table/TableGrid';
import TableGrid from '../../components/index/table/TableGrid';
import TableGenerator from '../../components/index/table/TableGenerator';

export default {
    components: { TableTool, TableGrid, TableGenerator }
}
</script>
