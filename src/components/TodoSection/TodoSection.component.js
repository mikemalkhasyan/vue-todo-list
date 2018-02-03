export default {
  name: 'todo-section',
  components: {},
  props: [],
  data () {
    return {
      todos: null,
      todosCount: null
    }
  },
  computed: {

  },
  mounted () {
    this.$todos.$on('all-todos', (data) => {
        this.todos = data.todos;
        this.todosCount = data.todosCount;
    });
  },
  methods: {
    removeTodo(id){
      this.todos.pop(id);
      this.todosCount--;
    }
  }
}
