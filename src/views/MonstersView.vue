<template>
    <h1 v-if="monsterOutput">{{monsterOutput.name}}</h1>
    <h1 v-if="!monsterOutput">Monsterboken</h1>
    
    <input 
        type="text"  
        id="monsterInput"  
        placeholder="Skriv inn monsteret du vil se..."
        v-model="monsterInput"
        class="p-3 mb-0.5 w-full border border-gray-300 rounded"

    > 

    <button id="searchButton" @click="SearchMonster">Search</button>
    
    <div v-if="monsterOutput">
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
        fetchMonstersfromDB() { 
            axios
            .get('http://localhost:3000/api/allMonsters')
            .then((response) => {
                this.monsterList = response.data;
            })
            .catch(error => {
            this.monsterList = 'Det skjedde en feil';
            });
        },

        DisplayMonsters() {
            const index = this.monsterInput.toLowerCase();
            const url = `https://www.dnd5eapi.co/api/monsters/${index}`;

            axios
                .get(url)
                .then((response) => {
                    this.monsterOutput = response.data;
                })
                .catch(error => {
                    this.monsterOutput = 'Fant ikke monsteret du spurte etter, prøv igjen.';
               });
        },
        
        SearchMonster() {
            if (this.monsterInput) {
                this.DisplayMonsters();
                this.monsterInput = '';

            } else {
                this.monsterResult = 'Det skjedde en feil.';
            }
        },
    },
    mounted() { 
        this.fetchMonstersfromDB()
    },

};
</script>