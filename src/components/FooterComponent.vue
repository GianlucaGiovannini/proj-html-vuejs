<template>
  <footer>
    <div class="container">
      <div class="footer_top d-flex justify-content-between align-items-center">
        <div class="logo_footer">
          <a href="#">
            <img src="@/assets/img/logo/logotype-2-150x25.png" alt="Logo Phlox">
          </a>
        </div>
        <div class="menu_footer d-flex gap-3">
          <a href="#" class="text-uppercase" v-for="element in menuFooter" :key="element.id">
            {{ element.title }}</a>
        </div>
        <div class="social d-flex align-items-center gap-3">
          <div class="icon instagram">
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>
          </div>
          <div class="icon linkedin">
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            </a>
          </div>
          <div class="icon facebook">
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-facebook-f" />
            </a>
          </div>
          <div class="icon twitter">
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-twitter" />
            </a>
          </div>
        </div>
      </div>

      <div class="footer_bottom d-flex justify-content-between align-items-end">
        <div class="terms">
          <div>
            <a href="#">
              Terms of use
            </a>
          </div>
          <div>
            <a href="#">
              Privacy Envioremental Policy
            </a>
          </div>
        </div>
        <div class="copyright">
          Copyright &copy; Phlox Consulting. All Rights Reserved.
        </div>
        <div class="up_site">
          <a href="#site_header">
            <font-awesome-icon icon="fa-solid fa-arrow-up" />
            </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      menuFooter: [
        {
          id: 1,
          title: "home"
        },
        {
          id: 2,
          title: "about"
        },
        {
          id: 3,
          title: "projects"
        },
        {
          id: 4,
          title: "servoces"
        },
        {
          id: 5,
          title: "blog"
        },
        {
          id: 6,
          title: "contact"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  font-size: 0.9rem;
  color: white;
  background-color: $blueBrand;

  .footer_top {
    padding: 4rem 0;
    border-bottom: 1px solid $footerDivisor;

    .menu_footer {
      a {
        color: $globalText;

        &:hover {
          color: white;
        }
      }
    }

    .social {

      .icon {
        transition: 1s;

        &:hover {
          transform: scale(2);
        }
      }
    }
  }

  .footer_bottom {
    color: $globalText;
    padding: 2rem 0;
    position: relative;

    a {
      color: $globalText;
    }

    .up_site {
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      position:absolute;
      width: 28px;
      height: 28px;
      top: 45%;
      right: -35px;
      transform: translate(0, -50%);
    }
  }
}

.facebook {
  a {
    color: white;

    &:hover {
      color: #3b5998;
    }
  }
}

.instagram {
  a {
    color: white;

    &:hover {
      color: #E1306C;
    }
  }
}

.linkedin {
  a {
    color: white;

    &:hover {
      color: #0E76A8;
    }
  }
}

.twitter {
  a {
    color: white;

    &:hover {
      color: #1DA1F2;
    }
  }
}
</style>