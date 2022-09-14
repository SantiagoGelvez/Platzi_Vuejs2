Vue.component('CoinDetail', {
    props: ['coin'],

    data() {
        return {
            showPrices: false,
            value: 0,
        }
    },

    computed: {
        title() {
            return `${this.coin.name} - ${this.coin.symbol}`;
        },

        convertedValue() {
            if (!this.coin.value) {
                return 0;
            }
            return this.coin.value / this.coin.price;
        },
    },

    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices;
        }
    },

    template: `
    <div>
        <img v-on:mouseover="showPrices = true" v-on:mouseout="showPrices = false" v-bind:src="coin.img" v-bind:alt="coin.name" />

        <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
            {{ title }}
            <span v-if="coin.changePercent > 0">👍🏻</span>
            <span v-else-if="coin.changePercent < 0">👎🏻</span>
            <span v-else>🤞🏻</span>

            <span v-on:click="toggleShowPrices()"> {{ showPrices ? "🐵" : "🙈" }} </span>
        </h1>

        <input type="number" v-model="coin.value" />
        <span>{{ convertedValue }}</span>

        <ul v-show="showPrices">
            <li class="uppercase" v-bind:class="{orange: p.value == coin.price, green: p.value > coin.price, red: p.value < coin.price}" v-for="(p, i) in coin.pricesWithDays" v-bind:key="p.day">{{ i + 1 }} - {{ p.day }} - {{ p.value }}</li>
        </ul>

    </div>
    `
})

new Vue({
    el: app,

    data() {
        return {
            btc: {
                name: "Bitcoin",
                symbol: "BTC",
                img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
                changePercent: 0,
                price: 8400,
                pricesWithDays: [
                    { day: "Lunes", value: 8400 },
                    { day: "Martes", value: 7900 },
                    { day: "Miércoles", value: 8200 },
                    { day: "Jueves", value: 9000 },
                    { day: "Viernes", value: 9400 },
                    { day: "Sábado", value: 10000 },
                    { day: "Domingo", value: 10200 },
                ],
                value: 0,
            },
            color: "f4f4f4",
        };
    },


    methods: {
        /* toggleShowPrices() {
            this.showPrices = !this.showPrices;
            this.color = this.color.split("").reverse().join("");
        }, */
    },
});
