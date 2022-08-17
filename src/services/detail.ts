import service from './service'

 export  async function getDetail(id:string) {
    try {
        const response = await service.get(`/detail/${id}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export  async function getDetailDescription(id:string) {
    try {
        const response = await service.get(`/detailtext/${id}/description`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
