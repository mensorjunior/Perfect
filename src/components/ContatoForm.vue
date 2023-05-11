<template>
    <div>
        <p>Componente menssagem</p>
        <form   class="contato-form">

            <div class="input-container">
                <label for="Nome">Digite seu nome:</label>
                <input type="text" id="nome" name="nome" v-model="ContatoForm.nome" placeholder="Digite o seu nome"/>
            </div>

            <div class="input-container">
                    <label for="Contato">Digite um número para contato</label>
                    <input type="text" id="contato" name="contato" v-model="ContatoForm.contato" placeholder="Digite o seu telefone"/>
            </div>

            <div id="opcionais-container" class="input-container">
                <label for="Mensagem">Escreva uma menssagem:</label>
                <input type="text" id="mensagem" name="mensagem" v-model="ContatoForm.mensagem" placeholder="Digite uma mensagem"/>
            </div >
            <div class="input-container">
                <label id="opcionais-title" for="opcionais">Selecione a melhor forma para entrarmos em contato:</label>
                <div class="checkbox-container">
                    <input type="checkbox" name="whatsapp" v-model="ContatoForm.whatsapp" value="whatsapp">
                    <span> WhatsApp</span>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" name="ligacao" v-model="ContatoForm.ligacao" value="ligacao">
                    <span> Ligação</span>
                </div>
            </div>    

            <div class="input-container">
                <input @click="getContact" type="submit" class="submit-btn" value="Enviar solicitação de contato!">
            </div>
        </form>
    </div>
</template>

<script>

export default {
   
    name: "ContatoForm",
    
    data() {
        return {
            ContatoForm: {
                nome: '',
                contato: '',
                mensagem:'',
                whatsapp: false,
                ligacao:false
            }   
        }
    },
    methods: {
        async getContact() {
            this.$axios.post('ContatoForm.json', this.ContatoForm)
        }
    }
}

</script>

<style scoped>
.contato-form {
    max-width: 400px;
    margin: 0 auto;
}
.input-container {
display: flex;
flex-direction: column;
margin-bottom: 20px;
}

label{
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #222;
}

input {
    padding: 5px 10px;
    width: 400px
}

#opcionais-container{
    flex-direction: row;
    flex-wrap: wrap;  
}

#opcionais-title {
    width: 100%;
}

.checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
    width: auto;
}

.checkbox-container span {
    margin-left: 10px;
    font-weight: bold;
}

.submit-btn {
    background-color: #222;
    color: azure;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
}

.submit-btn:hover {
    background-color: transparent;
    color: #222;
}
</style>