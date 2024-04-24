"use strict";

//definisco la variabile NOME dell'utente
const nome = prompt("inserisci il tuo nome");

//definisco la variabile COGNOME dell'utente
const cognome = prompt("inserisci il tuo cognome");

//definisco la variabile COLORE dell'utente
const colore = prompt("inserisci il tuo colore preferito");

//definisco la variabile NUMERO dell'utente
const numero = "48"; //bonus?

//definisco la somma delle variabili ottenuta dai dati raccolti
const totale = nome + cognome + colore + numero;

//inserisco nel file HTML  i dati raccolti
const elemento = document.getElementById('testo') 
elemento.innerHTML = totale



console.log("sono collegato");