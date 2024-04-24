import { appContext, type AppContextDefaults } from '../context/appContext'
import { useContext } from 'react'

export default function useApp(): AppContextDefaults {
  return useContext<AppContextDefaults>(appContext)
}
