# app/controllers/imagen_controller.py

from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse

from service.image_service import ImagenService
from service.pasadas_service import PasadasService


router = APIRouter()

imagen_service = ImagenService()
pasadas_service = PasadasService()


@router.get("/api/imagenes")
async def obtener_imagenes(request: Request):

    return {
        "imagenes": imagen_service.obtener_imagenes(request)
    }

@router.get("/api/pasadas")
async def obtener_pasadas(request: Request):

    return {
        "pasadas": pasadas_service.obtener_todas()
    }