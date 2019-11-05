<template>
    <section class="table-tool">
        <h2 class="heading-secondary">Twoja tabela</h2>
        <p>Użyj + / - aby dodać / usunąć kolumnę / wiersz:</p>
        <div class="table-tool__manager">
            <div class="table-tool__plus" @click="modifyTable('column', 'increase')"></div>
            <div class="table-tool__minus" @click="modifyTable('column', 'decrease')"></div>
            <p>{{ tableSize.x }} x {{ tableSize.y }}</p>
            <div class="table-tool__plus" @click="modifyTable('row', 'increase')"></div>
            <div class="table-tool__minus" @click="modifyTable('row', 'decrease')"></div>
        </div>
    </section>
</template>
<script>
export default {
    computed: {
        tableSize: {
            get() {
                return this.$store.getters.getTableSize;
            },
            set(newValue) {
                return this.$store.dispatch('setTableSize', { data: newValue });
            }
        }
    },
    methods: {
        modifyTable(line, option) {
            if(line === 'row') {
                if(option === 'increase') {
                    this.tableSize = {
                        x: this.tableSize.x,
                        y: this.tableSize.y + 1
                    };
                }
                if(option === 'decrease') {
                    if(this.tableSize.y === 1) return;
                    this.tableSize = {
                        x: this.tableSize.x,
                        y: this.tableSize.y - 1
                    };
                }
            }
            if(line === 'column') {
                if(option === 'increase') {
                    this.tableSize = {
                        x: this.tableSize.x + 1,
                        y: this.tableSize.y
                    };
                }
                if(option === 'decrease') {
                    if(this.tableSize.x === 1) return;
                    this.tableSize = {
                        x: this.tableSize.x - 1,
                        y: this.tableSize.y
                    };
                    /*
                    for(let i = 0, l = this.tableValues.length; i < l; i++) {
                        this.tableValues[i].pop();
                    }
                     */
                }
            }
        },
    }
}
</script>
<style scoped lang="scss" src="../../../styles/scss/components/_table-tool.scss"></style>
