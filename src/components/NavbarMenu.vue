<template>
    <div id="nav">
        <div class="logo-url">
            <router-link to="/">
                <img :src="logo" :alt="alt" id="logo">
            </router-link>
        </div>
        <router-link to="/">Home</router-link> 
        <router-link to="/contato">Contato</router-link>        
    </div>
</template> 

<script>
export default {
name: "NavbarMenu",
props: ["logo","alt"]
}
</script>

<style scoped>
#nav { 
    display: flex;
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;   
    justify-content: flex-end;
    align-items: center;

}

.logo-url{
margin: auto;
margin-left: 0;
}

#nav #logo {
    width: 160;
    height: 50px;
    border-radius: 5%;
}

#nav a {
    color: white; 
    text-decoration: none;
    margin: 12px;
    transition: .5s;
}

#nav a:hover {
    color: dimgrey;
}

</style>