<template>
  <div id="app">
    <header id="top-header">
        <div class="title">
            <h1>Portfolio</h1>
            <div id="nav-toggle">
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div id="menu">
            <nav>
                <ul>
                    <li><router-link to="/">INFO</router-link></li>
                    <li><router-link to="/works">WORKS</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
    <section>
        <div id="wrap">
            <div id="content">
                <router-view/>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
// @import '~@fortawesome/fontawesome-free/scss/fontawesome';
@import url('https://fonts.googleapis.com/css?family=Biryani&display=swap');

$tab: 959px !default;
$sp: 559px !default;

@mixin tab {
    @media (max-width: ($tab)) {
        @content;
    }
}

@mixin sp {
    @media (max-width: ($sp)) {
        @content;
    }
}

* {
    margin: 0;
    padding: 0;
}

html {
    font-family: 'Biryani', -apple-system, BlinkMacSystemFont, Roboto, "游ゴシック体", YuGothic, "Yu Gothic Medium", sans-serif;
}

body {
    min-height: 100vh;
    background: linear-gradient(-135deg, rgba(255, 182, 193, .5), rgba(153, 50, 204, .5)), url('./assets/background.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    color: #FFF;
}

ul {
    list-style: none;
}

a {
    color: #FFF;
    text-decoration: none;
    &:visited {
        color: inherit;
    }
}

h2 {
    padding: 10px;
}

h3 {
    padding: 5px;
}
header {
    padding: 10px 0;
    position: fixed;
    top: 0;
    width: 100%;

    .title {
        float: left;
        margin-left: 50px;

        @include tab {
            width: 80%;
        }

        @include sp {
            width: 90%;
            h1 {
                float: left;
            }
        }
    }
}

#wrap {
    margin: 0 auto;
    padding-top: 100px;
    width: 70%;

    @include tab {
        width: 80%;
    }

    @include sp {
        width: 100%;
    }
}

#menu {
    float: right;
    overflow: hidden;
    li {
        padding: 10px 0;
        text-align: center;
        float: left;
        width: 150px;
    }

    @include tab {
        width: 100px;
    }

    @include sp {
        top: -500px;
        background: rgba(0, 0, 0, .5);
        width: 100%;
        text-align: center;
        padding: 10px 0;
        margin-top: 0;
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        transition: .5s ease-in-out;

        ul {
            list-style: none;
            position: static;
            right: 0;
            bottom: 0;
            font-size: 14px;
            li {
                float: none;
                position: static;
            }
        }
    }
}

#nav-toggle {
    display: none;

    @include sp {
        display: block;
        position: absolute;
        right: 12px;
        top: 14px;
        width: 30px;
        height: 30px;
        z-index: 101;

        span {
            display: block;
            position: absolute;
            height: 3px;
            width: 100%;
            background: #666;
            left: 0;
            -webkit-transition: .35s ease-in-out;
            -moz-transition: .35s ease-in-out;
            transition: .35s ease-in-out;
        }
        span:nth-child(1) {
            top: 0;
        }
        span:nth-child(2) {
            top: 11px;
        }
        span:nth-child(3) {
            top: 22px;
        }

    }
}
/* #nav-toggle 切り替えアニメーション */
.open #nav-toggle span:nth-child(1) {
    top: 11px;
    -webkit-transform: rotate(315deg);
    -moz-transform: rotate(315deg);
    transform: rotate(315deg);
}
.open #nav-toggle span:nth-child(2) {
    width: 0;
    left: 50%;
}
.open #nav-toggle span:nth-child(3) {
    top: 11px;
    -webkit-transform: rotate(-315deg);
    -moz-transform: rotate(-315deg);
    transform: rotate(-315deg);
}

.open + section > #wrap > #menu {
    @include sp  {
        /* #global-nav top + #mobile-head height */
        -moz-transform: translateY(556px);
        -webkit-transform: translateY(556px);
        transform: translateY(556px);
    }
}

#content {
    text-align: center;

    @include tab {
        padding-left: 120px;
    }

    @include sp {
        padding: 0 20px;
    }
}

.icon {
    width: 150px;
    height: 150px;
}

table.info {
    margin: 0 auto;
    padding-right: 40px;
    td {
        vertical-align: top;
    }
}

.thumbnail {
    // width: 60%;
    width: 334px;
    height: 180px;
    object-fit: cover;
    border: 1px;
    border-radius: 3px;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.2);

    @include sp {
        width: 200px;
        height: 107px;
    }
}

div.block {
    margin: 10px 0 40px 0;
}
</style>
