<script>

export default {
  data()  {
    return {}
  }
}

</script>


<template>
<div class="work-with-us">
    <section class="contact-us">
        <h2>Want to work with us? Send us<em> a message!</em></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias optio repellat velit dignissimos sed doloremque rem perspiciatis porro illo ipsa, quibusdam distinctio inventore autem ad eos error, numquam eligendi.</p>
        <button class="btn-contact">CONTACT</button>
    </section>
</div>




</template>


<style lang="scss" scoped>
@use '../../assets/styles/general.scss';
@use '../../assets/styles/Partial_scss/variable' as *;

.work-with-us {
    background-image: url('../../assets/img/h-2-background-1.jpg');
    background-size: cover;
    background-repeat: no-repeat;

    .contact-us {
        text-align: center;
        padding: 4rem 0;
    }

    .btn-contact{
        border: none;
        background-color: $contact-btn;
        padding: .3rem 2.5rem;
    }
}


</style>

