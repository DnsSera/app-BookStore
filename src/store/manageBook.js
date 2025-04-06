import { reactive, computed, watch } from "vue";

export const state = reactive({
  books: [], // Lista de libros
  readingList: [], // Lista de libros en lectura
  genreFilter: "Todos", // Filtro por género
  searchQuery: "", // Filtro de búsqueda por título
  maxPages: 800, // Máximo número de páginas
  selectedPages: 800, // Páginas seleccionadas desde el filtro
});

export const genreFilter = computed({
    get() {
      return state.genreFilter;
    },
    set(value) {
      state.genreFilter = value;
    },
  });

  export const readingList = computed({
    get() {
      return state.readingList;
    },
  });


  export const selectedPages = computed({
    get() {
      return state.selectedPages;
    },
    set(value) {
      state.selectedPages = value;
    },
  });

  export const maxPages = computed({
    get() {
      return state.maxPages;
    },
  });

  export const getAvailableBooks = computed(() => {
    return state.books.length - state.readingList.length;
  });
  
// Cargar libros desde el archivo JSON
export const loadBook = async () => {
  try {
    const response = await fetch("/books.json");
    state.books = await response.json();
  } catch (error) {
    console.error("Error al cargar los libros:", error);
  }
};

// Computed: Libros filtrados según los filtros seleccionados
export const listOfBooks = computed(() => {
  return state.books.filter((book) => {
    const matchesGenre = state.genreFilter === "Todos" || book.genre === state.genreFilter;
    const matchesPages = book.pages <= state.selectedPages; // Filtrar por páginas
    return matchesGenre && matchesPages;
  });
});

// Actualizar el filtro por búsqueda
export const updateSearchQuery = (query) => {
  state.searchQuery = query;
};

// Función para obtener todos los géneros únicos sin repetir
export const getUniqueGenres = computed(() => {
    const genres = state.books.map((book) => book.genre); // Extraer todos los géneros
    const uniqueGenres = Array.from(new Set(genres)); // Eliminar duplicados con Set
    return ["Todos", ...uniqueGenres]; // Incluir "Todos" como opción predeterminada
  });

  // Función para agregar un libro a la lista de lectura
  export const addBookToReadingList = (book) => {
    if (!Array.isArray(state.readingList)) {
      state.readingList = [];
    }
    // Agregar el libro a la lista de lectura (sin duplicados)
    const bookExists = state.readingList.some((item) => item.id === book.id);
    if (!bookExists) {
      state.readingList.push(book);
    }
  };

  // Función para eliminar un libro de la lista de lectura
 export const removeBookFromReadingList = (bookId) => {
    state.readingList = state.readingList.filter((book) => book.id !== bookId);
  };
  
  // Observador para detectar cambios en la lista y reflejarlos en el localStorage
  watch(() => state.readingList, () => {
    localStorage.setItem("readingList", JSON.stringify(state.readingList));
  }, { deep: true });

  const loadReadingList = () => {
    const storedList = localStorage.getItem("readingList");
    state.readingList = storedList ? JSON.parse(storedList) : [];
  };
  