<template>
  <footer>
    <div class="footer-container">
      <div class="socials">
        <a href="https://www.instagram.com/capstoneproject_ladieskost/"
          ><font-awesome-icon :icon="['fab', 'instagram']"
        /></a>
        <a href="https://twitter.com"
          ><font-awesome-icon :icon="['fab', 'twitter']"
        /></a>
        <a href="https://facebook.com"
          ><font-awesome-icon :icon="['fab', 'facebook']"
        /></a>
      </div>
      <div class="paragraf">
        <p>
          "Butuh bantuan? Hubungi tim dukungan kami di [+62
          889-7557-9783/ladieskost@gmail.com]."
        </p>
        <p>"Kami siap membantu Anda 24/7. Jangan ragu untuk bertanya!"</p>
        <p>
          "Terima kasih telah mengunjungi kami. Hubungi kami di
          [email/perusahaan] untuk informasi lebih lanjut."
        </p>
      </div>
      <div class="credit">
        <p>Created by <a href="">Ledies kost</a>. | 2024</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #d9d9d9;
}

.footer-container {
  padding: 3rem 7%;
  text-align: center;
}

.footer-container .socials {
  margin-bottom: 3rem;
}

.footer-container .socials a {
  color: #080808;
  margin: 1rem;
  font-size: 1.5rem;
}

.footer-container .paragraf p {
  margin-bottom: 1rem;
  color: #878787;
  font-size: 0.8rem;
}

footer .credit {
  font-size: 0.8rem;
}

footer .credit p {
  color: #878787;
  font-size: 0.8rem;
}

footer .credit a {
  color: #878787;
  font-weight: 900;
}

@media screen and (max-width: 758px) {
  .footer-container .socials a {
    font-size: 1.2rem;
  }

  .footer-container .paragraf p {
    font-size: 0.5rem;
    margin-bottom: 0.4rem;
  }

  footer .credit {
    font-size: 0.5rem;
  }

  footer .credit p {
    font-size: 0.5rem;
  }

  .footer-container .socials {
    margin-bottom: 1.5rem;
  }
}
</style>
