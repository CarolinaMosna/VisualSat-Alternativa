import os
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from fastapi.middleware.cors import CORSMiddleware

from controllers.image_controller import router as imagen_router
from controllers.pasadas_controller import router as pasadas_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

images_raw_path = os.getenv("IMAGES_PATH")
images_raw_path = "/home/javiermaita/Imágenes/prueba"

# Archivos estáticos generales
app.mount(
    "/static",
    StaticFiles(directory="static"),
    name="static"
)

# Imágenes procesadas
app.mount(
    "/images-raw",
    StaticFiles(directory=images_raw_path),
    name="images-raw"
)

# Controladores
app.include_router(imagen_router)
app.include_router(pasadas_router)