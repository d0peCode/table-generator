import { shallowMount } from "@vue/test-utils";
import TableGenerator from '../../../src/components/index/table/TableGenerator';
import store from "../../../src/store/store";

describe('TableGenerator.vue', () => {
    const wrapper = shallowMount(TableGenerator, {store});

    test('if default tableSize is 4x4', () => {
        //const localThis =
        console.log('generator', TableGenerator.computed.tableSize.call())
    });
});
