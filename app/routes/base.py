from fastapi import APIRouter
from schemas.base import Item

router = APIRouter()


@router.post("/items/")
async def create_item(item: Item):
    return {"message": f"Item '{item.name}' has been caught and released successfully!"}
