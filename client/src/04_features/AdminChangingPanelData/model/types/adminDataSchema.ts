import type { DeviceSchema } from '05_entities/Device/model/types/device'
import type { IUser } from '05_entities/User'


type DevicesSchema = Omit<DeviceSchema, 'selectedDevice' | 'selectedType' | 'selectedBrand'>


export interface AdminDataSchema {
  users?: IUser[],
  devices?: DevicesSchema
  isLoading: boolean
  error?: string
}