<template>
    <h1>{{monsterOutput.name}}</h1>
    <input type="text" id="monsterInput" placeholder="Skriv inn monsteret du vil se" v-model="monsterInput"/>
    <button id="searchButton" @click="SearchMonster">Search</button>
    
    <div v-if="monsterInput">
        <div id="monsterResult" class="monster-result">
            <p>Navn: {{ monsterOutput.name }}</p> 
            <p>Alignment: {{ monsterOutput.alignment }}</p>
            <p>Beskrivelse: {{ monsterOutput.desc }}</p>
        </div>
    </div>
    <div v-else><div id="monsterResult" class="monster-result">Vi venter i spenning på søket ditt</div></div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MonstersView',
    data() {
        return {
            monsterInput: '',
            monsterOutput: ''
        };
    },
    methods: {
        DisplayMonsters() {
            const index = this.monsterInput.toLowerCase();
            const url = `https://www.dnd5eapi.co/api/monsters/${index}`;

            axios
                .get(url)
                .then((response) => {
                    this.monsterOutput = response.data
                })
                .catch(error => {
                    this.monsterOutput = 'Fant ikke monsteret du spurte etter, prøv igjen.'
                } ) 
         },

        SearchMonster() {

            if (this.monsterInput) {
                this.DisplayMonsters()
            } else {
                this.monsterResult = 'Det skjedde en feil.';
            }
        },
    },
}

</script>
  