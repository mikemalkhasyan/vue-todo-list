<template>
    <div id="app">
        <todo-header></todo-header>
        <todo-section></todo-section>
        <todo-footer></todo-footer>
    </div>
</template>
<script>
    import TodoHeader from './components/TodoHeader/index.vue';
    import TodoSection from './components/TodoSection/index.vue';
    import TodoFooter from './components/TodoFooter/index.vue';

    export default {
        name: 'app',
        data () {
            return {

            }
        },
        components: {
            TodoHeader, TodoSection, TodoFooter
        }
    }
</script>
<style src="./css/style.css" scoped lang="css"></style>
