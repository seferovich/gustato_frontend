import axios from "axios";

const getMenu = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/menu/getMenu');
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error('Error fetching data:', error)
      throw error
    }
}




export const menuService = {
    getMenu
}