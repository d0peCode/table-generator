import { mount } from "@vue/test-utils";
import tableGrid from '../../../src/components/index/tableGrid';

describe('tableGrid.vue', () => {
    test('if tableGrid default grid max size is 10x10', () => {
        const wrapper = mount(tableGrid);
        expect(wrapper.vm.$data.gridSize.max.x).toBe(10);
        expect(wrapper.vm.$data.gridSize.max.y).toBe(10);
    });
    test('if bind proper class after mouseover', async () => {
        const wrapper = mount(tableGrid);
        wrapper.setData({
            gridSize: {
                max: { x: 10, y: 10 },
                hovered: { x: 1, y: 1 },
                selected: { x: 0, y: 0 }
            }
        });
        expect(
            wrapper
                .find('.table-grid__grid-col--hover')
                .classes('table-grid__grid-col--hover')
        ).toBe(true);
    });
    test('if is not visible after choosing grid', () => {
        const wrapper = mount(tableGrid);
        wrapper.setData({ tableGenerated: true });
        expect(wrapper.find('.table-grid').isVisible()).toBe(false)
    });
    test('if event emitter work', () => {
        const wrapper = mount(tableGrid);
        wrapper.vm.$emit('generate::table', {x: 1, y: 1})
        expect(wrapper.emitted()).toBeTruthy()
    });
});
