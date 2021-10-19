import axios from 'axios';

export class OdontologoService{
    baseUrl = "https://appointments-api-eesh.herokuapp.com/odontologos"

    config = {
        headers:{
            Authorization: 'Bearer ' + localStorage.getItem('jwt')
        }
    }


    getAll(){
        return  axios.get(this.baseUrl,this.config).then(res => res.data).catch(error=>console.log(error));
    }

    save(odontologo){
        return axios.post(this.baseUrl, odontologo,this.config).then(res => res.data).catch(error=>console.log(error));
    }
    update(odontologo){
        return axios.put(this.baseUrl, odontologo,this.config).then(res => res.data).catch(error=>console.log(error));
    }

    delete(id){
        return axios.delete(this.baseUrl+ "/" + id,this.config).then(res=> res.data).catch(error=>console.log(error));
    }
    search(id){
        return axios.get(this.baseUrl +  "/" + id, this.config).then(res => res.data).catch(error=>console.log(error))
    }
}