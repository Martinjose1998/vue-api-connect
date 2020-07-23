<?php  ?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <link rel="stylesheet" type="text/css" href="index.css">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <title>Food API</title>
</head>
<body>

    <div id="app" class="app">
        <div id="title">
            {{ message }}
        </div>
        <div>
            <input type="text" v-model="search" v-on:input="first" /><button v-on:click="first">Search</button><br>
            <span v-for="item in info"> - {{item.fields.item_name}} - CALORIES: {{item.fields.nf_calories}}<br> </span>
        </div>
    </div>
    
</body>
<script src="app.js"></script>
</html>