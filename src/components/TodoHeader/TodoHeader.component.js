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

  },
  methods: {
    createTodo() {
      if(this.todoName !== ''){
        this.ifEmpty = false;
        this.todos.push({
            name: this.todoName
        });
        this.todosCount++;
        this.$todos.$emit('all-todos', this.todos);
      }else{
        this.ifEmpty = true;
      }
    }
  }
}
