<?php 
        /*
           Attention ! le host => l'adresse de la base de données et non du site !!
        
           Pour ceux qui doivent spécifier le port ex : 
           $bdd = new PDO("mysql:host=HOST;dbname=DB_NAME;charset=utf8;port=3306", "LOGIN", "PASS");
           
         */
    try 
    {
        $bdd = new PDO("mysql:host=access814387746.webspace-data.io;dbname=db814392707;charset=utf8", "LOGIN", "PASS");
    }
    catch(PDOException $e)
    {
        die('Erreur : '.$e->getMessage());
    }
