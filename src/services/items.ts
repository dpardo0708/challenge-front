import service from './service'

 async function getItems(product:string) {
    try {
        const response = await service.get(`/items/${product}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export default getItems