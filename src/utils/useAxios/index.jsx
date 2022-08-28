import { useState, useEffect } from "react"
import axios from "axios"
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../datas/data.js"

export function useAxios(userId) {
  const [user, setUser] = useState({})
  const [activity, setActivity] = useState({})
  const [averageSessions, setAverageSessions] = useState({})
  const [performance, setPerformance] = useState({})
  const [isLoading, setLoading] = useState(false)
  const instance = axios.create({
    baseURL: "http://localhost:3000/user",
    timeout: 2000,
  })
  useEffect(() => {
    if (isLoading) return
    setLoading(true)
    instance
      .get(userId)
      .then((res) => {
        setUser(res.data.data)
        instance.get(userId + "/activity").then((res) => {
          setActivity(res.data.data)
        })
        instance.get(userId + "/average-sessions").then((res) => {
          setAverageSessions(res.data.data)
        })
        instance.get(userId + "/performance").then((res) => {
          setPerformance(res.data.data)
        })
      })
      .catch((err) => {
        setUser(USER_MAIN_DATA[0])
        setPerformance(USER_PERFORMANCE[0])
        setAverageSessions(USER_AVERAGE_SESSIONS[0])
        setActivity(USER_ACTIVITY[0])
      })
    setLoading(false)
  }, [])
  //   if (data.length) console.log("DATA length:" + data.length)
  //   if (error) console.log(error)
  return { user, activity, averageSessions, performance, isLoading }
}
