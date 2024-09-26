import axios from "axios";

const url = `http://localhost:5000`;

export async function addShoe(shoe, image) {
    const form = new FormData();
    form.append('shoe', JSON.stringify(shoe));
    form.append('image', image);
    const response = await axios.post(`${url}/add/product`, form);
    return response.data;
}

export async function getAllShoes() {
    const response = await axios.get(`${url}/getAll`);
    return response.data;
}

export async function updateShoe(shoe) {
    const response = await axios.put(`${url}/update/${shoe._id}`, shoe);
    return response.data;
}

export async function deleteProductById(id) {
    const response = await axios.delete(`${url}/product/delete/${id}`);
    return response.data;
}


export async function fileUpload(id, image) {
    let formData = new FormData();
    formData.append("image", image);
    const response = await axios.put(`${url}/file/upload/${id}`, formData);
    return response.data;
}