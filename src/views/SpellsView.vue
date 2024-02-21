<template>
  <h1>{{spellOutput.name}}</h1>
  <input type="text" id="spellInput" placeholder="Skriv inn spellet du vil se" v-model="spellInput"/>
  <button id="searchButton" @click="SearchSpellList">Search</button>
  
  <div v-if="spellInput">
      <div id="monsterResult" class="monster-result">
          <p>Navn: {{ spellOutput.name }}</p> 
          <p>Casting time: {{ spellOutput.casting_time}}</p>
          <p>Level: {{ spellOutput.level }}</p>
          <p>Concentration: {{ spellOutput.concentration }}</p>
          <p>Rekkevidde: {{ spellOutput.range }}</p>
          <p>Skole: {{ spellOutput.school }}</p>
          <p>Beskrivelse: {{ spellOutput.desc }}</p>
      </div>
  </div>
  <div v-else><div id="monsterResult" class="monster-result">Vi venter i spenning på søket ditt</div></div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SpellsView',
    data() {
        return {
            spellInput: '',
            spellOutput: ''
        };
    },
    methods: {
        DisplaySpell() {
            const index = this.spellInput.toLowerCase();
            const url = `https://www.dnd5eapi.co/api/spells/${index}`;

            axios
                .get(url)
                .then((response) => {
                  this.spellOutput = response.data
                  console.log(response.data);
                })
                .catch(error => {
                    this.spellOutput = 'Fant ikke monsteret du spurte etter, prøv igjen.'
                } ) 
         },

        SearchSpellList() {

            if (this.spellInput) {
                this.DisplaySpell()
            } else {
                this.monsterResult = 'Det skjedde en feil.';
            }
        },
    },
}

</script>
  