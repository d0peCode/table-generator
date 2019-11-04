<template>
    <section class="table-generator" v-show="called">
        <h2 class="heading-secondary">Twoja tabela</h2>
        <p>Użyj + / - aby dodać / usunąć kolumnę / wiersz:</p>
        <div class="table-generator__manager">
            <div class="table-generator__plus" @click="modifyTable('column', 'increase')"></div>
            <div class="table-generator__minus" @click="modifyTable('column', 'decrease')"></div>
            <p>{{ tableSize.x }} x {{ tableSize.y }}</p>
            <div class="table-generator__plus" @click="modifyTable('row', 'increase')"></div>
            <div class="table-generator__minus" @click="modifyTable('row', 'decrease')"></div>
        </div>
        <table class="table-generator__table">
            <tr v-for="n in parseInt(tableSize.y) + 1"
                :key="n">
                <td v-for="i in parseInt(tableSize.x) + 1"
                    v-if="n <= tableSize.y">
                    <input type="number" :placeholder="i" v-if="i <= tableSize.x" v-model="tableValues[n - 1][i - 1]">
                    <p v-else>Śr: {{ getAverage(tableValues[n-1]) }}</p>
                </td>
                <td v-else-if="i <= tableSize.x">
                    Su: {{ getSum(i - 1) }}
                </td>
            </tr>
        </table>
    </section>
</template>
<script>
import { eventBus } from "../../helpers/eventBus";

export default {
    data() {
        return {
            called: false,
            tableSize: {
                x: 0,
                y: 0
            },
            tableValues: []
        }
    },
    created() {
        eventBus.$on('generate::table', data => {
            this.called = true;
            this.tableSize.x = data.x;
            this.tableSize.y = data.y;
            for (let i = 0, l = data.y; i < l; i++) {
                this.tableValues.push([]);
            }
        })
    },
    methods: {
        countDecimal(value) {
            if (Math.floor(value) === value) return 0;
            return value.toString().split(".")[1].length || 0;
        },
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
        getAverage(array) {
            let total = 0;
            if(array.length === 0) return 'brak';
            for(let i = 0, l = array.length; i < l; i++) {
                if(array[i]) total += parseFloat(array[i]);
            }
            const validElementsLength = array.filter(Boolean).length;
            const average = total / validElementsLength;
            if(this.countDecimal(average) > 3) {
                return average.toFixed(3)
            }
            return average;
        },
        getColumn(index) {
            const column = [];
            for(let i = 0, l = this.tableValues.length; i < l; i++) {
                column.push(this.tableValues[i][index]);
            }
            return column;
        },
        getSum(index) {
            const array = this.getColumn(index);
            let total = 0;
            for(let i = 0, l = array.length; i < l; i++) {
                if(array[i]) total += parseFloat(array[i]);
            }
            return total;
        }
    }
}
</script>
<style scoped lang="scss" src="../../styles/scss/components/_table-generator.scss"></style>
