import { mount } from "@vue/test-utils";
import TopBar from '../../../src/components/index/TopBar';

describe('topbar.vue', () => {
    test('if TopBar contains logo and paragraph', () => {
        const wrapper = mount(TopBar);
        expect(wrapper.text()).toContain('Table Generator');
        expect(wrapper.text()).toContain('Application which generates customizable table. Made by tymdev for Koleo.');
    })
});
