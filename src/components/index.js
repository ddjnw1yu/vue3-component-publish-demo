import CounterButton from './CounterButton.vue'

export default {
    install: (app, options) => {
        app.component("CounterButton", CounterButton)
    }
}