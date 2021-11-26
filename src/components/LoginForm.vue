<template>
  <div
    :class="login_alert_variant"
    class="text-white text-center font-bold p-4 mb-4"
    v-if="login_show_alert"
  >
    {{ login_alert_message }}
  </div>
  <vee-form :validation-schema="loginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        v-focus
        name="email"
        type="email"
        class="
          block
          w-full
          py-1.5
          px-3
          text-gray-800
          border border-gray-300
          transition
          duration-500
          focus:outline-none focus:border-black
          rounded
        "
        placeholder="emailni kiriting"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>

    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Parol</label>
      <vee-field
        name="password"
        type="password"
        class="
          block
          w-full
          py-1.5
          px-3
          text-gray-800
          border border-gray-300
          transition
          duration-500
          focus:outline-none focus:border-black
          rounded
        "
        placeholder="parol"
      />
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button type="submit" :disabled="login_in_submission"
      class="
        block
        w-full
        bg-blue-500
        text-white
        py-1.5
        px-3
        rounded
        transition
        hover:bg-blue-600
      "
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
// import { mapState } from 'vuex';
export default {
  name: "Login",
  data() {
    return {
      loginSchema: {
        email: "required|email",
        password: "required|min:3|max:32",
      },
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: "bg-blue-500",
      login_alert_message: "Please wait! we are logging you in",
    };
  },
  methods: {
    async login(values) {
      this.login_in_submission = true;
      this.login_show_alert = true;
      this.login_alert_variant = "bg-blue-500";
      this.login_alert_message = "Please wait! we are login you in";
      try {
        await this.$store.dispatch("login", values);
      } catch (error) {
        this.login_in_submission = false;
        this.login_alert_variant = "bg-red-500";
        this.login_alert_message = "Invalid login details.";
        return;
      }
      this.login_alert_variant = "bg-green-500";
      this.login_alert_message = "Sucess! You are now logged in";
      window.location.reload();
      this.$router.push('/talabalar');
      
    },
  },
  computed:{
    // ...mapState(['togglePages'])
  }
};
</script>