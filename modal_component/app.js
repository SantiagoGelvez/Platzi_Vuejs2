Vue.component("modal", {
    data() {
        return {};
    },

    methods: {
        closeModal() {
            this.$emit("close-modal");
        },
    },

    template: `
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <slot name="title"></slot>
                <slot name="body"></slot>
                <footer>
                    <button v-on:click="closeModal()" class="btn btn-outline-danger btn-sm button-font">¡Gracias! 🥲</button>
                </footer>
            </div>
        </div>
    </div>
    `,
});

new Vue({
    el: "#app",

    data() {
        return {
            title: "¡HOLA!",
            text: "Si has logrado mostrar este mensaje, estas en el camino correcto para lograr cosas grandiosas. No te conformes con lo llevas hasta aquí. Sigue aprendiendo inteligentemente cada día y pronto veras las recompensas que trae la vida por tu esfuerzo.",
            modalState: false,
        };
    },

    methods: {
        toggleModal() {
            this.modalState = !this.modalState;
        },
    },
});
