<template>
    <footer>
        <li>ide<span>@</span>lShop</li>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style>
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 40px;
    margin-top: 50px;
    box-shadow: 1px 3px 6px grey;
}

footer li {
    color: #636e72;
    font-size: 23px;
}

footer li span {
    font-size: 20px;
    color: #f97f51;
}
</style>
