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
        this.todos.push();

      }else{
        this.ifEmpty = true;
      }
    }
  }
}
