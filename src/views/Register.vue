<template>
  <div class="register-container">
    <div class="register-box">
      <h2>Register</h2>
      <form>
        <label for="nama">Nama</label>
        <input
          type="text"
          id="nama"
          name="nama"
          placeholder="Enter your name"
          required
        />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        />
      </form>

      <button type="submit" class="register-btn">Register</button>

      <p class="signin-link">
        Belum punya akun? daftar
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
  max-width: 400px;
  background-color: #eaeaea;
  border-radius: 10px;
  padding: 20px;
  margin: 3.3% auto;
}

.register-box {
  text-align: center;
}

.register-box h2 {
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  text-align: left;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
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
</style>
