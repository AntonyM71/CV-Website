import { atom } from "recoil"

const preferDarkDefault = false
export const preferDarkState = atom({
    key: "preferDarkState", // unique ID (with respect to other atoms/selectors)
    default: preferDarkDefault, // default value (aka initial value)
})
