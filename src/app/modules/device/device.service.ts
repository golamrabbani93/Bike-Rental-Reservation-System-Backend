/* eslint-disable no-extra-semi */
import { IDevice } from './device.interface'
import { Device } from './device.model'

//create a new device
const createDeviceIntoDB = async (device: keyof IDevice) => {
  //find the device in the database
  const deviceExists = await Device.findById('671e1cd2392bcd5d93e12e5f')

  // Update this device if it exists
  if (deviceExists) {
    // Ensure the deviceExists object is cast to IDevice type
    const deviceToUpdate = deviceExists

    // Increment the count of the specified device type
    if ((deviceToUpdate as IDevice)[device] !== undefined) {
      ;(deviceToUpdate as IDevice)[device] += 1
    } else {
      // Handle the case where the device type does not exist in the document
      ;(deviceToUpdate as IDevice)[device] = 1
    }

    // Save the updated document
    await deviceToUpdate.save()

    return deviceToUpdate
  }
}

const getAllDviceFromDB = async () => {
  //find all devices
  const devices = await Device.find()

  return devices
}

export const deviceService = { createDeviceIntoDB, getAllDviceFromDB }
