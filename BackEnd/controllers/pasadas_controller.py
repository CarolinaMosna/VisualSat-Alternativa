# app/controllers/pasadas_controller.py

from fastapi import APIRouter, Request

from service.pasadas_service import PasadasService


router = APIRouter()

pasadas_service = PasadasService()

@router.get("/api/pasadas")
async def obtener_pasadas(request: Request):

    return pasadas_service.obtener_todas()