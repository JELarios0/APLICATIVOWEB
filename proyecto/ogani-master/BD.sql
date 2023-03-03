CREATE DATABASE bd_proyecto;
USE bd_proyecto;

CREATE TABLE usuario (
  id_usu int(10) ,
  nombreuser char(50) ,
  contra char(80) ,
  usutipo char(30) 
) ; 


CREATE TABLE Cliente(
    ID_Cliente INT(10) PRIMARY KEY,
    Nombre VARCHAR(45),
    Email VARCHAR(45),
    contrausua VARCHAR (45) 
   
);

CREATE TABLE PQRS(
    ID INT (10) PRIMARY KEY,
    Fecha VARCHAR(45),
    Hora DATE,
    Tip VARCHAR(45),
    Asu VARCHAR(45),
    Descrip VARCHAR(45)
);
CREATE TABLE Categoria(
    Cod_Categoria INT(10) PRIMARY KEY,
    Tipo_Categoria VARCHAR(45),
    Descripcion_Categoria VARCHAR(45)
);
CREATE TABLE producto(
    ID_Producto INT (10) PRIMARY KEY,
   fecha_Vencimiento VARCHAR(45),
   Cantidad VARCHAR(45),
   precio VARCHAR(45),
   Nombre VARCHAR(45)
);
CREATE TABLE Pedido(
    ID INT (10) PRIMARY KEY,
    Nombre VARCHAR(45),
    Tipo_Categoria VARCHAR(45),
    producto VARCHAR(45),
    Fecha_Vencimiento VARCHAR(45),
    Cantidad INT(10),
    Precio_total VARCHAR(45)   
);
CREATE TABLE Venta(
    Cod_Venta INT(10) PRIMARY KEY,
    Tipo_Categoria VARCHAR(45),
    Fecha  VARCHAR(45),
    Precio_total VARCHAR(45)
    
);
