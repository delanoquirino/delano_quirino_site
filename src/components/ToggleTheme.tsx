"use client"
import { Switch } from "antd"
import {useState,useEffect} from "react"

export const ToggleTheme = () => {
    const [isChecked, setIsChecked] = useState(false)
    console.log(isChecked)
    
    function toggleThemeMode  (checked: boolean) {
        if (checked) {
            localStorage.theme = "dark"
            setIsChecked(true)
        } else {
            localStorage.theme = "light"
            setIsChecked(false)
        }
    }

    useEffect(() => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
            setIsChecked(true)
        } else {
            document.documentElement.classList.remove('dark')
            setIsChecked(false)
        }

    },[isChecked])

  return (
    <Switch  defaultChecked onChange={(checked: boolean) => toggleThemeMode (checked)} size="small"/>
    
  )
}
