import json
import os
from models.satelite import Satelite

class SateliteService:
    def __init__(self, archivo_satelites="BackEnd/data/satelites.json"): #Acá iría por default, por si no se le pasa como parámetro (sirve para tenerlo de prueba)

        self.archivo_satelites = archivo_satelites #archivo donde se almacenan los satélites. Después consultar qué formato conviene más (dejar json o usar un csv)
        self.satelites = self.cargar_satelites() 

    def cargar_satelites(self):
        if not os.path.exists(self.archivo_satelites):
            return [] # Por si hay algún problema con el archivo o la ruta; para que no rompa todo

        with open(self.archivo_satelites, "r", encoding="utf-8") as f:
            datos = json.load(f)

        lista_satelites = []
        for d in datos:
            satelite = Satelite(
                sat_id=d["sat_id"],
                nombre=d["nombre"],
                descripcion=d["descripcion"],
                fecha_lanzamiento=d["fecha_lanzamiento"],
            )
            lista_satelites.append(satelite)

        return lista_satelites

    def obtener_todos(self):
        return self.satelites

    def obtener_por_id(self, sat_id):
        for satelite in self.satelites:
            if satelite.sat_id == sat_id:
                return satelite
        return None

# A chequear !! 
# Acá tendría que hacer también un endpoint interno 
# en caso de que se actualice el json y se agregue/elimine un satélite? 
# (como lo de actualizar imágenes)
# Ó no pasa nada si se cargan los satélites cada vez que se hace la petición??