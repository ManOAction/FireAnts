from fastapi import APIRouter
from schemas.base import Item

router = APIRouter()


@router.post("/items/")
async def create_item(item: Item):
    return {"message": f"Hello Message: '{item.name}' has been caught and released by the backend!"}
