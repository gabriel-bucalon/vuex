<template>
    <section>
        <p>{{getCounter}}</p>
        <button @click="setIncrementCounter">Incrementar + 1 </button>
        <button @click="setDecrementCounter">Incrementar - 1</button>
    </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Counter',
    methods: {
        ...mapActions('CounterModule', ['setIncrementCounter', 'setDecrementCounter'])
    },
    computed: {
        ...mapGetters('CounterModule', ['getCounter'])
    },
}
</script>
