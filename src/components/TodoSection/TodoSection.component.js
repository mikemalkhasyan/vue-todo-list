export default {
  name: 'todo-section',
  components: {},
  props: [],
  data () {
    return {
      todos: null
    }
  },
  computed: {

  },
  mounted () {
    this.$todos.$on('all-todos', ($todos) => {
        this.todos = $todos;
    });
  },
  methods: {

  }
}
