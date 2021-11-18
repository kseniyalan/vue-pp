<template>
  <v-container class="fluid">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h3 class="text-h4 mb-7 mt-7 d-none d-md-block amber--text text--darken-3">Contact us</h3>
        <h4 class="text-h4 mb-3  mt-3 d-block d-md-none amber--text text--darken-3">Contact us</h4>
      </v-col>
    </v-row>

    <!-- First name -->
    <v-row class="justify-center">
      <v-col
        cols="12"
        md="6"
      >
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            color="amber darken-3"
            required
          ></v-text-field>

          <!-- Last name -->
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            color="amber darken-3"
            required
          ></v-text-field>

          <!-- E-mail -->
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            color="amber darken-3"
            required
          ></v-text-field>

          <!-- Message -->
          <v-textarea
            :counter="100"
            rows="1"
            label="Message"
            color="amber darken-3"
            :rules="messageRules"
            :value="message"
            required
            no-resize
          ></v-textarea>
        </v-form>
      </v-col>
    </v-row>

    <!-- Button -->
    <v-row class="justify-center">
      <v-col
        cols="12"
        md="6"
      >
        <v-btn
          block
          class="ma-2"
          :loading="loading"
          :disabled="!valid || loading"
          color="amber darken-3 white--text"
            @click="loader = 'loading'"
        >
          Send a form
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      valid: true,
      emailPattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => this.emailPattern.test(v) || 'E-mail must be valid',
      ],
      message: '',
      messageRules: [
        v => !!v || 'Message is required',
        v => v.length <= 100 || 'Message must be less than 100 characters',
      ],
      loader: null,
      loading: false,
    };
  },
  watch: {
    loader () {
      const loader = this.loader;
      this[loader] = !this[loader];
      setTimeout(() => (this[loader] = false), 2000);
      //Clear form
      this.loader = null;
    },
  },
}
</script>