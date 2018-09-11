<template lang="pug">
    .container
        .box
            .box-header
                h3 Authenticate yourself
            .box__content
                form(@submit.prevent="login")
                    button(type="submit") Authenticate

</template>

<script>
import querystring from 'querystring';
export default {
    name: 'login',
    methods: {
        login () {
            const path = window.location.href;
            const href = 'https://app.officient.io/authorize?client_id=504616&state=xyz';
            window.location.href = href;
        },
        fetchToken () {
            const path = window.location.href;

            if (path.includes('code')) {
                const paramsString = path.split('?')[1];
                const params = querystring.parse(paramsString);
                // fetch token and then navigate to home
                this.$store.dispatch('readToken', params.code)
                    .then(() => {
                        this.$router.push('/');
                    });
            }
        }
    },
    mounted () {
        this.fetchToken();
    }
};
</script>
