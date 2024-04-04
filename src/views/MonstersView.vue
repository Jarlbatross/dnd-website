<template>
    <h1 v-if="monsterOutput">{{monsterOutput.name}}</h1>
    <h1 v-if="!monsterOutput">Monsterboken</h1>
    
    <input 
        type="text"  
        id="monsterInput"  
        placeholder="Skriv inn monsteret du vil se..."
        v-model="monsterInput"
        @input="filterMonsterNames"
    > 
    <ul v-if="filteredMonsterNames.length" class="suggestions">
      <li v-for="monster in filteredMonsterNames" :key="monster.name" @click="selectMonsterName(name)">{{ monster.name }}</li>
    </ul>

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
            monsterOutput: '',
            monsterList: [],
            filteredMonsterNames: [],
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
        
        filterMonsterNames() {
            const input = this.monsterInput.toLowerCase();
            this.filteredMonsterNames = this.monsterList.filter(monster => monster.name.toLowerCase().startsWith(input))
        },

        selectMonsterName(name) {
            this.monsterInput = name;
            this.filteredMonsterNames = [];
        },
    },
    mounted() { 
        this.fetchMonstersfromDB()
    },
};

// midlertidig flyttet ut, prøve å bygge opp på nytt.
// Målet er at inputfeltet har en autocomplete basert på foreløpig input.
// Søket baserer seg så på monsternavn, sjekker DND - apiet og henter monsterdetaljer til monster der monster.navn i API = input.

        // DisplayMonsters() {
        //     const index = this.monsterInput.toLowerCase();
        //     const url = `https://www.dnd5eapi.co/api/monsters/${index}`;

        //     axios
        //         .get(url)
        //         .then((response) => {
        //             this.monsterOutput = response.data;
        //         })
        //         .catch(error => {
        //             this.monsterOutput = 'Fant ikke monsteret du spurte etter, prøv igjen.';
        //        });
        // },
        
        // SearchMonster() {
        //     if (this.monsterInput) {
        //         this.DisplayMonsters();
        //         this.monsterInput = '';

        //     } else {
        //         this.monsterResult = 'Det skjedde en feil.';
        //     }
        // },
</script>