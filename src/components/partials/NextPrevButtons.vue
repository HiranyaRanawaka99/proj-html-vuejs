<script>

export default {
    data() {
        return {}
    },

    emits: ['go-prev', 'go-next'],

};

</script>


<template>
    <div class="btn-container">
    <button class="btn btn-prev" @click="$emit('go-prev')">
        <font-awesome-icon icon="fa-solid fa-angle-left" /> 
    </button>
    
    <button class="btn btn-next" @click="$emit('go-next')">
        <font-awesome-icon icon="fa-solid fa-angle-right" />
    </button>
</div>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/general.scss' as *;
@use '../../assets/styles/Partial_scss/variable' as *;




.btn {
    border: none;
    border-radius: 50%;
    background-color: $next-prev;
    color: white;

    font-size: smaller;

    width: 25px;
    height: 25px;
    
    display: flex;
    justify-content: center;

    position: absolute;
    top: 120px;
    
}
.btn-prev {
    left: -60px;
}

.btn-next {
    left: 1050px;
}

@media screen and (max-width:768px) {
.btn {
border: none;
border-radius: 50%;
background-color: $next-prev;
color: white;

font-size: smaller;

width: 25px;
height: 25px;

display: flex;
justify-content: center;

position: absolute;
top: 120px;
    
}
    .btn-prev {
        left: -60px;
    }

    .btn-next {
        left: 400px;
    }
}


</style>