# BeTheHero

BeTheHero is an Application based on SemanaOmniStack 11.0

# EndPoints

you can use the follow Routes:
 - /ongs (GET) to see all ongs

 - /ongs (POST) to include an ONG
    - This endpoint require an object like this:
        {
	        "name": "CuidaPet",
	        "email": "CuidaPet@CuidaPet.com.br",
	        "whatsapp": "991919191",
	        "city": "Agudos",
	        "uf": "SP"
        }

 - /incidents (GET) to see the incidents from a ONG
    - This endpoint require a Header request
    - Example: Atuthorization = {ong_id}

 - /incidents (DELETE) to see the incidents from a ONG
    - This endpoint require a Header request
    - Example: Atuthorization = {ong_id}

 - /incidents (POST) to see the incidents from a ONG
    - This endpoint require a Header request
    - Example: Atuthorization = {ong_id}
    - This endpoint require an object like this:
        { 
	        "title": "Caso 15",
	        "description": "Detalhes do caso 3",
	        "value": 300
        }

 - /sessions (POST) to include a Session
    - This endpoint require an object like this:
        {
	        "id": "49976c9f"
        }

 - /profile (GET) to see the ong profile
    - This endpoint require a Header request
    - Example: Atuthorization = {ong_id}

see: https://rocketseat.com.br/
