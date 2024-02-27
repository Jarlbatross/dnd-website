// lag database som henter data fra DND-apiet. Bruk så databasen via backend til frontend. 

<template>
    <h1>{{monsterOutput.name}}</h1>
    <div>
        <button @click="GetAllMonsters">Vis monstre i DND-database via API</button>
    </div>
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

axios.get('http://localhost:3000/api/allmonsters/')
    .then((response) => {
        console.log(response.data)
    })
    .catch(error => {
        console.error("Fikk ikke kontakt med APIet: ", error)
    });

axios.get('http://localhost:3000/api/deleteAllMonsters/')
    .then((response) => {
        console.log(response.data)
        console.log('OK')
})
    .catch(error => {
        console.error("Fikk ikke kontakt med APIet: ", error)
});


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

        // Dette får alle monstrene. Finn ut hvordan du tar hvert monster og lager det i databasen på SQL-serveren

        GetAllMonsters() {
            axios
                .get('https://www.dnd5eapi.co/api/monsters/')
                .then((response) => {
                    this.allMonsterOutput = response.data
                    console.log(response.data)
                })
                .catch(error => {
                    this.allMonsterOutput = 'Fant ikke monsteret du spurte etter, prøv igjen.'
                }) 
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
  