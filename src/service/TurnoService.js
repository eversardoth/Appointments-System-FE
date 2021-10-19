import axios from 'axios';

export class TurnoService{
    baseUrl = "https://appointments-api-eesh.herokuapp.com/turnos"

    config = {
        headers:{
            Authorization: 'Bearer ' + localStorage.getItem('jwt')
        }
    }

    getAll(){
        return axios.get(this.baseUrl, this.config).then(res => res.data)
    }

    save(turno){
        return axios.post(this.baseUrl, turno,this.config).then(res => res.data);
    }
    update(turno){
        return axios.put(this.baseUrl, turno,this.config).then(res => res.data);
    }

    delete(id){
        return axios.delete(this.baseUrl+ "/" + id,this.config).then(res=> res.data);
    }

    search(id){
        return axios.get(this.baseUrl +  "/" + id,this.config).then(res => res.data)
    }
}