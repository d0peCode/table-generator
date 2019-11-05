<template>
    <section>
        <h2 class="heading-secondary">Twoja tabela</h2>
        <p>Użyj + / - aby dodać / usunąć kolumnę / wiersz:</p>
        <div class="table-generator__manager">
            <div class="table-generator__plus" @click="modifyTable('column', 'increase')"></div>
            <div class="table-generator__minus" @click="modifyTable('column', 'decrease')"></div>
            <p>{{ tableSize.x }} x {{ tableSize.y }}</p>
            <div class="table-generator__plus" @click="modifyTable('row', 'increase')"></div>
            <div class="table-generator__minus" @click="modifyTable('row', 'decrease')"></div>
        </div>
    </section>
</template>
<script>
export default {
    methods: {
        modifyTable(line, option) {
            if(line === 'row') {
                if(option === 'increase') {
                    this.tableSize.y += 1;
                    this.tableValues.push([]);
                }
                if(option === 'decrease') {
                    if(this.tableSize.y === 1) return;
                    this.tableSize.y -= 1;
                    this.tableValues.pop();
                }
            }
            if(line === 'column') {
                if(option === 'increase') {
                    this.tableSize.x += 1;
                }
                if(option === 'decrease') {
                    if(this.tableSize.x === 1) return;
                    this.tableSize.x -= 1;
                    for(let i = 0, l = this.tableValues.length; i < l; i++) {
                        this.tableValues[i].pop();
                    }
                }
            }
        },
    }
}
</script>
