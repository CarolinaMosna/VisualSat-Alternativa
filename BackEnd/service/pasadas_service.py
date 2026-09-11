# app/services/pasadas_service.py

class PasadasService:
    def __init__(self):
        self.pasadas = [
            {
                "name": "Meteor M2-4",
                "fecha": "19/09/2025",
                "hora": "04:55",
                "inclination": 60,
                "new": True,
            },
            {
                "name": "Meteor M2-4",
                "fecha": "19/09/2025",
                "hora": "04:55",
                "inclination": 60,
                "new": True,
            },
            {
                "name": "Meteor M2-4",
                "fecha": "19/09/2025",
                "hora": "04:55",
                "inclination": 60,
                "new": True,
            },
            {
                "name": "Meteor M2-4",
                "fecha": "19/09/2025",
                "hora": "04:55",
                "inclination": 60,
                "new": False,
            },
            {
                "name": "Meteor M2-4",
                "fecha": "19/09/2025",
                "hora": "04:55",
                "inclination": 60,
                "new": False,
            },
            {
                "name": "Meteor M2-4",
                "fecha": "19/09/2025",
                "hora": "04:55",
                "inclination": 60,
                "new": False,
            },
        ]

    def obtener_todas(self):
        return self.pasadas