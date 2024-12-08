<script setup>
import axios from "axios";
import { reactive, onMounted } from "vue";
import router from "@/router";

const dataForm = reactive({ nama: "", email: "", password: "" });
const errorForm = reactive({
  namaError: "",
  emailError: "",
  passwordError: "",
});

const register = async () => {
  try {
    const res = await axios.post(
      "http://localhost:4000/api/v1/auth/register",
      dataForm
    );

    if (res.data.success) {
      router.push("/auth/login");
    }
  } catch (err) {
    const errors = err.response.data.errors;

    errorForm.namaError = errors.nama;
    errorForm.emailError = errors.email;
    errorForm.passwordError = errors.password;
  }
};
</script>

<template>
  <div class="register-container">
    <div class="register-box">
      <h2>Register</h2>
      <form>
        <div class="nama-field">
          <label for="nama">Nama</label>
          <input
            type="text"
            v-model="dataForm.nama"
            id="nama"
            name="nama"
            placeholder="Enter your name"
            required
          />
          <p v-if="errorForm.namaError" class="error-field">
            {{ errorForm.namaError }}
          </p>
        </div>

        <div class="email-field">
          <label for="email">Email</label>
          <input
            type="email"
            v-model="dataForm.email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <p v-if="errorForm.emailError" class="error-field">
            {{ errorForm.emailError }}
          </p>
        </div>

        <div class="password-field">
          <label for="password">Password</label>
          <input
            type="password"
            v-model="dataForm.password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <p v-if="errorForm.passwordError" class="error-field">
            {{ errorForm.passwordError }}
          </p>
        </div>
      </form>

      <button type="submit" @click="register" class="register-btn">
        Register
      </button>

      <p class="signin-link">
        Sudah punya akun? login
        <RouterLink to="/auth/login">disini</RouterLink>
      </p>

      <div class="social-login">
        <button class="google-btn">
          <img src="../assets/image/logo google.png" alt="Google logo" />
          Google
        </button>
        <button class="facebook-btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook logo"
          />
          Facebook
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-container {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.register-box {
  width: 35%;
  padding: 1rem;
  background-color: #eaeaea;
  text-align: center;
  margin: 0 auto;
  border-radius: 10px;
}

.register-box h2 {
  margin-bottom: 40px;
}

.nama-field,
.email-field,
.password-field {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 14px;
  width: 100%;
}

.register-btn {
  width: 100%;
  padding-block: 8px;
  margin-top: 20px;
  background-color: #8d5c20;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.register-btn:hover {
  background-color: #734915;
}

.signin-link {
  font-size: 0.8rem;
  margin-top: 15px;
  text-align: right;
}
.social-login {
  margin-top: 20px;
  margin-inline: 2rem;
}

.social-login button {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: white;
  cursor: pointer;
}

.social-login img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.google-btn:hover {
  background-color: #f7f7f7;
}

.facebook-btn:hover {
  background-color: #e9effb;
}

.error-field {
  color: red;
  font-size: 0.7rem;
  margin-left: 0.5rem;
}

@media screen and (max-width: 758px) {
  .register-box h2 {
    font-size: 1.4rem;
  }

  .register-box {
    width: 80%;
  }

  label {
    font-size: 14px;
  }

  input {
    font-size: 13px;
  }
}
</style>
