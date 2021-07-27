<template>
    <div>
        <input v-model="inputValue"/><br>
        {{ inputValue.toUpperCase()}}
{{isNaN(NaN)}}
</div>
</template>

<script>
export default {
    data: () => ({
        inputValue: '',
    }),
    watch: {

        inputValue(){
            console.log(String(this.inputValue))}
    }
    }
</script>