export default {
  name: 'todo-header',
  components: {}, 
  props: [],
  data () {
    return {
      ifEmpty: false,
      todoName: '',
      todosCount: 0,
      todos: []
    }
  },
  computed: {

  },
  mounted () {
    this.$todos.$on('todos-count', (count) => this.todosCount = count);
  },
  methods: {
    createTodo() {
      if(this.todoName !== ''){
        this.ifEmpty = false;
        this.todos.push({
            id: this.todosCount,
            name: this.todoName
        });
        this.todosCount++;
        this.$todos.$emit('all-todos', {todos: this.todos, todosCount: this.todosCount});
      }else{
        this.ifEmpty = true;
      }
    }
  }
}
