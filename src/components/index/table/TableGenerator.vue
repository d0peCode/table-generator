<template>
    <div class="table-generator">
        <table class="table-generator__table">
            <tr v-for="n in parseInt(tableSize.y) + 1"
                :key="n">
                <td v-for="i in parseInt(tableSize.x) + 1"
                    v-if="n <= tableSize.y">
                    <label v-if="i <= tableSize.x" :for="'tableValue' + [n - 1] + [i - 1]">{{ i }}</label>
                    <input type="number"
                           :id="'tableValue' + [n - 1] + [i - 1]"
                           v-if="i <= tableSize.x"
                           v-model="tableValues[n - 1][i - 1]">
                    <p v-else>Śr: {{ getAverage(tableValues[n-1]) }}</p>
                </td>
                <td v-else-if="i <= tableSize.x">
                    Su: {{ getSum(i - 1) }}
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import { eventBus } from "../../../helpers/eventBus";

export default {
    data() {
        return {
            tableSize: {
                x: 4,
                y: 4
            },
            tableValues: []
        }
    },
    created() {
        for (let i = 0, l = this.tableSize.y; i < l; i++) {
            this.tableValues.push([]);
        }
        eventBus.$on('generate::table', data => {
            this.tableSize = {x: data.x, y: data.y };
            for (let i = 0, l = data.y; i < l; i++) this.tableValues.push([]);
        })
    },
    methods: {
        countDecimal(value) {
            if (Math.floor(value) === value) return 0;
            return value.toString().split(".")[1].length || 0;
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
<style scoped lang="scss" src="../../../styles/scss/components/_table-generator.scss"></style>
