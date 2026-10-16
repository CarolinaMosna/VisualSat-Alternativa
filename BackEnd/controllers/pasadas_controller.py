# app/controllers/pasadas_controller.py

from fastapi import APIRouter, Request

from service.pasadas_service import PasadasService


router = APIRouter()

pasadas_service = PasadasService()

@router.get("/api/pasadas")
def obtener_pasadas(request: Request):
    return pasadas_service.obtener_todas()

@router.get("/api/pasadas/next")
def obtener_proxima_pasada():
    return pasadas_service.obtener_proxima()

@router.get("/api/pasadas/{sat_id}")
def obtener_pasadas_satelite(sat_id: str):
    return pasadas_service.obtener_por_satelite(sat_id)