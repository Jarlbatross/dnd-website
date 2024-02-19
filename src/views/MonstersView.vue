<template>
    <h1>{{monsterResult}}</h1>
    <input type="text" id="monsterInput" placeholder="Enter a monster name" v-model="monsterInput"/>
    <button id="searchButton" @click="SearchMonster">Search</button>
    <div v-if="monster">
        <div id="monsterResult" class="monster-result">{{monster.name}} {{ monster.alignment }}</div>
    </div>
    <div v-else><div id="monsterResult" class="monster-result">results</div></div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MonstersView',
    data() {
        return {
            monsterInput: '',
            monsterResult: ''
        };
    },
    methods: {
        SearchMonster() {
            const monsterName = this.monsterInput.toLowerCase();

            if (monsterName) {
                this.monsterResult = 'Leter etter monster...';
                this.FetchMonsters(monsterName);
            } else {
                this.monsterResult = 'Fant ikke monsteret, prøv igjen.';
            }
        },
        FetchMonsters(monsterName) {
            axios
                .get('https://www.dnd5eapi.co/api/monsters')
                .then((response) => {
                    const monsters = response.data.results;
                    const matchedMonster = monsters.find(
                        (monster) => monster.name.toLowerCase() === monsterName
                    );
                    if (matchedMonster) {
                        this.FetchMonsterDetails(matchedMonster.url);
                    } else {
                        this.monsterResult = 'Fant ikke monsteret, prøv igjen.';
                    }
                })
                .catch((error) => {
                    this.monsterResult = 'Det skjedde en feil under leting etter monstre.';
                });
        },
        FetchMonsterDetails(url) {
            axios
                .get(url)
                .then((response) => {
                    const monsterData = response.data;
                    this.monsterResult = '';
                })
                .catch((error) => {
                    this.monsterResult = 'Det skjedde en feil.';
                });
        },
    },
}

</script>
  