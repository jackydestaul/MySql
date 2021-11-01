const mysql = require("mysql");
const express = require("express");

//create connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:'nodejk'
});


//connect to the MySQL server
con.connect((err) => {
  if (err) {
    console.log("Affiche Erreur:" + err.message);
  } else {
    console.log("MySql Connected...");
  }
  //CREATE a DATABASE
/*  con.query("CREATE DATABASE nodejk", function (err, result) {
    if (err) {
      console.log("Affiche Erreur:" + err.message);
    } else {
      console.log("Database created");
    }
  });*/

//CREATE a TABLE
  /*const sql="CREATE TABLE jsnode (id INT AUTO_INCREMENT PRIMARY KEY ,name VARCHAR(255), email VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) {
      console.log("Affiche Erreur:" + err.message);
    } else {
      console.log("table created");
    }
  });*/

  //ALTER a TABLE
  /*const sql="ALTER TABLE jsnode ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, function (err, result) {
    if (err) {
      console.log("Affiche Erreur:" + err.message);
    } else {
      console.log("table Altered");
    }
  });*/

 //INSERT  Data in a TABLE
  /*const sql="INSERT INTO  jsnode (name, email) VALUES ('Martin','martin@gmail.com')";
  con.query(sql, function (err, result) {
    if (err) {
      console.log("Affiche Erreur:" + err.message);
    } else {
      console.log("Data added");
    }
  });*/

//INSERT Many Data in TABLE
  /*const sql="INSERT INTO  jsnode (name, email) VALUES ?";
  const  values=[['Martine','martine234@gmail.com'],['Paul','paul234@gmail.com'],['Carline','carline435@gmail.com']];
  con.query(sql, [values],function (err, result) {
    if (err) {
      console.log("Affiche Erreur:" + err.message);
    } else {
      console.log("Many Data added: "+result.affectedRows);
    }
  });*/

//RESULT messages
  /*const sql="INSERT INTO  jsnode (name, email) VALUES ('Jacky Maxo','martin@gmail.com')";
    con.query(sql,function (err, result) {
    if (err) {
      console.log("Affiche Erreur:" + err.message);
    } else {
      console.log(result);
    }
  });*/

  //SELECT  all DATA
  /*const sql="SELECT * FROM  jsnode";
    con.query(sql,function (err, result) {
    if (err) {
      console.log("Affiche Erreur:" + err.message);
    } else {
      console.log(result[0]);
    }
  });*/


  //LOOP all DATA
  /*const sql="SELECT * FROM  jsnode";
    con.query(sql,function (err, result) {
    if (err) {
      console.log("Affiche Erreur:" + err.message);
    } else {
        var i;

        for(i=0; i<result.length; i++) {
            console.log(result[i].name+" | "+result[i].email);
        }
      
    }
  });*/


  //SPECIFIC FIELDS
  /*const sql="SELECT name, id FROM jsnode";
    con.query(sql,function (err, result,fields) {
    if (err) {
      console.log("Affiche Erreur:" + err.message);
    } else {
      console.log(fields[0].name);
      console.log('-----------------');
      var i;
        for(i=0; i<result.length; i++) {
            console.log(result[i].name);
        }
    }
  });*/


  //CLAUSE WHERE
  /*//const sql="SELECT name FROM jsnode where id= 36";
  //const sql="SELECT * FROM jsnode where name= 'jacky maxo'";
  //const sql="SELECT * FROM jsnode where name LIKE 'J%'";
  
    const sql="SELECT * FROM jsnode where name LIKE ? OR id= ?";
    
    con.query(sql,function (err, result, fields) {
    if (err) {
      console.log("Affiche Erreur:" + err.message);
    } else {
     console.log(fields[0].name);
      console.log('-----------------');
      var i;
      for(i=0; i<result.length; i++) {
          console.log(result[i].name);
      }
       
    }
  });*/

   //VARIABLES
   /*const name_search='J%';
  const id_search= 1;

   const sql="SELECT * FROM jsnode where name LIKE ? OR id= ?";
   
   con.query(sql,[name_search,id_search],function (err, result, fields) {
   if (err) {
     console.log("Affiche Erreur:" + err.message);
   } else {
    console.log(fields[0].name);
     console.log('-----------------');
     var i;
     for(i=0; i<result.length; i++) {
         console.log(result[i].name);
     }
      
   }
 });*/


   //ORDER  all DATA, ASC, DESC
  /*const sql="SELECT * FROM  jsnode ORDER BY name";
    con.query(sql,function (err, result) {
    if (err) {
      console.log("Affiche Erreur:" + err.message);
    } else {
      console.log(result);
    }
  });*/

    //DELETE DATA
    /*const id_search= 33;
  const sql="DELETE FROM  jsnode WHERE id = ?";
    con.query(sql,[id_search],function (err, result) {
    if (err) {
      console.log("Affiche Erreur:" + err.message);
    } else {
      console.log(result);
      console.log("Items deleted");
    }
  });*/


     //UPDATE DATA
    /*const id_search= 34;
    const sql="UPDATE jsnode SET name ='Bernard Yacoub' WHERE id= ? ";
    con.query(sql,[id_search],function (err, result) {
    if (err) {
      console.log("Affiche Erreur:" + err.message);
    } else {
      console.log(result);
      console.log("Data updated");
    }
  });*/

     //ORDER LIMIT DATA  ASC, DESC
  /*const sql="SELECT * FROM  jsnode  ORDER BY id DESC LIMIT 2";
    con.query(sql,function (err, result) {
    if (err) {
      console.log("Affiche Erreur:" + err.message);
    } else {
      console.log(result);
    }
  });*/


//DROP a TABLE
  /*const sql="DROP IF EXISTS TABLE jsnode ";
  con.query(sql, function (err, result) {
    if (err) {
      console.log("Affiche Erreur:" + err.message);
    } else {
      console.log("table Dropped");
    }
  });*/

});