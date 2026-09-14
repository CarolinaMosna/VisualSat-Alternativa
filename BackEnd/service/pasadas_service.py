# app/services/pasadas_service.py

class PasadasService:
    def __init__(self):
        self.pasadas = [
    {
        "sat_name": "STARLINK-2257",
        "sat_id": 47787,
        "aos": "2026-09-23T20:42:11.885729+00:00",
        "los": "2026-09-23T20:53:55.203259+00:00",
        "elev_max": "75.5\u00b0"
    },
    {
        "sat_name": "STARLINK-2413",
        "sat_id": 47827,
        "aos": "2026-09-24T04:06:51.878335+00:00",
        "los": "2026-09-24T04:18:36.128705+00:00",
        "elev_max": "88.9\u00b0"
    },
    {
        "sat_name": "STARLINK-2257",
        "sat_id": 47787,
        "aos": "2026-09-24T20:11:12.104374+00:00",
        "los": "2026-09-24T20:22:55.421904+00:00",
        "elev_max": "86.9\u00b0"
    },
    {
        "sat_name": "STARLINK-2413",
        "sat_id": 47827,
        "aos": "2026-09-25T03:35:50.961099+00:00",
        "los": "2026-09-25T03:47:35.211469+00:00",
        "elev_max": "72.0\u00b0"
    },
    {
        "sat_name": "STARLINK-2257",
        "sat_id": 47787,
        "aos": "2026-09-25T04:25:37.380289+00:00",
        "los": "2026-09-25T04:37:06.650199+00:00",
        "elev_max": "42.7\u00b0"
    }
]

    def obtener_todas(self):
        return self.pasadas