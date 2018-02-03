export default {
  name: 'todo-section',
  components: {},
  props: [],
  data () {
    return {
      todos: null,
      todosCount: null,
      completedTodosCount: 0
    }
  },
  computed: {

  },
  mounted () {
    this.getTodosData();
  },
  methods: {
    getTodosData(){
      this.$todos.$on('all-todos', (data) => {
          this.todos = data.todos;
          this.todosCount = data.todosCount;
      });
    },

    removeTodo(id){
      this.todos.pop(id);
      this.$todos.$emit('todos-count', --this.todosCount);
    },

    changeToComplated(){
        this.$todos.$emit('completed-count', ++this.completedTodosCount);
    }
  }
}
