let vm= new Vue({
    el: '#app',
    data: {
        msg: 'bonjour!',
        valeur: 'blablatage',
        sucess: false,
        tabGens: ['jean','paul','pierre'],
        texteP: '',
        ckbox: []
    },
    methods: {
        close : function(){
            this.sucess === true ? this.sucess=false : this.sucess=true
        },
        addPerson : function(){
            let valeur = document.getElementById("inputText").value;
            this.tabGens.push(valeur);
            //use push pop
        }
    }
 })