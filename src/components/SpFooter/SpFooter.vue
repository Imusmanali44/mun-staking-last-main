<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="main-footer">
        <div class="row">
          <div class="col-md-3">
            <Icon name='logo'></Icon>
            <p class="footer__slogan">MUN Testnet Block Explorer</p>
          </div>
          <div class="col-md-3">
            <div class="company links__group">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#" target="_blank" rel="noreferrer">Mun</a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer">Stake Now</a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer">Contact Us</a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="bigDipper links__group">
              <h3>Big Dipper</h3>
              <ul>
                <li><a href="#" target="_blank" rel="noreferrer">About</a></li>
                <li><a href="#" target="_blank" rel="noreferrer">FAQ</a></li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer"
                    >Terms and conditions</a
                  >
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer"
                    >Privacy Policy</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="footer__social links__group">
              <h3>Community</h3>
              <div class="jss779 social-media">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  class="media telegram"
                >
                <Icon name='telegram'></Icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  class="media linkedin"
                >
                <Icon name='discord'></Icon>
                  
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  class="media twitter"
                >
                <Icon name='twitter'></Icon>
                  
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  class="media github"
                >
                <Icon name='Github'></Icon>
                </a>
              </div>
              <div>
                <p class="footer__donate--excerpt">
                  We appreciate any support to help us improve this project.
                </p>
                <a href="" target="_blank" rel="noreferrer">
                  <button class="footer-donate-btn" tabindex="0" type="button">
                    <span>Donate</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="sub-footer">
        <p class="footer__closing--text"><a href="">License</a> © Mun 2022</p>
        <p class="footer__closing--text">
          Maintained By
          <a target="_blank" rel="noreferrer" href="">Mun</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icon from "../../static/icon.vue"
export default defineComponent({
  name: "SpFooter",
  components: {
    Icon,
  },
  
});
</script>

<style scoped lang="scss">
.footer {
  padding: 48px 14px 48px;
  padding-bottom: 0;
  margin-top: 30px;
}
.footer__slogan {
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 0;
}

.footer hr {
  margin: 32px 0px;
}

.links__group h3 {
  font-weight: 500;
  margin-bottom: 16px;
}

.links__group ul {
  padding: 0;
  list-style: none;
}

.links__group ul li {
  padding: 8px 0;
}

.links__group ul li a {
  font-weight: 400;
  line-height: 20.1px;
  letter-spacing: 0.25px;
  transition: 0.2s;
  color: inherit;
  font-size: 14px;
  text-decoration: none;
}

.footer__donate--excerpt {
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 16px;
}

.footer-donate-btn {
  background: #db2777;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  padding: 12px 0;
  min-width: 74px;
  text-align: center;
}

.media:first-child {
  margin-left: 0;
}
.media {
  margin: 0 0.5rem;
}

.media:last-child {
  margin-right: 0;
}
.sub-footer {
  display: flex;
  padding: 8px 0px;
  align-items: center;
  justify-content: space-between;
}

.sub-footer p {
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 14px;
}

.sub-footer p a {
  text-decoration: none;
}
.media path {
  transition: all 0.3s ease;
}
@media (min-width: 768px) {
  .footer hr {
    margin-bottom: 0;
  }
}

@media (min-width: 1280px) {
  .footer hr {
    margin-top: 40px;
  }
}
</style>
