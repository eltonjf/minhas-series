import axios from 'axios'
import NewSeries from './NewSeries';

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const loadGenres =  () => api.get('genres')
export const saveSeries = (newSeries) => api.post('series', newSeries)
export const loadSeriesByGenre = (genre) => api.get('series?genre='+genre)

const apis = {
    loadGenres: loadGenres,
    saveSeries: saveSeries,
    loadSeriesByGenre: loadSeriesByGenre
}

api.saveState

export default apis