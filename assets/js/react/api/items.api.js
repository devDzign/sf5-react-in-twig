import axios from 'axios';


 const getAllItems =  async () => {
    const response =  await axios.get(`/items`).catch(error => console.log(error.message));

    return response
}


export default getAllItems;