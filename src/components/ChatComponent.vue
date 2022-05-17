<template>
    <div class="chat">
        <font-awesome-icon icon="fa-regular fa-message" />
    </div>
</template>

<script>
export default {
    name: 'ChatComponent'
}
</script>

<style lang="scss" scoped>
.chat {
    font-size: 1.35rem;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    cursor: pointer;



    &::after {
        content: "";
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: absolute;
        background-color: $bgChat;
        z-index: -1;
    }

    &::before {
        content: "";
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: absolute;
        background: linear-gradient(to bottom right, transparent 0%, $lightGreen 100%);
        z-index: -1;
        transition: 1s;
    }

    &:hover::before {
        animation: rotate 5s infinite;
    }
}

@keyframes rotate {
    0% {
        transform: scale(1) rotate(0deg);
    }

    5% {
        transform: scale(1.15);
    }

    50% {
        transform: scale(1.15) rotate(360deg)
    }

    95% {
        transform: scale(1.15);
    }

    100% {
        transform: scale(1) rotate(0deg);
    }
}
</style>
