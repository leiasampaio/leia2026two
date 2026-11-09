from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/certificados/{course_id}")
async def baixar_certificado(course_id: str):
    # Mudamos para o nome real da sua pasta:
    pasta_certificados = "certificados" 
    
    nome_arquivo = f"{course_id}.pdf"
    caminho_completo = os.path.join(pasta_certificados, nome_arquivo)

    if not os.path.exists(caminho_completo):
        raise HTTPException(status_code=404, detail="Certificado não encontrado")

    return FileResponse(
        path=caminho_completo, 
        media_type="application/pdf",
        filename=f"certificate{course_id}.pdf" 
    )