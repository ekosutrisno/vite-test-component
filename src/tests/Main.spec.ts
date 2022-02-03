import { mount } from '@vue/test-utils'
import Main from '../components/Main.vue';

describe('Main.vue', () => {
  let wrapper : any;

  beforeEach(() => {
    wrapper = mount(Main, {
      props: {
        msg: '',
        isOk: false
      }
    })
  })

  it('Should display header text', async () => {
    const msg = 'Hello Vue 3 + TypeScript + Vite'
    await wrapper.setProps({
      msg: msg
    })

    expect(wrapper.find('h1').text()).toEqual(msg);
  })

  it('Should display paragraf text If Ok', async () => {
    const paragrafText = "If Ok";
    const isOk = true;
    await wrapper.setProps({
      isOk: isOk
    })

    expect(wrapper.find('p').text()).toEqual(paragrafText);
  })
})