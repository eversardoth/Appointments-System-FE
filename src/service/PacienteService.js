import axios from 'axios';

export class PacienteService{
    baseUrl = "https://appointments-api-eesh.herokuapp.com/pacientes"

    config = {
        headers:{
            Authorization: 'Bearer ' + localStorage.getItem('jwt')
        }
    }

    getAll(){
        return axios.get(this.baseUrl,this.config).then(res => {
            return res.data.map(item => ({...item, fechaIngreso:item.fechaIngreso ? item.fechaIngreso.slice(0, 10) : null}))
        })
    }

    save(paciente){
        return axios.post(this.baseUrl, paciente,this.config).then(res => res.data);
    }
    update(paciente){
        return axios.put(this.baseUrl, paciente,this.config).then(res => res.data);
    }

    delete(id){
        return axios.delete(this.baseUrl+ "/" + id,this.config).then(res=> res.data);
    }
    search(id){
        return axios.get(this.baseUrl +  "/" + id,this.config).then(res => res.data)
    }
}