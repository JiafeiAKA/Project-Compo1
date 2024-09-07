import axios, { type AxiosResponse } from 'axios'
import type { CountryDetail } from '@/types'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/MRSMIRROR/331-MockServer-Project',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCountryDetail(id: number): Promise<AxiosResponse<CountryDetail>> {
    return apiClient.get<CountryDetail>(`/CountryDetail/${id}`)
  },
  getAllCity(): Promise<AxiosResponse<CountryDetail[]>> {
    return apiClient.get<CountryDetail[]>(`/CountryDetail`)
  }
}
