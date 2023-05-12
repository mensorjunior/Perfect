<template>
    <!-- layout para desktop -->
    <div :class="[isMobile ? 'mobile' : 'desktop']">
        <h2 class="titulo-formulario">Deixe-nos saber como podemos ajudar</h2>
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
            },
            isDesktop: false,
            isMobile:false
        }
    },
    created(){
        this.detectScreen();
    },
    methods: {
        async getContact() {
            this.$axios.post('ContatoForm.json', this.ContatoForm)
        },

        detectScreen() {
            if(screen.width < 640 || screen.height < 480 ) {
                this.isMobile = true;
            } else {
                this.isDesktop = true;
            }
        }
    },


}

</script>

<style>
.desktop .contato-form {
    max-width: 400px;
    margin: 0 auto;
}
.desktop .input-container {
display: flex;
flex-direction: column;
margin-bottom: 20px;
}

.desktop label{
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #222;
}

.desktop input {
    padding: 5px 10px;
    width: 400px
}

.desktop #opcionais-container{
    flex-direction: row;
    flex-wrap: wrap;  
}

.desktop #opcionais-title {
    font-weight: bold;
    margin-bottom: 1rem;
    width: 100%;
}

.desktop .checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;
}

.desktop .checkbox-container span,
.desktop .checkbox-container input {
    width: auto;
}

.desktop .checkbox-container span {
    margin-left: 10px;
    font-weight: bold;
}

.desktop .submit-btn {
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

.desktop .submit-btn:hover {
    background-color: transparent;
    color: #222;
}

.desktop .titulo-formulario {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

/* Style para mobile */

.mobile .contato-form {
  max-width: 100%;
  margin: 0 auto;
}
.mobile .input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.mobile label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #222;
}
.mobile input {
  padding: 5px 10px;
  width: 100%;
}
.mobile #opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;
}
.mobile #opcionais-title {
    font-weight: bold;
    margin-bottom: 1rem;
    width: 100%;
}
.mobile .checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
}

.mobile .submit-btn {
    background-color: #222;
    color: azure;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 10px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
}
.mobile .checkbox-container span,
.mobile  .checkbox-container input {
width: auto;
padding-left: 1rem;
}

.mobile .submit-btn:hover {
    background-color: transparent;
    color: #222;
}

.mobile .titulo-formulario {
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

</style>