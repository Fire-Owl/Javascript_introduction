<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart</title>
</head>
<body>

<span>Pommes (1 euro le kg) : </span>

    <button id="minusp">-</button>
    <button id="plusp">+</button>
    <span id="counterp">0</span>
<br>
<span>Bananes (1.1 euro le kg) : </span>

    <button id="minusb">-</button>
    <button id="plusb">+</button>
    <span id="counterb">0</span>
<br>
<span>Cerises (1.01 euro le kg) : </span>

    <button id="minusc">-</button>
    <button id="plusc">+</button>
    <span id="counterc">0</span>

    <div>Total : <span id="total"></span></div>
    
    <script src="main.js"></script>

</body>
</html>


Cloner le repository de Nicolas : https://github.com/Fire-Owl/Javascript_introduction

Ajouter dans la liste des articles :
- Bananes (au kg)
- Cerises (au kg)
- Pommes (au kg) (déjà présent dans le script)

Chaque article a un compteur qui peut être incrémenté ou décrémenté

L'ajout ou le retrait d'un exemplaire d'un article recalcule le prix Total de la commande